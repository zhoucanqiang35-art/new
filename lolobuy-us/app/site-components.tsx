import Link from "next/link";
import Image from "next/image";
import { Badge, Cpu, Crown, Footprints, Layers3, PackageOpen, Ruler, Shield, Shirt, Watch, type LucideIcon } from "lucide-react";
import { categories, contentPages, faqs, homeDetailCopy, homeSectionCopy, localeCopy, localeUiCopy, productHighlights, type ContentPage, type HomeDetailCopy, type ProductHighlight } from "./site-data";
import { Logo, SiteHeader } from "./site-header";
import { localizedPage, translatedPairs, tx } from "./content-i18n";

export function Arrow() { return <span aria-hidden="true">↗</span>; }

const categoryIcons: Record<string, LucideIcon> = {
  shoes: Footprints,
  hoodie: Layers3,
  tshirt: Shirt,
  jacket: Shield,
  pants: Ruler,
  headwear: Crown,
  accessories: Watch,
  jersey: Badge,
  electronics: Cpu,
  other: PackageOpen,
};

function CategoryIcon({ name }: { name: string }) {
  const Icon = categoryIcons[name] || PackageOpen;
  return <Icon aria-hidden="true" strokeWidth={1.55} />;
}

function prefixed(locale: string, path: string) {
  return locale === "en" ? path : `/${locale}${path === "/" ? "" : path}`;
}

function resolvedHomeDetail(locale: string): HomeDetailCopy {
  if (homeDetailCopy[locale]) return homeDetailCopy[locale];
  const ui = localeUiCopy[locale] || localeUiCopy.en;
  const section = homeSectionCopy[locale] || homeSectionCopy.en;
  const hero = localeCopy[locale] || localeCopy.en;
  const categoryNames = [...categories.map((category) => category.name), ui.footerLinks[1]];
  const categoryLenses = [...categories.map(() => ui.nav[2]), section.categories[1]];
  return {
    heroKicker: `${section.labels[1]} • LOLOBUY 2026`,
    proof: [ui.footerLinks[1], ui.languageLabel, hero.source],
    productBadge: section.labels[0],
    productOpen: ui.searchAction,
    productNote: section.product[1],
    productReview: section.categories[1],
    categoryNames,
    categoryLenses,
    visual: [ui.nav[2], ui.nav[2], section.journal[0], hero.source, section.labels[1], section.product[1]],
    cards: [
      [`01 / ${ui.nav[0]}`, ui.searchAction, section.categories[1], ui.nav[0]],
      [`02 / ${ui.nav[2]}`, ui.nav[2], section.journal[0], ui.nav[2]],
      [`03 / ${ui.nav[3]}`, ui.nav[3], section.flow[1], ui.nav[3]],
      [hero.source, section.flow[1], ui.footerLinks[4]],
    ],
    flowSteps: [
      [ui.nav[0], section.categories[1], section.product[1], ui.nav[0]],
      [section.labels[1], section.product[1], section.categories[1], section.labels[1]],
      [ui.nav[2], section.journal[0], section.categories[1], ui.nav[2]],
      [ui.nav[3], section.flow[1], section.product[1], ui.nav[3]],
    ],
    journalItems: [
      [ui.nav[1], section.flow[2]],
      [ui.nav[2], section.journal[2]],
      [ui.footerLinks[3], section.labels[1]],
      [ui.nav[5], ui.footerLinks[5]],
    ],
  };
}

export function SearchBox({ compact = false, locale = "en" }: { compact?: boolean; locale?: string }) {
  const copy = localeUiCopy[locale] || localeUiCopy.en;
  return (
    <form className={`elite-search ${compact ? "compact-search" : ""}`} action="https://findspreadsheet.com/search.html" method="get" target="_blank">
      <input type="hidden" name="channelid" value="2" />
      <label><span className="sr-only">{copy.searchLabel}</span><input name="keywords" placeholder={copy.searchPlaceholder} required /></label>
      <button type="submit">{copy.searchAction} <Arrow /></button>
    </form>
  );
}

