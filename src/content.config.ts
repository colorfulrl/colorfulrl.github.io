import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      // Chủ đề (category) — 1 bài chỉ thuộc 1 chủ đề, tự điền tay. Không điền thì
      // bài sẽ không xuất hiện trong trang Chủ đề/Categories.
      category: z.string().optional(),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const EBOOKS_PATH = "src/content/ebooks";

const ebooks = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${EBOOKS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string().optional(),
      // description = bản tiếng Việt (mặc định). descriptionEn = bản tiếng Anh,
      // hiện khi xem ở /en/ebooks; nếu không có thì fallback dùng description.
      description: z.string().optional(),
      descriptionEn: z.string().optional(),
      // Đặt file ảnh bìa (vd. cover.jpg) cùng thư mục với index.md, hoặc dùng URL ngoài.
      cover: image().or(z.string()).optional(),
      // Để trống lúc mới thêm sách, điền link sau khi có.
      link: z.string().optional(),
      // Đặt true nếu sách KHÔNG thể chia sẻ link công khai (rủi ro bị nhà xuất
      // bản kiện bản quyền). Khi đó card sẽ ẩn nút link, thay bằng nút "Liên hệ
      // để nhận sách" (mailto tới social "mail" trong astro-paper.config.ts).
      // `link` lúc này có thể để trống hoặc dùng làm ghi chú riêng, không hiện ra ngoài.
      restricted: z.boolean().optional(),
      category: z.string().optional(),
      order: z.number().optional(),
      draft: z.boolean().optional(),
      lang: z.string().optional(),
    }),
});

export const RESOURCES_PATH = "src/content/resources";

const resources = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${RESOURCES_PATH}` }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    type: z.string(),
    source: z.string().optional(),
    description: z.string().optional(),
    descriptionEn: z.string().optional(),
    thumbnail: z.string().optional(),
    date: z.coerce.date().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

export const RESEARCH_PATH = "src/content/research";

const research = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${RESEARCH_PATH}` }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).optional(),
    year: z.number().optional(),
    venue: z.string().optional(),
    abstract: z.string().optional(),
    arxiv: z.string().optional(),
    draft: z.boolean().optional(),
    // ── Graph fields ──────────────────────────────────────────────────────
    // Short label shown on the graph node (defaults to title if omitted).
    graphLabel: z.string().optional(),
    // 1–2 sentence blurb for tooltip / relationship panel.
    graphDescription: z.string().optional(),
    // Outgoing edges declared by this paper.
    graphEdges: z
      .array(z.object({ target: z.string(), label: z.string() }))
      .optional(),
    // Domain papers live only in a Curriculum Map, not the central Core-RL
    // graph. Set true to keep the detail page (research/[slug]) but exclude
    // the node + its edges from the central graph (avoids the sparse-star bloat).
    graphExclude: z.boolean().optional(),
  }),
});

export const CURRICULUM_PATH = "src/content/curriculum";

const curriculum = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${CURRICULUM_PATH}` }),
  schema: z.object({
    // Display name of the domain, e.g. "Embodied AI".
    domain: z.string(),
    description: z.string(),
    descriptionEn: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
    // Ordered reading stages (prerequisites → core → advanced → …).
    // Each item references a research/ entry by id; `after` lists the
    // research ids that should be read first (drawn as prerequisite arrows).
    stages: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
        labelEn: z.string().optional(),
        items: z.array(
          z.object({
            ref: z.string(),
            after: z.array(z.string()).optional(),
          }),
        ),
      }),
    ),
  }),
});

export const collections = { posts, pages, ebooks, resources, research, curriculum };
