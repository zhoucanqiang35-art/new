import { generatedTranslations } from "./generated-translations";
import type { Locale } from "./locales";

/** Translate editorial copy while preserving the exact page structure. */
export function tr(locale: Locale, text: string): string {
  if (locale === "en") return text;
  return generatedTranslations[locale]?.[text] ?? text;
}
