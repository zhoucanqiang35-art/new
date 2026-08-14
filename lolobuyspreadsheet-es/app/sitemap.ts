import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://lolobuyspreadsheet.es";
const lastMaterialUpdate = "2026-08-13";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/categories/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/guides/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/guides/lolobuy-link-ordering/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/guides/lolobuy-parcel-submission/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/guides/lolobuy-warehouse-workflow/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/guides/qc-photo-checklist/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/guides/shipping-cost-and-weight/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/shipping/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/shipping/lolobuy-customs-declaration-tax/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/shipping/lolobuy-delivery-lines/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/shipping/lolobuy-rehearsal-packing/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/shipping/lolobuy-shipping-estimator/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/shipping/lolobuy-tracking-exceptions/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/seo-articles/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/seo-articles/how-to-check-lolobuy-product-links/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/seo-articles/lolobuy-qc-photo-guide/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/seo-articles/what-is-a-lolobuy-spreadsheet/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sources/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sources/findspreadsheet-database-evidence/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sources/lolobuy-official-evidence/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sources/product-freshness/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/method/", changeFrequency: "yearly", priority: 0.6 },
  { path: "/editorial-policy/", changeFrequency: "yearly", priority: 0.5 },
  { path: "/privacy/", changeFrequency: "yearly", priority: 0.4 },
  { path: "/updates/", changeFrequency: "weekly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastMaterialUpdate,
    changeFrequency,
    priority,
  }));
}
