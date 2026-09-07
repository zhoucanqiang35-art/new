"use client";
import { useEffect, useState } from "react";
import type { Locale } from "./translations";
import { localeLabels, locales } from "./translations";

export function LanguageSwitcher({locale}:{locale:Locale}){
  const [switching,setSwitching]=useState(false);
  const label={en:"Choose language",de:"Sprache wählen",fr:"Choisir la langue",es:"Elegir idioma",it:"Scegli la lingua",pt:"Escolher idioma"}[locale];
  useEffect(()=>{
    document.documentElement.lang=locale;
    document.documentElement.dataset.locale=locale;
  },[locale]);
  function switchLanguage(next:string){
    if(!locales.includes(next as Locale)||next===locale)return;
    setSwitching(true);
    const {pathname,search,hash}=window.location;
    const parts=(pathname||"/").split("/").filter(Boolean);
    if(parts[0]&&locales.includes(parts[0] as Locale)) parts.shift();
    const rest=parts.length?`/${parts.join("/")}`:"";
    const destination=`/${next}${rest}${search}${hash}`;
    document.cookie=`lolobuy_locale=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    window.location.assign(destination);
  }
  return <label className="language-switcher" aria-busy={switching}><span aria-hidden="true">◎</span><span className="sr-only">{label}</span><select aria-label={label} value={locale} disabled={switching} onChange={e=>switchLanguage(e.target.value)}>{locales.map(code=><option value={code} key={code}>{localeLabels[code]}</option>)}</select><i aria-hidden="true">⌄</i></label>;
}
