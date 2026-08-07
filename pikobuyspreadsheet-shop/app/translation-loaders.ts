import type { LanguageCode } from "./i18n";

type Dictionary = Record<string, string>;
type TranslatedLanguage = Exclude<LanguageCode, "en">;

export const translationLoaders: Record<TranslatedLanguage, () => Promise<{ default: Dictionary }>> = {
  de: () => import("./translations/de.json"),
  es: () => import("./translations/es.json"),
  fr: () => import("./translations/fr.json"),
  it: () => import("./translations/it.json"),
  nl: () => import("./translations/nl.json"),
  pl: () => import("./translations/pl.json"),
  pt: () => import("./translations/pt.json"),
  cs: () => import("./translations/cs.json"),
  ro: () => import("./translations/ro.json"),
  hu: () => import("./translations/hu.json"),
  sv: () => import("./translations/sv.json"),
  da: () => import("./translations/da.json"),
  no: () => import("./translations/no.json"),
  fi: () => import("./translations/fi.json"),
  tr: () => import("./translations/tr.json"),
  el: () => import("./translations/el.json"),
  uk: () => import("./translations/uk.json"),
  bg: () => import("./translations/bg.json"),
  ru: () => import("./translations/ru.json"),
  ar: () => import("./translations/ar.json"),
  ja: () => import("./translations/ja.json"),
  ko: () => import("./translations/ko.json"),
  zh: () => import("./translations/zh.json"),
};
