import SiteApp from "../../site-app";
import type { Metadata } from "next";

const allowed = ["shoes", "hoodies", "t-shirts", "jackets", "pants-shorts", "hats", "watches", "accessories", "electronics", "other-finds"];

const labels: Record<string,string> = { shoes:"Shoes",hoodies:"Hoodies","t-shirts":"T-Shirts",jackets:"Jackets","pants-shorts":"Pants & Shorts",hats:"Hats",watches:"Watches",accessories:"Accessories",electronics:"Electronics","other-finds":"Other Finds" };
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const label=labels[slug] ?? "Product"; return {title:`PikoBuy ${label}: Spreadsheet Links, QC & Sizing Checks`,description:`Research PikoBuy ${label.toLowerCase()} with source links, useful photos, size context and shipping-weight awareness.`,alternates:{canonical:`/category/${slug}`}}; }

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SiteApp active="categories" categorySlug={allowed.includes(slug) ? slug : "shoes"} />;
}
