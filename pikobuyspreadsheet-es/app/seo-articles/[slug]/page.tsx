import type { Metadata } from "next";
import { seoArticles } from "../../data";
import { SeoArticlePage } from "../../site-components";
import { getEditorialArticle } from "../../editorial-content";
import { routeAlternates } from "../../seo";
export function generateStaticParams(){return seoArticles.map(({slug})=>({slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=seoArticles.find(x=>x.slug===slug);const editorial=getEditorialArticle("en-US",slug);return {title:editorial?.title||item?.title||"PikoBuy Research Article",description:editorial?.intro||item?.excerpt||"Independent PikoBuy research.",alternates:routeAlternates("en-US",`seo-articles/${slug}`)};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <SeoArticlePage slug={slug}/>;}
