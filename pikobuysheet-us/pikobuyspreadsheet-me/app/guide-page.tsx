import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteFooter, SiteHeader } from "./site-chrome";
import SeoParitySections from "./seo-parity-sections";
import { normalizeArticleSections, type ArticlePage } from "./article-completion";

export type GuideSection = { heading: string; paragraphs?: string[]; bullets?: string[]; steps?: { title: string; text: string }[] };

export default function GuidePage({ kicker, title, intro, sections, pageId, lang = "en", ui, reviewedDate, relatedLinks = [], structuredData = [] }: { kicker: string; title: string; intro: string; sections: GuideSection[]; pageId?: ArticlePage; lang?: "en"|"de"|"fr"|"es"|"it"|"pt"|"nl"|"pl"; ui?: {back:string,onPage:string,important:string,notice:string,next:string,ctaTitle:string,cta:string,independent:string,reviewed:string,region:string}; reviewedDate?: string; relatedLinks?: {href:string;label:string}[]; structuredData?: Record<string, unknown>[] }) {
  const labels = ui || {back:"Back to research desk",onPage:"On this page",important:"Important",notice:"Account, payment, refund and live parcel questions belong in PikoBuy’s official support channel.",next:"NEXT STEP",ctaTitle:"Browse with a question, not a guess.",cta:"Search FindSpreadsheet",independent:"Independent guide",reviewed:"Reviewed 26 August 2026",region:"For US, UK, Canada & Europe"};
  const renderedSections=pageId?normalizeArticleSections(sections,lang,pageId):sections;
  const pagePath=pageId ? `${lang === "en" ? "" : `/${lang}`}/${pageId}` : "";
  const canonical=pagePath ? `https://pikobuyspreadsheet.me${pagePath}` : "";
  const automaticStructuredData: Record<string, unknown>[] = pageId ? [
    {"@context":"https://schema.org","@type":pageId === "faq" ? "FAQPage" : "Article",...(pageId === "faq" ? {mainEntity:renderedSections.map(section=>({"@type":"Question",name:section.heading,acceptedAnswer:{"@type":"Answer",text:(section.paragraphs || []).join(" ")}}))} : {headline:title,description:intro,mainEntityOfPage:canonical,inLanguage:lang,isAccessibleForFree:true}),},
    {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:labels.back,item:`https://pikobuyspreadsheet.me${lang === "en" ? "/" : `/${lang}`}`},{"@type":"ListItem",position:2,name:title,item:canonical}]}
  ] : [];
  const allStructuredData=[...automaticStructuredData,...structuredData];
  return <main>
    {allStructuredData.map((data,index)=><script key={index} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>)}
    <SiteHeader lang={lang} />
    <article className="article-page">
      <div className="article-hero"><Link href={lang === "en" ? "/" : `/${lang}`} className="back-link"><ArrowLeft size={15}/> {labels.back}</Link><p className="kicker">{kicker}</p><h1>{title}</h1><p>{intro}</p><div className="article-meta"><span><CheckCircle2 size={15}/> {labels.independent}</span><span>{reviewedDate || labels.reviewed}</span><span>{labels.region}</span></div></div>
      <div className="article-layout">
        <aside><b>{labels.onPage}</b>{renderedSections.map((section, i) => <a href={`#section-${i}`} key={section.heading}>{section.heading}</a>)}<div className="aside-note"><b>{labels.important}</b><p>{labels.notice}</p></div></aside>
        <div className="article-body">
          {renderedSections.map((section, i) => <section id={`section-${i}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((p,n) => <p key={n}>{p}</p>)}{section.bullets && <ul>{section.bullets.map((x,n) => <li key={n}>{x}</li>)}</ul>}</section>)}
          {relatedLinks.length > 0 && <nav className="article-related" aria-label="Related PikoBuy guides"><b>Continue your research</b><div>{relatedLinks.map(link=><Link href={link.href} key={link.href}>{link.label}<ArrowRight size={14}/></Link>)}</div></nav>}
          <div className="article-cta"><div><span>{labels.next}</span><h2>{labels.ctaTitle}</h2></div><a href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">{labels.cta} <ArrowRight size={16}/></a></div>
        </div>
      </div>
    </article>
    {lang !== "en" && <SeoParitySections lang={lang}/>}
    <SiteFooter lang={lang} />
  </main>;
}
