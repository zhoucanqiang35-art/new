import type { Metadata } from "next";

export const SITE_URL = "https://lolobuysheet.es";
export const SITE_NAME = "LoloBuy Sheet";

export const allLocales = [
  "en", "es", "de", "fr", "it", "pt", "nl", "pl", "sv", "da", "no", "fi",
  "cs", "ro", "hu", "el", "uk", "tr", "ru", "bg", "ja", "ko", "ar", "zh",
] as const;

export type SiteLocale = (typeof allLocales)[number];

// Homepage copy is complete in all 24 languages, so each locale can use its own
// canonical URL and participate in hreflang. Other route families keep their
// own, narrower translated-locale lists until their body copy is complete.
export const translatedHomeLocales = allLocales;
export const translatedFaqLocales = ["en", "es", "de", "zh"] as const;

const homeCopy: Record<string, { title: string; description: string }> = {
  en: {
    title: "LoloBuy Spreadsheet 2026 | Finds, QC Notes, Guides, and Categories",
    description: "Explore the LoloBuy spreadsheet through category pages, QC notes, source-link context, and practical guides for ordering, shipping, and better shopping decisions in 2026.",
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
  sv: {
    title: "LoloBuy-kalkylblad 2026 — Fynd, QC och fraktguider",
    description: "Bläddra i LoloBuy-fynd efter kategori och använd tydliga QC-, beställnings- och fraktguider inför nästa steg.",
  },
  da: {
    title: "LoloBuy-regneark 2026 — Fund, QC og fragtguides",
    description: "Gennemse LoloBuy-fund efter kategori og brug klare guider til QC, bestilling og international fragt.",
  },
  no: {
    title: "LoloBuy-regneark 2026 — Funn, QC og fraktguider",
    description: "Bla gjennom LoloBuy-funn etter kategori og bruk tydelige guider til QC, bestilling og internasjonal frakt.",
  },
  fi: {
    title: "LoloBuy-taulukko 2026 — Löydöt, QC ja toimitusoppaat",
    description: "Selaa LoloBuy-tuotteita kategorioittain ja käytä selkeitä QC-, tilaus- ja toimitusoppaita.",
  },
  cs: {
    title: "Přehled LoloBuy 2026 — Produkty, QC a doprava",
    description: "Procházejte produkty LoloBuy podle kategorií a využijte jasné průvodce QC, objednávkou a dopravou.",
  },
  ro: {
    title: "Tabel LoloBuy 2026 — Produse, QC și transport",
    description: "Explorează produse LoloBuy pe categorii și folosește ghiduri clare pentru QC, comandă și transport internațional.",
  },
  hu: {
    title: "LoloBuy táblázat 2026 — Termékek, QC és szállítás",
    description: "Böngéssz LoloBuy-termékeket kategória szerint, és használj egyértelmű QC-, rendelési és szállítási útmutatókat.",
  },
  el: {
    title: "Πίνακας LoloBuy 2026 — Προϊόντα, QC και αποστολή",
    description: "Περιηγηθείτε σε προϊόντα LoloBuy ανά κατηγορία με σαφείς οδηγούς QC, παραγγελίας και διεθνούς αποστολής.",
  },
  uk: {
    title: "Таблиця LoloBuy 2026 — Товари, QC і доставка",
    description: "Переглядайте товари LoloBuy за категоріями та використовуйте чіткі посібники з QC, замовлення й доставки.",
  },
  tr: {
    title: "LoloBuy tablosu 2026 — Ürünler, QC ve kargo",
    description: "LoloBuy ürünlerini kategoriye göre inceleyin; QC, sipariş ve uluslararası kargo rehberlerini kullanın.",
  },
  ru: {
    title: "Таблица LoloBuy 2026 — Товары, QC и доставка",
    description: "Просматривайте товары LoloBuy по категориям и используйте понятные руководства по QC, заказу и доставке.",
  },
  bg: {
    title: "Таблица LoloBuy 2026 — Продукти, QC и доставка",
    description: "Разглеждайте продукти LoloBuy по категории и използвайте ясни ръководства за QC, поръчка и доставка.",
  },
  ja: {
    title: "LoloBuy商品表 2026 — 商品、QC、配送ガイド",
    description: "カテゴリー別にLoloBuy商品を探し、QC、注文、国際配送の分かりやすいガイドを確認できます。",
  },
  ko: {
    title: "LoloBuy 상품표 2026 — 상품, QC, 배송 가이드",
    description: "카테고리별 LoloBuy 상품과 QC, 주문, 국제 배송을 위한 명확한 가이드를 확인하세요.",
  },
  ar: {
    title: "جدول LoloBuy 2026 — المنتجات وQC والشحن",
    description: "تصفح منتجات LoloBuy حسب الفئة واستخدم أدلة واضحة لفحص QC والطلب والشحن الدولي.",
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
