import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Header, Footer, SearchBox, ArticleSection, MobileModule, ProductImage } from "../../components";
import { categories as baseCategories, products as baseProducts, guides as baseGuides, markets as baseMarkets, sources as baseSources } from "../../data";
import { localeCodes, localeCopy, type LocaleCode, withLocale } from "../../locales";
import { localizedPageCopy } from "../../localized-content";
import { getLocalizedFaq } from "../../faq-localized";
import { localizeCollections } from "../../collection-localized";
import { localizedAlternates } from "../../seo";

type Params={locale:string;path?:string[]};

export async function generateMetadata({params}:{params:Promise<Params>}):Promise<Metadata>{
  const {locale,path=[]}=await params;
  if(!localeCodes.includes(locale as LocaleCode))return {title:"Page not found",robots:{index:false,follow:false}};
  const code=locale as LocaleCode;
  const copy=localeCopy[code];
  const ui=localizedPageCopy[code];
  const route=path.length?`/${path.join("/")}`:"/";
  const [section,slug]=path;
  const {categories,products,guides}=localizeCollections(code,baseCategories,baseProducts,baseGuides);
  const category=section==="categories"?categories.find((item)=>item.slug===slug):undefined;
  const product=section==="products"?products.find((item)=>item.slug===slug):undefined;
  const guide=(section==="guides"||section==="seo-articles")?guides.find((item)=>item.slug===slug):undefined;
  const market=section==="markets"?baseMarkets.find((item)=>item.slug===slug):undefined;
  let title=`${copy.heroTitle} ${copy.heroAccent} | LoloBuy Sheet`;
  let description=copy.heroText;

  if(category){title=`${category.name} | ${copy.categories}`;description=`${category.note}. ${copy.verify}`;}
  else if(product){title=`${product.name} | ${copy.products}`;description=product.summary;}
  else if(guide){title=`${guide.title} | ${copy.nav[5]}`;description=guide.dek;}
  else if(market){title=`${ui.markets[0]}: ${market.name} | LoloBuy Sheet`;description=ui.markets[2];}
  else if(section==="spreadsheet"){title=`${ui.spreadsheet[1]} | LoloBuy Sheet`;description=ui.spreadsheet[2];}
  else if(section==="categories"){title=`${copy.categories} | LoloBuy Sheet`;description=copy.verify;}
  else if(section==="products"){title=`${copy.products} | LoloBuy Sheet`;description=copy.verify;}
  else if(section==="seo-articles"||section==="guides"){title=`${ui.seo[1]} | LoloBuy Sheet`;description=ui.seo[2];}
  else if(section==="faq"){title=`${ui.faq[1]} | LoloBuy Sheet`;description=ui.faq[2];}
  else if(section==="markets"){title=`${ui.markets[1]} | LoloBuy Sheet`;description=ui.markets[2];}
  else if(section==="sources"){title=`${ui.sources[1]} | LoloBuy Sheet`;description=ui.sources[2];}

  const canonicalRoute=section==="guides"?`/seo-articles${slug?`/${slug}`:""}`:route;
  return {title:{absolute:title},description,alternates:localizedAlternates(code,canonicalRoute)};
}

