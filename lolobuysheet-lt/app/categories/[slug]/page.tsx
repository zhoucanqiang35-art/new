import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, PageShell } from "../../components";
import { categories } from "../../data";

export function generateStaticParams() { return categories.map(category=>({ slug: category.slug })); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const category=categories.find(item=>item.slug===slug); if(!category)return{}; return { title:`LoloBuy ${category.name} Finds`, description:category.description, alternates:{canonical:`/categories/${category.slug}`} }; }

export default async function CategoryPage({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const category=categories.find(item=>item.slug===slug); if(!category)notFound(); return <PageShell><div className="article-wrap"><PageHero eyebrow={`${category.code} · Product category`} title={`${category.name} finds, with a better checklist.`} intro={category.description}/><div className="detail-layout"><section className="detail-panel"><p className="eyebrow">Before purchase</p><h2>Four checks to make first.</h2><ol className="check-list">{category.checks.map((check,index)=><li key={check}><span>{String(index+1).padStart(2,"0")}</span>{check}</li>)}</ol></section><aside className="detail-aside"><strong>Use this category</strong><p>Continue to the main FindSpreadsheet database to compare current listings. Prices, options and availability must be checked live.</p><a className="primary-action" href={category.externalHref} target="_blank" rel="noopener">Browse {category.name} on FindSpreadsheet ↗</a><a className="secondary-action" href="/categories">← All categories</a></aside></div></div></PageShell>; }
