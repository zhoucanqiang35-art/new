import Header from "./components/Header";
import Link from "next/link";
import { categories, categoryNames, copy, faqExtraAnswers, faqQuestions, products, type LocaleCode, type Product } from "./site-data";
import { communityReviewUrl, editorialArticles, findEditorialArticle, guideArticles, isEditorialArticleAvailable, mainSiteUrl, type EditorialSection } from "./editorial-data";

function localizedPath(lang: LocaleCode, path: string) {
  return lang === "en" ? path : `/${lang}${path === "/" ? "" : path}`;
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

function ProductImage({ product, className }: { product: Product; className: string }) {
  return <img className={className} src={product.image} alt={product.name} loading="lazy" />;
}

type GuideKind = "beginner" | "qc" | "shipping";

function localizedGuideSections(lang: LocaleCode, kind: GuideKind): EditorialSection[] {
  if (lang === "en") return guideArticles[kind];

  const c = copy[lang];
  const q = faqQuestions[lang];
  const [warehouseAnswer, trackingAnswer] = faqExtraAnswers[lang];
  const sections: Record<GuideKind, EditorialSection[]> = {
    beginner: [
      { heading: q[0], paragraphs: [c.beginnerBody, c.spreadsheetIntro] },
      { heading: q[3], paragraphs: [`${c.verify}. ${c.researchNote}`] },
      { heading: q[1], paragraphs: [c.qcBody] },
      { heading: q[4], paragraphs: [warehouseAnswer, c.shippingBody] },
      { heading: q[5], paragraphs: [trackingAnswer] },
    ],
    qc: [
      { heading: q[1], paragraphs: [c.qcBody] },
      { heading: q[6], paragraphs: [`${c.spreadsheetIntro} ${c.qcBody}`] },
      { heading: q[3], paragraphs: [`${c.verify}. ${c.researchNote}`] },
      { heading: q[7], paragraphs: [c.researchNote] },
      { heading: q[0], paragraphs: [c.beginnerBody] },
    ],
    shipping: [
      { heading: q[2], paragraphs: [c.shippingBody] },
      { heading: q[4], paragraphs: [warehouseAnswer] },
      { heading: q[3], paragraphs: [`${c.verify}. ${c.researchNote}`] },
      { heading: q[5], paragraphs: [trackingAnswer] },
      { heading: q[6], paragraphs: [`${c.beginnerBody} ${c.shippingBody}`] },
    ],
  };
  return sections[kind];
}

function articleSummary(lang: LocaleCode, slug: string) {
  const article = findEditorialArticle(slug);
  if (!article) return null;
  if (lang === "en") return { title: article.title, description: article.description, meta: `${article.readTime} · ${article.checked}` };

  const c = copy[lang];
  const index = editorialArticles.findIndex((item) => item.slug === slug);
  const titles = [c.spreadsheetTitle, `${c.nav[3]} · ${c.guidesTitle}`, `${c.nav[4]} · ${c.guidesTitle}`];
  const descriptions = [c.spreadsheetIntro, c.qcBody, c.shippingBody];
  return {
    title: titles[index] ?? c.seoTitle,
    description: descriptions[index] ?? c.seoIntro,
    meta: c.updated,
  };
}

function CategoryGrid({ lang }: { lang: LocaleCode }) {
  const c = copy[lang];
  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <a className="category-card" href={category.href} target="_blank" rel="noreferrer" key={category.key}>
          <span className="category-mark" aria-hidden="true">{category.mark}</span>
          <span className="category-copy"><strong>{categoryNames[lang][index]}</strong><small>{c.open}</small><small>{c.verify}</small></span>
          <span className="round-arrow" aria-hidden="true">↗</span>
          <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
        </a>
      ))}
    </div>
  );
}

