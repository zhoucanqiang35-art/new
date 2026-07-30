import type { Metadata } from "next";
import {
  languages,
  localeCopy,
  sectionItemSlugs,
  sectionItemTitles,
  type Locale,
  type Section,
} from "./site-content";

export const SITE_ORIGIN = "https://pikobuyy.com";
export const SITE_NAME = "Pikobuyy";
export const LAST_FACT_CHECK = "2026-07-30";

function absolutePath(path: string) {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}/`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function localizedPath(locale: Locale, path = "") {
  const normalized = path.replace(/^\/|\/$/g, "");
  if (locale === "en") return normalized ? `/${normalized}/` : "/";
  return normalized ? `/${locale}/${normalized}/` : `/${locale}/`;
}

export function languageAlternates(path = "") {
  return Object.fromEntries([
    ...languages.map(({ code }) => [
      code,
      absolutePath(localizedPath(code, path)),
    ]),
    ["x-default", absolutePath(localizedPath("en", path))],
  ]);
}

export function buildMetadata({
  title,
  description,
  path,
  locale = "en",
  translatedPath = path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  translatedPath?: string | null;
  type?: "website" | "article";
}): Metadata {
  const canonicalPath = localizedPath(locale, path);
  const canonical = absolutePath(canonicalPath);
  const languages =
    translatedPath === null ? undefined : languageAlternates(translatedPath);

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale,
      type,
      ...(type === "article"
        ? {
            publishedTime: `${LAST_FACT_CHECK}T00:00:00.000Z`,
            modifiedTime: `${LAST_FACT_CHECK}T00:00:00.000Z`,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      "content-language": locale,
    },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const copy = localeCopy[locale];
  const titles: Record<Locale, string> = {
    en: "Pikobuyy Finds 2026 — Product Research, QC & Shipping Guides",
    de: "Pikobuyy Funde 2026 — Produktrecherche, QC & Versand",
    fr: "Trouvailles Pikobuyy 2026 — Recherche, QC et livraison",
    es: "Hallazgos Pikobuyy 2026 — Productos, QC y envío",
    it: "Prodotti Pikobuyy 2026 — Ricerca, QC e spedizione",
    pl: "Pikobuyy 2026 — Produkty, QC i wysyłka",
    nl: "Pikobuyy vondsten 2026 — Producten, QC en verzending",
    pt: "Descobertas Pikobuyy 2026 — Produtos, QC e envio",
  };
  return buildMetadata({
    title: titles[locale],
    description: copy.intro,
    path: "",
    locale,
    translatedPath: "",
  });
}

export function sectionMetadata(locale: Locale, section: Section): Metadata {
  const copy = localeCopy[locale];
  return buildMetadata({
    title: `${copy.cards[section].title} | Pikobuyy`,
    description: copy.cards[section].text,
    path: section,
    locale,
    translatedPath: section,
  });
}

export function detailMetadata(
  locale: Locale,
  section: Exclude<Section, "categories">,
  slug: string,
  description: string,
): Metadata {
  const slugIndex = sectionItemSlugs[section].indexOf(slug);
  const title =
    sectionItemTitles[locale][section][slugIndex] ??
    slug.replaceAll("-", " ");

  return buildMetadata({
    title: `${title} | Pikobuyy`,
    description,
    path: `${section}/${slug}`,
    locale,
    translatedPath: `${section}/${slug}`,
    type: section === "updates" ? "website" : "article",
  });
}

export function productMetadata(
  locale: Locale,
  product: { slug: string; name: string; note: string },
): Metadata {
  return buildMetadata({
    title: `${product.name} — Pikobuyy Product Review`,
    description: product.note,
    path: `products/${product.slug}`,
    locale,
    translatedPath: `products/${product.slug}`,
  });
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolutePath(item.path),
    })),
  };
}

export function absoluteUrl(path: string) {
  return absolutePath(path);
}
