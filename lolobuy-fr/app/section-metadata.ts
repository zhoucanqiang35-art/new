import type { Metadata } from "next";
import { localeMetadata } from "./locale-metadata";

export const routeLocales = ["en", "fr", "de", "es", "it", "pt", "nl", "pl", "sv"] as const;
export const routeSections = ["categories", "product-details", "how-it-works", "shipping", "faq", "seo-articles"] as const;

export type RouteLocale = (typeof routeLocales)[number];
export type RouteSection = (typeof routeSections)[number];

type SectionMeta = { label: string; description: string };

// These descriptions are editorial summaries of the visible page sections.
// They deliberately avoid volatile claims about prices, stock, discounts or delivery times.
const sectionMeta: Record<RouteLocale, Record<RouteSection, SectionMeta>> = {
  en: {
    categories: { label: "Product categories", description: "Browse ten product paths and keep the item source, selection and current listing details together." },
    "product-details": { label: "Product details", description: "Learn which visible details to compare before opening a live product record in the main database." },
    "how-it-works": { label: "How it works", description: "Follow a practical sequence from source record to warehouse checks and a real parcel quote." },
    shipping: { label: "Shipping checks", description: "Compare packed weight, dimensions, contents and destination restrictions instead of relying on a fixed estimate." },
    faq: { label: "Frequently asked questions", description: "Read clear boundaries about this independent guide, live listings and changing shipping information." },
    "seo-articles": { label: "Research articles", description: "Read dated guides on spreadsheet use, QC photos, parcel planning, costs and returns." },
  },
  fr: {
    categories: { label: "Catégories de produits", description: "Explorez dix parcours produits en conservant la source, le choix et les informations actuelles de la fiche." },
    "product-details": { label: "Détails produit", description: "Découvrez les éléments visibles à comparer avant d’ouvrir une fiche produit active dans la base principale." },
    "how-it-works": { label: "Mode d’emploi", description: "Suivez une méthode pratique : fiche source, contrôles d’entrepôt et devis basé sur le colis réel." },
    shipping: { label: "Vérifications d’expédition", description: "Comparez poids emballé, dimensions, contenu et restrictions de destination plutôt qu’un tarif fixe." },
    faq: { label: "Questions fréquentes", description: "Consultez les limites claires de ce guide indépendant et des informations qui évoluent." },
    "seo-articles": { label: "Articles de recherche", description: "Lisez des guides datés sur les spreadsheets, les photos QC, les colis, les coûts et les retours." },
  },
  de: {
    categories: { label: "Produktkategorien", description: "Entdecken Sie zehn Produktwege und behalten Sie Quelle, Auswahl und aktuelle Listendetails zusammen." },
    "product-details": { label: "Produktdetails", description: "Erfahren Sie, welche sichtbaren Angaben vor dem Öffnen eines Live-Produkts verglichen werden sollten." },
    "how-it-works": { label: "So funktioniert es", description: "Folgen Sie einer praktischen Abfolge von der Quelle über Lagerprüfungen bis zum echten Paketangebot." },
    shipping: { label: "Versandprüfungen", description: "Vergleichen Sie Packgewicht, Maße, Inhalt und Zielbeschränkungen statt eines festen Kostenvoranschlags." },
    faq: { label: "Häufige Fragen", description: "Lesen Sie klare Grenzen dieses unabhängigen Leitfadens und veränderlicher Angaben." },
    "seo-articles": { label: "Rechercheartikel", description: "Lesen Sie datierte Leitfäden zu Spreadsheets, QC-Fotos, Paketplanung, Kosten und Rückgaben." },
  },
  es: {
    categories: { label: "Categorías de productos", description: "Explora diez rutas de producto y conserva la fuente, la selección y los datos actuales del listado." },
    "product-details": { label: "Detalles del producto", description: "Conoce qué datos visibles comparar antes de abrir un registro activo en la base principal." },
    "how-it-works": { label: "Cómo funciona", description: "Sigue una secuencia práctica desde la fuente hasta los controles de almacén y la cotización real." },
    shipping: { label: "Comprobaciones de envío", description: "Compara peso embalado, dimensiones, contenido y restricciones de destino en lugar de una estimación fija." },
    faq: { label: "Preguntas frecuentes", description: "Consulta límites claros sobre esta guía independiente y la información que puede cambiar." },
    "seo-articles": { label: "Artículos de investigación", description: "Lee guías fechadas sobre spreadsheets, fotos QC, paquetes, costes y devoluciones." },
  },
  it: {
    categories: { label: "Categorie di prodotti", description: "Esplora dieci percorsi prodotto mantenendo insieme fonte, selezione e dettagli aggiornati dell’annuncio." },
    "product-details": { label: "Dettagli prodotto", description: "Scopri quali elementi visibili confrontare prima di aprire un record attivo nella banca dati principale." },
    "how-it-works": { label: "Come funziona", description: "Segui una sequenza pratica dalla fonte ai controlli in magazzino fino al preventivo del pacco reale." },
    shipping: { label: "Controlli di spedizione", description: "Confronta peso imballato, dimensioni, contenuto e limiti di destinazione anziché una stima fissa." },
    faq: { label: "Domande frequenti", description: "Leggi limiti chiari su questa guida indipendente e sulle informazioni soggette a variazioni." },
    "seo-articles": { label: "Articoli di ricerca", description: "Leggi guide datate su spreadsheet, foto QC, pianificazione dei pacchi, costi e resi." },
  },
  pt: {
    categories: { label: "Categorias de produtos", description: "Explore dez percursos de produto e mantenha juntos a fonte, a seleção e os dados atuais do anúncio." },
    "product-details": { label: "Detalhes do produto", description: "Veja que elementos visíveis comparar antes de abrir um registo ativo na base principal." },
    "how-it-works": { label: "Como funciona", description: "Siga uma sequência prática desde a fonte aos controlos de armazém e à cotação do volume real." },
    shipping: { label: "Verificações de envio", description: "Compare peso embalado, dimensões, conteúdo e restrições de destino em vez de uma estimativa fixa." },
    faq: { label: "Perguntas frequentes", description: "Leia limites claros deste guia independente e informações que podem mudar." },
    "seo-articles": { label: "Artigos de pesquisa", description: "Leia guias datados sobre spreadsheets, fotos QC, volumes, custos e devoluções." },
  },
  nl: {
    categories: { label: "Productcategorieën", description: "Verken tien productroutes en houd bron, selectie en actuele vermeldingsgegevens samen." },
    "product-details": { label: "Productdetails", description: "Lees welke zichtbare gegevens u vergelijkt voordat u een actieve productvermelding opent." },
    "how-it-works": { label: "Hoe het werkt", description: "Volg een praktische volgorde van bron tot magazijncontrole en een offerte voor het echte pakket." },
    shipping: { label: "Verzendcontroles", description: "Vergelijk verpakt gewicht, afmetingen, inhoud en bestemmingsbeperkingen in plaats van een vaste schatting." },
    faq: { label: "Veelgestelde vragen", description: "Lees duidelijke grenzen van deze onafhankelijke gids en informatie die kan veranderen." },
    "seo-articles": { label: "Onderzoeksartikelen", description: "Lees gedateerde gidsen over spreadsheets, QC-foto’s, pakketten, kosten en retouren." },
  },
  pl: {
    categories: { label: "Kategorie produktów", description: "Przeglądaj dziesięć ścieżek produktów i zachowuj źródło, wybór oraz aktualne dane oferty." },
    "product-details": { label: "Szczegóły produktu", description: "Sprawdź, które widoczne dane porównać przed otwarciem aktywnej karty w głównej bazie." },
    "how-it-works": { label: "Jak to działa", description: "Postępuj praktycznie: źródło, kontrola magazynowa i wycena rzeczywistej paczki." },
    shipping: { label: "Kontrole wysyłki", description: "Porównuj zapakowaną wagę, wymiary, zawartość i ograniczenia kraju zamiast stałej wyceny." },
    faq: { label: "Najczęstsze pytania", description: "Poznaj jasne granice niezależnego przewodnika i informacje, które mogą się zmieniać." },
    "seo-articles": { label: "Artykuły badawcze", description: "Czytaj datowane przewodniki o spreadsheetach, zdjęciach QC, paczkach, kosztach i zwrotach." },
  },
  sv: {
    categories: { label: "Produktkategorier", description: "Utforska tio produktvägar och behåll källa, val och aktuella listningsuppgifter tillsammans." },
    "product-details": { label: "Produktdetaljer", description: "Lär dig vilka synliga uppgifter som bör jämföras innan du öppnar en aktiv produktpost." },
    "how-it-works": { label: "Så fungerar det", description: "Följ en praktisk ordning från källa till lagerkontroll och offert för det verkliga paketet." },
    shipping: { label: "Fraktkontroller", description: "Jämför packad vikt, mått, innehåll och destinationsbegränsningar i stället för en fast uppskattning." },
    faq: { label: "Vanliga frågor", description: "Läs tydliga gränser för den oberoende guiden och information som kan förändras." },
    "seo-articles": { label: "Forskningsartiklar", description: "Läs daterade guider om spreadsheets, QC-bilder, paket, kostnader och returer." },
  },
};

