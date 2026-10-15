"use client";

import { useEffect, useState } from "react";
import { Language, languageCopy, localeHref, useLanguage } from "../i18n";

const languages=[["en","EN · English"],["de","DE · Deutsch"],["fr","FR · Français"],["es","ES · Español"],["it","IT · Italiano"],["pt","PT · Português"],["nl","NL · Nederlands"],["pl","PL · Polski"],["sv","SV · Svenska"]] as const;
const nav=[["Home","/"],["Categories","/categories/"],["Product details","/product-details/"],["SEO articles","/seo-articles/"],["FAQ","/faq/"]] as const;

export function SiteHeader({initialLanguage}: {initialLanguage?: Language}){
  const language=useLanguage(initialLanguage);
  const [ready,setReady]=useState(false);
  useEffect(()=>setReady(true),[]);
  const change=(next:string)=>{window.localStorage.setItem("lolobuysheet-language",next);const current=window.location.pathname.replace(/^\/(en|de|fr|es|it|pt|nl|pl|sv)(?=\/|$)/,"") || "/";window.location.assign(localeHref(current,next as Language))};
  const labels=languageCopy[language].nav;
  return <header className="site-header"><a className="brand" href={localeHref("/",language)}><img className="brand-logo" src="/lolobuy-logo.png" alt="LoloBuy"/><strong>Sheet<span className="brand-muted">.pl</span></strong></a><nav>{nav.map(([,href],index)=><a key={href} href={localeHref(href,language)}>{labels[[0,1,2,4,5][index]]}</a>)}</nav><label className="language"><span>Language</span><select value={ready?language:"en"} onChange={e=>change(e.target.value)}>{languages.map(([code,label])=><option key={code} value={code}>{label}</option>)}</select></label></header>
}
