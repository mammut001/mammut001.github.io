export const LOCALES = ["en", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

/** User site: https://mammut001.github.io */
export const SITE_URL = `https://mammut001.github.io${BASE_PATH}`;

export function localeAlternates(lang: Locale, subpath = "") {
  return {
    canonical: `/${lang}${subpath}/`,
    languages: {
      en: `/en${subpath}/`,
      "zh-CN": `/zh${subpath}/`,
      "x-default": `/en${subpath}/`,
    },
  };
}
