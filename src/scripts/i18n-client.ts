type Lang = "vi" | "en";
const STORAGE_KEY = "pnk-lang";

function getCurrentLang(): Lang {
  return (localStorage.getItem(STORAGE_KEY) ?? "vi") as Lang;
}

function getNestedValue(obj: Record<string, unknown>, dotPath: string): string | undefined {
  const parts = dotPath.split(".");
  let curr: unknown = obj;
  for (const p of parts) {
    if (!curr || typeof curr !== "object") return undefined;
    curr = (curr as Record<string, unknown>)[p];
  }
  return typeof curr === "string" ? curr : undefined;
}

function applyLang(lang: Lang) {
  document.documentElement.setAttribute("data-lang", lang);

  const en = (window as any).__i18n?.en;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n!;
    if (lang === "en" && en) {
      // Save original vi text once (before first swap or after page transition)
      if (!el.dataset.viText) el.dataset.viText = el.textContent ?? "";
      const val = getNestedValue(en, key);
      if (val) el.textContent = val;
    } else {
      // Restore vi: use saved backup or current text
      if (el.dataset.viText !== undefined) el.textContent = el.dataset.viText;
    }
  });

  // Handle content-level data-en attributes (post titles, descriptions, etc.)
  document.querySelectorAll<HTMLElement>("[data-en]").forEach(el => {
    if (lang === "en") {
      if (!el.dataset.vi) el.dataset.vi = el.textContent ?? "";
      el.textContent = el.dataset.en!;
    } else {
      if (el.dataset.vi !== undefined) el.textContent = el.dataset.vi;
    }
  });

  // Update lang toggle buttons active state
  document.querySelectorAll<HTMLElement>("[data-lang-btn]").forEach(btn => {
    const active = btn.dataset.langBtn === lang;
    btn.classList.toggle("text-accent", active);
    btn.classList.toggle("font-semibold", active);
    btn.classList.toggle("text-muted-foreground", !active);
    btn.classList.toggle("hover:text-foreground", !active);
  });
}

function setLang(lang: Lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  applyLang(lang);
}

function init() {
  const lang = getCurrentLang();
  applyLang(lang);

  document.querySelectorAll<HTMLElement>("[data-lang-btn]").forEach(btn => {
    // Remove old listener by cloning (safe across astro:page-load re-runs)
    const clone = btn.cloneNode(true) as HTMLElement;
    btn.replaceWith(clone);
    clone.addEventListener("click", () => setLang(clone.dataset.langBtn as Lang));
  });
}

document.addEventListener("astro:page-load", init);
if (document.readyState !== "loading") init();
