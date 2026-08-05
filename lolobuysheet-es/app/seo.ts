import type { Metadata } from "next";

export const SITE_URL = "https://lolobuysheet.es";
export const SITE_NAME = "LoloBuy Sheet";

export const allLocales = [
  "en", "es", "de", "fr", "it", "pt", "nl", "pl", "sv", "da", "no", "fi",
  "cs", "ro", "hu", "el", "uk", "tr", "ru", "bg", "ja", "ko", "ar", "zh",
] as const;

export type SiteLocale = (typeof allLocales)[number];

// Only genuinely translated routes are exposed to search engines. Every one of
// the 24 routes remains available to visitors; incomplete translations are kept
// out of the index until their full body copy is localized.
export const translatedHomeLocales = ["en", "es", "de", "fr", "it", "pt", "nl", "pl", "zh"] as const;
export const translatedFaqLocales = ["en", "es", "de", "zh"] as const;

const homeCopy: Record<string, { title: string; description: string }> = {
  en: {
    title: "LoloBuy Spreadsheet 2026 — Finds, QC & Shipping Guides",
    description: "Independent LoloBuy spreadsheet, product discovery, QC checklists and practical shipping guides for shoppers in Europe and North America.",
  },
  es: {
    title: "Hoja de cálculo LoloBuy 2026 — Productos, QC y envíos",
    description: "Hoja de cálculo LoloBuy independiente con productos seleccionados, listas de control QC y guías prácticas de envío para Europa y Norteamérica.",
  },
  de: {
    title: "LoloBuy Spreadsheet 2026 — Produkte, QC und Versand",
    description: "Unabhängiges LoloBuy-Spreadsheet mit Produktsuche, QC-Checklisten und praktischen Versandratgebern für Europa und Nordamerika.",
  },
  fr: {
    title: "Tableau LoloBuy 2026 — Produits, QC et livraison",
    description: "Tableau LoloBuy indépendant avec sélection de produits, listes QC et guides pratiques de livraison pour l’Europe et l’Amérique du Nord.",
  },
  it: {
    title: "Foglio LoloBuy 2026 — Prodotti, QC e spedizioni",
    description: "Foglio LoloBuy indipendente con ricerca prodotti, checklist QC e guide pratiche alle spedizioni per Europa e Nord America.",
  },
  pt: {
    title: "Planilha LoloBuy 2026 — Produtos, QC e envio",
    description: "Planilha LoloBuy independente com produtos selecionados, checklists QC e guias práticos de envio para Europa e América do Norte.",
  },
  nl: {
    title: "LoloBuy Spreadsheet 2026 — Producten, QC en verzending",
    description: "Onafhankelijke LoloBuy-spreadsheet met productonderzoek, QC-checklists en praktische verzendgidsen voor Europa en Noord-Amerika.",
  },
  pl: {
    title: "Arkusz LoloBuy 2026 — Produkty, QC i wysyłka",
    description: "Niezależny arkusz LoloBuy z wybranymi produktami, listami kontroli QC i praktycznymi poradnikami wysyłkowymi dla Europy i Ameryki Północnej.",
  },
  zh: {
    title: "LoloBuy 商品表 2026 — 选品、QC 与运输指南",
    description: "独立 LoloBuy 商品表，包含商品发现、QC 检查清单及面向欧洲和北美买家的实用运输指南。",
  },
};

function cleanPath(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return "/";
  return normalized.replace(/\/+$/, "");
}

export function localizedUrl(locale: string, path = "/") {
  const normalized = cleanPath(path);
  return locale === "en"
    ? `${SITE_URL}${normalized}`
    : `${SITE_URL}/${locale}${normalized}`;
}

export function localizedAlternates(path: string, locales: readonly string[]) {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, localizedUrl(locale, path)])),
    "x-default": localizedUrl("en", path),
  };
}

export function homeMetadata(locale = "en"): Metadata {
  const copy = homeCopy[locale] ?? homeCopy.en;
  const indexable = (translatedHomeLocales as readonly string[]).includes(locale);
  const canonical = indexable ? localizedUrl(locale, "/") : localizedUrl("en", "/");

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    canonical,
    path: "/",
    locale,
    alternateLocales: translatedHomeLocales,
    indexable,
  });
}

export function buildMetadata({
  title,
  description,
  canonical,
  path,
  locale = "en",
  alternateLocales = ["en"],
  indexable = true,
  type = "website",
}: {
  title: string;
  description: string;
  canonical?: string;
  path: string;
  locale?: string;
  alternateLocales?: readonly string[];
  indexable?: boolean;
  type?: "website" | "article";
}): Metadata {
  const canonicalUrl = canonical ?? localizedUrl(locale, path);
  const socialImage = `${SITE_URL}/lolobuy.webp`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: localizedAlternates(path, alternateLocales),
    },
    robots: indexable
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
    openGraph: {
      type,
      url: canonicalUrl,
      siteName: SITE_NAME,
      title,
      description,
      locale,
      images: [{ url: socialImage, width: 200, height: 200, alt: "LoloBuy Sheet logo" }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [socialImage],
    },
  };
}
