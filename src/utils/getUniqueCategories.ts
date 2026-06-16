import type { CollectionEntry } from "astro:content";
import { postFilter } from "./postFilter";
import { slugifyStr } from "./slugify";

type Category = {
  category: string;
  categoryName: string;
};

/**
 * Builds a de-duplicated, sorted category list from posts.
 *
 * Only posts with a manually-filled `category` field are included — posts
 * without one are excluded entirely (no default, unlike tags).
 */
export function getUniqueCategories(posts: CollectionEntry<"posts">[]) {
  const categories: Category[] = posts
    .filter(post => postFilter(post) && post.data.category)
    .map(post => post.data.category as string)
    .map(category => ({
      category: slugifyStr(category),
      categoryName: category,
    }))
    .filter(
      (value, index, self) =>
        self.findIndex(c => c.category === value.category) === index
    )
    .sort((a, b) => a.category.localeCompare(b.category));
  return categories;
}
