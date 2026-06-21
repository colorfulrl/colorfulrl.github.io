import type { UIStrings } from "./types";
import rawUI from "../language/ui.json";

export { tplStr } from "./format";

type LangKey = "vi" | "en";
type RawNode = Record<string, unknown>;

function extractLang(obj: unknown, lang: LangKey): unknown {
  if (typeof obj !== "object" || obj === null) return obj;
  const o = obj as RawNode;
  if ("vi" in o && "en" in o) return o[lang] ?? o["vi"];
  return Object.fromEntries(
    Object.entries(o).map(([k, v]) => [k, extractLang(v, lang)])
  );
}

/** Returns UI strings for the given locale, defaulting to Vietnamese. */
export function useTranslations(locale?: string): UIStrings {
  const lang: LangKey = locale === "en" ? "en" : "vi";
  return extractLang(rawUI, lang) as UIStrings;
}

/** Returns the raw en strings as a plain object (for client-side injection). */
export function getEnStrings(): RawNode {
  return extractLang(rawUI, "en") as RawNode;
}
