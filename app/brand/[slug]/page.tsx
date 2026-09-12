import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, BreadcrumbSchema } from "../../breadcrumbs";
import { Footer, Header, ProductImage } from "../../components";
import { brands, products } from "../../data";
import { pageMetadata } from "../../seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((item) => item.slug === slug);
  return brand ? pageMetadata({ title: `${brand.name} LoloBuy Spreadsheet Records`, description: brand.note, path: `/brand/${brand.slug}` }) : { title: "Brand not found", robots: { index: false, follow: false } };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = brands.find((item) => item.slug === slug);
  if (!brand) notFound();
  const matches = products.filter((item) => brand.productSlugs.includes(item.slug));
  const crumbs = [{ label: "Home", href: "/" }, { label: "Brands", href: "/brand" }, { label: brand.name, href: `/brand/${brand.slug}` }];
  const listSchema = { "@context": "https://schema.org", "@type": "ItemList", name: `${brand.name} source records`, itemListElement: matches.map((product, index) => ({ "@type": "ListItem", position: index + 1, url: `https://lolobuysheet.cc/products/${product.slug}`, name: product.name })) };
  return <><BreadcrumbSchema items={crumbs} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} /><Header /><main><header className="category-hero shell"><Breadcrumbs items={crumbs} /><p className="eyebrow"><span></span>Brand-labelled source records</p><h1>{brand.name}</h1><p>{brand.note} Check the linked source page for current title, price, options and availability.</p></header><section className="section shell"><div className="product-grid">{matches.map((product) => <Link className="product-card" href={`/products/${product.slug}`} key={product.slug}><div className="product-visual product-photo"><ProductImage src={product.image} alt={product.name}/><span>{product.label}</span></div><h2>{product.name}</h2><p>{product.summary}</p><strong>Inspect research record →</strong></Link>)}</div></section></main><Footer /></>;
}