export default async function LocalizedPage({params}:{params:Promise<Params>}){
  const {locale,path=[]}=await params;
  if(!localeCodes.includes(locale as LocaleCode))notFound();
  const code=locale as LocaleCode;
  const copy=localeCopy[code];
  const ui=localizedPageCopy[code];
  const localizedFaq=getLocalizedFaq(code);
  const {categories,products,guides}=localizeCollections(code,baseCategories,baseProducts,baseGuides);
  const regionCodes=["US","CA","DE","NL","FR","GB"];
  const regionNames=new Intl.DisplayNames([code],{type:"region"});
  const markets=code==="en"?baseMarkets:baseMarkets.map((item,index)=>({...item,name:regionNames.of(regionCodes[index])||item.name,tier:`${ui.markets[0]} ${String(index+1).padStart(2,"0")}`,confidence:ui.evidence,summary:ui.markets[2],evidence:[ui.evidence,ui.marketEvidence,copy.verify]}));
  const sourceSubjects=["LoloBuy","Google Play","App Store · France","LoloBuy · Germany","LoloBuy · USA","LoloBuy · Canada","LoloBuy · Netherlands","LoloBuy · France","Trustpilot","How2ship","FindSpreadsheet"];
  const sources=code==="en"?baseSources:baseSources.map((item,index)=>({...item,type:ui.evidence,title:`${sourceSubjects[index]} · ${ui.sourceLibrary}`,note:ui.sources[2]}));
  const [section,slug]=path;
  const category=section==="categories"?categories.find((item)=>item.slug===slug):undefined;
  const product=section==="products"?products.find((item)=>item.slug===slug):undefined;
  const guide=(section==="guides"||section==="seo-articles")?guides.find((item)=>item.slug===slug):undefined;
  const market=section==="markets"?markets.find((item)=>item.slug===slug):undefined;

  if(category){
    const matches=products.filter((item)=>item.category===category.slug);
    return <><Header/><main><header className="category-hero shell"><Link href={withLocale(code,"/categories")}>← {copy.categories}</Link><span className="category-index">{category.glyph}</span><p className="eyebrow"><span></span>{copy.openCategory}</p><h1>{category.name}</h1><p>{category.note}. {copy.verify}</p></header><section className="section shell"><div className="product-grid">{matches.map((item)=><a className="product-card" href={item.live} key={item.slug}><div className="product-visual product-photo"><ProductImage src={item.image} alt={item.name}/><span>{item.label}</span></div><h2>{item.name}</h2><p>{item.summary}</p><strong>{copy.liveDatabase} ↗</strong></a>)}</div><div className="category-actions"><p>{copy.verify}</p><a className="database-cta" href={category.href}>{copy.liveDatabase} ↗</a></div></section></main><Footer/></>;
  }

  if(product){
    const productCategory=categories.find((item)=>item.slug===product.category)!;
    return <><Header/><main><header className="product-detail-hero shell"><div><Link href={withLocale(code,`/categories/${productCategory.slug}`)}>← {productCategory.name}</Link><p className="eyebrow"><span></span>{product.label}</p><h1>{product.name}</h1><p>{copy.verify}</p></div><div className="product-visual detail product-photo"><ProductImage src={product.image} alt={product.name}/><span>{productCategory.name}</span><small>{copy.openProduct}</small></div></header><section className="product-detail-body shell"><article><small>01 / {copy.nav[2]}</small><h2>{ui.details}</h2><ol>{product.checks.map((check)=><li key={check}>{check}</li>)}</ol></article><article><small>02 / {copy.nav[3]}</small><h2>{copy.heroAccent}</h2><p>{product.shipping}</p></article><aside><p>{copy.verify}</p><a className="database-cta" href={product.live}>{copy.liveDatabase} ↗</a></aside></section></main><Footer/></>;
  }

  if(guide&&section==="guides"){
    permanentRedirect(withLocale(code,`/seo-articles/${guide.slug}`));
  }

  if(guide){
    return <><Header/><main className="article-page"><header className="article-hero shell"><Link href={withLocale(code,"/seo-articles")}>← {ui.back}</Link><p className="eyebrow"><span></span>{guide.kicker} · {guide.read}</p><h1>{guide.title}</h1><p>{guide.dek}</p><div className="article-meta"><span>{ui.seo[0]}</span><span>{ui.evidence}</span><span>{copy.verify}</span></div></header><article className="article-body shell"><aside><b>{ui.sections}</b>{guide.sections.map(([title],i)=><a href={`#section-${i+1}`} key={title}>{String(i+1).padStart(2,"0")} {title}</a>)}</aside><div className="prose">{guide.sections.map(([title,body],i)=><ArticleSection id={`section-${i+1}`} index={i+1} title={title} body={body} key={title}/>)}<div className="article-callout"><b>{ui.decision}</b><p>{ui.stepText}</p><a href="https://findspreadsheet.com/AllProducts/">{ui.browseDatabase} ↗</a></div></div></article></main><Footer/></>;
  }

  if(market){
    return <><Header/><main className="article-page"><header className="market-hero shell"><Link href={withLocale(code,"/markets")}>← {ui.back}</Link><div className="country-code big">{market.flag}</div><p className="eyebrow"><span></span>{market.tier} · {market.confidence}</p><h1>{ui.markets[0]}<br/>{market.name}.</h1><p>{market.summary}</p></header><section className="country-content shell"><article><small>01 / {ui.evidence}</small><h2>{ui.markets[1]}</h2><p>{ui.markets[2]} {market.summary}</p></article><article><small>02 / {ui.details}</small><h2>{copy.heroAccent}</h2><p>{copy.verify} {ui.stepText}</p></article><article><small>03 / {ui.seo[0]}</small><h2>{ui.seo[1]}</h2><p>{ui.seo[2]}</p></article><div className="evidence-panel"><small>{ui.evidence}</small>{market.evidence.map((item)=><p key={item}>✓ {item}</p>)}<Link href={withLocale(code,"/sources")}>{ui.sourceLibrary} →</Link></div></section></main><Footer/></>;
  }

  if(section==="categories"){
    return <><Header/><main className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>{copy.categories}</p><h1>{copy.heroTitle}<br/><em>{copy.categories}</em></h1><p>{copy.verify}</p><SearchBox/></div><MobileModule title={copy.categories} defaultOpen><div className="category-grid large">{categories.map((item)=><Link className="category-card" href={withLocale(code,`/categories/${item.slug}`)} key={item.slug}><span className="category-no">{item.glyph}</span><div><h2>{item.name}</h2><p>{item.note}</p><small>{copy.openCategory}</small></div><b>→</b></Link>)}</div></MobileModule></main><Footer/></>;
  }

  if(section==="products"){
    return <><Header/><main className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>{copy.products}</p><h1>{copy.heroTitle}<br/><em>{copy.products}</em></h1><p>{copy.verify}</p><SearchBox/></div><MobileModule title={copy.products}><div className="product-grid">{products.map((item)=><a className="product-card" href={item.live} key={item.slug}><div className="product-visual product-photo"><ProductImage src={item.image} alt={item.name}/><span>{item.label}</span></div><h2>{item.name}</h2><p>{item.summary}</p><strong>{copy.liveDatabase} ↗</strong></a>)}</div></MobileModule></main><Footer/></>;
  }

  if(section==="spreadsheet"){
    return <><Header/><main><section className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>{ui.spreadsheet[0]}</p><h1>{ui.spreadsheet[1]}<br/><em>{copy.heroAccent}</em></h1><p>{ui.spreadsheet[2]}</p><SearchBox/></div><MobileModule title={copy.categories} defaultOpen><div className="category-grid large">{categories.map((item)=><Link className="category-card" href={withLocale(code,`/categories/${item.slug}`)} key={item.slug}><span className="category-no">{item.glyph}</span><div><h2>{item.name}</h2><p>{item.note}</p><small>{copy.openCategory}</small></div><b>→</b></Link>)}</div></MobileModule></section><MobileModule title={ui.details}><section className="dark-section"><div className="shell"><div className="section-head inverse"><div><p className="eyebrow"><span></span>{ui.spreadsheet[0]}</p><h2>{ui.steps.length} · {ui.details}</h2></div><p className="section-intro">{ui.stepText}</p></div><div className="steps">{ui.steps.map((step,i)=><article key={step}><small>{String(i+1).padStart(2,"0")}</small><span>{["⌕","◎","□","↗"][i]}</span><h3>{step}</h3><p>{ui.stepText}</p></article>)}</div></div></section></MobileModule><MobileModule title={ui.decision}><section className="section shell"><div className="notice"><b>{ui.decision}</b><p>{ui.spreadsheet[2]} {copy.verify}</p></div></section></MobileModule></main><Footer/></>;
  }

  if(section==="guides" && !slug){
    permanentRedirect(withLocale(code,"/seo-articles"));
  }

  if(section==="seo-articles"){
    return <><Header/><main className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>{ui.seo[0]}</p><h1>{ui.seo[1]}<br/><em>{copy.heroAccent}</em></h1><p>{ui.seo[2]}</p></div><MobileModule title={ui.seo[0]} defaultOpen><div className="guide-grid seo-grid">{guides.map((item,i)=><Link className={i===0?"guide-card featured":"guide-card"} href={withLocale(code,`/seo-articles/${item.slug}`)} key={item.slug}><small>{item.kicker} · {item.read}</small><h2>{item.title}</h2><p>{item.dek}</p><span>{ui.read} →</span></Link>)}</div></MobileModule><MobileModule title={ui.guides[0]}><section className="content-section"><div className="section-head"><div><p className="eyebrow"><span></span>{ui.guides[0]}</p><h2>{ui.guides[1]}<br/><em>{copy.heroAccent}</em></h2></div><p className="section-intro dark">{ui.guides[2]}</p></div><div className="series-grid">{ui.steps.map((step,i)=><article key={step}><small>{String(i+1).padStart(2,"0")}</small><h3>{step}</h3><p>{ui.stepText}</p></article>)}</div></section></MobileModule><section className="content-section"><div className="notice"><b>{ui.decision}</b><p>{ui.seo[2]} {copy.verify}</p></div></section></main><Footer/></>;
  }

  if(section==="faq"){
    const schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:localizedFaq.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))};
    return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><Header/><main className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>{ui.faq[0]}</p><h1>{ui.faq[1]}<br/><em>{copy.heroAccent}</em></h1><p>{ui.faq[2]}</p></div><div className="faq-page-grid"><aside><b>{ui.sections}</b><a href="#faq-1">{ui.spreadsheet[0]}</a><a href="#faq-7">{copy.nav[2]} · {ui.details}</a><a href="#faq-10">{copy.nav[3]}</a><a href="#faq-12">{ui.markets[0]} · {ui.sourceLibrary}</a><a href="#faq-16">{ui.trust} · {ui.evidence}</a></aside><div className="faq-list faq-page-list" id="answers">{localizedFaq.map(([question,answer],i)=><details id={`faq-${i+1}`} key={question} open={i===0}><summary><span className="faq-no">{String(i+1).padStart(2,"0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></div><div className="notice"><b>{ui.decision}</b><p>{ui.faq[2]} {ui.stepText}</p></div></main><Footer/></>;
  }

  if(section==="markets"){
    return <><Header/><main className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>{ui.markets[0]}</p><h1>{ui.markets[1]}<br/><em>{copy.heroAccent}</em></h1><p>{ui.markets[2]}</p></div><MobileModule title={ui.markets[0]}><div className="market-cards">{markets.map((item)=><Link href={withLocale(code,`/markets/${item.slug}`)} key={item.slug}><div><span className="country-code">{item.flag}</span><small>{item.tier}</small></div><h2>{item.name}</h2><p>{item.summary}</p><ul>{item.evidence.map((e)=><li key={e}>{e}</li>)}</ul><b>{ui.details} →</b></Link>)}</div></MobileModule><div className="notice"><b>{ui.evidence}</b><p>{ui.markets[2]}</p></div></main><Footer/></>;
  }

  if(section==="sources"){
    return <><Header/><main className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>{ui.sources[0]}</p><h1>{ui.sources[1]}<br/><em>{copy.heroAccent}</em></h1><p>{ui.sources[2]}</p></div><MobileModule title={ui.sourceLibrary}><div className="source-list">{sources.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,"0")}</span><div><small>{item.type}</small><h2>{item.title}</h2><p>{item.note}</p></div><b aria-hidden="true">—</b></article>)}</div></MobileModule><div className="editorial-grid"><article><b>{ui.evidence}</b><p>{ui.sources[2]}</p></article><article><b>{ui.decision}</b><p>{copy.verify}</p></article></div></main><Footer/></>;
  }

  if(path.length===0){
    return <><Header/><main>
      <section className="hero shell"><div className="hero-copy"><p className="eyebrow"><span></span>{copy.heroKicker}</p><h1>{copy.heroTitle}<br/><em>{copy.heroAccent}</em></h1><p className="hero-text">{copy.heroText}</p><SearchBox/><div className="microproof"><span>{ui.evidence}</span><span>{ui.sourceLibrary}</span><span>{ui.marketEvidence}</span></div></div><aside className="research-card"><p className="card-label">{ui.guides[0]}</p><div className="signal"><span className="pulse"></span><div><b>{ui.evidence}</b><p>{ui.sources[2]}</p></div></div><div className="signal"><span>06</span><div><b>{ui.markets[0]}</b><p>{ui.markets[2]}</p></div></div><div className="signal"><span>10</span><div><b>{copy.categories}</b><p>{ui.spreadsheet[2]}</p></div></div></aside></section>
      <section className="ticker" aria-label={ui.steps.join(", ")}><div>{ui.steps.map((step,i)=><span key={step}>{step}{i<ui.steps.length-1?<i> ◆ </i>:null}</span>)}</div></section>
      <MobileModule title={copy.categories} defaultOpen><section className="section shell"><div className="section-head"><div><p className="eyebrow"><span></span>{copy.categories}</p><h2>{ui.spreadsheet[1]}<br/><em>{copy.heroAccent}</em></h2></div><Link className="text-link" href={withLocale(code,"/spreadsheet")}>{copy.nav[1]} →</Link></div><div className="category-grid">{categories.map((item)=><Link className="category-card" href={withLocale(code,`/categories/${item.slug}`)} key={item.slug}><span className="category-no">{item.glyph}</span><div><h3>{item.name}</h3><p>{item.note}</p></div><b>→</b></Link>)}</div></section></MobileModule>
      <MobileModule title={copy.products}><section className="section product-showcase"><div className="shell"><div className="section-head"><div><p className="eyebrow"><span></span>{copy.products}</p><h2>{copy.products}<br/><em>{ui.details}</em></h2></div><Link className="text-link" href={withLocale(code,"/products")}>{copy.openProduct} →</Link></div><div className="product-grid home-products">{products.map((item)=><a className="product-card" href={item.live} key={item.slug}><div className="product-visual product-photo"><ProductImage src={item.image} alt={item.name}/><span>{item.label}</span></div><small>{categories.find((c)=>c.slug===item.category)?.name}</small><h3>{item.name}</h3><p>{item.summary}</p><strong>{copy.liveDatabase} ↗</strong></a>)}</div></div></section></MobileModule>
      <MobileModule title={ui.spreadsheet[0]}><section className="dark-section"><div className="shell"><div className="section-head inverse"><div><p className="eyebrow"><span></span>{ui.spreadsheet[0]}</p><h2>{ui.details}</h2></div><p className="section-intro">{ui.stepText}</p></div><div className="steps">{ui.steps.map((step,i)=><article key={step}><small>{String(i+1).padStart(2,"0")}</small><span>{["⌕","◎","▣","↗"][i]}</span><h3>{step}</h3><p>{ui.stepText}</p></article>)}</div></div></section></MobileModule>
      <MobileModule title={ui.marketEvidence}><section className="section shell"><div className="section-head"><div><p className="eyebrow"><span></span>{ui.marketEvidence}</p><h2>{ui.markets[1]}<br/><em>{ui.evidence}</em></h2></div><p className="section-intro dark">{ui.markets[2]}</p></div><div className="market-list">{markets.map((item)=><Link className="market-row" href={withLocale(code,`/markets/${item.slug}`)} key={item.slug}><span className="country-code">{item.flag}</span><div><small>{item.tier}</small><h3>{item.name}</h3></div><p>{item.summary}</p><span className="confidence">{ui.details}</span><b>→</b></Link>)}</div></section></MobileModule>
      <MobileModule title={ui.guides[0]}><section className="section guides-section"><div className="shell"><div className="section-head"><div><p className="eyebrow"><span></span>{ui.guides[0]}</p><h2>{ui.guides[1]}<br/><em>{copy.heroAccent}</em></h2></div><Link className="text-link" href={withLocale(code,"/seo-articles")}>{ui.read} →</Link></div><div className="guide-grid">{guides.map((item,i)=><Link className={i===0?"guide-card featured":"guide-card"} href={withLocale(code,`/seo-articles/${item.slug}`)} key={item.slug}><small>{item.kicker} · {item.read}</small><h3>{item.title}</h3><p>{item.dek}</p><span>{ui.read} →</span></Link>)}</div></div></section></MobileModule>
      <MobileModule title={ui.trust}><section className="section shell trust-split"><div className="trust-quote"><p className="eyebrow"><span></span>{ui.trust}</p><blockquote>{ui.sources[2]}</blockquote><Link href={withLocale(code,"/sources")}>{ui.sourceLibrary} →</Link></div><div className="trust-list"><div><b>01</b><h3>{ui.evidence}</h3><p>{ui.sources[2]}</p></div><div><b>02</b><h3>{ui.marketEvidence}</h3><p>{ui.markets[2]}</p></div><div><b>03</b><h3>{ui.decision}</h3><p>{ui.stepText}</p></div></div></section></MobileModule>
      <MobileModule title={ui.faq[0]}><section className="section shell faq-section"><div><p className="eyebrow"><span></span>{ui.faq[0]}</p><h2>{ui.faq[1]}<br/><em>{copy.heroAccent}</em></h2><p className="section-intro dark">{ui.faq[2]}</p></div><div className="faq-list">{localizedFaq.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section></MobileModule>
    </main><Footer/></>;
  }

  notFound();
}
