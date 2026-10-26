import SiteApp from "../site-app";
import type { Metadata } from "next";

const allowed = ["categories", "products", "guides", "faq"] as const;

const seo: Record<string,{title:string;description:string}> = {
  categories:{title:"PikoBuy Spreadsheet Categories: Shoes, Clothing, Accessories & More",description:"Browse PikoBuy spreadsheet research by category, then compare source links, photos, sizing and shipping-weight context."},
  products:{title:"PikoBuy Product Details: Source, QC, Sizing & Weight Checks",description:"Use a product-detail checklist before saving a PikoBuy find: source context, photos, sizing notes and parcel-weight awareness."},
};

export async function generateMetadata({params}:{params:Promise<{section:string}>}):Promise<Metadata>{ const {section}=await params; const item=seo[section] ?? {title:"PikoBuy Spreadsheet Research",description:"Independent PikoBuy spreadsheet research guide."}; return {title:item.title,description:item.description,alternates:{canonical:`/${section}`}}; }

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  return <SiteApp active={allowed.includes(section as (typeof allowed)[number]) ? section : "home"} />;
}
