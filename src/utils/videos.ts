import { getCollection, type CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";

export type VideoEntry = CollectionEntry<"videos">;

/** Accepts a bare ID or any common YouTube URL form and returns the video ID. */
export function getYoutubeId(value?: string) {
  if (!value) return undefined;
  if (/^[\w-]{11}$/.test(value)) return value;
  const match = value.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/
  );
  return match?.[1];
}

export function getVideoPoster(video: VideoEntry) {
  const id = getYoutubeId(video.data.youtube);
  return (
    video.data.thumbnail ??
    (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined)
  );
}

/** Published videos, newest first (explicit `order` wins). */
export async function getSortedVideos() {
  const videos = await getCollection("videos", ({ data }) => !data.draft);
  return videos.sort((a, b) => {
    const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER;
    if (orderA !== orderB) return orderA - orderB;
    return (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0);
  });
}

export const playlistSlug = (name: string) => slugifyStr(name);

/** Unique playlists with video counts, biggest first. */
export function getPlaylists(videos: VideoEntry[]) {
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const v of videos) {
    for (const name of v.data.playlists) {
      const slug = playlistSlug(name);
      const e = map.get(slug) ?? { name, slug, count: 0 };
      e.count++;
      map.set(slug, e);
    }
  }
  return [...map.values()].sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name)
  );
}

const tokens = (title: string) =>
  new Set(
    title
      .toLowerCase()
      .split(/[^\p{L}\p{N}]+/u)
      .filter(w => w.length > 3)
  );

/**
 * Rank other videos by relevance to `current`:
 * shared playlists (strongest) + overlapping title words + a small recency tie-break.
 */
export function getRelatedVideos(
  current: VideoEntry,
  all: VideoEntry[],
  limit = 4
) {
  const myTokens = tokens(current.data.title);
  const myLists = new Set(current.data.playlists);
  return all
    .filter(v => v.id !== current.id)
    .map(v => {
      const shared = v.data.playlists.filter(p => myLists.has(p)).length;
      const theirs = tokens(v.data.title);
      const overlap = [...myTokens].filter(t => theirs.has(t)).length;
      const union = new Set([...myTokens, ...theirs]).size || 1;
      const recency = (v.data.date?.getTime() ?? 0) / 1e13; // < 1, only breaks ties
      return { v, score: shared * 3 + (overlap / union) * 2 + recency };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(x => x.v);
}
