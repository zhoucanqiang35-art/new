"use client";

import Link from "next/link";
import { seoArticles } from "./seo-articles";
import { categoryArticles } from "./category-articles";
import { LanguageSwitcher } from "./language-switcher";
import { localizedPath, translateText, type Locale, type TranslationDictionary } from "./i18n-config";

const categories = [
  { name:"Shoes", note:"Outsole, insole and size-tag checks", number:"01", url:"https://findspreadsheet.com/shoes/", sourceTitle:"NIKE Phantom GX Elite AG-PRO", image:"https://findspreadsheet.com/uploads/allimg/20260126/1-26012614320C94.webp" },
  { name:"T-shirts", note:"Print alignment, fabric and measurements", number:"02", url:"https://findspreadsheet.com/t-shirts/", sourceTitle:"GUCCI Short Sleeve", image:"https://findspreadsheet.com/uploads/allimg/20260203/1-260203092243356.webp" },
  { name:"Hoodies", note:"Weight, stitching and fit references", number:"03", url:"https://findspreadsheet.com/hoodies-sweaters/", sourceTitle:"GCDS Logo Band Hoodies/Sweaters", image:"https://findspreadsheet.com/uploads/allimg/20260211/1-2602110U444610.webp" },
  { name:"Jackets", note:"Hardware, lining and volume notes", number:"04", url:"https://findspreadsheet.com/jackets/", sourceTitle:"High quality Burberry Jacket", image:"https://findspreadsheet.com/uploads/allimg/20260401/1-260401093931395.webp" },
  { name:"Pants", note:"Waist, inseam and fabric checks", number:"05", url:"https://findspreadsheet.com/pants-shorts/", sourceTitle:"Amiri / Ksubi Short Jeans", image:"https://findspreadsheet.com/uploads/allimg/20260207/1-26020G23915357.webp" },
  { name:"Bags", note:"Dimensions, structure and hardware", number:"06", url:"https://findspreadsheet.com/accessories/", sourceTitle:"Prada Bags", image:"https://findspreadsheet.com/uploads/allimg/20260205/1-260205131102H7.webp" },
  { name:"Accessories", note:"Materials, scale and detail views", number:"07", url:"https://findspreadsheet.com/accessories/", sourceTitle:"Supreme Wallet", image:"https://findspreadsheet.com/uploads/allimg/20260319/1-260319151R0937.webp" },
  { name:"Jewelry", note:"Finish, dimensions and care notes", number:"08", url:"https://findspreadsheet.com/accessories/", sourceTitle:"Loewe Earring", image:"https://findspreadsheet.com/uploads/allimg/20260319/1-260319140Z2930.webp" },
  { name:"Watches", note:"Movement claims and detail checks", number:"09", url:"https://findspreadsheet.com/electronics/", sourceTitle:"OMEG Seamaster Series", image:"https://findspreadsheet.com/uploads/allimg/20260318/1-26031Q534033K.webp" },
  { name:"Electronics", note:"Compatibility and shipping limits", number:"10", url:"https://findspreadsheet.com/electronics/", sourceTitle:"Apple iPad Pro 2023", image:"https://findspreadsheet.com/uploads/allimg/20260123/1-26012314211C08.webp" },
];