function Home({ lang }: { lang: LocaleCode }) {
  const c = copy[lang];
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{c.checks} · {c.updated}</p>
          <h1 id="hero-title">{c.heroTitle}</h1>
          <p className="hero-lede">{c.heroLede}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">{c.explore} <span aria-hidden="true">↗</span></a>
            <a className="button button-outline" href={localizedPath(lang, "/guides/beginner")}>{c.beginner}</a>
          </div>
          <p className="byline">{c.byline}</p>
          <nav className="evidence-chips" aria-label={c.checks}>
            <a href={localizedPath(lang, "/sources")} aria-label={`${c.source}: ${c.open}`}>◈ {c.source}</a>
            <a href={localizedPath(lang, "/method")} aria-label={`${c.checks}: ${c.open}`}>⌕ {c.checks}</a>
            <a href={localizedPath(lang, "/updates")} aria-label={`${c.updated}: ${c.open}`}>□ {c.updated}</a>
          </nav>
          <p className="research-note"><strong>{c.checks}:</strong> {c.researchNote}</p>
        </div>
      </section>

      <section className="category-section" id="categories" aria-labelledby="category-title">
        <div className="shell section-heading"><div><p className="eyebrow">{c.browse}</p><h2 id="category-title">{c.categoryTitle}</h2></div><a href={localizedPath(lang, "/categories")}>{c.browse} <span aria-hidden="true">→</span></a></div>
        <div className="shell"><CategoryGrid lang={lang} /></div>
      </section>

      <section className="shell research-grid" aria-labelledby="latest-title">
        <div className="editorial-panel">
          <p className="eyebrow">{c.source}</p>
          <h2 id="latest-title">{c.spreadsheetTitle}</h2>
          <p>{c.spreadsheetIntro}</p>
          <a className="text-link" href={localizedPath(lang, "/spreadsheet")}>{c.explore} →</a>
          {lang === "en" && <p className="latest-research"><strong>Latest research · 10 Aug 2026</strong><Link href="/seo-articles/lolobuy-total-cost-fees-checklist">LoloBuy total cost and two-payment fees checklist →</Link></p>}
          <p className="price-note">USD · {c.updated} · {c.verify}</p>
        </div>
        <div className="product-rail" aria-label={c.spreadsheetTitle}>
          {products.map((product) => (
            <a href={product.href} target="_blank" rel="noreferrer" className="product-row" key={product.href}>
              <ProductImage product={product} className="product-thumb" />
              <span><strong>{product.name}</strong><small>{categoryNames[lang][product.categoryIndex]} · {product.cny}</small></span>
              <span className="product-price">{product.usd}<small>{c.open}</small></span>
            </a>
          ))}
        </div>
      </section>

      <section className="guide-band">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">{c.checks}</p><h2>{c.guidesTitle}</h2></div><a href={localizedPath(lang, "/guides")}>{c.nav[2]} →</a></div>
          <div className="guide-grid">
            {[ ["beginner", c.beginner, c.beginnerBody], ["qc", c.nav[3], c.qcBody], ["shipping", c.nav[4], c.shippingBody] ].map(([slug, title, text], index) => (
              <a href={localizedPath(lang, `/guides/${slug}`)} className="guide-card" key={slug}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><b>{c.open} →</b></a>
            ))}
          </div>
        </div>
      </section>

      <FAQ lang={lang} />
    </>
  );
}

function ProductIndex({ lang }: { lang: LocaleCode }) {
  const c = copy[lang];
  return (
    <Interior title={c.spreadsheetTitle} intro={c.spreadsheetIntro} eyebrow={c.source}>
      <div className="product-grid">
        {products.map((product, index) => (
          <a href={product.href} target="_blank" rel="noreferrer" className="product-card" key={product.href}>
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <ProductImage product={product} className="product-card-image" />
            <h2>{product.name}</h2><p>{categoryNames[lang][product.categoryIndex]}</p><strong>{product.usd}</strong><small>{product.cny} · ID {product.itemId}</small><b>{c.open} →</b>
          </a>
        ))}
      </div>
      <aside className="source-box"><strong>{c.verify}</strong><p>{c.researchNote}</p></aside>
    </Interior>
  );
}

