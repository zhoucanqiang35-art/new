import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, countrySignals, mainSite, products, seoArticles } from "./data";
import { getCopy, getExtra, localPath } from "./i18n";
import { LanguageSwitcher } from "./language-switcher";
import { MobileFold } from "./mobile-fold";
import { SearchForm } from "./search-form";
import { getLocalizedContent, getLocalizedDetailedFaq, getLocalizedFaq, getLocalizedSeoSections } from "./localized-content";
import { getShippingCopy } from "./shipping-copy";

const isEnglishLocale = (locale: string) => locale === "en-US" || locale === "en-GB";

export function Header({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale), e = getExtra(locale), l = getLocalizedContent(locale);
  return <header className="site-header">
    <Link className="image-brand" href={localPath(locale)} aria-label="PikoBuy Spreadsheet Europe home"><Image src="/pikobuy-logo-final-v2.png" alt="PikoBuy" width={204} height={48} priority unoptimized/></Link>
    <nav aria-label="Primary navigation"><Link href={localPath(locale)}>{e.home}</Link><Link href={localPath(locale,"categories")}>{e.categories}</Link><Link href={localPath(locale,"products")}>{e.productDetails}</Link><Link href={localPath(locale,"guides")}>{t.navGuides}</Link><Link href={localPath(locale,"shipping")}>{t.navShipping}</Link><Link href={localPath(locale,"seo-articles")}>{e.seoArticles}</Link><Link href={localPath(locale,"faq")}>{l.faqTitle}</Link></nav>
    <LanguageSwitcher locale={locale}/>
    <a className="button button-small" href={`${mainSite}/AllProducts/`} target="_blank" rel="noopener">{e.liveCatalog} ↗</a>
  </header>;
}

export function Footer({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale), e = getExtra(locale), l = getLocalizedContent(locale);
  return <footer><div><Link className="image-brand footer-logo" href={localPath(locale)}><Image src="/pikobuy-logo-final-v2.png" alt="PikoBuy" width={204} height={48} unoptimized/></Link><p>{e.independent}</p></div><div className="footer-links"><Link href={localPath(locale,"categories")}>{e.categories}</Link><Link href={localPath(locale,"products")}>{e.productDetails}</Link><Link href={localPath(locale,"seo-articles")}>{e.seoArticles}</Link><Link href={localPath(locale,"faq")}>{l.faqTitle}</Link><Link href={localPath(locale,"methodology")}>{t.evidence}</Link><Link href={localPath(locale,"countries")}>{t.navCountries}</Link><a href={mainSite} target="_blank" rel="noopener">FindSpreadsheet ↗</a></div></footer>;
}

export function PageFrame({ children, locale = "en-US" }: { children: React.ReactNode; locale?: string }) { return <><Header locale={locale}/><main>{children}</main><Footer locale={locale}/></>; }

export function SearchBand({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale), e = getExtra(locale);
  return <section className="search-band"><div><span className="section-index">{e.searchButton}</span><h2>{t.search}</h2><p>{e.searchDesc}</p></div><SearchForm buttonLabel={e.searchButton} placeholder={t.searchPlaceholder} emptyMessage={`${t.search}: ${t.searchPlaceholder}`}/></section>;
}