function ResearchStamp({ localized = "Official process checked", locale = "en" }: { localized?: string; locale?: string }) {
  const checkedDate = new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(2026, 7, 11)));
  return <div className="research-stamp dark"><span className="stamp-pulse" /><div><b>{localized.toUpperCase()}</b><small>LoloBuy • {checkedDate}</small></div></div>;
}

function CategoryGrid({ locale = "en" }: { locale?: string }) {
  const detail = resolvedHomeDetail(locale);
  return (
    <div className="cobalt-category-grid">
      {categories.map((category, index) => (
        <a href={category.href} target="_blank" rel="noreferrer" key={category.name}>
          <span className="category-media"><Image src={category.image} alt={category.imageAlt} fill sizes="(max-width: 620px) 50vw, (max-width: 1150px) 25vw, 20vw" loading="eager" unoptimized /></span>
          <span className="category-shade" aria-hidden="true" />
          <span className="category-top"><span>{category.number}</span><i aria-hidden="true"><CategoryIcon name={category.icon} /></i></span>
          <span className="category-copy"><b>{detail.categoryNames[index] || category.name}</b><small>{detail.categoryLenses[index] || category.lens}</small></span>
          <Arrow />
        </a>
      ))}
    </div>
  );
}

function ProductCard({ product, locale = "en", duplicate = false }: { product: ProductHighlight; locale?: string; duplicate?: boolean }) {
  const detail = resolvedHomeDetail(locale);
  return (
    <a
      className="product-rail-card"
      href={product.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${product.name}, approximately US $${product.priceUsd}, converted from a CNY ${product.sourcePriceCny} source listing; open the full product page on FindSpreadsheet`}
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <span className="product-rail-image">
        <Image src={product.image} alt={duplicate ? "" : product.name} width={750} height={750} sizes="(max-width: 620px) 76vw, 300px" loading="eager" unoptimized />
        <small>{detail.productBadge}</small>
      </span>
      <span className="product-rail-copy">
        <small>{product.category} · ID {product.productId}</small>
        <b>{product.name}</b>
        <span>{detail.productReview || product.reviewLens}</span>
        <strong><span>≈ US${product.priceUsd}</span> <i>{detail.productOpen} ↗</i></strong>
      </span>
    </a>
  );
}

function ProductRail({ locale = "en" }: { locale?: string }) {
  const copy = homeSectionCopy[locale] || homeSectionCopy.en;
  const detail = resolvedHomeDetail(locale);
  return (
    <section className="product-rail" aria-labelledby="latest-products-title">
      <div className="product-rail-heading">
        <div><span>{copy.labels[0]} / 10 AUG 2026</span><h2 id="latest-products-title">{copy.product[0]}</h2></div>
        <p>{copy.product[1]}</p>
        <a href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">{copy.product[2]} <Arrow /></a>
      </div>
      <div className="product-rail-window" aria-label="Auto-scrolling latest product details; hover, focus or swipe to pause and inspect">
        <div className="product-rail-track">
          {productHighlights.map((product) => <ProductCard key={product.href} product={product} locale={locale} />)}
          {productHighlights.map((product) => <ProductCard key={`duplicate-${product.href}`} product={product} locale={locale} duplicate />)}
        </div>
      </div>
      <small className="product-rail-note">{detail.productNote} · USD ≈ 1 CNY × US$0.1482 · 10 AUG 2026</small>
    </section>
  );
}

function wordCount(page: ContentPage) {
  return page.sections.reduce((total, section) => {
    const prose = [section.heading, ...section.paragraphs, ...(section.bullets || [])].join(" ");
    return total + prose.trim().split(/\s+/).filter(Boolean).length;
  }, 0);
}

function ArticleVisual({ kind, locale = "en" }: { kind: NonNullable<ContentPage["visual"]>; locale?: string }) {
  if (kind === "qc") {
    const frames = [
      ["ORDER MATCH", "Variant, colour, size, quantity", "#section-2"],
      ["SILHOUETTE", "Front, back, side and overall shape", "#section-3"],
      ["SYMMETRY", "Left versus right; front versus back", "#section-4"],
      ["CONSTRUCTION", "Seams, edges, graphics and hardware", "#section-5"],
      ["COLOUR & SURFACE", "Lighting, texture and visible marks", "#section-6"],
      ["MEASUREMENTS", "Ruler placement and size tolerance", "#section-7"],
      ["PACKAGING", "Included parts and transit vulnerability", "#section-8"],
    ] as const;
    return (
      <figure className="article-visual visual-qc qc-navigator" aria-label={tx(locale, "Seven-frame QC article navigator")}>
        <figcaption><b>{tx(locale, "QC QUICK NAVIGATOR")}</b><span>{tx(locale, "SELECT A FRAME TO OPEN ITS FULL EXPLANATION")}</span></figcaption>
        <div>
          {frames.map(([label, detail, href], index) => (
            <a href={href} key={label}>
              <i>{String(index + 1).padStart(2, "0")}</i>
              <b>{tx(locale, label)}</b>
              <small>{tx(locale, detail)}</small>
              <strong>{tx(locale, "READ FRAME")} <span aria-hidden="true">↓</span></strong>
            </a>
          ))}
        </div>
        <nav aria-label={tx(locale, "QC guide supporting sections")}>
          <a href="#section-9">{tx(locale, "WHAT PHOTOS CANNOT PROVE")} <span aria-hidden="true">↓</span></a>
          <a href="#section-10">{tx(locale, "HOW TO REQUEST A USEFUL CLARIFICATION")} <span aria-hidden="true">↓</span></a>
        </nav>
        <small>{tx(locale, "This is a functional table of contents for the independent QC method below—not a LoloBuy interface, certification or guarantee.")}</small>
      </figure>
    );
  }
  const visuals = {
    workflow: { label: "LINK → ORDER → WAREHOUSE → PARCEL", nodes: ["PRODUCT LINK", "SELLER ORDER", "QC PHOTOS", "INTERNATIONAL PARCEL"] },
    shipping: { label: "PARCEL DECISION STACK", nodes: ["CONTENTS", "PACKAGING", "CHARGEABLE WEIGHT", "ELIGIBLE ROUTE"] },
    tracking: { label: "TRACKING IS A HANDOFF CHAIN", nodes: ["LABEL DATA", "EXPORT", "CUSTOMS", "LAST MILE"] },
    cost: { label: "LANDED-COST WORKSHEET", nodes: ["ITEM", "WAREHOUSE", "FREIGHT", "DESTINATION"] },
  } as const;
  const visual = visuals[kind];
  return (
    <figure className={`article-visual visual-${kind}`} aria-label={tx(locale, visual.label)}>
      <figcaption><b>{tx(locale, "INDEPENDENT EXPLAINER")}</b><span>{tx(locale, visual.label)}</span></figcaption>
      <div>{visual.nodes.map((node, index) => <div key={node}><i>{String(index + 1).padStart(2, "0")}</i><b>{tx(locale, node)}</b>{index < visual.nodes.length - 1 && <span aria-hidden="true">→</span>}</div>)}</div>
      <small>{tx(locale, "Diagram summarizes the editorial method. It is not an official LoloBuy interface or guarantee.")}</small>
    </figure>
  );
}

export function CobaltHome({ locale = "en" }: { locale?: string }) {
  const copy = localeCopy[locale] || localeCopy.en;
  const ui = localeUiCopy[locale] || localeUiCopy.en;
  const sections = homeSectionCopy[locale] || homeSectionCopy.en;
  const detail = resolvedHomeDetail(locale);
  return (
    <main className="elite-site cobalt-site" id="top" dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <SiteHeader locale={locale} />
      <section className="cobalt-hero" aria-labelledby="home-hero-title">
        <div className="cobalt-hero-media" aria-hidden="true">
          <Image src="/elite-cobalt-hero.png" alt="" fill sizes="100vw" priority unoptimized />
        </div>
        <div className="cobalt-copy">
          <ResearchStamp localized={copy.source} locale={locale} />
          <p className="micro-label">{detail.heroKicker}</p>
          <h1 id="home-hero-title">{copy.title}<br /><em>{copy.accent}</em></h1>
          <p className="hero-lede">{copy.lede}</p>
          <SearchBox locale={locale} />
          <div className="hero-proof"><span><b>10</b> {detail.proof[0]}</span><span><b>24</b> {detail.proof[1]}</span><span><b>{locale === "en" || locale === "zh" ? "0" : "✓"}</b> {detail.proof[2]}</span></div>
          <Link className="hero-qc-link" href={prefixed(locale, "/guides/qc-photos")}>{detail.visual[5]} <Arrow /></Link>
        </div>
      </section>

      <ProductRail locale={locale} />

      <section className="cobalt-bento" aria-label={sections.labels[1]}>
        <article className="bento-lead"><p>{sections.labels[1]}</p><h2>{sections.intelligence}</h2><a href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">{copy.browse.toUpperCase()} <Arrow /></a></article>
        <div className="bento-steps">
          <article className="bento-search"><span>{detail.cards[0][0]}</span><h3>{detail.cards[0][1]}</h3><p>{detail.cards[0][2]}</p><ol className="search-handoff" aria-label="Search workflow"><li><span>01</span><b>{ui.searchAction}</b></li><li><span>02</span><b>{sections.product[2]}</b></li><li><span>03</span><b>{sections.categories[0]}</b></li></ol><a className="text-link" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">{detail.cards[0][3]} <Arrow /></a></article>
          <article className="bento-verify"><span>{detail.cards[1][0]}</span><div className="radar"><i /><i /><i /><b>QC</b></div><h3>{detail.cards[1][1]}</h3><p>{detail.cards[1][2]}</p><Link className="text-link" href={`${prefixed(locale, "/guides/qc-photos")}#section-1`}>{detail.cards[1][3]} <Arrow /></Link></article>
          <article className="bento-route"><span>{detail.cards[2][0]}</span><div className="route-line"><i>CN</i><b /><i>WH</i><b /><i>US</i></div><h3>{detail.cards[2][1]}</h3><p>{detail.cards[2][2]}</p><Link className="text-link" href={`${prefixed(locale, "/guides/shipping")}#section-1`}>{detail.cards[2][3]} <Arrow /></Link></article>
        </div>
        <article className="bento-fact"><strong>{detail.cards[3][0]}</strong><p>{detail.cards[3][1]}</p><Link href={`${prefixed(locale, "/sources")}#warehouse-inspection`}>{detail.cards[3][2]} <Arrow /></Link></article>
      </section>

      <section className="cobalt-categories">
        <div className="cobalt-section-head"><div><p>{sections.labels[2]}</p><h2>{sections.categories[0]}</h2></div><p>{sections.categories[1]}</p></div>
        <CategoryGrid locale={locale} />
      </section>

      <section className="cobalt-flow">
        <div className="flow-title"><p>{sections.labels[3]}</p><h2>{sections.flow[0]}</h2><p>{sections.flow[1]}</p><Link className="section-action" href={prefixed(locale, "/guides/how-lolobuy-works")}>{sections.flow[2]} <Arrow /></Link></div>
        <div className="flow-stack">
          {detail.flowSteps.map(([title, officialFact, decisionCheck, tag], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{title}</b><strong>{officialFact}</strong><p>{decisionCheck}</p></div><i>{tag}</i></article>)}
        </div>
      </section>

      <section className="cobalt-journal">
        <div className="journal-feature"><span>{sections.labels[4]} / 01</span><h2>{sections.journal[0]}</h2><p>{sections.journal[1]}</p><Link href={prefixed(locale, "/guides/qc-photos")}>{sections.journal[2]} <Arrow /></Link></div>
        <div className="journal-list">
          <Link href={prefixed(locale, "/guides/fees-and-weight")}><span>02</span><div><b>{detail.journalItems[0][0]}</b><small>{detail.journalItems[0][1]}</small></div><Arrow /></Link>
          <Link href={prefixed(locale, "/guides/tracking")}><span>03</span><div><b>{detail.journalItems[1][0]}</b><small>{detail.journalItems[1][1]}</small></div><Arrow /></Link>
          <Link href={prefixed(locale, "/methodology")}><span>04</span><div><b>{detail.journalItems[2][0]}</b><small>{detail.journalItems[2][1]}</small></div><Arrow /></Link>
          <Link href={prefixed(locale, "/updates")}><span>05</span><div><b>{detail.journalItems[3][0]}</b><small>{detail.journalItems[3][1]}</small></div><Arrow /></Link>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}

export function SiteFooter({ locale = "en" }: { locale?: string }) {
  const copy = localeUiCopy[locale] || localeUiCopy.en;
  const sourceCopy = localeCopy[locale] || localeCopy.en;
  const sourceDate = new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(2026, 7, 11)));
  const footerGroups = [
    {
      label: locale === "zh" ? "查找与比较" : locale === "en" ? "FIND & COMPARE" : copy.footerGroups[0],
      items: [
        {
          title: copy.footerLinks[0],
          href: prefixed(locale, "/spreadsheet"),
        },
        {
          title: copy.footerLinks[1],
          href: "https://findspreadsheet.com/",
          external: true,
        },
        {
          title: copy.footerLinks[2],
          href: prefixed(locale, "/faq"),
        },
      ],
    },
    {
      label: locale === "zh" ? "提交包裹前检查" : locale === "en" ? "CHECK BEFORE SHIPPING" : `${copy.nav[2]} / ${copy.nav[3]}`,
      items: [
        {
          title: locale === "zh" ? "仓库照片与质检" : copy.nav[2],
          href: prefixed(locale, "/guides/qc-photos"),
        },
        {
          title: locale === "zh" ? "费用、重量与运输" : copy.nav[3],
          href: prefixed(locale, "/guides/shipping"),
        },
        {
          title: locale === "zh" ? "包裹追踪与异常" : locale === "en" ? "Tracking & parcel issues" : tx(locale, "Tracking events, handoffs and useful escalation details"),
          href: prefixed(locale, "/guides/tracking"),
        },
      ],
    },
    {
      label: locale === "zh" ? "来源与更正" : locale === "en" ? "VERIFY & CORRECT" : copy.footerGroups[1],
      items: [
        {
          title: copy.footerLinks[4],
          href: prefixed(locale, "/sources"),
        },
        {
          title: copy.footerLinks[3],
          href: prefixed(locale, "/methodology"),
        },
        {
          title: copy.footerLinks[5],
          href: prefixed(locale, "/updates"),
        },
      ],
    },
  ];
  const officialSummary = locale === "zh"
    ? "本次官网核对能确认：用户可以粘贴商品链接开始下单；仓库中已有的商品可以选中并合并提交为一个包裹，再进入国际运输。官网公开文字不能证明商品真伪，也没有为每笔订单保证固定照片数量、固定费用、可用线路或到货时间。提交包裹前，请以实时账户显示的价格、限制、计费重量和线路资格为准。"
    : "The current official pages confirm two useful stages: a shopper can begin with a pasted product link, and stored warehouse items can be selected and submitted together as one parcel for international shipping. That public wording does not authenticate a product or guarantee a fixed photo count, fee, route or delivery time. Recheck live prices, restrictions, chargeable weight and route eligibility before submitting.";
  return (
    <footer className="elite-footer cobalt-footer">
      <div className="footer-brand"><Logo locale={locale} /><p>{copy.footerDisclosure}</p></div>
      <nav className="footer-guide-grid" aria-label={tx(locale, "Footer guide navigation")}>
        {footerGroups.map((group) => <section key={group.label} className="footer-guide-group">
          <b>{group.label}</b>
          {group.items.map((item) => {
            const body = <><strong>{item.title}</strong><Arrow /></>;
            return item.external
              ? <a className="footer-guide-link" key={item.href} href={item.href} target="_blank" rel="noreferrer">{body}</a>
              : <Link className="footer-guide-link" key={item.href} href={item.href}>{body}</Link>;
          })}
        </section>)}
      </nav>
      <section className="footer-official-note">
        <div><span>{locale === "zh" ? "官网事实核对 / 2026年8月11日" : "OFFICIAL PAGE CHECK / 11 AUG 2026"}</span><p>{officialSummary}</p></div>
        <div className="footer-source-text" aria-label={sourceCopy.source}>
          <b>{sourceCopy.source}</b>
          <small>LoloBuy • {sourceDate}</small>
        </div>
      </section>
      <div className="footer-utility"><b>{copy.footerGroups[2]}</b><Link href={prefixed(locale, "/disclosure")}>{copy.footerLinks[6]}</Link><Link href={prefixed(locale, "/privacy")}>{copy.footerLinks[7]}</Link><Link href={prefixed(locale, "/contact")}>{copy.footerLinks[8]}</Link></div>
      <small>{copy.footerStatus} • © 2026 LOLOBUY.US</small>
    </footer>
  );
}

export function ContentPageView({ page, locale = "en" }: { page: ContentPage; locale?: string }) {
  const translatedPage = localizedPage(page, locale);
  const words = wordCount(page);
  const isSourcesPage = page === contentPages.sources;
  const displayParagraph = (paragraph: string, originalParagraph: string) => {
    let result = paragraph;
    if (isSourcesPage && originalParagraph.includes("linked below")) {
      result = result.replace(/(?:[^.!?。！？]+[.!?。！？]\s*)$/, "").trim();
    }
    if (/Official-process links can lead|External official links open/.test(originalParagraph)) {
      result = result.replace(/[^.!?。！？]*LoloBuy\.com[^.!?。！？]*[.!?。！？]\s*/i, "").trim();
    }
    return result;
  };
  return (
    <main className="elite-site cobalt-site content-site" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <SiteHeader locale={locale} />
      <section className="content-hero"><div><p>{translatedPage.kicker}</p><h1>{translatedPage.title}</h1><p>{translatedPage.summary}</p>{translatedPage.readTime && <small>{translatedPage.readTime} {words >= 1000 && <>• {words.toLocaleString(locale)} {tx(locale, "words")}</>}</small>}</div><aside><ResearchStamp locale={locale} /><span>{tx(locale, "FACTS ≠ ADVICE")}</span><p>{tx(locale, "Platform facts are sourced. Independent guidance is labeled by context and avoids guarantees.")}</p></aside></section>
      {translatedPage.visual && <ArticleVisual kind={translatedPage.visual} locale={locale} />}
      <div className="content-layout">
        <aside className="content-rail"><span>{tx(locale, "ON THIS PAGE")}</span>{translatedPage.sections.map((section, index) => <a key={section.heading} href={`#${section.id || `section-${index + 1}`}`}><b>{String(index + 1).padStart(2, "0")}</b>{section.heading}</a>)}</aside>
        <article className={`article-body ${isSourcesPage ? "sources-body" : ""}`}>
          {translatedPage.sections.map((section, index) => <section id={section.id || `section-${index + 1}`} key={section.heading}><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraph}>{displayParagraph(paragraph, page.sections[index].paragraphs[paragraphIndex])}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
          {translatedPage.sources && <section className="source-register" id="official-sources"><span>SRC</span><h2>{tx(locale, "Claim-by-claim evidence for this guide")}</h2><p>{tx(locale, "Platform facts are sourced. Independent guidance is labeled by context and avoids guarantees.")} {tx(locale, "Changing platform details are dated and should be rechecked before purchase.")}</p><div className="source-notes" aria-label={tx(locale, "Claim-by-claim evidence for this guide")}>{translatedPage.sources.map((source) => <p key={source.label}><b>{source.label}</b><small>{source.note}</small></p>)}</div></section>}
        </article>
      </div>
      <MoreReading locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}

function MoreReading({ locale }: { locale: string }) {
  const copy = localeUiCopy[locale] || localeUiCopy.en;
  return <section className="more-reading"><span>{tx(locale, "CONTINUE ON THE MAIN PRODUCT SITE")}</span><a className="more-reading-main" href="https://findspreadsheet.com/" target="_blank" rel="noreferrer"><small>FINDSPREADSHEET.COM</small><b>{tx(locale, "Browse the current product database, categories and latest additions on the main site.")}</b><strong>{copy.footerLinks[1].toUpperCase()} <Arrow /></strong></a></section>;
}

function SpreadsheetEndcap({ locale }: { locale: string }) {
  const copy = localeUiCopy[locale] || localeUiCopy.en;
  const buttonLabel = locale === "en" ? "Browse the Product Database" : locale === "zh" ? "浏览主站商品数据库" : copy.footerLinks[1];
  return (
    <section className="spreadsheet-endcap">
      <div className="spreadsheet-disclaimer" role="note">
        <b>{tx(locale, "WHAT INCLUSION MEANS")}</b>
        <span>{tx(locale, "Treat the row as a discovery lead—not an authenticity, stock, seller or quality certificate.")}</span>
      </div>
      <div className="spreadsheet-main-value">
        <div>
          <small>{tx(locale, "CONTINUE ON THE MAIN PRODUCT SITE")}</small>
          <p>{tx(locale, "Browse the current product database, categories and latest additions on the main site.")}</p>
        </div>
        <a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">{buttonLabel} <Arrow /></a>
      </div>
    </section>
  );
}

export function SpreadsheetPage({ locale = "en" }: { locale?: string }) {
  const copy = localeUiCopy[locale] || localeUiCopy.en;
  return (
    <main className="elite-site cobalt-site content-site" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <SiteHeader locale={locale} />
      <section className="spreadsheet-hero"><div><p>{tx(locale, "PRODUCT INDEX / TEN DEPARTMENTS")}</p><h1>{tx(locale, "LoloBuy spreadsheet,")}<br /><em>{tx(locale, "with a review lens.")}</em></h1><p>{tx(locale, "Search the wider FindSpreadsheet database or start with a department. Every outbound route is clearly marked; no product card is invented for this preview.")}</p><SearchBox locale={locale} /></div><div className="index-orbit"><i>10</i><b>{tx(locale, "DEPARTMENTS")}</b><span>{tx(locale, "SEARCH → CHECK → COMPARE")}</span></div></section>
      <section className="spreadsheet-search"><span>{tx(locale, "ONE SEARCH, ONE CLEAR RESULT PAGE")}</span><div className="spreadsheet-search-copy"><b>{tx(locale, "Use the search box above once.")}</b><p>{tx(locale, "Your exact keyword is submitted to FindSpreadsheet's live product search. The result page opens in a new tab, where you can compare matching rows and their current detail pages.")}</p><a href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">{copy.footerLinks[1].toUpperCase()} <Arrow /></a></div></section>
      <section className="department-section"><div className="cobalt-section-head"><div><p>{tx(locale, "CATEGORY DIRECTORY")}</p><h2>{tx(locale, "Choose a department.")}</h2></div><p>{tx(locale, "Each link opens a matching search on FindSpreadsheet. Use the review lens as a category-specific reminder, not as a product certification.")}</p></div><CategoryGrid locale={locale} /></section>
      <SpreadsheetEndcap locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}

export function FaqPage({ locale = "en" }: { locale?: string }) {
  const copy = localeUiCopy[locale] || localeUiCopy.en;
  const translatedFaqs = translatedPairs(faqs.slice(0, 9), locale);
  return (
    <main className="elite-site cobalt-site content-site" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <SiteHeader locale={locale} />
      <section className="content-hero faq-hero"><div><p>{tx(locale, "FAQ / DIRECT ANSWERS")}</p><h1>{tx(locale, "What shoppers should know before using a LoloBuy spreadsheet.")}</h1><p>{tx(locale, "Short answers grounded in LoloBuy's public workflow and this site's independent methodology.")}</p></div><aside><ResearchStamp locale={locale} /><span>{translatedFaqs.length} {copy.nav[6]}</span><p>{tx(locale, "Changing platform details are dated and should be rechecked before purchase.")}</p></aside></section>
      <section className="faq-list">{translatedFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span><b>{question}</b><i>+</i></summary><p>{answer}</p></details>)}</section>
      <MoreReading locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}

export function UpdatesPage({ locale = "en" }: { locale?: string }) {
  const entries = [
    ["10 AUG 2026", "Latest-product rail connected to the main site", "Replaced the decorative homepage ticker with ten product-detail cards from FindSpreadsheet's public Latest Products section. Each card uses its matching image, current listed CNY price, item ID and direct main-site detail URL; popularity and quality are not inferred."],
    ["10 AUG 2026", "Official workflow source check", "Confirmed the public product-link, warehouse inspection-photo and free-storage wording visible on LoloBuy's official pages. Avoided publishing changing fee or route claims."],
    ["10 AUG 2026", "Independent-site disclosure expanded", "Added a clear non-affiliation statement, link-destination explanation and no-guarantee language across the preview."],
    ["10 AUG 2026", "Cobalt Club selected", "Removed the design comparison and promoted Cobalt Club to the single site system with complete English guide routes and 24 localized home routes."],
  ];
  const translatedEntries = entries.map(([date, title, description]) => [date, tx(locale, title), tx(locale, description)] as const);
  return (
    <main className="elite-site cobalt-site content-site" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <SiteHeader locale={locale} />
      <section className="updates-hero"><p>{tx(locale, "CHANGE REGISTER / TRANSPARENT EDITING")}</p><h1>{tx(locale, "Every meaningful change")}<br /><em>{tx(locale, "gets a record.")}</em></h1><p>{tx(locale, "This preview log separates source checks, editorial changes and future content updates.")}</p></section>
      <section className="update-list">{translatedEntries.map(([date, title, description], index) => <article key={title}><span>{date}</span><b>{String(index + 1).padStart(2, "0")}</b><div><h2>{title}</h2><p>{description}</p></div></article>)}</section>
      <MoreReading locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}

export function ArticlesPage({ locale = "en" }: { locale?: string }) {
  const articles = [
    ["BEGINNER", "How LoloBuy works: the complete product-link-to-parcel guide", "/guides/how-lolobuy-works", "15 MIN"],
    ["QC", "A seven-frame method for reading warehouse photos", "/guides/qc-photos", "16 MIN"],
    ["SHIPPING", "Plan a parcel without relying on stale route claims", "/guides/shipping", "15 MIN"],
    ["COST", "Chargeable weight and landed spend, explained", "/guides/fees-and-weight", "15 MIN"],
    ["TRACKING", "Tracking events, handoffs and useful escalation details", "/guides/tracking", "14 MIN"],
  ];
  return (
    <main className="elite-site cobalt-site content-site" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <SiteHeader locale={locale} />
      <section className="updates-hero"><p>{tx(locale, "EDITORIAL LIBRARY / SOURCE-LED")}</p><h1>{tx(locale, "Research written for humans,")}<br /><em>{tx(locale, "structured for search.")}</em></h1><p>{tx(locale, "Each guide targets one useful question, cites its factual basis and avoids invented customer experiences.")}</p></section>
      <section className="article-index">{articles.map(([tag, title, path, time], index) => { const page = contentPages[path.slice(1)]; const words = page ? wordCount(page) : 0; return <Link href={prefixed(locale, path)} key={path}><span>{String(index + 1).padStart(2, "0")}</span><small>{tx(locale, tag)} / {tx(locale, time)} / {words.toLocaleString(locale)} {tx(locale, "WORDS")}</small><h2>{tx(locale, title)}</h2><Arrow /></Link>; })}</section>
      <MoreReading locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}
