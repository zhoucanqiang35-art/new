import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://lolobuyspreadsheet-pl.pages.dev";
const languages = ["de", "fr", "es", "it", "nl", "pl", "pt", "sv"] as const;
const sections = [
  "products",
  "product-details",
  "how-it-works",
  "qc-checklist",
  "guides",
  "faq",
  "articles",
] as const;
const articleSlugs = [
  "how-lolobuy-works",
  "lolobuy-qc-photo-checklist",
  "lolobuy-shipping-guide",
] as const;

function entry(path: string, priority: number): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-08-27"),
    changeFrequency: "weekly",
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    entry("/", 1),
    ...sections.map((section) => entry(`/${section}/`, section === "articles" ? 0.9 : 0.8)),
    ...articleSlugs.map((slug) => entry(`/articles/${slug}/`, 0.85)),
  ];

  for (const language of languages) {
    pages.push(entry(`/${language}/`, 0.9));
    pages.push(...sections.map((section) => entry(`/${language}/${section}/`, 0.75)));
    pages.push(...articleSlugs.map((slug) => entry(`/${language}/articles/${slug}/`, 0.8)));
  }

  return pages;
}
