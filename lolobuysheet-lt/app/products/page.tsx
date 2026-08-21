import type { Metadata } from "next";
import { PageHero, PageShell } from "../components";
import { products } from "../data";

export const metadata: Metadata = { title: "LoloBuy Product Detail Research", description: "Open independent product detail pages with reference prices and practical warehouse QC checks.", alternates: { canonical: "/products" } };

export default function ProductsPage(){return <PageShell><div className="article-wrap"><PageHero eyebrow="Product research" title="Product pages built for verification." intro="Each page keeps the reference price, category context and a product-specific QC checklist together before sending you to the live database."/><div className="product-directory">{products.map(product=><a className="directory-product" href={`/products/${product.slug}`} key={product.slug}><img src={product.image} alt={product.name}/><div><span>{product.category}</span><h2>{product.name}</h2><p>{product.description}</p><strong>{product.usd}</strong><small>{product.cny}</small><b>Open detail page →</b></div></a>)}</div></div></PageShell>}
