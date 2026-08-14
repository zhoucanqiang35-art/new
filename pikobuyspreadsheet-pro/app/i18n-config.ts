export const locales = [
  { code: "en", name: "English", market: "United States / UK" },
  { code: "es", name: "Español", market: "Spain / Latin America" },
  { code: "de", name: "Deutsch", market: "Germany / Austria" },
  { code: "fr", name: "Français", market: "France / Belgium" },
  { code: "it", name: "Italiano", market: "Italy" },
  { code: "pt", name: "Português", market: "Portugal / Brazil" },
  { code: "nl", name: "Nederlands", market: "Netherlands" },
  { code: "pl", name: "Polski", market: "Poland" },
  { code: "cs", name: "Čeština", market: "Czechia" },
  { code: "sv", name: "Svenska", market: "Sweden" },
  { code: "da", name: "Dansk", market: "Denmark" },
  { code: "nb", name: "Norsk", market: "Norway" },
  { code: "fi", name: "Suomi", market: "Finland" },
  { code: "el", name: "Ελληνικά", market: "Greece" },
  { code: "ro", name: "Română", market: "Romania" },
  { code: "hu", name: "Magyar", market: "Hungary" },
  { code: "tr", name: "Türkçe", market: "Türkiye" },
  { code: "ar", name: "العربية", market: "Saudi Arabia / UAE" },
  { code: "ru", name: "Русский", market: "Russian-speaking" },
  { code: "uk", name: "Українська", market: "Ukraine" },
  { code: "ja", name: "日本語", market: "Japan" },
  { code: "hi", name: "हिन्दी", market: "India" },
  { code: "id", name: "Bahasa Indonesia", market: "Indonesia" },
  { code: "vi", name: "Tiếng Việt", market: "Vietnam" },
] as const;

export type Locale = (typeof locales)[number]["code"];
export type TranslationDictionary = Record<string, string>;

export const localeCodes = new Set<string>(locales.map((locale) => locale.code));

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && localeCodes.has(value));
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length && isLocale(segments[0])) segments.shift();
  return `/${segments.join("/")}`;
}

export function localizedPath(locale: Locale, pathname: string) {
  const clean = stripLocale(pathname || "/");
  if (locale === "en") return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

export function translateText(dictionary: TranslationDictionary, text: string) {
  if (!text.trim()) return text;
  const leading = text.match(/^\s*/)?.[0] ?? "";
  const trailing = text.match(/\s*$/)?.[0] ?? "";
  const core = text.slice(leading.length, text.length - trailing.length || undefined);
  return `${leading}${dictionary[core] ?? core}${trailing}`;
}
