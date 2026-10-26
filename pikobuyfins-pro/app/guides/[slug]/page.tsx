import ResearchShell from "../../research-shell";
import type { Metadata } from "next";
import { articles } from "../../research-data";

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const article=articles.find(item=>item.slug===slug) ?? articles[0]; return {title:article.title,description:article.dek,alternates:{canonical:`/guides/${article.slug}`}}; }

export default async function GuideArticlePage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const article=articles.find(item=>item.slug===slug) ?? articles[0]; const schema={"@context":"https://schema.org","@type":"Article",headline:article.title,description:article.dek,datePublished:"2026-10-26",dateModified:"2026-10-26",mainEntityOfPage:`https://pikobuyfins.pro/guides/${article.slug}`,author:{"@type":"Organization",name:"PikoBuyFins"},publisher:{"@type":"Organization",name:"PikoBuyFins"}}; return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><ResearchShell page="article" slug={article.slug}/></>; }
