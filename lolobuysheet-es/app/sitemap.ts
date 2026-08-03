import type { MetadataRoute } from "next";
import { buyerGuides } from "./guide-data";
import { products } from "./product-data";
import { seoArticles } from "./seo-content";
import { siteLanguages } from "./site-shell";
import { officialUpdates } from "./update-data";

export const dynamic = "force-static";

const SITE_URL = "https://lolobuysheet.es";
const DEFAULT_LAST_MODIFIED = "2026-07-31";

type PageDefinition = {
  path: string;
  lastModified: string;
};

const sectionPaths = [
  "/spreadsheet",
  "/categories",
  "/guides",
  "/seo-articles",
  "/updates",
  "/faq",
];

const pageDefinitions: PageDefinition[] = [
  { path: "", lastModified: DEFAULT_LAST_MODIFIED },
  ...sectionPaths.map((path) => ({ path, lastModified: DEFAULT_LAST_MODIFIED })),
  ...products.map((product) => ({
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

const locales = siteLanguages.map(([code]) => code.toLowerCase());

function localizedUrl(locale: string, path: string) {
  if (locale === "en") return `${SITE_URL}${path || "/"}`;
  return `${SITE_URL}/${locale}${path || "/"}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pageDefinitions.flatMap(({ path, lastModified }) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, localizedUrl(locale, path)]),
    );

    languages["x-default"] = localizedUrl("en", path);

    return locales.map((locale) => ({
      url: localizedUrl(locale, path),
      lastModified: new Date(lastModified),
      alternates: { languages },
    }));
  });
}
