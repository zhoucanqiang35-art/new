import type { Metadata } from "next";
import { seoArticles } from "../../data";
import { SeoArticlePage } from "../../site-components";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=seoArticles.find(x=>x.slug===slug);return {title:item?.title||"PikoBuy Research Article",description:item?.excerpt||"Independent PikoBuy research."};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <SeoArticlePage slug={slug}/>;}
