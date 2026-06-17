/** Maps resource type slug → display labels + Tailwind color classes.
 *  Add a new entry here to introduce a new resource type.
 *  The iconBg / iconColor classes are applied to the icon container.
 *  The badge classes are applied to the inline type chip on each card.
 */
export const RESOURCE_TYPES: Record<
  string,
  {
    vi: string;
    en: string;
    iconBg: string;
    iconColor: string;
    badgeBg: string;
    badgeText: string;
  }
> = {
  article: {
    vi: "Bài viết",
    en: "Article",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-100 dark:bg-blue-900/30",
    badgeText: "text-blue-700 dark:text-blue-400",
  },
  video: {
    vi: "Video",
    en: "Video",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
    badgeBg: "bg-red-100 dark:bg-red-900/30",
    badgeText: "text-red-700 dark:text-red-400",
  },
  repo: {
    vi: "Repository",
    en: "Repository",
    iconBg: "bg-zinc-100 dark:bg-zinc-800",
    iconColor: "text-zinc-600 dark:text-zinc-300",
    badgeBg: "bg-zinc-100 dark:bg-zinc-800",
    badgeText: "text-zinc-700 dark:text-zinc-300",
  },
  course: {
    vi: "Khóa học",
    en: "Course",
    iconBg: "bg-violet-100 dark:bg-violet-900/30",
    iconColor: "text-violet-600 dark:text-violet-400",
    badgeBg: "bg-violet-100 dark:bg-violet-900/30",
    badgeText: "text-violet-700 dark:text-violet-400",
  },
  tool: {
    vi: "Công cụ",
    en: "Tool",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-100 dark:bg-emerald-900/30",
    badgeText: "text-emerald-700 dark:text-emerald-400",
  },
};

export const RESOURCE_TYPE_ORDER = ["article", "video", "repo", "course", "tool"] as const;