function ProductDetail({ lang, product }: { lang: LocaleCode; product: Product }) {
  const c = copy[lang];
  return (
    <>
      <header className="interior-hero product-detail-hero shell">
        <p className="eyebrow">FindSpreadsheet · ID {product.itemId}</p>
        <h1>{product.name}</h1>
        <p>{c.spreadsheetIntro}</p>
      </header>
      <section className="shell interior-content product-detail-layout">
        <figure className="product-detail-media">
          <ProductImage product={product} className="product-detail-image" />
          <figcaption>{product.name} · FindSpreadsheet {c.source.toLowerCase()}</figcaption>
        </figure>
        <article className="product-detail-copy">
          <p className="eyebrow">{categoryNames[lang][product.categoryIndex]}</p>
          <div className="product-detail-price"><strong>{product.usd}</strong><span>{product.cny}</span></div>
          <p className="price-note">USD · FindSpreadsheet · {c.updated} · {c.verify}</p>
          <dl className="product-facts">
            <div><dt>ID</dt><dd>{product.itemId}</dd></div>
            <div><dt>{c.nav[1]}</dt><dd>{categoryNames[lang][product.categoryIndex]}</dd></div>
            <div><dt>{c.source}</dt><dd>FindSpreadsheet</dd></div>
          </dl>
          <p>{c.researchNote}</p>
          <div className="product-detail-actions">
            <a className="button button-primary" href={product.href} target="_blank" rel="noreferrer">{c.open} · FindSpreadsheet <span aria-hidden="true">↗</span></a>
            <a className="button button-outline" href={localizedPath(lang, "/guides/qc")}>{c.nav[3]}</a>
          </div>
          <aside className="source-box"><strong>{c.checks}</strong><p>{c.qcBody}</p></aside>
        </article>
      </section>
    </>
  );
}

function GuideIndex({ lang }: { lang: LocaleCode }) {
  const c = copy[lang];
  const guides = [["beginner", c.beginner, c.beginnerBody], ["qc", c.nav[3], c.qcBody], ["shipping", c.nav[4], c.shippingBody]];
  return <Interior title={c.guidesTitle} intro={c.guidesIntro} eyebrow={c.checks}><div className="guide-grid guide-grid-large">{guides.map(([slug,title,text], i) => <a href={localizedPath(lang, `/guides/${slug}`)} className="guide-card" key={slug}><span>0{i+1}</span><h2>{title}</h2><p>{text}</p><b>{c.open} →</b></a>)}</div></Interior>;
}

function GuideArticle({ lang, kind }: { lang: LocaleCode; kind: GuideKind }) {
  const c = copy[lang];
  const title = kind === "beginner" ? c.beginner : kind === "qc" ? c.nav[3] : c.nav[4];
  const body = kind === "beginner" ? c.beginnerBody : kind === "qc" ? c.qcBody : c.shippingBody;
  const related = editorialArticles[kind === "beginner" ? 0 : kind === "qc" ? 1 : 2];
  const relatedSummary = articleSummary(lang, related.slug)!;
  return (
    <Interior title={title} intro={body} eyebrow={`${title} · ${c.updated}`}>
      <article className="guide-article">
        <div className="article-verification"><strong>{c.checks}</strong><span>{c.source} · {c.updated}</span><span>{c.verify} · {c.researchNote}</span></div>
        <EditorialSections sections={localizedGuideSections(lang, kind)} />
        <aside className="article-next">
          <div><span>{c.seoTitle} · {relatedSummary.meta}</span><h2>{relatedSummary.title}</h2><p>{relatedSummary.description}</p></div>
          <a className="button button-primary" href={localizedPath(lang, `/seo-articles/${related.slug}`)}>{c.open} →</a>
        </aside>
        <SourceLinks lang={lang} includeCommunity={false} />
      </article>
    </Interior>
  );
}

