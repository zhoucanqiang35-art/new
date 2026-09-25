import { generatedTranslations } from "./generated-translations";
import { guideFourTranslations } from "./guide-four-translations";
import { guideFiveTranslations } from "./guide-five-translations";
import { guideSixTranslations } from "./guide-six-translations";
import { guideSevenTranslations } from "./guide-seven-translations";
import { guideEightTranslations } from "./guide-eight-translations";
import { guideNineTranslations } from "./guide-nine-translations";
import { guideTenTranslations } from "./guide-ten-translations";
import { guideElevenTranslations } from "./guide-eleven-translations";
import { guideTwelveTranslations } from "./guide-twelve-translations";
import { guideThirteenTranslations } from "./guide-thirteen-translations";
import { guideFourteenTranslations } from "./guide-fourteen-translations";
import { guideFifteenTranslations } from "./guide-fifteen-translations";
import { guideSixteenTranslations } from "./guide-sixteen-translations";
import { guideSeventeenTranslations } from "./guide-seventeen-translations";
import { guideEighteenTranslations } from "./guide-eighteen-translations";
import type { Locale } from "./locales";

/** Translate editorial copy while preserving the exact page structure. */
export function tr(locale: Locale, text: string): string {
  if (locale === "en") return text;
  return guideEighteenTranslations[locale]?.[text] ?? guideSeventeenTranslations[locale]?.[text] ?? guideSixteenTranslations[locale]?.[text] ?? guideFifteenTranslations[locale]?.[text] ?? guideFourteenTranslations[locale]?.[text] ?? guideThirteenTranslations[locale]?.[text] ?? guideTwelveTranslations[locale]?.[text] ?? guideElevenTranslations[locale]?.[text] ?? guideTenTranslations[locale]?.[text] ?? guideNineTranslations[locale]?.[text] ?? guideEightTranslations[locale]?.[text] ?? guideSevenTranslations[locale]?.[text] ?? guideSixTranslations[locale]?.[text] ?? guideFiveTranslations[locale]?.[text] ?? guideFourTranslations[locale]?.[text] ?? generatedTranslations[locale]?.[text] ?? text;
}
