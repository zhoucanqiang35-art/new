"use client";

import { useEffect, useState } from "react";
import { languages } from "./data";

export default function LanguageSelect(){
  const [selected,setSelected]=useState("");
  useEffect(()=>{const match=window.location.pathname.match(/^\/languages\/([^/]+)/);setSelected(match?.[1]??"");},[]);
  function changeLanguage(code:string){
    if(!code)return;
    setSelected(code);
    const current=window.location.pathname;
    const localized=current.match(/^\/languages\/[^/]+(\/.*)?$/);
    const candidate=localized?.[1] ?? current;
    const suffix=candidate==="/"||candidate.startsWith("/languages") ? "" : candidate;
    window.location.assign(`/languages/${code}${suffix}`);
  }
  return <div className="language-picker">
    <span aria-hidden="true">◎</span>
    <select value={selected} aria-label="Choose language" onChange={event=>changeLanguage(event.target.value)}>
      <option value="" disabled>Languages</option>
      {languages.map(language=><option value={language.code} key={language.code}>{language.name}</option>)}
    </select>
    <b aria-hidden="true">⌄</b>
  </div>;
}
