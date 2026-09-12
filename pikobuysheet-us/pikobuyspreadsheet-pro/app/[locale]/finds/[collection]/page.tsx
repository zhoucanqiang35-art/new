import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageFrame from "../../../components/PageFrame";
import { getCollectionProducts, getFindCollection } from "../../../../lib/finds-data";
import { getLocale } from "../../../../lib/site-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; collection: string }> }): Promise<Metadata> {
  const { locale: code, collection: slug } = await params;
  const collection = getFindCollection(slug);
  if (code !== "en" || !collection) return {};
  return { title: `${collection.title} | PikoBuy Spreadsheet`, description: collection.description, robots: { index: true, follow: true }, alternates: { canonical: `/en/finds/${slug}`, languages: { en: `/en/finds/${slug}`, "x-default": `/en/finds/${slug}` } } };
}

export default async function FindCollectionPage({ params }: { params: Promise<{ locale: string; collection: string }> }) {
  const { locale: code, collection: slug } = await params;
  const locale = getLocale(code);
  const collection = getFindCollection(slug);
  if (!locale || code !== "en" || !collection) notFound();
  const products = getCollectionProducts(collection);
  const base = "https://pikobuyspreadsheet.pro";
  const canonical = `${base}/en/finds/${slug}`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${canonical}#page`, url: canonical, name: collection.title, description: collection.description, inLanguage: "en", mainEntity: { "@id": `${canonical}#items` } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${base}/en` }, { "@type": "ListItem", position: 2, name: "Finds", item: `${base}/en/finds` }, { "@type": "ListItem", position: 3, name: collection.title, item: canonical }] },
    { "@type": "ItemList", "@id": `${canonical}#items`, numberOfItems: products.length, itemListElement: products.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, url: `${base}/en/product-details/${item.slug}` })) },
  ] };
  return <PageFrame locale={locale} currentSlug="product-details"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><article className="detail-article v3-wrap"><nav className="article-breadcrumb" aria-label="Breadcrumb"><a href="/en">Home</a><span>→</span><a href="/en/finds">Finds</a><span>→</span><span aria-current="page">{collection.title}</span></nav><p className="detail-kicker">PROGRAMMATIC SEO · VERIFIED FILTER</p><h1>{collection.title}</h1><p className="detail-deck">{collection.intro}</p><div className="collection-criteria"><small>INCLUSION RULES</small>{collection.criteria.map((criterion, index) => <div key={criterion}><span>{String(index + 1).padStart(2, "0")}</span><p>{criterion}</p></div>)}</div></article><section className="product-record-grid v3-wrap">{products.map((item) => <a href={`/en/product-details/${item.slug}`} key={item.slug}><div className="product-record-art"><img src={item.image} alt={item.name} loading="lazy" decoding="async" width="750" height="750"/><span>{item.category}</span></div><small>{item.observed}</small><h2>{item.name}</h2><p>{item.summary}</p><div><b>{item.recordedPrice}</b><span>Review record →</span></div></a>)}</section></PageFrame>;
}
