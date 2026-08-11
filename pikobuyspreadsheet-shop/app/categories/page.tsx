import type { CSSProperties } from "react";
import { ContentLayout, PageSearchParams } from "../content-layout";
import { categoryGuides } from "../category-guide";
import { normalizeLanguage } from "../i18n";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "PikoBuy Product Category Guides: Shoes, Hoodies & More",
  description: "Use independent PikoBuy category guides for shoes, hoodies, jerseys, accessories and electronics before reviewing warehouse QC and shipping.",
  path: "/categories",
});

export default async function CategoriesPage({ searchParams }: PageSearchParams) {
  const language = normalizeLanguage((await searchParams).lang);
  const guides = Object.values(categoryGuides);
  return <ContentLayout language={language} pathname="/categories" kicker="CATEGORY RESEARCH / FIVE STARTING POINTS" title="Choose the product risk before you choose the product." intro="These category pages add independent value between a spreadsheet row and the main database: listing checks, warehouse-photo priorities, return safeguards and parcel context." tone="blue">
    <section className="content-section"><div className="guide-index-grid category-index-grid">{guides.map((guide, index) => <a href={`/categories/${guide.slug}`} key={guide.slug} style={{ "--card-color": ["#f8ff70", "#ff9fc3", "#79e8ff"][index % 3] } as CSSProperties}><span>{String(index + 1).padStart(2, "0")}</span><b>{guide.label.slice(0, 2)}</b><h2>{guide.label}</h2><p>{guide.intro}</p><strong>Open independent QC guide ↗</strong></a>)}</div></section>
  </ContentLayout>;
}
