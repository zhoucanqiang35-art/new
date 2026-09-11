import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageFrame from "../../components/PageFrame";
import { findCollections } from "../../../lib/finds-data";
import { getLocale } from "../../../lib/site-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: code } = await params;
  if (code !== "en") return {};
  return {
    title: "Best PikoBuy Finds 2026 | Budget, Summer & QC Collections",
    description: "Browse focused PikoBuy finds collections built from recorded prices, product categories and practical warehouse QC checks.",
    robots: { index: true, follow: true },
    alternates: { canonical: "/en/finds", languages: { en: "/en/finds", "x-default": "/en/finds" } },
  };
}

export default async function FindsIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: code } = await params;
  const locale = getLocale(code);
  if (!locale || code !== "en") notFound();
  const base = "https://pikobuyspreadsheet.pro";
  const canonical = `${base}/en/finds`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${canonical}#page`, url: canonical, name: "PikoBuy Finds Collections", description: "Focused collections created from recorded product attributes and research checks.", inLanguage: "en", mainEntity: { "@id": `${canonical}#list` } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${base}/en` }, { "@type": "ListItem", position: 2, name: "Finds", item: canonical }] },
    { "@type": "ItemList", "@id": `${canonical}#list`, numberOfItems: findCollections.length, itemListElement: findCollections.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `${canonical}/${item.slug}` })) },
  ] };
  return <PageFrame locale={locale} currentSlug="product-details"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><section className="directory-hero v3-wrap"><span>CURATED SEARCH INTENT</span><h1>PikoBuy finds collections</h1><p>Focused landing pages group recorded products by a clear, reproducible rule. They do not invent popularity, sales, testing or seller-quality claims.</p></section><section className="seo-card-grid v3-wrap">{findCollections.map((item, index) => <a href={`/en/finds/${item.slug}`} key={item.slug}><span>{String(index + 1).padStart(2, "0")}</span><small>{item.primaryKeyword.toUpperCase()}</small><h2>{item.title}</h2><p>{item.description}</p><b>Open collection →</b></a>)}</section></PageFrame>;
}
