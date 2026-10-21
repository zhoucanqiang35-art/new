import type { Metadata } from "next";
import Site from "../site";
import { researchArticles } from "../articles";
import contentTranslations from "../content-translations.json";
import { localizedArticleFallback } from "../editorial-localization";

type Props = { params: Promise<{ path?: string[] }> };
const langs = new Set(["de","fr","es","it","pt","nl","pl","sv"]);
const sections = new Set(["categories","products","guides","articles","faq"]);
const localizedMeta: Record<string, Record<string, { title: string; description: string }>> = {
  de: {
    home: { title: "PikoBuy Spreadsheet 2026 | Funde, QC & Versand", description: "Unabhängige PikoBuy-Spreadsheet-Recherche: Funde suchen, Listings vergleichen, QC-Fotos prüfen und Versand planen." },
    articles: { title: "PikoBuy Ratgeber | QC, Versand & Produktlinks", description: "Praktische, unabhängige PikoBuy-Ratgeber zu Spreadsheet-Funden, QC-Fotos, Produktlinks und Versand." },
  },
  fr: {
    home: { title: "Tableur PikoBuy 2026 | Trouvailles, QC et livraison", description: "Recherche indépendante PikoBuy : recherchez des trouvailles, comparez les annonces, vérifiez les photos QC et préparez l’envoi." },
    articles: { title: "Guides PikoBuy | QC, livraison et liens produits", description: "Guides indépendants PikoBuy sur les trouvailles, les photos QC, les liens produits et la livraison." },
  },
  es: { home: { title: "Hoja PikoBuy 2026 | Productos, QC y envíos", description: "Investigación independiente de PikoBuy: busca productos, compara anuncios, revisa fotos QC y planifica el envío." }, articles: { title: "Guías PikoBuy | QC, envíos y enlaces", description: "Guías independientes de PikoBuy sobre productos, fotos QC, enlaces y envíos." } },
  it: { home: { title: "Foglio PikoBuy 2026 | Prodotti, QC e spedizione", description: "Ricerca indipendente PikoBuy: trova prodotti, confronta annunci, verifica foto QC e pianifica la spedizione." }, articles: { title: "Guide PikoBuy | QC, spedizione e link", description: "Guide indipendenti PikoBuy su prodotti, foto QC, link e spedizione." } },
  pt: { home: { title: "Planilha PikoBuy 2026 | Produtos, QC e envio", description: "Pesquisa independente PikoBuy: encontre produtos, compare anúncios, confira fotos QC e planeje o envio." }, articles: { title: "Guias PikoBuy | QC, envio e links", description: "Guias independentes PikoBuy sobre produtos, fotos QC, links e envio." } },
  nl: { home: { title: "PikoBuy Spreadsheet 2026 | Vondsten, QC en verzending", description: "Onafhankelijk PikoBuy-onderzoek: zoek vondsten, vergelijk listings, bekijk QC-foto’s en plan verzending." }, articles: { title: "PikoBuy-gidsen | QC, verzending en productlinks", description: "Onafhankelijke PikoBuy-gidsen over vondsten, QC-foto’s, productlinks en verzending." } },
  pl: { home: { title: "Arkusz PikoBuy 2026 | Znaleziska, QC i wysyłka", description: "Niezależne badania PikoBuy: szukaj produktów, porównuj oferty, sprawdzaj zdjęcia QC i planuj wysyłkę." }, articles: { title: "Poradniki PikoBuy | QC, wysyłka i linki", description: "Niezależne poradniki PikoBuy o produktach, zdjęciach QC, linkach i wysyłce." } },
  sv: { home: { title: "PikoBuy Spreadsheet 2026 | Fynd, QC och frakt", description: "Oberoende PikoBuy-research: sök fynd, jämför annonser, kontrollera QC-bilder och planera frakt." }, articles: { title: "PikoBuy-guider | QC, frakt och produktlänkar", description: "Oberoende PikoBuy-guider om fynd, QC-bilder, produktlänkar och frakt." } },
};

function parse(path: string[] = []) {
  const lang = path[0] && langs.has(path[0]) ? path[0] : "en";
  const candidate = lang === "en" ? path[0] : path[1];
  const section = candidate && sections.has(candidate) ? candidate : "home";
  const articleSlug = section === "articles" ? (lang === "en" ? path[1] : path[2]) : undefined;
  return { lang, section, articleSlug };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, section, articleSlug } = parse((await params).path);
  const title: Record<string,string> = {
    home:"PikoBuy Spreadsheet 2026 | Finds, QC & Shipping Research",
    categories:"PikoBuy Spreadsheet Categories | Shoes, Clothing & More",
    products:"PikoBuy Product Finds | Research Before You Order",
    guides:"PikoBuy Guides | Ordering, Warehouse QC & Shipping",
    articles:"PikoBuy Research Articles | Practical Buyer Guides",
    faq:"PikoBuy Spreadsheet FAQ | Independent Answers",
  };
  const localizedArticles = lang === "en" ? researchArticles : ((contentTranslations as unknown as Record<string,{researchArticles:typeof researchArticles}>)[lang]?.researchArticles || []);
  const baseArticle = researchArticles.find(item=>item.slug===articleSlug);
  const article = localizedArticles.find(item=>item.slug===articleSlug) || (lang === "en" || !baseArticle ? baseArticle : localizedArticleFallback(lang as "de" | "fr" | "es" | "it" | "pt" | "nl" | "pl" | "sv", baseArticle));
  const current = section === "home" ? "" : article ? `articles/${article.slug}` : section;
  const canonical=lang === "en" ? `/${current}` : `/${lang}/${current}`;
  const languageAlternates=Object.fromEntries([
    ["en",`/${current}`],
    ...["de","fr","es","it","pt","nl","pl","sv"].map(code=>[code,`/${code}/${current}`]),
    ["x-default",`/${current}`]
  ]);
  const local = localizedMeta[lang]?.[section];
  return {
    title: article ? (article.seoTitle || `${article.title} | PikoBuy Spreadsheet`) : (local?.title || title[section]),
    description:article?.description || local?.description || "Independent PikoBuy spreadsheet research for US and European shoppers. Search FindSpreadsheet products, check listings and plan warehouse QC and shipping.",
    keywords:article?.keywords,
    robots:{index:true,follow:true},
    alternates:{canonical,languages:languageAlternates},
  };
}

export default async function Page({ params }: Props) {
  return <Site {...parse((await params).path)} />;
}
