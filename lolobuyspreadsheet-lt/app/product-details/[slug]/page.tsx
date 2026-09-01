import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/site-header";
import { MainLink } from "../../components/main-link";
import { productBySlug, searchUrl } from "../../lib/catalog";
import { products } from "../../lib/catalog";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = productBySlug(slug); if (!product) notFound();
  const destination = product.search ? searchUrl(product.search) : "https://findspreadsheet.com/AllProducts/";
  return <main><SiteHeader /><section className="detail-page"><div className={`product-art art-${product.tone}`} aria-hidden="true"><span>{product.name.slice(0, 1)}</span></div><div><p className="eyebrow">PRODUCT DETAIL</p><h1>{product.name}</h1><p className="detail-price">{product.price}</p><p className="detail-copy">{product.summary} Open the live FindSpreadsheet result page to view the current matching listings, photos, options and prices.</p><dl><div><dt>Search term</dt><dd>{product.search || "All products"}</dd></div><div><dt>Destination</dt><dd>FindSpreadsheet live directory</dd></div></dl><MainLink className="primary-link" href={destination}>Open live product results ↗</MainLink></div></section></main>;
}
