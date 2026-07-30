import type { MetadataRoute } from "next";
import { productSlugs } from "./site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = ["categories", "guides", "articles", "updates", "faq"];
  const locales = ["de", "fr", "es", "it", "pl", "nl", "pt"];
  const detailPages = {
    guides: ["beginner-research-workflow", "qc-photo-checklist", "shipping-cost-planning", "product-link-verification"],
    articles: ["what-is-a-pikobuy-spreadsheet", "how-to-use-pikobuy-spreadsheet-2026", "pikobuy-qc-photo-guide", "pikobuy-shipping-cost"],
    updates: ["category-structure-refreshed", "current-link-checks-clarified", "qc-guide-expanded", "language-pages-introduced"],
    faq: ["what-is-a-pikobuy-spreadsheet", "does-pikobuyy-sell-products", "how-to-use-qc-photos", "what-affects-shipping-cost", "how-often-links-change", "where-the-live-directory-opens"],
  };
  const urls = [
    {
      url: "https://pikobuyy.com/",
      lastModified: new Date("2026-07-29"),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
  for (const section of sections) {
    urls.push({
      url: `https://pikobuyy.com/${section}`,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }
  for (const product of productSlugs) {
    urls.push({ url: `https://pikobuyy.com/products/${product}`, lastModified: new Date("2026-07-29"), changeFrequency: "weekly", priority: 0.8 });
  }
  for (const [section, slugs] of Object.entries(detailPages)) {
    for (const slug of slugs) {
      urls.push({ url: `https://pikobuyy.com/${section}/${slug}`, lastModified: new Date("2026-07-29"), changeFrequency: "monthly", priority: 0.75 });
    }
  }
  for (const locale of locales) {
    urls.push({
      url: `https://pikobuyy.com/${locale}`,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "weekly",
      priority: 0.9,
    });
    for (const section of sections) {
      urls.push({
        url: `https://pikobuyy.com/${locale}/${section}`,
        lastModified: new Date("2026-07-29"),
        changeFrequency: "weekly",
        priority: 0.75,
      });
    }
    for (const product of productSlugs) {
      urls.push({ url: `https://pikobuyy.com/${locale}/products/${product}`, lastModified: new Date("2026-07-29"), changeFrequency: "weekly", priority: 0.7 });
    }
    for (const [section, slugs] of Object.entries(detailPages)) {
      for (const slug of slugs) {
        urls.push({ url: `https://pikobuyy.com/${locale}/${section}/${slug}`, lastModified: new Date("2026-07-29"), changeFrequency: "monthly", priority: 0.65 });
      }
    }
  }
  return urls as MetadataRoute.Sitemap;
}
