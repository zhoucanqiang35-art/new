"use client";

import { useEffect } from "react";
import type { Article } from "@/content/articles";
import { languageNames, localizedPath, navigationLabels, sectionPaths } from "@/content/navigation";
import { tr } from "@/content/i18n";

export default function ArticlePage({article,initialLang="en"}:{article:Article;initialLang?:string}) {
  const lang=languageNames[initialLang]?initialLang:"en";
  useEffect(()=>{document.documentElement.lang=lang;},[lang]);
  const changeLanguage=(value:string)=>{
    location.href=localizedPath(value,`/articles/${article.slug}`);
  };
  return <main className="articlePage">
    <header className="articleTopbar"><a href={localizedPath(lang,"/")}><img src="/lolobuy-logo.png" alt="LoloBuy"/></a><nav>{navigationLabels[lang].map((label,i)=><a key={label} href={localizedPath(lang,sectionPaths[i])}>{label}</a>)}</nav><select aria-label="Language" value={lang} onChange={e=>changeLanguage(e.target.value)}>{Object.entries(languageNames).map(([code,name])=><option value={code} key={code}>{name}</option>)}</select></header>
    <article className="longArticle">
      <div className="articleLead">
        <div className="articleLeadCopy"><p className="kicker">{tr(lang,"INDEPENDENT LOLOBUY BUYER RESOURCE")}</p><h1>{tr(lang,article.title)}</h1><p className="articleDek">{tr(lang,article.description)}</p><div className="articleMeta"><span>{tr(lang,article.updated)}</span><span>{tr(lang,article.readingTime)}</span><span>{tr(lang,"English · Evidence-led")}</span></div></div>
        <aside className="factNote"><b>{tr(lang,"Fact boundary")}</b><p>{tr(lang,article.factNote)}</p></aside>
      </div>
      {article.sections.map((section,index)=><section key={section.heading} id={`section-${index+1}`}>
        <span className="articleNumber">{String(index+1).padStart(2,"0")}</span>
        <div><h2>{tr(lang,section.heading)}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{tr(lang,paragraph)}</p>)}{section.bullets&&<ul>{section.bullets.map(item=><li key={item}>{tr(lang,item)}</li>)}</ul>}{section.subsections?.map(subsection=><div className="articleSubsection" key={subsection.heading}><h3>{tr(lang,subsection.heading)}</h3>{subsection.paragraphs.map(paragraph=><p key={paragraph}>{tr(lang,paragraph)}</p>)}{subsection.bullets&&<ul>{subsection.bullets.map(item=><li key={item}>{tr(lang,item)}</li>)}</ul>}</div>)}</div>
      </section>)}
      {article.relatedLinks&&<aside className="articleRelated" aria-labelledby="related-guides"><p className="kicker">{tr(lang,"RELATED LOLOBUY GUIDES")}</p><h2 id="related-guides">{tr(lang,"Continue the buyer workflow")}</h2><div>{article.relatedLinks.map(link=><a key={link.href} href={localizedPath(lang,link.href)}><b>{tr(lang,link.title)}</b><span>{tr(lang,link.description)}</span></a>)}</div></aside>}
      <div className="articleCta"><div><p className="kicker">{tr(lang,"CONTINUE RESEARCH")}</p><h2>{tr(lang,"Compare current product pages")}</h2><p>{tr(lang,"Use the live FindSpreadsheet database to review product details before making a decision.")}</p></div><a href="https://findspreadsheet.com/">{tr(lang,"Open database")} ↗</a></div>
    </article>
    <footer className="articleFooter"><img src="/lolobuy-logo.png" alt="LoloBuy"/><p>{tr(lang,"Independent guide · No checkout or payment collection")}</p><a href={localizedPath(lang,"/")}>{tr(lang,"Back to home")}</a></footer>
  </main>
}