function localizedPath(locale: RouteLocale, section?: RouteSection) {
  const prefix = `/${locale}`;
  return section ? `${prefix}/${section}/` : `${prefix}/`;
}

export function getHomeMetadata(locale: RouteLocale): Metadata {
  return {
    ...localeMetadata[locale],
    alternates: {
      canonical: localizedPath(locale),
      languages: Object.fromEntries(routeLocales.map(code => [code, localizedPath(code)])),
    },
  };
}

export function getSectionMetadata(locale: RouteLocale, section: RouteSection): Metadata {
  const entry = sectionMeta[locale][section];
  return {
    title: `${entry.label} | LoloBuy Guide`,
    description: entry.description,
    alternates: {
      canonical: localizedPath(locale, section),
      languages: Object.fromEntries(routeLocales.map(code => [code, localizedPath(code, section)])),
    },
  };
}

export function getSectionSchema(locale: RouteLocale, section: RouteSection) {
  const entry = sectionMeta[locale][section];
  const path = localizedPath(locale, section);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: entry.label,
    description: entry.description,
    url: `https://lolobuy.fr${path}`,
    inLanguage: locale,
    isPartOf: { "@type": "WebSite", name: "LoloBuy France — Independent Spreadsheet Guide", url: "https://lolobuy.fr/" },
    about: { "@type": "Thing", name: "Independent LoloBuy spreadsheet guide" },
  };
}
