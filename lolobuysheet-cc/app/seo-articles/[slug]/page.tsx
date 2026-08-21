import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, ArticleSection } from "../../components";
import { guides } from "../../data";

export function generateStaticParams(){return guides.map((guide)=>({slug:guide.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const guide=guides.find((item)=>item.slug===slug);
  return guide?{title:`${guide.title} | LoloBuy SEO Articles`,description:guide.dek}:{title:"Article not found"};
}

export default async function SeoArticlePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const guide=guides.find((item)=>item.slug===slug);
  if(!guide)notFound();
  const articleSchema={"@context":"https://schema.org","@type":"Article",headline:guide.title,description:guide.dek,dateModified:"2026-08-21",author:{"@type":"Organization",name:"LoloBuy Sheet Independent Research Hub"},mainEntityOfPage:`https://lolobuysheet.cc/seo-articles/${guide.slug}`};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/><Header/><main className="article-page"><header className="article-hero shell"><Link href="/seo-articles">← All SEO articles</Link><p className="eyebrow"><span></span>{guide.kicker} · {guide.read}</p><h1>{guide.title}</h1><p>{guide.dek}</p><div className="article-meta"><span>Reviewed 21 August 2026</span><span>Independent editorial</span><span>1,200–1,800 words</span></div><div className="verified-strip"><b>Verified on the current official application</b>{guide.verified.map((item)=><span key={item}>✓ {item}</span>)}</div></header><article className="article-body shell"><aside><b>In this article</b>{guide.sections.map(([title],i)=><a href={`#section-${i+1}`} key={title}>{String(i+1).padStart(2,"0")} {title}</a>)}</aside><div className="prose">{guide.sections.map(([title,body],i)=><ArticleSection id={`section-${i+1}`} index={i+1} title={title} body={body} key={title}/>)}<div className="article-callout"><b>Decision rule</b><p>Use this article to frame the questions. Use the live product page, warehouse record and parcel quote to make the decision.</p><a href="https://findspreadsheet.com/AllProducts/">Browse FindSpreadsheet products ↗</a></div></div></article></main><Footer/></>;
}
