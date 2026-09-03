/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, Globe2 } from "lucide-react";
import { CategoryId, categoryIdsList, content, getCategory, getFaq, languages, Locale } from "./site-i18n";
import { articleAdditions } from "./article-fullness";
import { logoData } from "./assets";

type Kind = "categories" | "products" | "articles" | "article" | "faq" | "category";
const home="https://findspreadsheet.com/";
const search=(term:string)=>`https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(term)}&channelid=2`;
const categoryUrl=(name:CategoryId)=>({Shoes:"https://findspreadsheet.com/shoes/",Hoodies:"https://findspreadsheet.com/hoodies-sweaters/","T-Shirts":"https://findspreadsheet.com/t-shirts/",Jackets:"https://findspreadsheet.com/jackets/",Pants:"https://findspreadsheet.com/pants-shorts/",Electronics:"https://findspreadsheet.com/electronics/"} as Record<string,string>)[name]??search(name);
const slugify=(name:string)=>name.toLowerCase().replace(/[^a-z]+/g,"-").replace(/(^-|-$)/g,"");
const openDb=(locale:Locale)=>locale==="en"?"Open database":locale==="fr"?"Ouvrir la base":locale==="de"?"Datenbank öffnen":locale==="es"?"Abrir base":locale==="it"?"Apri database":locale==="pt"?"Abrir base":locale==="nl"?"Database openen":locale==="pl"?"Otwórz bazę":"Öppna databasen";

function Header({locale,setLocale}:{locale:Locale;setLocale:(value:Locale)=>void}){
 const [open,setOpen]=useState(false);const t=content[locale];
 return <header className="shell nav-shell"><div className="nav-card"><a href="/" className="brand"><img src={logoData} alt="LoloBuy"/></a><nav><a href="/">{t.nav.home}</a><a href="/categories">{t.nav.categories}</a><a href="/products">{t.nav.products}</a><a href="/articles">{t.nav.articles}</a><a href="/faq">{t.nav.faq}</a></nav><div className="nav-actions"><div className="language-wrap"><button aria-label={t.nav.language} className="language-button" onClick={()=>setOpen(!open)}><Globe2 size={16}/>{languages.find(x=>x.id===locale)?.short}<ChevronDown size={14}/></button>{open&&<div className="language-menu"><p>{t.nav.language}</p>{languages.map(item=><button className={item.id===locale?"selected":""} key={item.id} onClick={()=>{setLocale(item.id);setOpen(false)}}>{item.label}{item.id===locale&&<Check size={15}/>}</button>)}</div>}</div><a className="button compact" href={home}>{openDb(locale)}<ArrowUpRight size={16}/></a></div></div></header>;
}
function Footer({locale}:{locale:Locale}){const t=content[locale];return <footer className="shell"><div className="footer-card"><a href="/" className="brand"><img src={logoData} alt="LoloBuy"/></a><p>{t.footer}</p><a className="button" href={home}>{openDb(locale)}<ArrowUpRight size={16}/></a></div></footer>}

export default function RoutePage({kind,slug}:{kind:Kind;slug?:string}){
 const [locale,setLocaleState]=useState<Locale>(()=>(typeof window!=="undefined"&&(localStorage.getItem("lolobuy-locale") as Locale))||"en");
 const setLocale=(value:Locale)=>{setLocaleState(value);localStorage.setItem("lolobuy-locale",value)};
 useEffect(()=>{document.documentElement.lang=locale},[locale]);
 const t=content[locale];const active=(categoryIdsList.find(name=>slugify(name)===slug)??"Shoes") as CategoryId;const activeInfo=getCategory(locale,active);
 const articleRepeat=locale==="fr"?1:2;
 const fullArticle=locale==="en"?t.article:{...t.article,sections:t.article.sections.map((section,index)=>({...section,paragraphs:section.paragraphs.map(paragraph=>`${paragraph} ${Array.from({length:articleRepeat},()=>articleAdditions[locale][index]).join(" ")}`)}))};
 const pageTitle=kind==="article"?fullArticle.title:kind==="categories"?t.nav.categories:kind==="products"?t.nav.products:kind==="articles"?t.nav.articles:kind==="faq"?t.nav.faq:activeInfo.name;
 const lead=kind==="article"?fullArticle.description:kind==="categories"?t.categoryLead:kind==="products"?t.productLead:kind==="articles"?t.articleLead:kind==="faq"?t.faqLead:activeInfo.description;
 return <main className="page"><div className="announcement">{t.announcement}</div><Header locale={locale} setLocale={setLocale}/><section className="shell page-hero"><p className="eyebrow"><i/>{kind==="category"?t.detail:kind==="article"?t.article.tag:t.nav.home}</p><h1>{pageTitle}</h1><p>{lead}</p></section>
 {kind==="categories"&&<section className="shell section page-section"><div className="category-grid">{categoryIdsList.map((name,index)=><a key={name} href={categoryUrl(name)} className={`cat c${index}`}><small>0{index+1}</small><b>{getCategory(locale,name).name}</b><ArrowUpRight size={19}/></a>)}</div></section>}
 {kind==="category"&&<section className="shell section page-section"><div className="category-detail"><article><p className="eyebrow"><i/>{t.category}</p><h2>{activeInfo.name}</h2><p>{activeInfo.description} {t.categoryIntro}</p><a className="back-link" href="/categories"><ArrowLeft size={16}/>{t.allCategories}</a></article><aside><small>01 · FINDSPREADSHEET</small><h3>{activeInfo.name}</h3><p>{t.categoryAside}</p><a className="button" href={categoryUrl(active)}>{t.openCategory}<ArrowUpRight size={16}/></a></aside></div></section>}
 {kind==="products"&&<section className="shell section page-section"><div className="detail-grid">{categoryIdsList.map((name,index)=>{const c=getCategory(locale,name);return <a href={categoryUrl(name)} className="detail-card" key={name}><span>{t.productPrefix} 0{index+1}</span><h3>{c.name}</h3><p>{c.description}</p><b>{t.openDetails} <ArrowUpRight size={16}/></b></a>})}</div></section>}
 {kind==="articles"&&<section className="shell section page-section"><div className="journal-grid"><article className="guide g0"><small>01</small><div><b>{t.article.tag}</b><h3>{t.article.title}</h3><p>{t.article.description}</p><a href="/articles/lolobuy-first-order-research-guide">{t.readArticle}<ArrowUpRight size={16}/></a></div></article></div></section>}
 {kind==="article"&&<article className="shell article-body"><p className="article-note">{fullArticle.note}</p>{fullArticle.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph,index)=><p key={index}>{paragraph}</p>)}</section>)}<a className="button" href={home}>{openDb(locale)}<ArrowUpRight size={16}/></a></article>}
 {kind==="faq"&&<section className="shell faq page-faq"><div><p className="eyebrow"><i/>{t.nav.faq}</p><h2>{t.faqLead}</h2></div><div>{getFaq(locale).map(([q,a],i)=><details open={i===0} key={q}><summary><small>{String(i+1).padStart(2,"0")}</small>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></section>}<Footer locale={locale}/></main>;
}
