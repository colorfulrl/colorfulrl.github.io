// Đồng bộ video từ các playlist YouTube của kênh về src/content/videos/.
//
// Quy ước: chỉ lấy playlist có tên BẮT ĐẦU bằng "RL" (vd. "RL Papers", "RL - Offline").
// - Video mới  → tạo <videoId>.md (đăng ngay, draft: false).
// - Video cũ   → chỉ cập nhật dòng `playlists:`; mọi chỉnh sửa tay khác được giữ nguyên.
// - Video rời khỏi mọi playlist RL → nếu file do script tạo (synced: true) thì đặt draft: true.
//
// Không cần API key: dùng trang playlist của kênh + RSS của từng playlist.
// Lưu ý: RSS mỗi playlist chỉ trả về tối đa 15 video mới nhất; script sẽ cảnh báo khi chạm mức này.
//
// Chạy: npm run sync-videos

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CHANNEL_ID = "UCcvQO6Qqd15jTFKAzQ91raQ"; // @colorfulrl
const PLAYLIST_NAME_RULE = /^RL\b/;
const FEED_LIMIT = 15;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const videosDir = path.join(root, "src/content/videos");

const UA = "Mozilla/5.0 (compatible; colorfulrl-video-sync)";

async function get(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, "Accept-Language": "en" },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
  return res.text();
}

const decodeXml = s =>
  s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&");

async function listPlaylistIds() {
  const html = await get(`https://www.youtube.com/channel/${CHANNEL_ID}/playlists`);
  return [...new Set([...html.matchAll(/"playlistId":"([\w-]+)"/g)].map(m => m[1]))];
}

async function readPlaylist(id) {
  const xml = await get(`https://www.youtube.com/feeds/videos.xml?playlist_id=${id}`);
  const [head, ...entries] = xml.split("<entry>");
  const title = decodeXml(head.match(/<title>(.*?)<\/title>/s)?.[1] ?? "").trim();
  const videos = entries.map(entry => ({
    id: entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)[1],
    title: decodeXml(entry.match(/<title>(.*?)<\/title>/s)[1]).trim(),
    date: entry.match(/<published>(\d{4}-\d{2}-\d{2})/)[1],
  }));
  return { id, title, videos };
}

const q = s => JSON.stringify(s); // JSON string/array is a valid YAML scalar

function newFile({ id, title, date }, playlists) {
  return [
    "---",
    `title: ${q(title)}`,
    `youtube: ${q(id)}`,
    `date: ${q(date)}`,
    `playlists: ${q(playlists)}`,
    "synced: true",
    "draft: false",
    "---",
    "",
  ].join("\n");
}

function setField(src, key, value) {
  const re = new RegExp(`^${key}:.*$`, "m");
  const line = `${key}: ${value}`;
  if (re.test(src)) return src.replace(re, line);
  // field missing → insert right before the closing frontmatter fence
  return src.replace(/\r?\n---\r?\n/, `\n${line}\n---\n`);
}

async function main() {
  const ids = await listPlaylistIds();
  if (ids.length === 0) {
    throw new Error("Không đọc được playlist nào từ trang kênh — dừng để tránh ghi đè dữ liệu.");
  }

  const playlists = [];
  let hadFailure = false;
  for (const id of ids) {
    try {
      playlists.push(await readPlaylist(id));
    } catch (err) {
      // Một playlist lỗi không làm hỏng cả lần đồng bộ, nhưng khi đó không được ẩn video nào
      // (video có thể chỉ đang nằm trong playlist bị lỗi).
      console.warn(`! Bỏ qua playlist ${id}: ${err.message}`);
      hadFailure = true;
    }
  }

  const rl = playlists.filter(p => PLAYLIST_NAME_RULE.test(p.title));
  console.log(`Playlist trên kênh: ${playlists.map(p => p.title).join(" | ")}`);
  console.log(`Lấy (tên bắt đầu bằng "RL"): ${rl.map(p => p.title).join(" | ") || "(không có)"}`);

  const byVideo = new Map(); // videoId -> { meta, playlists: Set<string> }
  for (const p of rl) {
    if (p.videos.length >= FEED_LIMIT) {
      console.warn(`! Playlist "${p.title}" có ≥${FEED_LIMIT} video: RSS có thể đã cắt bớt video cũ.`);
    }
    for (const v of p.videos) {
      const e = byVideo.get(v.id) ?? { meta: v, playlists: new Set() };
      e.playlists.add(p.title);
      byVideo.set(v.id, e);
    }
  }

  await fs.mkdir(videosDir, { recursive: true });
  let created = 0;
  let updated = 0;
  let hidden = 0;

  for (const [id, { meta, playlists: pls }] of byVideo) {
    const file = path.join(videosDir, `${id}.md`);
    const list = [...pls].sort();
    const existing = await fs.readFile(file, "utf8").catch(() => null);

    if (existing === null) {
      await fs.writeFile(file, newFile(meta, list));
      created++;
      console.log(`+ ${id}  ${meta.title}`);
      continue;
    }

    let next = setField(existing, "playlists", q(list));
    // Video quay lại playlist RL → bỏ ẩn nếu trước đó chính script đã ẩn.
    if (/^synced:\s*true/m.test(next) && /^draft:\s*true/m.test(next)) {
      next = setField(next, "draft", "false");
    }
    if (next !== existing) {
      await fs.writeFile(file, next);
      updated++;
      console.log(`~ ${id}  playlists → ${list.join(", ")}`);
    }
  }

  // Video do script tạo nhưng không còn trong playlist RL nào → ẩn.
  if (!hadFailure) {
    for (const name of await fs.readdir(videosDir)) {
      if (!name.endsWith(".md") || name.startsWith("_")) continue;
      const id = name.slice(0, -3);
      if (byVideo.has(id)) continue;
      const file = path.join(videosDir, name);
      const src = await fs.readFile(file, "utf8");
      if (!/^synced:\s*true/m.test(src) || /^draft:\s*true/m.test(src)) continue;
      await fs.writeFile(file, setField(setField(src, "draft", "true"), "playlists", "[]"));
      hidden++;
      console.log(`- ${id}  không còn trong playlist RL → draft`);
    }
  }

  console.log(`Xong: +${created} mới, ~${updated} cập nhật, -${hidden} ẩn.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
