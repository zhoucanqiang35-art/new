import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/site-header";
import { MainLink } from "../../components/main-link";
import { productBySlug, searchUrl } from "../../lib/catalog";
import { products } from "../../lib/catalog";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = productBySlug(slug);
  if (!category) notFound();
  return <main><SiteHeader /><section className="category-detail-page"><div className="category-detail-copy"><p className="eyebrow">PRODUCT DETAILS</p><h1><span className="notranslate" translate="no">{category.name}</span></h1><p>{category.summary} This dedicated category page keeps the product details on the left. When you are ready to compare live listings, use the matching button on the right.</p><dl><div><dt>Category</dt><dd><span className="notranslate" translate="no">{category.name}</span></dd></div><div><dt>Live search term</dt><dd>{category.search}</dd></div></dl></div><aside className="category-result-panel"><div className={`product-art art-${category.tone}`} aria-hidden="true"><span>{category.icon}</span></div><p className="eyebrow">LIVE PRODUCT RESULTS</p><p>Open the current <span className="notranslate" translate="no">{category.name}</span> results on FindSpreadsheet.</p><MainLink className="primary-link" href={searchUrl(category.search)}>Open <span className="notranslate" translate="no">{category.name}</span> results ↗</MainLink></aside></section></main>;
}
