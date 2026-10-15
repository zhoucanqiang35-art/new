export const siteUrl = "https://lolobuyspreadsheet.pl";

export const locales = ["en", "de", "fr", "es", "it", "nl", "pl", "pt", "sv"] as const;
export type Locale = (typeof locales)[number];

const localizedHomeMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "LoloBuy Spreadsheet Poland | QC Photos, Fees & Shipping Guide",
    description: "Independent LoloBuy spreadsheet guide for Poland and Europe: product research, visible QC photos, warehouse checks, parcel planning and current shipping-cost context.",
  },
  de: {
    title: "LoloBuy Spreadsheet Polen | QC-Fotos, Kosten & Versand",
    description: "Unabhängiger LoloBuy-Leitfaden für Polen und Europa: Produktrecherche, sichtbare QC-Fotos, Lagerprüfungen, Paketplanung und Versandkosten-Kontext.",
  },
  fr: {
    title: "LoloBuy Spreadsheet Pologne | Photos QC, frais et livraison",
    description: "Guide LoloBuy indépendant pour la Pologne et l'Europe : recherche produit, photos QC visibles, contrôles d'entrepôt, colis et frais d'expédition.",
  },
  es: {
    title: "LoloBuy Spreadsheet Polonia | Fotos QC, costes y envío",
    description: "Guía independiente de LoloBuy para Polonia y Europa: investigación de productos, fotos QC visibles, almacén, paquetes y costes de envío.",
  },
  it: {
    title: "LoloBuy Spreadsheet Polonia | Foto QC, costi e spedizione",
    description: "Guida indipendente a LoloBuy per Polonia ed Europa: ricerca prodotti, foto QC visibili, controlli in magazzino, pacchi e costi di spedizione.",
  },
  nl: {
    title: "LoloBuy Spreadsheet Polen | QC-foto's, kosten en verzending",
    description: "Onafhankelijke LoloBuy-gids voor Polen en Europa: productonderzoek, zichtbare QC-foto's, magazijncontroles, pakketten en verzendkosten.",
  },
  pl: {
    title: "LoloBuy Spreadsheet Polska | Zdjęcia QC, koszty i wysyłka",
    description: "Niezależny przewodnik LoloBuy dla Polski i Europy: wyszukiwanie produktów, zdjęcia QC, kontrola magazynowa, paczki i koszty wysyłki.",
  },
  pt: {
    title: "LoloBuy Spreadsheet Polónia | Fotos QC, custos e envio",
    description: "Guia independente de LoloBuy para a Polónia e Europa: pesquisa de produtos, fotos QC visíveis, armazém, encomendas e custos de envio.",
  },
  sv: {
    title: "LoloBuy Spreadsheet Polen | QC-bilder, kostnader och frakt",
    description: "Oberoende LoloBuy-guide för Polen och Europa: produktresearch, synliga QC-bilder, lagerkontroller, paket och fraktkostnader.",
  },
};

export function localeFor(value: string): Locale {
  return (locales as readonly string[]).includes(value) ? (value as Locale) : "en";
}

export function localizedPath(locale: Locale, path = "/"): string {
  const suffix = path === "/" ? "" : path;
  return locale === "en" ? suffix || "/" : `/${locale}${suffix}`;
}

export function absoluteUrl(locale: Locale, path = "/"): string {
  return `${siteUrl}${localizedPath(locale, path)}`;
}

export function languageAlternates(path = "/"): Record<string, string> {
  return Object.fromEntries(locales.map((locale) => [locale, absoluteUrl(locale, path)]));
}

export function homeMeta(locale: Locale) {
  return localizedHomeMeta[locale];
}

export function articlePath(slug: string): string {
  return `/articles/${slug}/`;
}

