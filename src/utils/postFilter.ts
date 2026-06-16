import type { CollectionEntry } from "astro:content";
import config from "@/config";
import { getPostLocale } from "./getPostPaths";

/**
 * Determines whether a post is eligible to be listed/rendered.
 *
 * - Excludes drafts always
 * - In production, excludes scheduled posts until `pubDatetime` minus the configured margin
 * - In dev, always shows non-draft posts to make authoring easier
 * - Locale is derived from the post's folder (`posts/vi/...`, `posts/en/...`)
 */
export function postFilter(post: CollectionEntry<"posts">, locale?: string) {
  const { data } = post;
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - config.posts.scheduledPostMargin;
  const isLocaleMatch = !locale || getPostLocale(post.filePath) === locale;
  return !data.draft && isLocaleMatch && (import.meta.env.DEV || isPublishTimePassed);
}