function Review({ lang }: { lang: LocaleCode }) {
  const c = copy[lang];
  const q = faqQuestions[lang];
  if (lang !== "en") {
    const [warehouseAnswer, trackingAnswer] = faqExtraAnswers[lang];
    const cards = [
      [c.source, q[0], c.beginnerBody, c.researchNote],
      [c.checks, q[1], c.qcBody, c.verify],
      [c.nav[4], q[4], warehouseAnswer, c.shippingBody],
      [c.verify, q[5], trackingAnswer, c.updated],
    ];
    return (
      <Interior title={c.reviewTitle} intro={c.reviewIntro} eyebrow={`${c.checks} · ${c.updated}`}>
        <article className="review-report">
          <section className="review-verdict"><p className="eyebrow">{c.checks}</p><h2>{c.reviewTitle}</h2><p>{c.reviewIntro}</p></section>
          <div className="review-evidence-grid">
            {cards.map(([label, title, body, note], index) => <article key={title}><span>0{index + 1} · {label}</span><h2>{title}</h2><p>{body}</p><b>{note}</b></article>)}
          </div>
          <section className="review-scorecard" aria-label={c.reviewTitle}>
            <h2>{c.checks}</h2>
            <div><span>{c.beginner}</span><strong>{c.source}</strong></div>
            <div><span>{c.nav[3]}</span><strong>{c.checks}</strong></div>
            <div><span>{c.nav[4]}</span><strong>{c.verify}</strong></div>
            <div><span>{q[7]}</span><strong>{c.researchNote}</strong></div>
          </section>
          <SourceLinks lang={lang} includeCommunity />
        </article>
      </Interior>
    );
  }
  return (
    <Interior title={c.reviewTitle} intro={c.reviewIntro} eyebrow={`${c.checks} · 4 Aug 2026`}>
      <article className="review-report">
        <section className="review-verdict">
          <p className="eyebrow">EVIDENCE-LED VERDICT</p>
          <h2>Promising early evidence, but not enough public data for a universal score.</h2>
          <p>LoloBuy&apos;s public interface confirms a complete agent workflow: link-based purchasing, domestic delivery to a warehouse, visible inspection photographs, parcel building, rehearsal packing, international shipping, and tracking. Those are verifiable product capabilities. Service quality, seller outcomes, route reliability, and delivery experience still vary by order and destination.</p>
        </section>
        <div className="review-evidence-grid">
          <article><span>01 · OFFICIAL</span><h2>What the platform confirms</h2><p>Users can paste product links, purchase through China-based channels, review warehouse inspection information, combine eligible stored goods into a parcel, and track logistics after shipment.</p><b>Strong evidence: first-party interface</b></article>
          <article><span>02 · COMMUNITY</span><h2>What one early shopper reported</h2><p>A July 2026 Reddit report described smooth purchases of footwear and a handbag, solid QC images, responsive service, and a case where warehouse staff noticed two different shoe sizes and handled a return.</p><b>Useful evidence: one named experience</b></article>
          <article><span>03 · LIMIT</span><h2>What that report cannot prove</h2><p>It was explicitly a preliminary account before a completed haul review. One positive case cannot establish typical delivery speed, average shipping cost, support performance, or return outcomes for every seller and listing.</p><b>Do not turn an anecdote into a guarantee</b></article>
          <article><span>04 · BUYER TEST</span><h2>What to verify yourself</h2><p>Run a manageable first order, save the listing and variant, compare warehouse evidence, review a rehearsed parcel when dimensions matter, and judge the final route and tracking from your own destination.</p><b>Best evidence: your complete order record</b></article>
        </div>
        <section className="review-scorecard" aria-label="LoloBuy evidence scorecard">
          <h2>Evidence scorecard</h2>
          <div><span>Buying workflow</span><strong>Officially visible</strong></div>
          <div><span>Warehouse QC photographs</span><strong>Officially visible</strong></div>
          <div><span>Consolidation and rehearsal</span><strong>Officially visible</strong></div>
          <div><span>Fixed shipping price or delivery time</span><strong>Not supportable as a permanent claim</strong></div>
          <div><span>Independent long-term review base</span><strong>Still limited</strong></div>
        </section>
        <SourceLinks lang={lang} includeCommunity />
      </article>
    </Interior>
  );
}

