const loaders: Record<string, () => Promise<{ default: Record<string, string> }>> = {
  de: () => import("./translations/de.json"),
  fr: () => import("./translations/fr.json"),
  es: () => import("./translations/es.json"),
  it: () => import("./translations/it.json"),
  nl: () => import("./translations/nl.json"),
  pl: () => import("./translations/pl.json"),
  pt: () => import("./translations/pt.json"),
  sv: () => import("./translations/sv.json"),
};

export async function loadGeneratedTranslations(locale: string) {
  return loaders[locale] ? (await loaders[locale]()).default : {};
}
