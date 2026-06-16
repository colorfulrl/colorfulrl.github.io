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
      // Đặt file ảnh bìa (vd. cover.jpg) cùng thư mục với index.md, rồi tham chiếu ở đây.
      cover: image().optional(),
      // Để trống lúc mới thêm sách, điền link sau khi có.
      link: z.string().optional(),
      order: z.number().optional(),
      draft: z.boolean().optional(),
      lang: z.string().optional(),
    }),
});

export const collections = { posts, pages, ebooks };
