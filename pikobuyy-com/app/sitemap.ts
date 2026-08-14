import type { MetadataRoute } from "next";
import { rankingSlugs } from "./ranking-content";
import { productSlugs } from "./site-content";

export const dynamic = "force-static";

// Editorial content last verified: 2026-08-14.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-30");
  const contentModified = new Date("2026-08-14");
  const sections = ["categories", "guides", "articles", "updates", "faq"];
  const locales = ["de", "fr", "es", "it", "pl", "nl", "pt"];
  const detailPages = {
    guides: ["beginner-research-workflow", "qc-photo-checklist", "shipping-cost-planning", "product-link-verification"],
    articles: ["what-is-a-pikobuy-spreadsheet", "how-to-use-pikobuy-spreadsheet-2026", "pikobuy-qc-photo-guide", "pikobuy-shipping-cost", "pikobuy-payment-guide", "pikobuy-warehouse-consolidation-guide", "pikobuy-return-policy-guide", "pikobuy-tracking-guide", "pikobuy-customs-taxes-guide", "pikobuy-restricted-items-guide"],
    updates: ["category-structure-refreshed", "current-link-checks-clarified", "qc-guide-expanded", "language-pages-introduced"],
    faq: ["what-is-a-pikobuy-spreadsheet", "does-pikobuyy-sell-products", "how-to-use-qc-photos", "what-affects-shipping-cost", "how-often-links-change", "where-the-live-directory-opens"],
  };
  const urls = [
    {
      url: "https://pikobuyy.com/",
      lastModified: contentModified,
      changeFrequency: "daily",
      priority: 1,
    },
  ];
  for (const slug of rankingSlugs) {
    urls.push({
      url: `https://pikobuyy.com/${slug}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: slug === "pikobuy-spreadsheet" ? 0.95 : 0.82,
    });
  }
  for (const section of sections) {
    urls.push({
      url: `https://pikobuyy.com/${section}/`,
      lastModified: section === "articles" ? contentModified : lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }
  for (const product of productSlugs) {
    urls.push({ url: `https://pikobuyy.com/products/${product}/`, lastModified, changeFrequency: "weekly", priority: 0.8 });
  }
  for (const [section, slugs] of Object.entries(detailPages)) {
    for (const slug of slugs) {
      const pageModified = slug === "pikobuy-restricted-items-guide"
        ? contentModified
        : slug === "pikobuy-customs-taxes-guide"
          ? new Date("2026-08-12")
        : slug === "pikobuy-tracking-guide"
          ? new Date("2026-08-10")
        : ["pikobuy-return-policy-guide", "pikobuy-warehouse-consolidation-guide", "pikobuy-payment-guide"].includes(slug)
          ? new Date("2026-08-06")
          : lastModified;
      urls.push({ url: `https://pikobuyy.com/${section}/${slug}/`, lastModified: pageModified, changeFrequency: "monthly", priority: 0.75 });
    }
  }
  for (const locale of locales) {
    urls.push({
      url: `https://pikobuyy.com/${locale}/`,
      lastModified: contentModified,
      changeFrequency: "weekly",
      priority: 0.9,
    });
    for (const section of sections) {
      urls.push({
        url: `https://pikobuyy.com/${locale}/${section}/`,
        lastModified: section === "articles" ? contentModified : lastModified,
        changeFrequency: "weekly",
        priority: 0.75,
      });
    }
    for (const product of productSlugs) {
      urls.push({ url: `https://pikobuyy.com/${locale}/products/${product}/`, lastModified, changeFrequency: "weekly", priority: 0.7 });
    }
    for (const [section, slugs] of Object.entries(detailPages)) {
      for (const slug of slugs) {
        const pageModified = slug === "pikobuy-restricted-items-guide"
          ? contentModified
          : slug === "pikobuy-customs-taxes-guide"
            ? new Date("2026-08-12")
          : slug === "pikobuy-tracking-guide"
            ? new Date("2026-08-10")
          : ["pikobuy-return-policy-guide", "pikobuy-warehouse-consolidation-guide", "pikobuy-payment-guide"].includes(slug)
            ? new Date("2026-08-06")
            : lastModified;
        urls.push({ url: `https://pikobuyy.com/${locale}/${section}/${slug}/`, lastModified: pageModified, changeFrequency: "monthly", priority: 0.65 });
      }
    }
  }
  return urls as MetadataRoute.Sitemap;
}