function Sources({ lang }: { lang: LocaleCode }) {
  const c = copy[lang];
  return (
    <Interior title={c.source} intro={c.researchNote} eyebrow={`${c.source} · ${c.updated}`}>
      <div className="method-grid">
        <article>
          <span>01 · {c.source}</span>
          <h2>LoloBuy</h2>
          <p>{c.beginnerBody}</p>
          <a className="text-link" href={mainSiteUrl} target="_blank" rel="noreferrer">FindSpreadsheet ↗</a>
        </article>
        <article>
          <span>02 · {c.spreadsheetTitle}</span>
          <h2>FindSpreadsheet</h2>
          <p>{c.spreadsheetIntro}</p>
          <a className="text-link" href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">FindSpreadsheet ↗</a>
        </article>
        <article>
          <span>03 · {c.nav[3]}</span>
          <h2>{c.nav[3]}</h2>
          <p>{c.qcBody}</p>
          <a className="text-link" href={localizedPath(lang, "/guides/qc")}>{c.open} →</a>
        </article>
        <article>
          <span>04 · {c.nav[4]}</span>
          <h2>{c.nav[4]}</h2>
          <p>{c.shippingBody}</p>
          <a className="text-link" href={localizedPath(lang, "/guides/shipping")}>{c.open} →</a>
        </article>
      </div>
    </Interior>
  );
}

function Method({ lang }: { lang: LocaleCode }) {
  const c = copy[lang];
  const checks = [
    [`01 · ${c.spreadsheetTitle}`, c.spreadsheetTitle, c.spreadsheetIntro],
    [`02 · ${c.beginner}`, c.beginner, c.beginnerBody],
    [`03 · ${c.nav[3]}`, c.nav[3], c.qcBody],
    [`04 · ${c.nav[4]}`, c.nav[4], c.shippingBody],
  ];
  return (
    <Interior title={c.checks} intro={c.researchNote} eyebrow={`${c.checks} · ${c.updated}`}>
      <div className="method-grid">
        {checks.map(([label, title, body]) => (
          <article key={label}><span>{label}</span><h2>{title}</h2><p>{body}</p></article>
        ))}
      </div>
      <aside className="source-box"><strong>{c.verify}</strong><p>{c.reviewIntro}</p><a className="text-link" href={localizedPath(lang, "/updates")}>{c.updated} →</a></aside>
    </Interior>
  );
}

function SeoArticles({ lang }: { lang: LocaleCode }) {
  const c = copy[lang];
  const availableArticles = editorialArticles.filter((article) => isEditorialArticleAvailable(article, lang));
  return (
    <Interior title={c.seoTitle} intro={c.seoIntro} eyebrow={`${c.updated} · ${c.byline}`}>
      <div className="article-list">
        {availableArticles.map((article, i) => (
          <article key={article.slug}>
            <span>0{i + 1} · {articleSummary(lang, article.slug)!.meta}</span>
            <h2>{articleSummary(lang, article.slug)!.title}</h2>
            <p>{articleSummary(lang, article.slug)!.description}</p>
            <a href={localizedPath(lang, `/seo-articles/${article.slug}`)}>{c.open} →</a>
          </article>
        ))}
      </div>
    </Interior>
  );
}