const products = [
  { slug: "shoes", category: "Shoes", name: "Low-profile sneaker research", check: "Outsole, insole and size-tag checks", url: "https://findspreadsheet.com/shoes/", sourceTitle: "Nike Zoom Kobe S2", image: "https://findspreadsheet.com/uploads/allimg/20260319/1-2603191431255I.webp" },
  { slug: "jackets", category: "Jackets", name: "Technical shell comparison", check: "Hardware, lining and volume notes", url: "https://findspreadsheet.com/jackets/", sourceTitle: "The North Face Outdoorjacket", image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319152350518.webp" },
  { slug: "bags", category: "Bags", name: "Everyday carry shortlist", check: "Dimensions, structure and hardware", url: "https://findspreadsheet.com/search.html?keywords=bags&channelid=2", sourceTitle: "YSL, Hermès and Louis Vuitton bag selection", image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319141413106.webp" },
  { slug: "hoodies", category: "Hoodies", name: "Heavyweight hoodie index", check: "Weight, stitching and fit references", url: "https://findspreadsheet.com/hoodies-sweaters/", sourceTitle: "Stussy Hoodie/Sweatshirt", image: "https://findspreadsheet.com/uploads/allimg/20260318/1-26031Q12621645.webp" },
  { slug: "accessories", category: "Accessories", name: "Small accessories desk", check: "Materials, scale and detail views", url: "https://findspreadsheet.com/accessories/", sourceTitle: "Louis Vuitton Glasses", image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319144PH39.webp" },
  { slug: "pants", category: "Pants", name: "Relaxed-fit trouser guide", check: "Waist, inseam and fabric checks", url: "https://findspreadsheet.com/pants-shorts/", sourceTitle: "Gallery Short", image: "https://findspreadsheet.com/uploads/allimg/20260319/1-260319153159600.webp" },
];

const featuredProducts = [
  { sourceTitle:"NIKE Phantom GX Elite AG-PRO", category:"Shoes", usd:"40.31", url:"https://findspreadsheet.com/shoes/nike-phantom-gx-elite-ag-pro-271.html", image:"https://findspreadsheet.com/uploads/allimg/20260126/1-26012614320C94.webp" },
  { sourceTitle:"GCDS Logo Band Hoodies/Sweaters [40 styles]", category:"Hoodies", usd:"36.75", url:"https://findspreadsheet.com/hoodies-sweaters/gcds-logo-band-hoodiessweaters-40-styles-1523.html", image:"https://findspreadsheet.com/uploads/allimg/20260211/1-2602110U444610.webp" },
  { sourceTitle:"Apple iPad Pro 2023 High-Performance Tablet [4 styles]", category:"Electronics", usd:"131.90", url:"https://findspreadsheet.com/electronics/apple-ipad-pro-2023-high-performance-tablet-with-stunning-display-4-styles-34.html", image:"https://findspreadsheet.com/uploads/allimg/20260123/1-26012314211C08.webp" },
  { sourceTitle:"Nike Ice Silk Reflective Sports Suit", category:"Short Sets", usd:"16.01", url:"https://findspreadsheet.com/ShortSets/nike-ice-silk-reflective-sports-suit-2908.html", image:"https://findspreadsheet.com/uploads/allimg/20260318/1-26031Q44RaW.webp" },
  { sourceTitle:"Ralph Lauren Polo Shirt & Shorts Set [5 styles]", category:"Short Sets", usd:"20.45", url:"https://findspreadsheet.com/ShortSets/ralph-lauren-polo-short-sleeve-shirt-amp-shorts-set-5-styles-2008.html", image:"https://findspreadsheet.com/uploads/allimg/20260307/1-26030G10924620.webp" },
  { sourceTitle:"GUCCI Short Sleeve", category:"T-shirts", usd:"20.45", url:"https://findspreadsheet.com/t-shirts/gucci-short-sleeve-836.html", image:"https://findspreadsheet.com/uploads/allimg/20260203/1-260203092243356.webp" },
  { sourceTitle:"New Balance 550 Sneakers [13 styles]", category:"Shoes", usd:"38.53", url:"https://findspreadsheet.com/shoes/new-balance-550-sneakers-13-styles-1753.html", image:"https://findspreadsheet.com/uploads/allimg/20260304/1-260304103211127.webp" },
  { sourceTitle:"Givenchy 4G Logo T-Shirt [2 styles]", category:"T-shirts", usd:"23.71", url:"https://findspreadsheet.com/t-shirts/givenchy-4g-logo-t-shirt-2-styles-1814.html", image:"https://findspreadsheet.com/uploads/allimg/20260305/1-2603050T920639.webp" },
  { sourceTitle:"Amiri / Ksubi Short Jeans", category:"Pants", usd:"39.72", url:"https://findspreadsheet.com/pants-shorts/amiriksubi-short-jeans-1308.html", image:"https://findspreadsheet.com/uploads/allimg/20260207/1-26020G23915357.webp" },
  { sourceTitle:"GUCCI GG Supreme Bucket Hat [39 styles]", category:"Headwear", usd:"10.23", url:"https://findspreadsheet.com/headwear/gucci-gg-supreme-bucket-hat-39-styles-665.html", image:"https://findspreadsheet.com/uploads/allimg/20260131/1-260131112612926.webp" },
  { sourceTitle:"Nike Air Max Dn", category:"Shoes", usd:"36.75", url:"https://findspreadsheet.com/shoes/nike-air-max-dn-2411.html", image:"https://findspreadsheet.com/uploads/allimg/20260312/1-26031210015A58.webp" },
  { sourceTitle:"Prada Bags", category:"Bags", usd:"63.73", url:"https://findspreadsheet.com/accessories/prada-bags-1126.html", image:"https://findspreadsheet.com/uploads/allimg/20260205/1-260205131102H7.webp" },
];

const researchPaths = [
  ["All", "https://findspreadsheet.com/AllProducts/"],
  ["Shoes", "https://findspreadsheet.com/shoes/"],
  ["Jackets", "https://findspreadsheet.com/jackets/"],
  ["Bags", "https://findspreadsheet.com/search.html?keywords=bags&channelid=2"],
  ["Hoodies", "https://findspreadsheet.com/hoodies-sweaters/"],
  ["Accessories", "https://findspreadsheet.com/accessories/"],
  ["Pants", "https://findspreadsheet.com/pants-shorts/"],
];

const guides = [
  ["/guides/beginner", "Start here", "How PikoBuy works", "A six-step path from source link to warehouse, QC, parcel choice and delivery."],
  ["/guides/qc", "Inspect", "Read QC photos", "A category-aware checklist for measurements, details, defects and seller mismatches."],
  ["/guides/shipping", "Plan", "Understand shipping", "Actual weight, volumetric weight, packaging choices and route restrictions in plain English."],
  ["/guides/returns", "Decide", "Returns & the 120-hour window", "What the official policy says, what costs may apply and why timing matters."],
  ["/guides/fees", "Budget", "Fees & two payments", "Separate product payment from international shipping and read checkout totals carefully."],
  ["/guides/tracking", "Follow", "Tracking without panic", "When scans may appear, what common statuses mean and when to contact official support."],
];

const faqs = [
  ["Is this the official PikoBuy website?", "No. This is an independent product-discovery and research site operated for FindSpreadsheet. Orders, payments, warehousing and support are handled only by PikoBuy through its official channels."],
  ["Why not publish one enormous spreadsheet?", "A bare list does not explain link freshness, source platform, sizing risk or what to inspect in QC photos. We organize those decisions around the product link."],
  ["Are prices shown here guaranteed?", "No. Seller prices, availability, domestic delivery and exchange rates can change. The live seller page and PikoBuy checkout are the final references."],
  ["Does a checked link guarantee product quality?", "No. Link checking confirms research context, not the condition of an individual item. Review warehouse QC photos and measurements before shipping."],
  ["How are official claims verified?", "Policy-related statements link to the relevant PikoBuy guide or protocol and show the date checked. When official pages conflict, we describe the uncertainty instead of guessing."],
];

export default function HomeClient({ locale, dictionary }:{ locale:Locale; dictionary:TranslationDictionary }) {
  const tx = (text:string) => translateText(dictionary, text);
  const to = (path:string) => localizedPath(locale, path);
  const t = {
    nav: ["Discover", "Categories", "Guides", "Shipping", "SEO Articles", "Source desk", "FAQ"].map(tx),
    eyebrow: tx("Independent research desk · updated 12 Aug 2026"),
    title: tx("Find better PikoBuy links before you buy."),
    intro: tx("A research-first spreadsheet experience for checking source links, QC details, sizing and shipping context—without pretending to be PikoBuy."),
    primary: tx("Explore the live database"), secondary: tx("Read the beginner guide"),
    search: tx("Search a product, category or source platform"),
    section: tx("Different products require different evidence."),
    sectionCopy: tx("Every category has its own long-form page, measurement logic, warehouse inspection method, return risks, shipping questions and dated official sources."),
    categoryTitle: tx("Shop by research path"), guideTitle: tx("The PikoBuy knowledge cluster"),
    articleTitle: tx("Long-form research, written for real decisions"),
    sourceTitle: tx("Facts have a visible source"), faqTitle: tx("Questions worth answering clearly"),
    cta: tx("Browse the Product Database"),
  };
  return (
    <main className="site concept-atlas">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PikoBuy Spreadsheet Pro home"><img className="brand-logo" src="/pikobuy-logo.png" width="204" height="48" alt="PikoBuy" /></a>
        <nav aria-label={tx("Primary navigation")}>{t.nav.map((item, index) => <Link key={item} href={to(["/articles/how-to-use-a-pikobuy-spreadsheet", "/categories", "/guides", "/guides/shipping", "/articles", "/official-sources", "/faq"][index])}>{item}</Link>)}</nav>
        <div className="header-actions"><LanguageSwitcher locale={locale} /><a className="header-cta" href="https://findspreadsheet.com/">{tx("Open database")} ↗</a></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span />{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button primary" href="https://findspreadsheet.com/">{t.primary} <span>↗</span></a><Link className="button text" href={to("/guides/beginner")}>{t.secondary} <span>→</span></Link></div><div className="proof-line"><span><b>01</b> {tx("Source link")}</span><i /><span><b>02</b> {tx("QC lens")}</span><i /><span><b>03</b> {tx("Shipping context")}</span></div></div><Link className="atlas-board" href={to("/guides/qc")} aria-label={`${tx("Read full guide")}: ${tx("How to read PikoBuy warehouse QC photos")}`}><div className="board-head"><span>{tx("RESEARCH RECORD")}</span><b>{tx("LINK / 0084")}</b></div><div className="board-visual"><span className="orb one" /><span className="orb two" /><strong>QC<br />{tx("LENS")}</strong></div><div className="board-row"><span>{tx("Source platform")}</span><b>{tx("Taobao / seller page")}</b></div><div className="board-row"><span>{tx("Check before buying")}</span><b>{tx("Size chart · material · domestic delivery")}</b></div><div className="board-row"><span>{tx("Warehouse decision")}</span><b>{tx("Measurements · visible defects · packaging")}</b></div><div className="board-foot"><span>{tx("Context before clicks.")}</span><b>{tx("Read the complete QC guide")} →</b></div></Link>
      </section>

      <section className="method-strip" aria-label={tx("Editorial principles")}><Link href={to("/method/independent-research")}><b>{tx("Independent")}</b><span>{tx("Not affiliated with PikoBuy")}</span><em>{tx("Read the method")} →</em></Link><Link href={to("/method/evidence-led")}><b>{tx("Evidence-led")}</b><span>{tx("Official claims link to sources")}</span><em>{tx("Read the method")} →</em></Link><Link href={to("/method/buyer-first")}><b>{tx("Buyer-focused")}</b><span>{tx("No invented ratings or reviews")}</span><em>{tx("Read the method")} →</em></Link><Link href={to("/method/multilingual-research")}><b>{tx("Multilingual")}</b><span>{tx("Dedicated localized URLs across the complete site")}</span><em>{tx("Read the method")} →</em></Link></section>

      <section className="discovery section-shell" id="discover">
        <div className="section-heading"><p>{tx("01 / DISCOVERY DESK")}</p><h2>{t.section}</h2><span>{t.sectionCopy}</span></div>
        <form className="search-desk" action="https://findspreadsheet.com/search.html" method="get"><label><span>{tx("SEARCH THE LIVE PRODUCT DATABASE")}</span><div><input name="keywords" required placeholder={t.search} /><input type="hidden" name="channelid" value="2" /><button type="submit" aria-label={tx("Search the live database")}>↗</button></div></label><nav className="filter-row" aria-label={tx("Category research shortcuts")}>{researchPaths.map(([label, href], index) => <a className={index === 0 ? "active" : ""} href={href} key={label}>{tx(label)}</a>)}</nav><p className="search-note">{tx("Search results open on FindSpreadsheet, the live product database.")}</p></form>
        <div className="research-result-status"><b>{String(products.length).padStart(2,"0")}</b><span>{tx("Independent long-form category research")}</span></div>
        <div className="product-grid" id="research-results">{products.map((product, index) => {
          const article = categoryArticles.find((item) => item.slug === product.slug);
          return <a className="product-card" href={product.url} key={product.name} aria-label={`${tx("Open database")}: ${tx(product.category)}`}><div className="product-art"><img src={product.image} alt={`${tx(product.category)} — ${product.sourceTitle}`} loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span><b>{tx(product.category)}</b></div><div className="product-meta"><span>{tx(product.category)}</span><span>{tx(article?.readingTime ?? "")}</span></div><h3>{tx(article?.title ?? product.name)}</h3><p>{tx(product.check)}</p><div className="product-card-proof"><span>{tx("Updated")} {tx(article?.published ?? "")}</span><span>{tx("Independent long-form category research")}</span></div><div className="product-card-link">{tx("Open database")} <span>↗</span></div></a>;
        })}</div>
        <div className="center-action"><a href="https://findspreadsheet.com/">{t.cta} <span>↗</span></a></div>
      </section>

      <section className="categories section-shell" id="categories"><div className="section-heading compact"><p>{tx("02 / CATEGORY PATHS")}</p><h2>{t.categoryTitle}</h2><span>{tx("Continue with the live product research database.")}</span></div><div className="category-grid">{categories.map(({ name, note, number, url, sourceTitle, image }) => <a href={url} key={name} aria-label={`${tx("Open database")}: ${tx(name)}`}><div className="category-visual"><img src={image} alt={`${tx(name)} — ${sourceTitle}`} loading="lazy" /><span>{number}</span></div><div className="category-copy"><h3>{tx(name)}</h3><p>{tx(note)}</p><b>{tx("Open database")} <i>↗</i></b></div></a>)}</div><div className="center-action"><a href="https://findspreadsheet.com/AllProducts/">{tx("Browse the Product Database")} <span>↗</span></a></div></section>

      <section className="guides section-shell" id="guides"><div className="section-heading compact"><p>{tx("03 / LEARN BEFORE SHIPPING")}</p><h2>{t.guideTitle}</h2><span>{tx("Six complete 1,200–1,800 word guides, each connected to dated PikoBuy sources and a clear next step.")}</span></div><div className="guide-grid">{guides.map(([href, label, title, description], index) => <Link href={to(href)} key={href} className={index === 0 ? "featured" : ""}><div><span>{tx(label)}</span><b>{String(index + 1).padStart(2, "0")}</b></div><h3>{tx(title)}</h3><p>{tx(description)}</p><i>{tx("Read full guide")} →</i></Link>)}</div><div className="center-action"><Link href={to("/guides")}>{tx("Open all complete guides")} <span>→</span></Link></div></section>

      <section className="article-preview section-shell" id="articles"><div className="section-heading compact"><p>{tx("04 / SEO ARTICLES")}</p><h2>{t.articleTitle}</h2><span>{tx("Original long-form articles, each checked against current PikoBuy pages and dated sources.")}</span></div><div className="article-preview-grid">{seoArticles.map((article, index) => <Link href={to(`/articles/${article.slug}`)} key={article.slug} className={index === 0 ? "lead" : ""}><div className="article-card-top"><span>{tx(article.label)}</span><b>{String(index + 1).padStart(2, "0")}</b></div><h3>{tx(article.title)}</h3><p>{tx(article.dek)}</p><div className="article-card-foot"><span>{article.published} · {tx(article.readingTime)}</span><b>{tx("Read article")} →</b></div></Link>)}</div><div className="center-action article-index-action"><Link href={to("/articles")}>{tx("Open all SEO articles")} <span>→</span></Link></div></section>

      <section className="source-desk" id="sources"><div className="section-shell source-grid"><div className="source-copy"><p>{tx("05 / SOURCE DESK")}</p><h2>{t.sourceTitle}</h2><p>{tx("Policy facts are tied to official PikoBuy pages and a review date. Product opinions stay separate from platform facts.")}</p><Link href={to("/official-sources")}>{tx("Open the source register")} →</Link></div><div className="source-list"><a href="https://www.pikobuy.com/guide"><span><b>{tx("Buying flow")}</b><small>{tx("PikoBuy beginner guide")}</small></span><em>{tx("CHECKED 12 AUG 2026")} ↗</em></a><a href="https://www.pikobuy.com/protocol/returns"><span><b>{tx("Return window")}</b><small>{tx("Official returns protocol")}</small></span><em>{tx("CHECKED 12 AUG 2026")} ↗</em></a><a href="https://www.pikobuy.com/protocol/user"><span><b>{tx("Fees & account terms")}</b><small>{tx("Official user agreement")}</small></span><em>{tx("CHECKED 12 AUG 2026")} ↗</em></a><a href="https://www.pikobuy.com/shipping-cost"><span><b>{tx("Shipping inputs")}</b><small>{tx("Official shipping estimator")}</small></span><em>{tx("CHECKED 12 AUG 2026")} ↗</em></a></div></div></section>

      <section className="featured-products" aria-labelledby="featured-products-title"><div className="featured-products-head section-shell"><div><p>{tx("06 / LIVE PRODUCT DESK")}</p><h2 id="featured-products-title">{tx("Fresh products from the main database.")}</h2></div><div><p>{tx("Real FindSpreadsheet detail pages, matching lead images and USD reference prices. Open any card to inspect the complete live product record.")}</p><a href="https://findspreadsheet.com/AllProducts/">{tx("Browse all products")} ↗</a></div></div><div className="product-marquee" aria-label={tx("Featured products from FindSpreadsheet")}><div className="product-marquee-track">{[false,true].map((clone)=><div className="product-marquee-group" aria-hidden={clone ? "true" : undefined} key={clone ? "clone" : "primary"}>{featuredProducts.map((product,index)=><a className="live-product-card" href={product.url} tabIndex={clone ? -1 : undefined} key={`${clone ? "clone" : "primary"}-${product.url}`} aria-label={`${tx("Open product detail")}: ${product.sourceTitle}`}><div className="live-product-image"><img src={product.image} alt={clone ? "" : product.sourceTitle} loading="lazy" /><span>{String(index+1).padStart(2,"0")}</span></div><div className="live-product-meta"><span>{tx(product.category)}</span><em>{tx("MAIN SITE RECORD")}</em></div><h3>{product.sourceTitle}</h3><div className="live-product-price"><strong>${product.usd}</strong><small>{tx("USD reference")}</small></div><div className="live-product-link">{tx("Open product detail")} <span>↗</span></div></a>)}</div>)}</div></div><div className="featured-products-note section-shell"><p>{tx("USD reference prices were converted from the CNY values displayed on FindSpreadsheet using 1 CNY = $0.1482 on 12 August 2026. Product prices, availability and exchange rates can change; verify the live detail page before ordering.")}</p><span>{tx("Hover or focus to pause the product reel.")}</span></div></section>

      <section className="faq section-shell" id="faq"><div className="section-heading compact"><p>{tx("07 / NO VAGUE ANSWERS")}</p><h2>{t.faqTitle}</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{tx(question)}<b>+</b></summary><p>{tx(answer)}</p></details>)}</div></section>

      <section className="final-cta"><div className="section-shell final-cta-grid"><div className="final-cta-copy"><span>{tx("READY TO RESEARCH?")}</span><h2>{tx("Start with context.")}<br /><em>{tx("Then open the link.")}</em></h2></div><div className="final-cta-action"><p>{tx("Independent product-discovery research for safer, clearer buying decisions.")}</p><div className="final-cta-steps"><Link href={to("/articles/how-to-use-a-pikobuy-spreadsheet")} aria-label={`${tx("Read full guide")}: ${tx("Source link")}`}><b>01</b><span>{tx("Source link")}</span><i>→</i></Link><Link href={to("/guides/qc")} aria-label={`${tx("Read full guide")}: ${tx("QC lens")}`}><b>02</b><span>{tx("QC lens")}</span><i>→</i></Link><Link href={to("/guides/shipping")} aria-label={`${tx("Read full guide")}: ${tx("Shipping context")}`}><b>03</b><span>{tx("Shipping context")}</span><i>→</i></Link></div><a href="https://findspreadsheet.com/">{t.cta} <b>↗</b></a></div></div></section>
      <footer><div className="footer-main"><a className="brand inverse" href="#top" aria-label="PikoBuy Spreadsheet Pro home"><img className="brand-logo" src="/pikobuy-logo.png" width="204" height="48" alt="PikoBuy" /></a><p>{tx("Independent product-discovery research for safer, clearer buying decisions.")}</p><div><Link href={to("/about")}>{tx("About")}</Link><Link href={to("/official-sources")}>{tx("Official sources")}</Link><Link href={to("/editorial-policy")}>{tx("Editorial policy")}</Link><Link href={to("/privacy")}>{tx("Privacy")}</Link></div></div><div className="disclaimer">{tx("PikoBuy Spreadsheet Pro is an independent informational website and is not affiliated with, endorsed by, or operated by PikoBuy. Product availability, prices, policies and shipping options can change. Verify details on official pages before purchasing.")}</div></footer>
    </main>
  );
}
