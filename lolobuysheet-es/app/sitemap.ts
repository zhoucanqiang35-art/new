import type { MetadataRoute } from "next";
import { buyerGuides } from "./guide-data";
import { allProducts } from "./product-data";
import { seoArticles } from "./seo-content";
import { localizedAlternates, localizedUrl, translatedFaqLocales, translatedHomeLocales } from "./seo";
import { officialUpdates } from "./update-data";

export const dynamic = "force-static";

const DEFAULT_LAST_MODIFIED = "2026-08-05";

type PageDefinition = {
  path: string;
  lastModified: string;
  alternateLocales?: readonly string[];
};

const sectionPaths = [
  "/spreadsheet",
  "/categories",
  "/guides",
  "/seo-articles",
  "/updates",
];

const pageDefinitions: PageDefinition[] = [
  { path: "", lastModified: DEFAULT_LAST_MODIFIED, alternateLocales: translatedHomeLocales },
  ...sectionPaths.map((path) => ({ path, lastModified: DEFAULT_LAST_MODIFIED })),
  { path: "/faq", lastModified: DEFAULT_LAST_MODIFIED, alternateLocales: translatedFaqLocales },
  { path: "/about", lastModified: DEFAULT_LAST_MODIFIED },
  { path: "/editorial-methodology", lastModified: DEFAULT_LAST_MODIFIED },
  { path: "/contact", lastModified: DEFAULT_LAST_MODIFIED },
  { path: "/privacy", lastModified: DEFAULT_LAST_MODIFIED },
  { path: "/affiliate-disclosure", lastModified: DEFAULT_LAST_MODIFIED },
  ...allProducts.map((product) => ({
    path: `/products/${product.slug}`,
    lastModified: "2026-07-30",
  })),
  ...buyerGuides.map((guide) => ({
    path: `/guides/${guide.slug}`,
    lastModified: guide.verified,
  })),
  ...seoArticles.map((article) => ({
    path: `/seo-articles/${article.slug}`,
    lastModified: article.verified,
  })),
  ...officialUpdates.map((update) => ({
    path: `/updates/${update.slug}`,
    lastModified: update.date,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const englishPages = pageDefinitions.map(({ path, lastModified, alternateLocales = ["en"] }) => ({
    url: localizedUrl("en", path || "/"),
    lastModified: new Date(lastModified),
    alternates: { languages: localizedAlternates(path || "/", alternateLocales) },
  }));

  const translatedHomes = translatedHomeLocales
    .filter((locale) => locale !== "en")
    .map((locale) => ({
      url: localizedUrl(locale, "/"),
      lastModified: new Date(DEFAULT_LAST_MODIFIED),
      alternates: { languages: localizedAlternates("/", translatedHomeLocales) },
    }));

  const translatedFaqs = translatedFaqLocales
    .filter((locale) => locale !== "en")
    .map((locale) => ({
      url: localizedUrl(locale, "/faq"),
      lastModified: new Date(DEFAULT_LAST_MODIFIED),
      alternates: { languages: localizedAlternates("/faq", translatedFaqLocales) },
    }));

  return [...englishPages, ...translatedHomes, ...translatedFaqs];
}