function EditorialArticlePage({ lang, slug }: { lang: LocaleCode; slug: string }) {
  const article = findEditorialArticle(slug);
  if (!article || !isEditorialArticleAvailable(article, lang)) return null;
  const c = copy[lang];
  const summary = articleSummary(lang, slug)!;
  const kind: GuideKind = slug === editorialArticles[1].slug ? "qc" : slug === editorialArticles[2].slug ? "shipping" : "beginner";
  const articleUrl = `https://lolobuysheet.shop${localizedPath(lang, `/seo-articles/${slug}`)}`;
  const datePublished = article.published ?? "2026-08-04";
  const dateModified = article.modified ?? "2026-08-04";
  const availableArticles = editorialArticles.filter((item) => isEditorialArticleAvailable(item, lang));
  const articleIndex = availableArticles.findIndex((item) => item.slug === slug);
  const previousArticle = articleIndex > 0 ? availableArticles[articleIndex - 1] : undefined;
  const nextArticle = articleIndex >= 0 && articleIndex < availableArticles.length - 1 ? availableArticles[articleIndex + 1] : undefined;
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: summary.title,
    description: summary.description,
    inLanguage: lang,
    datePublished,
    dateModified,
    mainEntityOfPage: articleUrl,
    image: "https://lolobuysheet.shop/lolobuy-research-desk.jpg",
    author: { "@type": "Organization", name: "FindSpreadsheet editorial team", url: mainSiteUrl },
    publisher: { "@type": "Organization", name: "FindSpreadsheet", url: mainSiteUrl },
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://lolobuysheet.shop/" },
      { "@type": "ListItem", position: 2, name: "SEO Articles", item: "https://lolobuysheet.shop/seo-articles" },
      { "@type": "ListItem", position: 3, name: summary.title, item: articleUrl },
    ],
  };
  if (lang !== "en") {
    return (
      <>
        <JsonLd data={articleData} />
        <JsonLd data={breadcrumbData} />
        <Interior title={summary.title} intro={summary.description} eyebrow={`${c.seoTitle} · ${c.updated}`}>
          <article className="guide-article">
            <div className="article-verification"><strong>{c.checks}</strong><span>{c.source} · {c.updated}</span><span>{c.verify} · {c.researchNote}</span></div>
            <EditorialSections sections={localizedGuideSections(lang, kind)} />
            <SourceLinks lang={lang} includeCommunity={false} />
            <aside className="article-disclosure"><strong>{c.checks}</strong><p>{c.footer} {c.researchNote}</p><a className="text-link" href={localizedPath(lang, "/seo-articles")}>{c.seoTitle} →</a></aside>
          </article>
        </Interior>
      </>
    );
  }
  return (
    <>
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData} />
      <header className="interior-hero article-hero shell">
        <p className="eyebrow">{article.keyword} · {article.checked}</p>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <div className="article-meta"><span>{article.readTime}</span><span>Written and reviewed by the FindSpreadsheet editorial team</span><span>No paid score</span></div>
      </header>
      <article className="shell interior-content editorial-article">
        <nav className="article-toc" aria-label="Article contents">
          <strong>IN THIS GUIDE</strong>
          {article.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}><b>{String(index + 1).padStart(2, "0")}</b>{section.heading}</a>)}
        </nav>
        <div className="article-body">
          <div className="process-figure" role="img" aria-label={article.processAlt ?? "LoloBuy buying workflow: verify link, order, warehouse QC, parcel planning, and tracking"}>
            {(article.processSteps ?? ['Verify link', 'Order', 'Warehouse QC', 'Plan parcel', 'Track delivery']).map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}</span>)}
          </div>
          {article.sections.map((section, index) => (
            <section id={`section-${index + 1}`} key={section.heading}>
              <p className="section-number">{String(index + 1).padStart(2, "0")}</p>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
          {article.slug === "how-to-use-lolobuy-spreadsheet" && (
            <figure className="article-product-example">
              <ProductImage product={products[0]} className="article-product-image" />
              <figcaption><strong>Example of a matched index entry:</strong> the image, product name, USD reference price, and destination link should describe the same maintained product record. <a href={products[0].href} target="_blank" rel="noreferrer">Open matching FindSpreadsheet page ↗</a></figcaption>
            </figure>
          )}
          {article.sources && (
            <section className="article-source-log" id="fact-check-log">
              <p className="section-number">SOURCE LOG</p>
              <h2>Official sources and verification record</h2>
              <p>Platform-specific statements in this article were checked against the following LoloBuy pages. URLs are shown for auditability; the live account and checkout control an actual transaction.</p>
              <ol>{article.sources.map((source) => <li key={source.url}><strong>{source.label}</strong><span>{source.url}</span><small>Last checked {source.checked}</small></li>)}</ol>
            </section>
          )}
          <SourceLinks lang={lang} includeCommunity={false} />
          <nav className="article-pager" aria-label="Research article navigation">
            {previousArticle ? <a href={`/seo-articles/${previousArticle.slug}`}><span>Previous research</span><strong>{previousArticle.title}</strong></a> : <span />}
            {nextArticle ? <a href={`/seo-articles/${nextArticle.slug}`}><span>Next research</span><strong>{nextArticle.title}</strong></a> : <Link href="/seo-articles"><span>Research archive</span><strong>View all SEO articles</strong></Link>}
          </nav>
          <aside className="article-disclosure"><strong>Editorial disclosure</strong><p>This is an independent educational article. It is not owned, operated, sponsored, or endorsed by LoloBuy. Platform details were checked against LoloBuy&apos;s public website and interface on {new Date(`${dateModified}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}; live account terms control an actual transaction.</p><a className="text-link" href={localizedPath(lang, "/seo-articles")}>Back to research articles →</a></aside>
        </div>
      </article>
    </>
  );
}

function Updates({ lang }: { lang: LocaleCode }) {
  const c = copy[lang];
  return <Interior title={`${c.source} · ${c.updated}`} intro={c.researchNote} eyebrow={c.checks}><div className="update-list">{lang === "en" && <article><time>10-08-2026</time><h2>LoloBuy Total Cost: A Two-Payment Fees Checklist for 2026</h2><p>A fact-checked landed-cost method covering item payment, Chinese delivery, warehouse decisions, freight adjustments, payment fees and destination charges.</p><Link className="text-link" href="/seo-articles/lolobuy-total-cost-fees-checklist">Read the complete research article →</Link></article>}<article><time>04-08-2026</time><h2>{c.seoTitle}</h2><p>{c.seoIntro}</p></article><article><time>04-08-2026</time><h2>{c.reviewTitle}</h2><p>{c.reviewIntro}</p></article><article><time>04-08-2026</time><h2>{c.source}</h2><p>{c.beginnerBody}</p></article></div></Interior>;
}

function FAQ({ lang, standalone = false }: { lang: LocaleCode; standalone?: boolean }) {
  const c = copy[lang];
  const [warehouseAnswer, trackingAnswer] = faqExtraAnswers[lang];
  const answers = [
    c.beginnerBody,
    c.qcBody,
    c.shippingBody,
    `${c.verify}. ${c.spreadsheetIntro}`,
    warehouseAnswer,
    trackingAnswer,
    `${c.spreadsheetIntro} ${c.qcBody}`,
    `${c.verify}. ${c.researchNote}`,
  ];
  const items = faqQuestions[lang].map((question, index) => [question, answers[index]] as const);
  const Heading = standalone ? "h1" : "h2";
  return (
    <section className="faq-section shell" aria-labelledby="faq-title">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: lang,
        mainEntity: items.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }} />
      <div className="faq-shell">
        <header className="faq-heading">
          <p className="eyebrow">FAQ · {c.updated}</p>
          <Heading className="faq-title" id="faq-title">{c.faqTitle}</Heading>
          <p>{c.faqIntro}</p>
        </header>
        <div className="faq-grid">
          {items.map(([question, answer], index) => (
            <details key={question}>
              <summary>
                <span className="faq-question"><b>{String(index + 1).padStart(2, "0")}</b>{question}</span>
                <span className="faq-chevron" aria-hidden="true">⌄</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <aside className="faq-cta">
          <div><span>{c.checks}</span><strong>{c.beginner}</strong><p>{c.guidesIntro}</p></div>
          <a className="button button-primary" href={localizedPath(lang, "/guides/beginner")}>{c.beginner} <span aria-hidden="true">→</span></a>
        </aside>
      </div>
    </section>
  );
}

function Interior({ title, intro, eyebrow, children }: { title: string; intro: string; eyebrow: string; children: React.ReactNode }) {
  return <><header className="interior-hero shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></header><section className="shell interior-content">{children}</section></>;
}

function EditorialSections({ sections }: { sections: EditorialSection[] }) {
  return <div className="guide-sections">{sections.map((section, index) => <section key={section.heading}><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}</div>;
}

function SourceLinks({ lang, includeCommunity }: { lang: LocaleCode; includeCommunity: boolean }) {
  const c = copy[lang];
  return (
    <aside className="source-links">
      <strong>{c.source} · {c.checks}</strong>
      <a href={mainSiteUrl} target="_blank" rel="noreferrer">FindSpreadsheet · {c.spreadsheetTitle} · {c.updated} ↗</a>
      {includeCommunity && <a href={communityReviewUrl} target="_blank" rel="noreferrer">Reddit · {c.reviewTitle} · {c.updated} ↗</a>}
      <span>{c.researchNote}</span>
    </aside>
  );
}

function Footer({ lang }: { lang: LocaleCode }) {
  const c = copy[lang];
  return <footer className="footer"><div className="shell footer-grid"><div><a className="wordmark brand-logo-link footer-logo-link" href={localizedPath(lang, "/")} aria-label="LoloBuy Sheet"><img className="brand-logo footer-logo" src="/lolobuy-logo.webp" alt="" width="200" height="200" /><span className="brand-name">LoloBuy Sheet</span></a><p>{c.footer}</p></div><div><strong>{c.source}</strong><a href={localizedPath(lang, "/sources")}>{c.source}</a><a href={localizedPath(lang, "/method")}>{c.checks}</a><a href={localizedPath(lang, "/faq")}>{c.faqTitle}</a><a href={localizedPath(lang, "/updates")}>{c.updated}</a><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">FindSpreadsheet ↗</a></div><div><strong>{c.checks}</strong><span>{c.updated}</span><span>{c.verify}</span><span>24 · EN · DE · FR · ES · +20</span></div></div></footer>;
}

export default function SitePage({ lang, path }: { lang: LocaleCode; path: string }) {
  const c = copy[lang];
  const product = path.startsWith("/products/") ? products.find((item) => item.slug === path.slice("/products/".length)) : undefined;
  const editorialArticle = path.startsWith("/seo-articles/") ? findEditorialArticle(path.slice("/seo-articles/".length)) : undefined;
  let content: React.ReactNode;
  if (path === "/") content = <Home lang={lang} />;
  else if (path === "/spreadsheet") content = <ProductIndex lang={lang} />;
  else if (product) content = <ProductDetail lang={lang} product={product} />;
  else if (path === "/categories") content = <Interior title={c.categoryTitle} intro={c.spreadsheetIntro} eyebrow={c.browse}><CategoryGrid lang={lang} /></Interior>;
  else if (path === "/guides") content = <GuideIndex lang={lang} />;
  else if (path === "/guides/beginner") content = <GuideArticle lang={lang} kind="beginner" />;
  else if (path === "/guides/qc") content = <GuideArticle lang={lang} kind="qc" />;
  else if (path === "/guides/shipping") content = <GuideArticle lang={lang} kind="shipping" />;
  else if (path === "/reviews") content = <Review lang={lang} />;
  else if (path === "/sources") content = <Sources lang={lang} />;
  else if (path === "/method") content = <Method lang={lang} />;
  else if (path === "/seo-articles") content = <SeoArticles lang={lang} />;
  else if (editorialArticle) content = <EditorialArticlePage lang={lang} slug={editorialArticle.slug} />;
  else if (path === "/updates") content = <Updates lang={lang} />;
  else if (path === "/faq") content = <FAQ lang={lang} standalone />;
  else content = <Interior title="404" intro={c.researchNote} eyebrow={c.updated}><a className="button button-primary" href={localizedPath(lang, "/")}>LoloBuy Sheet</a></Interior>;
  return <main className={path === "/" ? "home-page" : undefined} lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "LoloBuy Sheet",
      url: `https://lolobuysheet.shop${lang === "en" ? "/" : `/${lang}`}`,
      inLanguage: lang,
      publisher: { "@type": "Organization", name: "FindSpreadsheet", url: mainSiteUrl },
    }} />
    <Header lang={lang} path={path} labels={c.nav} />{content}<Footer lang={lang} />
  </main>;
}
