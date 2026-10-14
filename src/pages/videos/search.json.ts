import type { APIRoute } from "astro";
import { getSortedVideos, getVideoPoster } from "@/utils/videos";

// Small search index, fetched lazily the first time someone focuses the search box.
export const GET: APIRoute = async () => {
  const videos = await getSortedVideos();
  const index = videos.map(v => ({
    id: v.id,
    title: v.data.title,
    titleEn: v.data.titleEn ?? "",
    playlists: v.data.playlists,
    description: v.data.description ?? "",
    poster: getVideoPoster(v) ?? "",
  }));
  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};