export function ProductGrid({ limit = 4, locale = "en-US", items = products }: { limit?: number; locale?: string; items?: readonly (typeof products)[number][] }) {
  const e = getExtra(locale), translated = !isEnglishLocale(locale);
  return <div className="product-grid">{items.slice(0, limit).map((product) => <Link key={product.slug} className="product-card" href={localPath(locale,`product/${product.slug}`)}><div className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 720px) 48vw, 25vw"/></div><div className="product-info"><span>{translated ? e.productDetails : product.category}</span><h3>{product.name}</h3><p>{translated ? e.productsIntro : product.check}</p><strong>≈ ${product.usd.toFixed(2)} <small>¥{product.cny}</small></strong><em>{e.viewPage} →</em></div></Link>)}</div>;
}

function CategoryIcon({ kind }: { kind: (typeof categories)[number]["glyph"] }) {
  if (kind === "shoe" || kind === "sneaker") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 16.5c3.8-.1 6.6-1.1 8.7-4.5l2.5 2c1.8 1.4 3.5 1.7 6.8 2.5V19H3z"/><path d="M10.5 13.7l2.2 1.8M7.8 15.2l2.1 1.5"/></svg>;
  if (kind === "shirt" || kind === "hoodie" || kind === "jersey") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4.5 12 6l4-1.5L21 8l-2.5 4-2.2-1.3V20H7.7v-9.3L5.5 12 3 8z"/>{kind === "hoodie" && <path d="M9 5.2c.6 2.2 5.4 2.2 6 0M10 7.2 8.7 9.5m5.3-2.3 1.3 2.3"/>}{kind === "jersey" && <path d="M12 9v6m-2-4h4"/>}</svg>;
  if (kind === "jacket") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4.5 12 6l4-1.5L20 8l-2.3 4-1.6-1v9H7.9v-9l-1.6 1L4 8z"/><path d="M12 6v14m-2.5-8h1m4 0h-1"/></svg>;
  if (kind === "pants" || kind === "shorts") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={kind === "shorts" ? "M6 5h12l-1 9-5-2-5 2z" : "M7 4h10l1 16h-4l-2-10-2 10H6z"}/><path d="M8 7h8"/></svg>;
  if (kind === "cap") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 14c0-4 2.7-7 7-7s6 2.8 6 6c-5.5-.6-9.7.2-13 1z"/><path d="M5 14c4.8-.8 9.7-.4 16 1.5-2.3 1.3-4.7 1.3-7.2.4"/></svg>;
  if (kind === "bag") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9h14v11H5z"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/></svg>;
  if (kind === "device") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 6h4m-3 12h2"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-7 11zM5 8l3-4h8l3 4M8 4l4 15 4-15M5 8h14"/></svg>;
}

export function CategoryGrid({ locale = "en-US" }: { locale?: string }) {
  const l=getLocalizedContent(locale);
  return <div className="category-grid" data-locale={locale}>{categories.map((cat,i) => <a key={cat.slug} href={`${mainSite}${cat.path}`} target="_blank" rel="noopener noreferrer" aria-label={`${l.categories[i]} — FindSpreadsheet`}><span className="category-visual"><CategoryIcon kind={cat.glyph}/></span><h3>{l.categories[i]}</h3><span className="category-destination">FindSpreadsheet ↗</span></a>)}</div>;
}

export function SeoArticleGrid({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale), e = getExtra(locale), translated = !isEnglishLocale(locale);
  return <div className="seo-grid">{seoArticles.map((article,i) => { const shippingTopic=["shipping","tracking","restricted"].some((part)=>article.slug.includes(part)); const topic = shippingTopic ? t.navShipping : article.slug.includes("qc") ? `${e.productDetails} · QC` : t.workflow; return <Link key={article.slug} href={localPath(locale,`seo-articles/${article.slug}`)}><span>{e.seoArticles} {String(i+1).padStart(2,"0")}{translated ? "" : ` · ${article.readTime}`}</span><h3>{translated ? `PikoBuy — ${topic}` : article.title}</h3><p>{translated ? (shippingTopic ? e.researchIntro : article.slug.includes("qc") ? e.productsIntro : e.workflowIntro) : article.excerpt}</p><b>{e.readMore} →</b></Link>;})}</div>;
}

export function SourcesBlock({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale), e = getExtra(locale), l = getLocalizedContent(locale);
  const internalSources = [
    ["methodology", t.evidence],
    ["guides", t.navGuides],
    ["shipping", t.navShipping],
    ["countries", t.navCountries],
    ["products", e.productDetails],
    ["faq", l.faqTitle],
  ] as const;
  return <aside className="sources"><span className="section-index">{e.primarySources}</span><h2>{e.independent}</h2><div>{internalSources.map(([path,label],i) => <Link key={path} href={localPath(locale,path)}><b>{String(i+1).padStart(2,"0")}</b>{label}<span>→</span></Link>)}</div></aside>;
}

export function CountryTable({ locale = "en-US" }: { locale?: string }) { const t=getCopy(locale),e=getExtra(locale),translated=!isEnglishLocale(locale),regionNames=new Intl.DisplayNames([locale],{type:"region"}),dayUnit=new Intl.NumberFormat(locale,{style:"unit",unit:"day",unitDisplay:"long"}).formatToParts(2).find((part)=>part.type==="unit")?.value||""; return <div className="table-wrap"><table><thead><tr><th>{translated?t.navCountries:"Market"}</th><th>{translated?t.navShipping:"Route results"}</th><th>{translated?e.currentPage:"Quoted window"}</th><th>{translated?e.primarySources:"Editorial tier"}</th></tr></thead><tbody>{countrySignals.map((row) => <tr key={row.code}><td><b>{row.code}</b> {regionNames.of(row.code)||row.country}</td><td>{row.routes}</td><td>{translated?row.window.replace("days",dayUnit):row.window}</td><td><span className={`tier ${row.tier.toLowerCase()}`}>{translated?e.viewPage:row.tier}</span></td></tr>)}</tbody></table><p className="table-note">{translated?e.researchIntro:"Snapshot: 19 Aug 2026, 1 kg “general goods”. Route counts and delivery estimates can change and do not prove customer share."}</p></div>; }

const workflow = [["Select","Start with a product URL from Taobao, Tmall, 1688, Weidian or Yupoo."],["Submit","Paste the URL or keywords and choose the product variation."],["Pay #1","Pay for the item and domestic delivery to the warehouse."],["Inspect","Review warehouse photos, quantity and visible condition."],["Pay #2","Choose an international route and pay parcel shipping."],["Track","PikoBuy says tracking is normally available within three days of shipment."]] as const;

export function HomePage({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale), e = getExtra(locale), l=getLocalizedContent(locale), localizedFaq=getLocalizedFaq(locale,e.researchIntro), translated = !isEnglishLocale(locale);
  return <PageFrame locale={locale}>
    <section className="hero"><div className="hero-copy"><span className="eyebrow">{t.eyebrow}</span><h1>{t.title}</h1><p>{t.intro}</p><div className="actions"><a className="button" href={`${mainSite}/AllProducts/`} target="_blank" rel="noopener">{t.browse} ↗</a><Link className="text-link" href={localPath(locale,"methodology")}>{t.evidence} →</Link></div></div><div className="hero-panel"><MobileFold label={l.researchSnapshot} openLabel={l.open} closeLabel={l.close}><div className="sticker">{e.independent}</div><span className="section-index">{e.primarySources} / 2026</span><div className="metrics"><div><strong>241</strong><span>{t.navCountries}</span></div><div><strong>47</strong><span>{e.categories}</span></div><div><strong>13</strong><span>{t.navShipping}</span></div><div><strong>6</strong><span>{t.workflow}</span></div></div><p>{e.researchIntro}</p></MobileFold></div></section>
    <SearchBand locale={locale}/>
    <section className="section quick-section"><MobileFold label={e.exploreTitle} openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><span className="section-index">01 / {e.viewPage}</span><h2>{e.exploreTitle}</h2></div><p>{e.exploreIntro}</p></div><div className="quick-grid"><Link href={localPath(locale,"categories")}><span>01</span><h3>{e.categories}</h3><p>{e.categoriesIntro}</p><b>{e.viewPage} →</b></Link><Link href={localPath(locale,"products")}><span>02</span><h3>{e.productDetails}</h3><p>{e.productsIntro}</p><b>{e.viewPage} →</b></Link><Link href={localPath(locale,"seo-articles")}><span>03</span><h3>{e.seoArticles}</h3><p>{e.researchIntro}</p><b>{e.viewPage} →</b></Link><Link href={localPath(locale,"faq")}><span>04</span><h3>{l.faqTitle}</h3><p>{l.faqIntro}</p><b>{e.viewPage} →</b></Link></div></MobileFold></section>
    <section className="section"><MobileFold label={t.categories} defaultOpen openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><span className="section-index">02 / {e.categories}</span><h2>{t.categories}</h2></div><p>{e.categoriesIntro}</p></div><CategoryGrid locale={locale}/><Link className="under-link" href={localPath(locale,"categories")}>{e.categories} →</Link></MobileFold></section>
    <section className="section mint"><MobileFold label={t.latest} defaultOpen openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><span className="section-index">03 / {e.productDetails}</span><h2>{t.latest}</h2></div><p>{e.priceNote}</p></div><ProductGrid locale={locale}/><Link className="under-link" href={localPath(locale,"products")}>{e.productDetails} →</Link></MobileFold></section>
    <section className="section"><MobileFold label={t.workflow} openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><span className="section-index">04 / {t.navGuides}</span><h2>{t.workflow}</h2></div><Link className="text-link" href={localPath(locale,"guides")}>{e.readMore} →</Link></div><p className="section-intro">{e.workflowIntro}</p><div className="workflow">{workflow.map(([title,body],i) => <article key={title}><b>{String(i+1).padStart(2,"0")}</b><h3>{translated?`${t.workflow} ${i+1}`:title}</h3><p>{translated?e.workflowIntro:body}</p></article>)}</div></MobileFold></section>
    <section className="section seo-home"><MobileFold label={e.seoArticles} openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><span className="section-index">05 / {e.seoArticles}</span><h2>{e.seoArticles}</h2></div><p>{e.researchIntro}</p></div><SeoArticleGrid locale={locale}/></MobileFold></section>
    <section className="section faq-home"><MobileFold label={l.faqTitle} openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><span className="section-index">06 / {l.faqTitle}</span><h2>{l.faqTitle}</h2></div><p>{l.faqIntro}</p></div><div className="faq-preview">{localizedFaq.slice(0,6).map((item)=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div><Link className="under-link" href={localPath(locale,"faq")}>{l.allFaq} →</Link></MobileFold></section>
    <section className="section dark"><MobileFold label={t.research} openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><span className="section-index">07 / {e.primarySources}</span><h2>{t.research}</h2></div><p>{e.researchIntro}</p></div><div className="research-grid"><Link href={localPath(locale,"countries")}><span>{t.navCountries}</span><h3>{t.navCountries}</h3><p>{e.categoriesIntro}</p><b>{e.readMore} →</b></Link><Link href={localPath(locale,"shipping")}><span>{t.navShipping}</span><h3>{t.navShipping}</h3><p>{e.researchIntro}</p><b>{e.readMore} →</b></Link><Link href={localPath(locale,"qc")}><span>{e.productDetails}</span><h3>QC</h3><p>{e.productsIntro}</p><b>{e.readMore} →</b></Link></div></MobileFold></section>
  </PageFrame>;
}

export function ArticleShell({ eyebrow,title,intro,children,locale="en-US" }: { eyebrow:string;title:string;intro:string;children:React.ReactNode;locale?:string }) { return <PageFrame locale={locale}><article className="article"><header><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></header>{children}</article></PageFrame>; }
export function WorkflowList({ locale = "en-US" }: { locale?: string }) { const t=getCopy(locale),e=getExtra(locale),translated=!isEnglishLocale(locale); return <div className="article-steps">{workflow.map(([title,body],i) => <section key={title}><b>{String(i+1).padStart(2,"0")}</b><div><h2>{translated?`${t.workflow} ${i+1}`:title}</h2><p>{translated?e.workflowIntro:body}</p></div></section>)}</div>; }

export function CategoriesPage({ locale="en-US" }: { locale?:string }) { const e=getExtra(locale),l=getLocalizedContent(locale); return <ArticleShell locale={locale} eyebrow={`${e.categories} / 12`} title={e.categories} intro={e.categoriesIntro}><CategoryGrid locale={locale}/><div className="prose page-copy"><h2>{e.currentPage}</h2><p>{e.exploreIntro}</p><div className="category-guide-links">{categories.map((cat,i)=><Link key={cat.slug} href={localPath(locale,`category/${cat.slug}`)}>{l.categories[i]} {l.guide} →</Link>)}</div></div><SearchBand locale={locale}/></ArticleShell>; }

export function CategoryDetailPage({ slug,locale="en-US" }: { slug:string;locale?:string }) {
  const category=categories.find((item)=>item.slug===slug); if(!category) notFound(); const t=getCopy(locale),e=getExtra(locale),l=getLocalizedContent(locale),translated=!isEnglishLocale(locale); const index=categories.findIndex((item)=>item.slug===slug),categoryName=l.categories[index]; const matching=products.filter((item)=>item.category.toLowerCase().includes(category.name.toLowerCase().replace("other finds","other")));
  return <ArticleShell locale={locale} eyebrow={`${e.categories} / ${category.icon}`} title={translated?`${categoryName} — ${t.navGuides}`:`${categoryName} PikoBuy Spreadsheet Guide`} intro={translated?e.categoriesIntro:`${e.categoriesIntro} ${category.note}.`}><div className="article-body"><div className="prose"><h2>{translated?`${e.categories}: ${categoryName}`:`${categoryName}: warehouse-photo priorities`}</h2><p>{translated?e.categoriesIntro:"Use this category page before opening the live catalog. Confirm the selected variation, measurements, quantity and visible condition while the item is still in the warehouse."}</p><div className="callout"><strong>{translated?e.primarySources:"Category QC focus"}</strong>{translated?e.productsIntro:`${category.note}. Compare the warehouse item with the original seller listing and check the current return policy before international dispatch.`}</div><h2>{e.productDetails}</h2>{matching.length?<ProductGrid locale={locale} limit={4} items={matching}/>:<p>{translated?e.productsIntro:"Product records change frequently. Use the exact category catalog below for the newest available listings."}</p>}<a className="button inline-button" href={`${mainSite}${category.path}`} target="_blank" rel="noopener">{e.liveCatalog}: {categoryName} ↗</a></div><SourcesBlock locale={locale}/></div></ArticleShell>;
}

export function ProductsPage({ locale="en-US" }: { locale?:string }) { const e=getExtra(locale),translated=!isEnglishLocale(locale); return <ArticleShell locale={locale} eyebrow={`${e.productDetails} / FindSpreadsheet`} title={e.productDetails} intro={e.productsIntro}><ProductGrid locale={locale} limit={products.length}/><div className="prose page-copy"><h2>{e.priceNote}</h2><p>{translated?e.productsIntro:"Every card opens its own detail page first. The final button on that page opens the exact FindSpreadsheet listing."}</p></div><SearchBand locale={locale}/></ArticleShell>; }

export function ProductDetailPage({ slug,locale="en-US" }: { slug:string;locale?:string }) {
  const product=products.find((item)=>item.slug===slug); if(!product) notFound(); const e=getExtra(locale),translated=!isEnglishLocale(locale);
  return <PageFrame locale={locale}><article className="product-detail"><div className="detail-media"><Image src={product.image} alt={product.name} fill sizes="(max-width: 800px) 100vw, 50vw" priority/></div><div className="detail-copy"><span className="eyebrow">{e.productDetails}</span><h1>{product.name}</h1><div className="detail-price"><strong>≈ ${product.usd.toFixed(2)}</strong><span>¥{product.cny}</span></div><p>{e.priceNote}</p><div className="detail-check"><b>{translated?e.primarySources:"Warehouse check"}</b><p>{translated?e.productsIntro:product.check}</p></div><ul><li>{translated?e.categoriesIntro:"Confirm selected colour, size or model."}</li><li>{translated?e.productsIntro:"Compare the warehouse photos with the seller listing."}</li><li>{translated?e.workflowIntro:"Check product-type restrictions before choosing a route."}</li><li>{translated?e.researchIntro:"Read the current return terms before the warehouse window closes."}</li></ul><a className="button" href={`${mainSite}${product.href}`} target="_blank" rel="noopener">{e.openMain} ↗</a><Link className="text-link back-link" href={localPath(locale,"products")}>← {e.productDetails}</Link><Link className="text-link back-link" href={localPath(locale)}>{e.home} →</Link></div></article></PageFrame>;
}

export function SeoHubPage({ locale="en-US" }: { locale?:string }) { const e=getExtra(locale),translated=!isEnglishLocale(locale); return <ArticleShell locale={locale} eyebrow={e.independent} title={e.seoArticles} intro={e.researchIntro}><SeoArticleGrid locale={locale}/><div className="prose page-copy"><h2>{e.primarySources}</h2><p>{translated?e.researchIntro:"Every article separates official platform statements, live interface observations and editorial inference. Dates and limitations are shown where a fact may change."}</p></div></ArticleShell>; }

export function SeoArticlePage({ slug,locale="en-US" }: { slug:string;locale?:string }) {
  const article=seoArticles.find((item)=>item.slug===slug); if(!article) notFound(); const t=getCopy(locale),e=getExtra(locale),l=getLocalizedContent(locale),translated=!isEnglishLocale(locale); const shippingTopic=["shipping","tracking","restricted"].some((part)=>article.slug.includes(part)); const topic=shippingTopic?`${t.navShipping} · ${t.navCountries}`:article.slug.includes("qc")?`${e.productDetails} · QC`:`${t.workflow} · ${e.productDetails}`; const splitMasterParagraph=(body:string)=>{const sentences=body.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((sentence)=>sentence.trim()).filter(Boolean)||[body];const size=Math.ceil(sentences.length/3);return [sentences.slice(0,size),sentences.slice(size,size*2),sentences.slice(size*2)].map((group)=>group.join(" ")).filter(Boolean);}; const sections=translated?getLocalizedSeoSections(locale,article.slug,e.researchIntro):article.sections.map(([heading,body],position)=>({slot:`${article.slug}:${position+1}`,heading,paragraphs:splitMasterParagraph(body)})); const minutes=article.readTime.match(/\d+/)?.[0]||"14";
  return <ArticleShell locale={locale} eyebrow={`${e.seoArticles} / ${translated?`${minutes}′`:article.readTime}`} title={translated?`PikoBuy — ${topic}`:article.title} intro={translated?(shippingTopic?`${e.researchIntro} ${e.priceNote}`:article.slug.includes("qc")?`${e.productsIntro} ${l.scopeText}`:`${e.workflowIntro} ${e.researchIntro}`):article.excerpt}><div className="article-body"><div className="prose" data-article-template="seo-v3" data-article-slug={article.slug}>{sections.map(({slot,heading,paragraphs})=><section key={slot} data-content-slot={slot}><span className="section-index">{slot.split(":")[1].padStart(2,"0")}</span><h2>{heading}</h2>{paragraphs.map((paragraph,index)=><p key={`${slot}:${index+1}`} data-paragraph-slot={`${slot}:${index+1}`}>{paragraph}</p>)}</section>)}<div className="callout"><strong>{l.researchBasis}</strong>{translated?`${e.researchIntro} ${l.scopeText}`:"Official PikoBuy beginner guide, shipping estimator, shipping terms, user agreement and returns policy. No route, delivery date, return approval or product quality is guaranteed; check the current interface before paying."}</div>{!translated&&article.slug==="pikobuy-restricted-items-guide"&&<div className="card-links"><Link href={localPath(locale,"seo-articles/pikobuy-shipping-cost-guide")}><h3>PikoBuy shipping cost guide →</h3><p>Compare honest parcel inputs, chargeable weight and available routes.</p></Link><Link href={localPath(locale,"category/electronics")}><h3>PikoBuy electronics checklist →</h3><p>Verify the model, battery details and warehouse evidence before shipping.</p></Link></div>}<Link className="button inline-button" href={localPath(locale,"products")}>{e.productDetails} →</Link></div><SourcesBlock locale={locale}/></div></ArticleShell>;
}

export function FaqPage({ locale="en-US" }: { locale?:string }) {
  const e=getExtra(locale),l=getLocalizedContent(locale),items=getLocalizedDetailedFaq(locale,e.researchIntro);
  const schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:items.map((item)=>({"@type":"Question",name:item.question,acceptedAnswer:{"@type":"Answer",text:item.answer}}))};
  return <ArticleShell locale={locale} eyebrow={l.factCheckedHelp} title={l.faqTitle} intro={l.faqIntro}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><div className="article-body"><div className="prose faq-page">{items.map((item,i)=><section key={`${i}-${item.question}`}><span className="section-index">{String(i+1).padStart(2,"0")}</span><h2>{item.question}</h2><p>{item.answer}</p></section>)}<div className="callout"><strong>{l.scopeTitle}</strong>{l.scopeText}</div><Link className="button inline-button" href={localPath(locale,"seo-articles")}>{e.seoArticles} →</Link></div><SourcesBlock locale={locale}/></div></ArticleShell>;
}

export function ShippingContentPage({ locale="en-US" }: { locale?:string }) {
  const t=getCopy(locale),e=getExtra(locale),copy=getShippingCopy(locale);
  return <ArticleShell locale={locale} eyebrow={`${t.navShipping} / ${e.primarySources}`} title={copy.title} intro={copy.intro}><div className="article-body"><div className="prose shipping-prose" data-content-template="shipping-v1"><h2>{copy.inputsTitle}</h2><ol>{copy.inputs.map((input)=><li key={input.label}><b>{input.label}:</b> {input.description}</li>)}</ol><div className="callout"><strong>{copy.calloutTitle}</strong>{copy.calloutBody}</div><h2>{copy.sampleTitle}</h2><p>{copy.sampleBody}</p><CountryTable locale={locale}/><h2>{copy.riskTitle}</h2><p>{copy.riskBody}</p></div><SourcesBlock locale={locale}/></div></ArticleShell>;
}

export function GenericLocalizedPage({ page,locale="en-US" }: { page:string;locale?:string }) {
  const t=getCopy(locale),e=getExtra(locale); const titles:Record<string,string>={guides:t.navGuides,shipping:t.navShipping,countries:t.navCountries,qc:"QC",methodology:t.evidence}; const intros:Record<string,string>={guides:e.workflowIntro,shipping:e.researchIntro,countries:e.categoriesIntro,qc:e.productsIntro,methodology:e.independent}; const title=titles[page]||e.home,intro=intros[page]||e.researchIntro;
  return <ArticleShell locale={locale} eyebrow={e.independent} title={title} intro={intro}><div className="article-body"><div className="prose"><h2>{e.primarySources}</h2><p>{e.researchIntro}</p><div className="callout"><strong>{e.independent}</strong>{intro}</div>{page==="countries"&&<CountryTable locale={locale}/>} {page==="guides"&&<WorkflowList locale={locale}/>}<h2>{e.currentPage}</h2><p>{e.exploreIntro}</p><div className="card-links"><Link href={localPath(locale,"categories")}><h3>{e.categories} →</h3><p>{e.categoriesIntro}</p></Link><Link href={localPath(locale,"products")}><h3>{e.productDetails} →</h3><p>{e.productsIntro}</p></Link><Link href={localPath(locale,"seo-articles")}><h3>{e.seoArticles} →</h3><p>{e.researchIntro}</p></Link></div></div><SourcesBlock locale={locale}/></div></ArticleShell>;
}

export function LocalizedRoutePage({ locale,slug }: { locale:string;slug:string[] }) {
  const [first,second]=slug;
  if(slug.length===1&&first==="categories") return <CategoriesPage locale={locale}/>;
  if(slug.length===2&&first==="category") return <CategoryDetailPage locale={locale} slug={second}/>;
  if(slug.length===1&&first==="products") return <ProductsPage locale={locale}/>;
  if(slug.length===2&&first==="product") return <ProductDetailPage locale={locale} slug={second}/>;
  if(slug.length===1&&first==="seo-articles") return <SeoHubPage locale={locale}/>;
  if(slug.length===2&&first==="seo-articles") return <SeoArticlePage locale={locale} slug={second}/>;
  if(slug.length===1&&first==="faq") return <FaqPage locale={locale}/>;
  if(slug.length===1&&first==="shipping") return <ShippingContentPage locale={locale}/>;
  if(slug.length===1&&["guides","countries","qc","methodology"].includes(first)) return <GenericLocalizedPage locale={locale} page={first}/>;
  notFound();
}
