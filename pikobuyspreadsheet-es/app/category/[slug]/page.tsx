import type { Metadata } from "next";
import { categories } from "../../data";
import { CategoryDetailPage } from "../../site-components";
import { routeAlternates } from "../../seo";
export function generateStaticParams(){return categories.map(({slug})=>({slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=categories.find(x=>x.slug===slug);return {title:item?`${item.name} PikoBuy Spreadsheet Guide`:"PikoBuy Category",description:item?`Independent ${item.name} product discovery and warehouse QC guide.`:"Independent PikoBuy category guide.",alternates:routeAlternates("en-US",`category/${slug}`)};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <CategoryDetailPage slug={slug}/>;}
