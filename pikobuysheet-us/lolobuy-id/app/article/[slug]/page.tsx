import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleSections, PageShell } from "../../components";
import { articles } from "../../data";
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const article=articles.find(a=>a.slug===slug);return article?{title:article.metaTitle??`${article.title} | FindSpreadsheet Agent Guide`,description:article.metaDescription??article.excerpt,robots:{index:false,follow:true},alternates:{canonical:`/en/article/${slug}`}}:{};}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=articles.find(a=>a.slug===slug);if(!article)notFound();return <PageShell eyebrow={`${article.label} • ${article.date} • ${article.read}`} title={article.title} intro={article.excerpt}><ArticleSections sections={article.sections}/><section className="article-action"><div><p className="eyebrow">NEXT STEP</p><h2>Continue with live product research.</h2><p>Use this guide to narrow the decision, then verify the current record and source listing.</p></div><a href="https://findspreadsheet.com/" target="_blank" rel="noopener">Open FindSpreadsheet ↗</a></section></PageShell>;}
