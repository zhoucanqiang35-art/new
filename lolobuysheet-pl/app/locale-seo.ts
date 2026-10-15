import type { Metadata } from "next";

export const siteLocales = ["en", "de", "fr", "es", "it", "pt", "nl", "pl", "sv"] as const;
export type SiteLocale = typeof siteLocales[number];

export function isSiteLocale(value: string): value is SiteLocale {
  return (siteLocales as readonly string[]).includes(value);
}

const copy: Record<SiteLocale, {home: string; description: string; sections: Record<string, string>}> = {
  en:{home:"LoloBuy Spreadsheet | QC Photos, Shipping & Product Research",description:"Independent LoloBuy spreadsheet research: compare product listings, ask focused QC-photo questions and plan a parcel using live route information.",sections:{categories:"LoloBuy Product Categories",details:"LoloBuy Product-Research Checklist",articles:"LoloBuy Guides: Spreadsheet, QC Photos & Shipping Cost",faq:"LoloBuy Spreadsheet FAQ"}},
  de:{home:"LoloBuy Spreadsheet | QC-Fotos, Versand & Produktrecherche",description:"Unabhängige LoloBuy-Spreadsheet-Recherche: Produktseiten vergleichen, gezielte QC-Fragen stellen und ein Paket mit aktuellen Routeninformationen planen.",sections:{categories:"LoloBuy Produktkategorien",details:"LoloBuy Checkliste zur Produktrecherche",articles:"LoloBuy Guides: Spreadsheet, QC-Fotos & Versandkosten",faq:"LoloBuy Spreadsheet FAQ"}},
  fr:{home:"Tableur LoloBuy | Photos QC, expédition et recherche produit",description:"Recherche indépendante LoloBuy : comparer les fiches produit, poser des questions QC précises et planifier un colis à partir des informations de route actuelles.",sections:{categories:"Catégories de produits LoloBuy",details:"Checklist de recherche produit LoloBuy",articles:"Guides LoloBuy : tableur, photos QC et coût d’expédition",faq:"FAQ du tableur LoloBuy"}},
  es:{home:"Hoja LoloBuy | Fotos QC, envío e investigación de productos",description:"Investigación independiente de LoloBuy: compara fichas, formula preguntas concretas de QC y planifica un paquete con información de ruta actual.",sections:{categories:"Categorías de productos LoloBuy",details:"Lista de comprobación de investigación LoloBuy",articles:"Guías LoloBuy: hoja, fotos QC y coste de envío",faq:"FAQ de la hoja LoloBuy"}},
  it:{home:"Foglio LoloBuy | Foto QC, spedizione e ricerca prodotto",description:"Ricerca indipendente LoloBuy: confronta le schede, fai domande QC mirate e pianifica un pacco con informazioni di rotta aggiornate.",sections:{categories:"Categorie di prodotti LoloBuy",details:"Checklist di ricerca prodotto LoloBuy",articles:"Guide LoloBuy: foglio, foto QC e costo di spedizione",faq:"FAQ del foglio LoloBuy"}},
  pt:{home:"Planilha LoloBuy | Fotos QC, envio e pesquisa de produtos",description:"Pesquisa independente LoloBuy: compare páginas de produto, faça perguntas QC específicas e planeie um pacote com dados atuais de rota.",sections:{categories:"Categorias de produtos LoloBuy",details:"Checklist de pesquisa de produto LoloBuy",articles:"Guias LoloBuy: planilha, fotos QC e custo de envio",faq:"FAQ da planilha LoloBuy"}},
  nl:{home:"LoloBuy-spreadsheet | QC-foto’s, verzending en productonderzoek",description:"Onafhankelijk LoloBuy-onderzoek: vergelijk productpagina’s, stel gerichte QC-vragen en plan een pakket met actuele routegegevens.",sections:{categories:"LoloBuy-productcategorieën",details:"LoloBuy-checklist voor productonderzoek",articles:"LoloBuy-gidsen: spreadsheet, QC-foto’s en verzendkosten",faq:"LoloBuy-spreadsheet FAQ"}},
  pl:{home:"Arkusz LoloBuy | Zdjęcia QC, wysyłka i research produktów",description:"Niezależny research LoloBuy: porównuj oferty, zadawaj konkretne pytania QC i planuj paczkę na podstawie aktualnych danych o trasie.",sections:{categories:"Kategorie produktów LoloBuy",details:"Lista kontroli researchu LoloBuy",articles:"Poradniki LoloBuy: arkusz, zdjęcia QC i koszt wysyłki",faq:"FAQ arkusza LoloBuy"}},
  sv:{home:"LoloBuy-spreadsheet | QC-bilder, frakt och produktresearch",description:"Oberoende LoloBuy-research: jämför produktannonser, ställ fokuserade QC-frågor och planera ett paket med aktuell ruttinformation.",sections:{categories:"LoloBuy produktkategorier",details:"LoloBuy-checklista för produktresearch",articles:"LoloBuy-guider: spreadsheet, QC-bilder och fraktkostnad",faq:"FAQ om LoloBuy-spreadsheet"}},
};

export function localizedMetadata(locale: SiteLocale, path = ""): Metadata {
  const key = path === "/categories" ? "categories" : path === "/product-details" ? "details" : path === "/seo-articles" ? "articles" : path === "/faq" ? "faq" : null;
  const title = key ? copy[locale].sections[key] : copy[locale].home;
  const pathname = `/${locale}${path}`;
  return {
    title,
    description: copy[locale].description,
    alternates: {
      canonical: pathname,
      languages: Object.fromEntries(siteLocales.map((language) => [language, `/${language}${path}`])),
    },
    openGraph: { title, description: copy[locale].description, url: pathname, locale },
  };
}
