import en from "./seo-page-en.json";
import localized from "./seo-page-translations.json";

type SeoCopy = typeof en;
export const seoPageCopy = (locale: string) =>
  (localized as Record<string, SeoCopy | undefined>)[locale] ?? en;
