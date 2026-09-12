import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";
import { brands } from "../data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({ title: "LoloBuy Brand Spreadsheet Hubs", description: "Browse independent brand-labelled product records from the FindSpreadsheet database. Live price, options and availability stay on the source page.", path: "/brand" });

export default function BrandIndexPage() {
  return <><Header /><main className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>Brand research hubs</p><h1>Browse by visible<br/><em>source label.</em></h1><p>Each hub groups records whose current source title contains the brand name. It is a discovery index, not a claim of affiliation, authenticity or stock.</p></div><div className="category-grid">{brands.map((brand, index) => <Link className="category-card" href={`/brand/${brand.slug}`} key={brand.slug}><span className="category-no">{String(index + 1).padStart(2, "0")}</span><div><h2>{brand.name}</h2><p>{brand.note}</p></div><b>↗</b></Link>)}</div></main><Footer /></>;
}
