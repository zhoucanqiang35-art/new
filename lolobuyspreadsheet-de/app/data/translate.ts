import { generatedTranslations } from "./generated-translations";
import { guideFourTranslations } from "./guide-four-translations";
import { guideFiveTranslations } from "./guide-five-translations";
import { guideSixTranslations } from "./guide-six-translations";
import type { Locale } from "./locales";

/** Translate editorial copy while preserving the exact page structure. */
export function tr(locale: Locale, text: string): string {
  if (locale === "en") return text;
  return guideSixTranslations[locale]?.[text] ?? guideFiveTranslations[locale]?.[text] ?? guideFourTranslations[locale]?.[text] ?? generatedTranslations[locale]?.[text] ?? text;
}
