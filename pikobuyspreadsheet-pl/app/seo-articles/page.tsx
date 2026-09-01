import type { Metadata } from "next";
import { guides } from "../content";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { indexableRobots, pageAlternates } from "../seo";

export const metadata: Metadata = { title: "PikoBuy SEO Articles & Guides | Spreadsheet Europe", description: "Evidence-led PikoBuy guides covering fees, seller checks, QC photos, European shipping, EU customs, tracking delays and returns.", robots: indexableRobots, alternates: pageAlternates("/seo-articles") };

export default function SeoArticlesPage() {
  return <main className="listing-page">
    <div className="preview-bar">Independent research hub · 2026</div><SiteHeader />
    <section className="listing-hero shell"><p className="eyebrow"><span /> SEO article library</p><h1>Useful answers, each on its own page.</h1><p>Every article targets a specific search intent, distinguishes verified facts from editorial guidance, and links to its source record.</p></section>
    <section className="section shell"><div className="article-index-grid">{guides.map((guide, index) => <a className={`guide-card guide-${index + 1}`} href={`/${guide.slug}`} key={guide.slug}><p>{guide.eyebrow} · {guide.readTime}</p><h2>{guide.title}</h2><span>{guide.description}</span><strong>Read independent article ↗</strong></a>)}</div></section>
    <SiteFooter />
  </main>;
}
