import { ArrowLeft, ArrowRight, Check, Clock3, SearchCheck } from "lucide-react";
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

      <aside className="source-note">
        <strong>{chrome.checkedTitle}</strong>
        <p>{chrome.checkedText}</p>
        {article.sources&&<ul>{article.sources.map(source=><li key={source}>{source}</li>)}</ul>}
      </aside>

      <div className="article-body" lang={article.englishOnly?"en":locale}>
        {article.sections.map((section,index)=><section key={section.heading}>
          <span className="article-section-number">{String(index+1).padStart(2,"0")}</span>
          <h2>{section.heading}</h2>
          {section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}
          {section.checklist&&<div className="article-checklist"><strong>{chrome.quickChecklist}</strong><ul>{section.checklist.map(item=><li key={item}><Check/>{item}</li>)}</ul></div>}
        </section>)}
      </div>

      <section className="article-takeaway"><p>{chrome.takeawayLabel}</p><h2>{article.takeaway}</h2><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">{chrome.openDatabase}<ArrowRight/></a></section>
    </article>

    <footer className="article-footer"><a href={`${home}/seo-articles`}>{chrome.researchArticles}</a><span>{chrome.footerNote}</span><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">FindSpreadsheet</a></footer>
  </main>;
}
