import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "../../category-page";
import { categoryAlternates, categorySlugs, getCategory, getCategoryUi, type CategorySlug } from "../../category-data";

export function generateStaticParams(){return categorySlugs.map(category=>({category}));}
export async function generateMetadata({params}:{params:Promise<{category:string}>}):Promise<Metadata>{
  const {category}=await params;if(!categorySlugs.includes(category as CategorySlug))return {};
  const slug=category as CategorySlug;const data=getCategory("en",slug);const title=getCategoryUi("en").title(data.title);const canonical=`https://pikobuyspreadsheet.me/categories/${slug}`;
  return {title,description:`Research ${data.title.toLowerCase()} PikoBuy spreadsheet results with source, option, QC and parcel checks. No invented stock, prices or seller claims.`,alternates:{canonical,languages:categoryAlternates(slug)},openGraph:{title,url:canonical,type:"website"},robots:{index:true,follow:true}};
}
export default async function Page({params}:{params:Promise<{category:string}>}){const {category}=await params;if(!categorySlugs.includes(category as CategorySlug))notFound();return <CategoryPage lang="en" slug={category as CategorySlug}/>;}
