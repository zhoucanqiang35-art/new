"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  articles,
  categoryDestinations,
  getCopy,
  languages,
  primarySources,
  products,
} from "../lib/site-data";
import type { Article } from "../lib/site-data";
import { deepGuides } from "../lib/deep-guides";
import { hubGuides } from "../lib/hub-guides";
import { expandedGuides } from "../lib/expanded-guides";
import { faqItems } from "../lib/faq-data";
import { sourceRefsForText, sourcesForFact, type SourceReference } from "../lib/source-registry";
import { translate } from "../lib/locale-dictionaries";
import type { LocaleDictionary } from "../lib/locale-dictionaries";
import { sitePath } from "../lib/routing";
import { absoluteSiteUrl } from "../lib/seo";

type LocaleProps = { locale: string; dictionary: LocaleDictionary };

function InlineSources({ sources, label }: { sources: SourceReference[]; label: string }) {
  if (!sources.length) return null;
  return <span className="inline-sources"><small>{label}:</small>{sources.map((source) => <a href={source.url} target="_blank" rel="noopener noreferrer" key={source.url}>{source.label} ↗</a>)}</span>;
}

function Header({ locale, dictionary, currentSlug }: LocaleProps & { currentSlug?: string }) {
  const t = getCopy(locale, dictionary);
  const tx = (value: string) => translate(dictionary, value);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const switchLanguage = (value: string) => {
    window.location.assign(sitePath(value, currentSlug));
  };

  useEffect(() => {
    const closeOnOutside = (event: MouseEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) setLanguageOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLanguageOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const activeLanguage = languages.find(([code]) => code === locale)?.[1] || "English";
  return (
    <header className="site-header">
      <Link href={sitePath(locale)} className="site-brand site-brand-logo" aria-label="PikoBuy home">
        <Image unoptimized src="/pikobuy-logo.png" alt="PikoBuy" width={204} height={48} priority />
      </Link>
      <button className="mobile-nav-trigger" type="button" aria-label={tx("Primary navigation")} aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen((open) => !open)}>{mobileNavOpen ? "×" : "☰"}</button>
      <nav className={mobileNavOpen ? "mobile-open" : ""} aria-label={tx("Primary navigation")} onClick={() => setMobileNavOpen(false)}>
        <Link href={sitePath(locale, "pikobuy-spreadsheet")}>{t.nav[0]}</Link>
        <Link href={sitePath(locale, "research-method")}>{t.nav[1]}</Link>
        <Link href={sitePath(locale, "shipping-cost-guide")}>{tx("Shipping")}</Link>
        <Link href={sitePath(locale, "category-research-guide")}>{t.nav[2]}</Link>
        <Link href={sitePath(locale, "seo-articles")}>{tx("SEO Articles")}</Link>
        <Link href={sitePath(locale, "sources")}>{t.nav[3]}</Link>
      </nav>
      <div className="language-picker" ref={languageMenuRef}>
        <button className="language-trigger" type="button" aria-haspopup="listbox" aria-expanded={languageOpen} onClick={() => setLanguageOpen((open) => !open)}>
          <span><small>{locale.toUpperCase()}</small>{activeLanguage}</span><b aria-hidden="true">{languageOpen ? "×" : "⌄"}</b>
        </button>
        {languageOpen && <div className="language-menu" role="listbox" aria-label={tx("Choose language")}>
          <div className="language-menu-heading"><span>{tx("Choose language")}</span><small>{tx("24 localized paths")}</small></div>
          <div className="language-options">
            {languages.map(([code, name]) => <button type="button" role="option" aria-selected={locale === code} className={locale === code ? "active" : ""} onClick={() => switchLanguage(code)} key={code}><small>{code.toUpperCase()}</small><span>{name}</span>{locale === code && <b>✓</b>}</button>)}
          </div>
        </div>}
      </div>
    </header>
  );
}

function ProductExplorer({ locale, dictionary }: LocaleProps) {
  const t = getCopy(locale, dictionary);
  const tx = (value: string) => translate(dictionary, value);
  const [category, setCategory] = useState("All");
  const [carouselPaused, setCarouselPaused] = useState(false);
  const categories = ["All", ...Array.from(new Set(products.map((item) => item.category)))];
  const visible = products.filter((product) => category === "All" || product.category === category);

  return (
    <section className="content-section product-section" id="discover">
      <div className="section-heading">
        <div><p>{tx("08 current records · source price retained")}</p><h2>{t.products}</h2></div>
        <p>{t.productsDescription}</p>
      </div>
      <div className="product-tools">
        <div className="category-pills">
          {categories.map((item) => <button className={category === item ? "active" : ""} onClick={() => setCategory(item)} key={item}>{tx(item)}</button>)}
        </div>
        <div className="carousel-controls" aria-label={tx("Product carousel controls")}>
          <button type="button" className="pause-control" onClick={() => setCarouselPaused((paused) => !paused)} aria-label={tx(carouselPaused ? "Play carousel" : "Pause carousel")}>{carouselPaused ? "▶" : "Ⅱ"}</button>
        </div>
      </div>
      <div className={`product-carousel ${carouselPaused ? "is-paused" : ""}`} role="region" aria-label={tx("Latest and popular FindSpreadsheet products")}>
        <div className="product-track" style={{ animationDuration: `${Math.max(16, visible.length * 4.5)}s` }}>
          {[0, 1].map((copy) => (
            <div className="product-group" aria-hidden={copy === 1} key={copy}>
              {visible.map((product) => (
                <article className="product-card" key={`${copy}-${product.url}`}>
                  <a className="product-image" href={product.url} target="_blank" rel="noopener noreferrer" tabIndex={copy === 1 ? -1 : undefined}>
                    <Image unoptimized width={720} height={720} src={product.image} alt={copy === 1 ? "" : tx(product.name)} />
                  </a>
                  <div className="product-copy">
                    <div className="product-meta"><span>{tx(product.category)}</span><span>{tx(product.badge)}</span></div>
                    <h3>{tx(product.name)}</h3><p>{tx(product.note)}</p>
                    <div className="product-price"><div><strong>${product.usd.toFixed(2)}</strong><span>{tx("estimate · source")} ¥{product.cny}</span></div></div>
                    <a href={product.url} target="_blank" rel="noopener noreferrer" tabIndex={copy === 1 ? -1 : undefined}>{tx("Open record")} ↗</a>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeView({ locale, dictionary }: LocaleProps) {
  const t = getCopy(locale, dictionary);
  const tx = (value: string) => translate(dictionary, value);
  const featured = articles.filter((item) => ["pikobuy-spreadsheet", "how-pikobuy-works", "shipping-cost-guide", "returns-exchanges", "research-method", "category-research-guide"].includes(item.slug));

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{t.kicker}</p><h1>{t.title}</h1><p className="hero-dek">{t.description}</p>
          <form className="hero-search" action="https://findspreadsheet.com/search.html" method="get" target="_blank">
            <input type="hidden" name="channelid" value="2" />
            <input name="keywords" required aria-label={t.search} placeholder={t.search} />
            <button type="submit">{t.searchButton} <span>↗</span></button>
          </form>
          <p className="hero-search-note">{tx("Search opens matching results in the FindSpreadsheet product database.")}</p>
          <div className="proof-row"><span><b>{articles.length}</b> {tx("English routes")}</span><span><b>24</b> {tx("language paths")}</span><span><b>7</b> {tx("primary sources")}</span></div>
        </div>
        <div className="hero-evidence" aria-label={tx("Official facts")}>
          <p>{t.evidence}</p>
          <div className="evidence-stack">
            <Link className="evidence-record" href={sitePath(locale, "how-pikobuy-works")}><span>{tx("01 / ORDER")}</span><b>{tx("Six stages")}</b><p>{tx("Select → purchase → warehouse → ship")}</p><em>{tx("Read the complete workflow")} →</em></Link>
            <Link className="evidence-record" href={sitePath(locale, "returns-exchanges")}><span>{tx("02 / RETURNS")}</span><b>{tx("120 hours")}</b><p>{tx("Five-day window for eligible warehouse returns")}</p><em>{tx("Read eligibility and fees")} →</em></Link>
            <Link className="evidence-record" href={sitePath(locale, "shipping-cost-guide")}><span>{tx("03 / ESTIMATE")}</span><b>{tx("6 inputs")}</b><p>{tx("Destination, type, kg and three dimensions")}</p><em>{tx("Read the shipping-cost guide")} →</em></Link>
          </div>
          <small>{tx("Facts checked against pikobuy.com · 12 Aug 2026")}</small>
        </div>
      </section>
      <div className="source-ticker"><span>{tx("Official guide")}</span><span>{tx("Warehouse photos")}</span><span>{tx("Third-party carriers")}</span><span>{tx("Five-day eligible return window")}</span><span>{tx("Independent editorial layer")}</span></div>
      <ProductExplorer locale={locale} dictionary={dictionary} />
      <section className="content-section guide-section" id="guides">
        <div className="section-heading"><div><p>{tx("Read before opening another tab")}</p><h2>{t.guides}</h2></div><Link href={sitePath(locale, "sources")}>{tx("See verification register")} ↗</Link></div>
        <div className="guide-grid">{featured.map((item, index) => (
          <Link className="guide-card" href={sitePath(locale, item.slug)} key={item.slug}><span>{String(index + 1).padStart(2, "0")} · {tx(item.group)}</span><h3>{tx(item.title)}</h3><p>{tx(item.summary)}</p><div><small>{tx(item.read)}</small><b>{tx("Read field guide")} →</b></div></Link>
        ))}</div>
      </section>
      <section className="content-section category-section" id="categories">
        <div className="section-heading"><div><p>{tx("Different products need different evidence")}</p><h2>{t.categories}</h2></div><p>{tx("Each category opens the matching product collection on FindSpreadsheet.")}</p></div>
        <div className="category-grid">{categoryDestinations.map((category, index) => (
          <a className="category-card" href={category.url} target="_blank" rel="noopener noreferrer" key={category.slug}>
            <div className="category-image"><Image unoptimized width={640} height={420} src={category.image} alt={tx(category.imageAlt)} /></div>
            <div className="category-card-copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{tx(category.label)}</h3><p>{tx(category.description)}</p><strong>{tx("Open category on FindSpreadsheet")} ↗</strong></div>
          </a>
        ))}</div>
      </section>
      <section className="content-section sources-section" id="sources">
        <div><p className="eyebrow">{tx("Evidence register")}</p><h2>{t.sources}</h2><p>{tx("Material workflow and policy claims link to the exact official page. Product facts link to the corresponding FindSpreadsheet record. Advice is presented as editorial advice, not as an official promise.")}</p><Link href={sitePath(locale, "sources")}>{tx("Open full source methodology")} →</Link></div>
        <ol className="source-list">{primarySources.slice(0, 5).map((source, index) => <li className="source-row" key={source.key}><span>{String(index + 1).padStart(2, "0")}</span><a href={source.url} target="_blank" rel="noopener noreferrer">{tx(source.label)} ↗</a><small>{tx("Checked 12 Aug 2026")}</small></li>)}</ol>
      </section>
    </>
  );
}

function ArticleSupplement({ locale, article, dictionary }: { article: Article } & LocaleProps) {
  const tx = (value: string) => translate(dictionary, value);
  if (article.slug === "pikobuy-spreadsheet") return <ProductExplorer locale={locale} dictionary={dictionary} />;

  if (article.slug === "faq") return (
    <section className="article-supplement faq-panel" id="complete-faq">
      <div className="section-heading"><div><p>{tx("Evidence-led answers")}</p><h2>{tx("PikoBuy spreadsheet FAQ")}</h2></div><p>{tx("Each answer links the exact official page that supports the public fact. Account outcomes still belong to PikoBuy support.")}</p></div>
      <div className="faq-list">{faqItems.map((item, index) => (
        <details open={index === 0} key={item.question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{tx(item.question)}</summary><div><p>{tx(item.answer)}</p><InlineSources sources={[...item.sources]} label={tx("Sources")} /></div></details>
      ))}</div>
    </section>
  );

  if (article.slug === "category-research-guide") return (
    <section className="article-supplement">
      <div className="section-heading"><div><p>{tx("Different products need different evidence")}</p><h2>{tx("Browse by inspection task")}</h2></div><p>{tx("Each category opens the matching product collection on FindSpreadsheet.")}</p></div>
      <div className="category-grid">{categoryDestinations.map((category, index) => (
        <a className="category-card" href={category.url} target="_blank" rel="noopener noreferrer" key={category.slug}>
          <div className="category-image"><Image unoptimized width={640} height={420} src={category.image} alt={tx(category.imageAlt)} /></div>
          <div className="category-card-copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{tx(category.label)}</h3><p>{tx(category.description)}</p><strong>{tx("Open category on FindSpreadsheet")} ↗</strong></div>
        </a>
      ))}</div>
      <div className="section-heading article-subindex-heading"><div><p>{tx("Detailed editorial guides")}</p><h2>{tx("Category inspection library")}</h2></div><p>{tx("These independent guides explain the evidence to inspect before opening the live FindSpreadsheet collection above.")}</p></div>
      <div className="guide-grid article-index-grid">{articles.filter((item) => item.group === "Category").map((item, index) => (
        <Link className="guide-card" href={sitePath(locale, item.slug)} key={item.slug}><span>{String(index + 1).padStart(2, "0")} · {tx(item.group)}</span><h3>{tx(item.title)}</h3><p>{tx(item.summary)}</p><div><small>{tx(item.read)}</small><b>{tx("Read field guide")} →</b></div></Link>
      ))}</div>
    </section>
  );

  if (article.slug === "seo-articles") {
    const groups = ["Start", "Inspect", "Ship", "Source", "Category", "Trust"] as const;
    return <section className="article-supplement full-library">
      <div className="section-heading"><div><p>{tx("Complete route index")}</p><h2>{tx("All research articles")}</h2></div><p>{tx("Every English route is linked here so readers and search engines can discover the complete evidence library.")}</p></div>
      {groups.map((group) => {
        const items = articles.filter((item) => item.group === group && item.slug !== "seo-articles");
        return <section className="library-group" key={group}><div className="library-group-heading"><span>{tx(group)}</span><small>{items.length} {tx("guides")}</small></div><div className="guide-grid article-index-grid">{items.map((item, index) => (
          <Link className="guide-card" href={sitePath(locale, item.slug)} key={item.slug}><span>{String(index + 1).padStart(2, "0")} · {tx(item.group)}</span><h3>{tx(item.title)}</h3><p>{tx(item.summary)}</p><div><small>{tx(item.read)}</small><b>{tx("Read field guide")} →</b></div></Link>
        ))}</div></section>;
      })}
    </section>;
  }

  if (article.slug === "sources") return (
    <section className="article-supplement source-register-panel">
      <div className="section-heading"><div><p>{tx("Evidence register")}</p><h2>{tx("Primary sources")}</h2></div><p>{tx("Material workflow and policy claims link to the exact official page. Product facts link to the corresponding FindSpreadsheet record. Advice is presented as editorial advice, not as an official promise.")}</p></div>
      <ol className="source-list">{primarySources.map((source, index) => <li className="source-row" key={source.key}><span>{String(index + 1).padStart(2, "0")}</span><a href={source.url} target="_blank" rel="noopener noreferrer">{tx(source.label)} ↗</a><small>{tx("Checked 12 Aug 2026")}</small></li>)}</ol>
    </section>
  );

  const featuredSlugs = article.slug === "research-method"
      ? ["pikobuy-spreadsheet", "how-pikobuy-works", "shipping-cost-guide", "returns-exchanges", "category-research-guide", "sources", "seo-articles"]
      : [];
  if (!featuredSlugs.length) return null;
  const featuredArticles = featuredSlugs
    .map((slug) => articles.find((item) => item.slug === slug))
    .filter((item): item is Article => Boolean(item));

  return (
    <section className="article-supplement" aria-label={tx(article.slug === "seo-articles" ? "SEO Articles" : "Guides")}>
        <div className="section-heading"><div><p>{tx("Read before opening another tab")}</p><h2>{tx("Complete research guides")}</h2></div><p>{tx("Each arrow opens its own evidence-led article, with official sources, practical checks and clearly stated limits.")}</p></div>
        <div className="guide-grid article-index-grid">{featuredArticles.map((item, index) => (
          <Link className="guide-card" href={sitePath(locale, item.slug)} key={item.slug}>
            <span>{String(index + 1).padStart(2, "0")} · {tx(item.group)}</span>
            <h3>{tx(item.title)}</h3>
            <p>{tx(item.summary)}</p>
            <div><small>{tx(item.read)}</small><b>{tx("Read field guide")} →</b></div>
          </Link>
        ))}</div>
    </section>
  );
}

function ArticleView({ locale, article, dictionary }: { article: Article } & LocaleProps) {
  const tx = (value: string) => translate(dictionary, value);
  const completeGuideSlugs = ["pikobuy-spreadsheet", "how-pikobuy-works", "shipping-cost-guide", "returns-exchanges", "research-method", "category-research-guide", "seo-articles", "sources"];
  const relatedPool = completeGuideSlugs.includes(article.slug)
    ? articles.filter((item) => completeGuideSlugs.includes(item.slug))
    : articles.filter((item) => item.group === article.group);
  const related = relatedPool.filter((item) => item.slug !== article.slug).slice(0, 3);
  const deepGuide = deepGuides[article.slug] || hubGuides[article.slug] || expandedGuides[article.slug];
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    dateModified: "2026-08-13",
    author: { "@type": "Organization", name: "PikoBuy Spreadsheet Research Desk" },
    publisher: { "@type": "Organization", name: "PikoBuy Spreadsheet Research Hub" },
    mainEntityOfPage: absoluteSiteUrl(locale, article.slug),
  };
  const faqJsonLd = article.slug === "faq" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  } : null;

  return (
    <main className="article-wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />}
      <div className="breadcrumbs"><Link href={sitePath(locale)}>{tx("Home")}</Link><span>/</span><span>{tx(article.group)}</span><span>/</span><b>{tx(article.title)}</b></div>
      <header className="article-hero">
        <div><p className="eyebrow">{tx("Independent field guide")} · {tx(article.read)}</p><h1>{tx(article.title)}</h1><p>{tx(article.summary)}</p><div className="article-meta"><span>{tx("Research desk")}</span><span>{tx("Fact-checked 12 Aug 2026")}</span><span>{tx("Primary source linked")}</span></div></div>
        <aside><span>{tx("Quick answer")}</span><p>{tx(article.quickAnswer)}</p></aside>
      </header>
      <div className="article-layout">
        <article className="article-body">
          <section id="source-facts">
            <p className="section-number">{tx("00 / SOURCE BOUNDARY")}</p><h2>{tx("What the official source supports")}</h2>
            <p>{tx(deepGuide?.sourceContext || "Start with the narrow claim the source can support. This avoids turning a useful policy or product detail into a promise that the source never made.")}</p>
            <InlineSources sources={sourceRefsForText(deepGuide?.sourceContext || "", article)} label={tx("Sources")} />
            <ul>{article.facts.map((fact, index) => <li key={fact}><span>{tx(fact)}</span><InlineSources sources={sourcesForFact(article, index, fact)} label={tx("Source")} /></li>)}</ul>
            <div className="source-note"><span>{tx("Primary reference")}</span><a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">{tx(article.sourceLabel)} ↗</a><small>{tx("Last reviewed 12 August 2026. Open the official page for current wording and account-specific conditions.")}</small></div>
          </section>
          {deepGuide ? deepGuide.sections.map((section) => (
            <section id={section.id} className="deep-guide-section" key={section.id}><p className="section-number">{tx(section.label)}</p><h2>{tx(section.title)}</h2>{section.paragraphs.map((paragraph) => <div className="sourced-paragraph" key={paragraph}><p>{tx(paragraph)}</p><InlineSources sources={sourceRefsForText(paragraph)} label={tx("Sources")} /></div>)}{section.points && <ul className="deep-points">{section.points.map((point) => <li key={point}>{tx(point)}</li>)}</ul>}{section.callout && <blockquote>{tx(section.callout)}</blockquote>}</section>
          )) : (
            <>
              <section id="practical-method"><p className="section-number">{tx("02 / PRACTICAL METHOD")}</p><h2>{tx("How to turn the source into a useful check")}</h2><p>{tx("A spreadsheet row is strongest when another person can repeat the check. Keep the raw destination, visible option, currency and date beside your notes; then write down what is known and what remains uncertain.")}</p><ol>{article.checks.map((check, index) => <li key={check}><b>{String(index + 1).padStart(2, "0")}</b><span>{tx(check)}</span></li>)}</ol></section>
              <section id="decision-rule"><p className="section-number">{tx("03 / DECISION RULE")}</p><h2>{tx("Evidence first; the click comes last")}</h2><p>{tx("Open a product or agent route only after the row survives the relevant checks. A low price, familiar title or attractive first image is not enough. When details conflict, pause and resolve the source record instead of filling the gap with an assumption.")}</p><blockquote>{tx("Good research makes uncertainty visible. It does not hide uncertainty behind the word “verified.”")}</blockquote></section>
              <section id="common-errors"><p className="section-number">{tx("04 / COMMON ERRORS")}</p><h2>{tx("Mistakes that make this topic less useful")}</h2><div className="mistake-grid">{article.mistakes.map((mistake, index) => <div key={mistake}><span>0{index + 1}</span><p>{tx(mistake)}</p></div>)}</div></section>
            </>
          )}
          <section id="next-step"><p className="section-number">{tx("NEXT / PRODUCT RESEARCH")}</p><h2>{tx("Continue with a traceable product record")}</h2><p>{tx("Search the main database for a current product record, preserve the source URL and date, and keep official PikoBuy account actions separate from independent research.")}</p><a className="primary-cta" href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">{tx("Browse the product database")} <span>↗</span></a></section>
        </article>
        <aside className="article-sidebar">
          <div><span>{tx("On this page")}</span><a href="#source-facts">{tx("Source boundary")}</a>{deepGuide ? deepGuide.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{tx(section.title)}</a>) : <><a href="#practical-method">{tx("Practical method")}</a><a href="#decision-rule">{tx("Decision rule")}</a><a href="#common-errors">{tx("Common errors")}</a></>}<a href="#next-step">{tx("Next step")}</a></div>
          <div className="boundary-card"><span>{tx("Editorial boundary")}</span><p>{tx("This independent guide cannot inspect PikoBuy accounts, sellers, parcels, payments or refunds.")}</p></div>
        </aside>
      </div>
      <ArticleSupplement locale={locale} article={article} dictionary={dictionary} />
      <section className="related-guides"><p className="eyebrow">{tx("Continue the research")}</p><div className="related-grid">{related.map((item) => <Link key={item.slug} href={sitePath(locale, item.slug)}><span>{tx(item.group)} · {tx(item.read)}</span><h3>{tx(item.title)}</h3><p>{tx(item.summary)}</p></Link>)}</div></section>
    </main>
  );
}

export function ResearchSite({ locale, article, dictionary }: { locale: string; article?: Article; dictionary: LocaleDictionary }) {
  const t = getCopy(locale, dictionary);
  const tx = (value: string) => translate(dictionary, value);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <div className="research-site theme-workbench" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <Header locale={locale} dictionary={dictionary} currentSlug={article?.slug} />
      {article ? <ArticleView locale={locale} article={article} dictionary={dictionary} /> : <main className="home-view"><HomeView locale={locale} dictionary={dictionary} /></main>}
      <footer className="site-footer"><Link href={sitePath(locale)} className="site-brand site-brand-logo" aria-label="PikoBuy home"><Image unoptimized src="/pikobuy-logo.png" alt="PikoBuy" width={204} height={48} /></Link><p>{t.independent}</p><div><Link href={sitePath(locale, "about")}>{tx("About")}</Link><Link href={sitePath(locale, "research-method")}>{tx("Method")}</Link><Link href={sitePath(locale, "sources")}>{tx("Sources")}</Link></div></footer>
    </div>
  );
}
