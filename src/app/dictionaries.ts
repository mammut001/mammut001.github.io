import type { Locale } from "@/lib/site";
import type { Dictionary } from "@/dictionaries/en";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en").then((m) => m.en),
  zh: () => import("@/dictionaries/zh").then((m) => m.zh),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
