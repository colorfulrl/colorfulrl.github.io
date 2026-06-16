import type { CollectionEntry } from "astro:content";

/**
 * Returns ebook entries eligible to be shown, sorted by `order` ascending
 * (entries without `order` go last), then by title.
 */
export function getSortedEbooks(
  ebooks: CollectionEntry<"ebooks">[],
  locale?: string
) {
  return ebooks
    .filter(({ data }) => {
      const isLocaleMatch = !locale || !data.lang || data.lang === locale;
      return !data.draft && isLocaleMatch;
    })
    .sort((a, b) => {
      const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER;
      const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER;
      return orderA - orderB || a.data.title.localeCompare(b.data.title);
    });
}
