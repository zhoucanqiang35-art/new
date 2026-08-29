import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, ExternalLink, PackageCheck, Ruler } from "lucide-react";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { categoryPath, categorySlugs, getCategory, getCategoryUi, type CategorySlug, type SiteLocale } from "./category-data";

export default function CategoryPage({ lang, slug }: { lang: SiteLocale; slug: CategorySlug }) {
  const category = getCategory(lang, slug); const t = getCategoryUi(lang);
  const related = categorySlugs.filter(item => item !== slug).slice(0, 3);
  const homePath = lang === "en" ? "/" : `/${lang}`;
  const canonical = `https://pikobuyspreadsheet.me${categoryPath(lang, slug)}`;
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
    {"@type":"ListItem",position:1,name:t.home,item:`https://pikobuyspreadsheet.me${lang === "en" ? "/" : `/${lang}`}`},
    {"@type":"ListItem",position:2,name:t.categories,item:`https://pikobuyspreadsheet.me${lang === "en" ? "/#categories" : `/${lang}/#categories`}`},
    {"@type":"ListItem",position:3,name:category.title,item:canonical}
  ]};
  const collection = {"@context":"https://schema.org","@type":"CollectionPage",name:t.title(category.title),description:t.intro(category.title,category.focus),url:canonical,inLanguage:lang,about:{"@type":"Thing",name:category.title},isPartOf:{"@type":"WebSite",name:"PikoBuy Spreadsheet Guide",url:"https://pikobuyspreadsheet.me/"}};
  const faq = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.questions.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))};
  return <main lang={lang}>
    {[breadcrumb,collection,faq].map((data,index)=><script key={index} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>)}
    <SiteHeader lang={lang}/>
    <nav className="category-breadcrumb" aria-label="Breadcrumb"><Link href={homePath}>{t.home}</Link><span>/</span><a href={`${homePath}#categories`}>{t.categories}</a><span>/</span><strong>{category.title}</strong></nav>
    <section className="directory-hero category-landing-hero"><p className="kicker">{t.eyebrow}</p><h1>{t.title(category.title)}</h1><p>{t.intro(category.title, category.focus)}</p><a className="button-dark" href={`https://findspreadsheet.com/${category.destination}/`} target="_blank" rel="noopener noreferrer">{t.cta(category.title)} <ArrowRight size={16}/></a></section>
    <section className="section category-evidence"><div className="section-heading"><div><p className="kicker">{category.title}</p><h2>{t.evidence}</h2></div><p>{t.evidenceIntro}</p></div><div className="category-evidence-grid">
      <article><ExternalLink/><h3>{t.source}</h3><p>{t.sourceText}</p></article>
      <article><CheckCircle2/><h3>{t.option}</h3><p>{t.optionText}</p></article>
      <article><Camera/><h3>{t.qc}</h3><p>{t.qcText(category.focus)}</p></article>
      <article><PackageCheck/><h3>{t.parcel}</h3><p>{t.parcelText}</p></article>
    </div></section>
    <section className="section category-checklist"><div><p className="kicker">{t.checklist}</p><h2>{category.title}</h2></div><ol>{t.checklistItems.map((item,index)=><li key={item}><span>{index+1}</span><p>{item}</p></li>)}</ol></section>
    <section className="verification-band"><Ruler/><div><h2>{t.boundary}</h2><p>{t.boundaryText}</p></div></section>
    <section className="section category-faq"><div><p className="kicker">FAQ</p><h2>{t.faq}</h2></div><div>{t.questions.map(([question,answer])=><article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>
    <section className="section related-categories"><div className="section-heading"><div><p className="kicker">{t.categories}</p><h2>{t.related}</h2></div></div><div>{related.map(item=><Link href={categoryPath(lang,item)} key={item}>{getCategory(lang,item).title}<ArrowRight size={15}/></Link>)}</div></section>
    <SiteFooter lang={lang}/>
  </main>;
}
