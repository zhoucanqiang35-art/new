const locales = ["de", "fr", "es", "it", "pt", "nl", "pl"];
export function localizedAlternates(page: string) {
  const path = page ? `/${page}` : "/";
  return {
    canonical: `https://pikobuyspreadsheet.me${path}`,
    languages: Object.fromEntries([
      ["en", `https://pikobuyspreadsheet.me${path}`],
      ...locales.map(locale => [locale, `https://pikobuyspreadsheet.me/${locale}${path === "/" ? "" : path}`]),
    ]),
  };
}
