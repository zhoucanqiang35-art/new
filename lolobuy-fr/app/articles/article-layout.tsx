import { ArrowLeft, ArrowRight, Check, Clock3, List, SearchCheck } from "lucide-react";
import type { Article } from "./article-data";
import { ArticleLanguagePicker } from "./article-language-picker";
import translationData from "./article-translations.json";

export type ArticleChrome = {
  home:string; categories:string; productDetails:string; howItWorks:string;
  shipping:string; faq:string; seoArticles:string; allArticles:string;
  checkedTitle:string; checkedText:string; quickChecklist:string;
  takeawayLabel:string; openDatabase:string; researchArticles:string;
  footerNote:string; chooseLanguage:string;
};

const englishChrome = (translationData as unknown as Record<string,{chrome:ArticleChrome}>).en.chrome;

function anchorId(value:string){
  return value.toLowerCase().normalize("NFKD").replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-");
}

export function ArticleLayout({ article, locale="en", chrome=englishChrome }: { article: Article; locale?:string; chrome?:ArticleChrome }) {
  const home=`/${locale}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.modified ?? "2026-08-26",
    inLanguage: article.englishOnly ? "en" : locale,
    mainEntityOfPage: `https://lolobuy.fr/articles/${article.slug}/`,
    author: { "@type": "Organization", name: "FindSpreadsheet Research" },
    publisher: { "@type": "Organization", name: "FindSpreadsheet" },
    ...(article.heroImage ? { image: `https://lolobuy.fr${article.heroImage.src}` } : {}),
  };

  return <main className="article-page" lang={locale}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="article-header">
      <a className="brand brand-image" href={home} aria-label="LoloBuy guide home"><img src="/lolobuy-logo.png" alt="LoloBuy"/></a>
      <nav aria-label="Article navigation">
        <a href={home}>{chrome.home}</a>
        <a href={`${home}/categories`}>{chrome.categories}</a>
        <a href={`${home}/product-details`}>{chrome.productDetails}</a>
        <a href={`${home}/how-it-works`}>{chrome.howItWorks}</a>
        <a href={`${home}/shipping`}>{chrome.shipping}</a>
        <a href={`${home}/faq`}>{chrome.faq}</a>
        <a href={`${home}/seo-articles`}>{chrome.seoArticles}</a>
      </nav>
      <div className="article-header-actions"><ArticleLanguagePicker initialLanguage={locale} slug={article.slug} label={chrome.chooseLanguage}/></div>
    </header>

    <article>
      <div className="article-hero">
        <a className="article-back" href={`${home}/seo-articles`}><ArrowLeft/>{chrome.allArticles}</a>
        <p className="eyebrow">{article.eyebrow}</p>
        <h1>{article.title}</h1>
        <p className="article-intro">{article.intro}</p>
        <div className="article-meta"><span><Clock3/>{article.readTime}</span><span><SearchCheck/>{article.reviewed}</span></div>
      </div>

      {article.heroImage&&<figure className="article-cover"><img src={article.heroImage.src} alt={article.heroImage.alt} width={article.heroImage.width} height={article.heroImage.height}/></figure>}

      {article.insights&&<aside className="article-insights" aria-labelledby="article-insights-title">
        <p className="eyebrow">TL;DR</p>
        <h2 id="article-insights-title">Article insights</h2>
        <ul>{article.insights.map(item=><li key={item}><Check/>{item}</li>)}</ul>
      </aside>}

      <nav className="article-toc" aria-labelledby="article-toc-title">
        <h2 id="article-toc-title"><List/>Table of contents</h2>
        <ol>{article.sections.map(section=><li key={section.heading}>
          <a href={`#${anchorId(section.heading)}`}>{section.heading}</a>
          {section.subsections&&<ul>{section.subsections.map(subsection=><li key={subsection.heading}><a href={`#${anchorId(subsection.heading)}`}>{subsection.heading}</a></li>)}</ul>}
        </li>)}</ol>
      </nav>

      <aside className="source-note">
        <strong>{chrome.checkedTitle}</strong>
        <p>{chrome.checkedText}</p>
        {article.sources&&<ul>{article.sources.map(source=><li key={source}>{source}</li>)}</ul>}
      </aside>

      <div className="article-body" lang={article.englishOnly?"en":locale}>
        {article.sections.map((section,index)=><section key={section.heading} id={anchorId(section.heading)}>
          <span className="article-section-number">{String(index+1).padStart(2,"0")}</span>
          <h2>{section.heading}</h2>
          {section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}
          {section.table&&<div className="article-table-wrap"><table><thead><tr>{section.table.headers.map(header=><th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{section.table.rows.map(row=><tr key={row.join("|")}>{row.map((cell,cellIndex)=><td key={cell} data-label={section.table?.headers[cellIndex]}>{cell}</td>)}</tr>)}</tbody></table></div>}
          {section.checklist&&<div className="article-checklist"><strong>{chrome.quickChecklist}</strong><ul>{section.checklist.map(item=><li key={item}><Check/>{item}</li>)}</ul></div>}
          {section.subsections?.map(subsection=><div className="article-subsection" key={subsection.heading} id={anchorId(subsection.heading)}>
            <h3>{subsection.heading}</h3>
            {subsection.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}
            {subsection.checklist&&<div className="article-checklist"><strong>{chrome.quickChecklist}</strong><ul>{subsection.checklist.map(item=><li key={item}><Check/>{item}</li>)}</ul></div>}
          </div>)}
        </section>)}
      </div>

      {article.faqs&&<section className="article-faq" aria-labelledby="article-faq-title"><p className="eyebrow">COMMON QUESTIONS</p><h2 id="article-faq-title">LoloBuy refund FAQ</h2><div>{article.faqs.map((faq,index)=><details key={faq.question} open={index===0}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></section>}

      {article.related&&<aside className="article-related"><p className="eyebrow">CONTINUE THE WORKFLOW</p><h2>Related LoloBuy guides</h2><div>{article.related.map(item=><a href={item.href} key={item.href}><strong>{item.label}</strong><span>{item.description}</span><ArrowRight/></a>)}</div></aside>}

      <section className="article-takeaway"><p>{chrome.takeawayLabel}</p><h2>{article.takeaway}</h2><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">{chrome.openDatabase}<ArrowRight/></a></section>
    </article>

    <footer className="article-footer"><a href={`${home}/seo-articles`}>{chrome.researchArticles}</a><span>{chrome.footerNote}</span><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">FindSpreadsheet</a></footer>
  </main>;
}
