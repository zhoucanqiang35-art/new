import { CategoryVisualCard, Footer, Header, SearchBox } from "./components";
import { categories } from "./data";
import { common, homeCopy, localizedCategories, localizedMarkets, localizedProducts, type Locale } from "./translations";

const p=(locale:Locale,path="")=>`/${locale}${path}`;

export function LocaleHome({locale}:{locale:Locale}){
  const c=homeCopy[locale], nav=common[locale], cats=localizedCategories(locale), products=localizedProducts(locale), markets=localizedMarkets(locale);
  const factLabel={en:"FACT CHECK",de:"FAKTENCHECK",fr:"VÉRIFICATION",es:"VERIFICACIÓN",it:"VERIFICA DEI FATTI",pt:"VERIFICAÇÃO"}[locale];
  const featureCards=[
    {title:nav.home,text:c.cards[0],href:p(locale)},
    {title:nav.categories,text:c.cards[1],href:p(locale,"/categories")},
    {title:nav.details,text:c.cards[2],href:p(locale,"/product-details")},
    {title:nav.articles,text:c.cards[3],href:p(locale,"/seo-articles")},
    {title:nav.faq,text:c.cards[4],href:p(locale,"/faq")},
  ];
  const structuredData={"@context":"https://schema.org","@type":"WebSite",name:"FindSpreadsheet Agent Research Guide",url:`https://lolobuy.id/${locale}/`,description:c.intro,potentialAction:{"@type":"SearchAction",target:"https://findspreadsheet.com/search.html?keywords={search_term_string}&channelid=2","query-input":"required name=search_term_string"}};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><Header locale={locale}/><main>
    <section className="hero"><div className="hero-copy"><div className="status"><span></span>{c.status}</div><h1>{c.heroA}<br/><em>{c.heroB}</em></h1><p>{c.intro}</p><SearchBox locale={locale}/><div className="trust-row">{c.trust.map(x=><span key={x}>{x}</span>)}</div></div><div className="hero-board" aria-label={c.board[0]}><div className="board-top"><span>{c.board[0]}</span><b>{c.board[1]}</b></div>{[0,1,2].map((i)=><div className={`route-card ${i===0?"active":""}`} key={c.board[2+i*2]}><i>0{i+1}</i><div><b>{c.board[2+i*2]}</b><small>{c.board[3+i*2]}</small></div><strong>{i===2?"✓":"→"}</strong></div>)}<div className="route-note"><span>{factLabel}</span><p>{c.fact}</p></div></div></section>
    <section className="strip"><b>{c.strip[0]}</b>{c.strip.slice(1).map((x,i)=><span key={x}>{i>0&&<i>→</i>}{x}</span>)}</section>
    <section className="section feature-section"><div className="section-head"><div><p className="eyebrow">{c.feature[0]}</p><h2>{c.feature[1]}</h2><p>{c.feature[2]}</p></div></div><div className="feature-grid">{featureCards.map((card,i)=><a className="feature-card" href={card.href} key={card.href}><span>0{i+1}</span><h3>{card.title}</h3><p>{card.text}</p><b>{c.open}</b></a>)}</div></section>
    <section className="section" id="categories"><div className="section-head"><div><p className="eyebrow">{c.cat[0]}</p><h2>{c.cat[1]}</h2></div><a href="https://findspreadsheet.com/" target="_blank" rel="noopener">{c.cat[2]}</a></div><div className="category-grid">{categories.map((base,i)=><CategoryVisualCard key={base.slug} slug={base.slug} icon={base.icon} name={cats[i].name} note={cats[i].note} href={base.href} action={c.cat[2]}/>)}</div></section>
    <section className="section products-section"><div className="section-head"><div><p className="eyebrow">{c.prod[0]}</p><h2>{c.prod[1]}</h2><p>{c.prod[2]}</p></div><a href={p(locale,"/products")}>{c.prod[3]}</a></div><div className="product-row">{products.map((item,i)=><a className="product-card" href={item.href} target="_blank" rel="noopener" key={item.href}><div className="image-wrap"><img src={item.image} alt={item.name}/><span>{String(i+1).padStart(2,"0")}</span></div><div className="product-info"><small>{item.category}</small><h3>{item.name}</h3><div><b>{item.price}</b><span>{item.source}</span></div></div></a>)}</div><p className="price-note">{c.prod[4]}</p></section>
    <section className="section evidence-section"><div className="evidence-title"><p className="eyebrow">{c.evidence[0]}</p><h2>{c.evidence[1]}</h2></div><div className="evidence-cards">{[[2,3,"/about"],[4,5,"/qc"],[6,7,"/updates"]].map(([a,b,href],i)=><article key={String(a)}><span>0{i+1}</span><h3>{c.evidence[Number(a)]}</h3><p>{c.evidence[Number(b)]}</p><a href={p(locale,String(href))}>{c.open}</a></article>)}</div></section>
    <section className="section markets-section" id="markets"><div className="section-head"><div><p className="eyebrow">{c.market[0]}</p><h2>{c.market[1]}</h2><p>{c.market[2]}</p></div></div><div className="market-table"><div className="market-row market-header"><span>{c.market[3]}</span><span>{c.market[4]}</span><span>{c.market[5]}</span><span>{c.market[6]}</span></div>{markets.map(m=><div className="market-row" key={m.code}><span><i>{m.code}</i><b>{m.name}</b></span><span>{m.language}</span><span>{m.currency}</span><span><em className={m.isPrimary?"primary":""}>{m.priority}</em></span></div>)}</div></section>
    <section className="section workflow"><div><p className="eyebrow">{c.workflow[0]}</p><h2>{c.workflow[1]}</h2></div><ol>{[0,1,2,3].map(i=><li key={i}><span>0{i+1}</span><div><h3>{c.workflow[2+i*2]}</h3><p>{c.workflow[3+i*2]}</p></div></li>)}</ol><a className="dark-cta" href={p(locale,"/guide")}>{nav.guide} →</a></section>
    <section className="section faq-preview"><div><p className="eyebrow">{c.quick[0]}</p><h2>{c.quick[1]}</h2></div><div>{[0,1,2].map((i)=><details open={i===0} key={c.quick[2+i*2]}><summary>{c.quick[2+i*2]}<span>+</span></summary><p>{c.quick[3+i*2]}</p></details>)}<a href={p(locale,"/faq")}>{c.quick[8]}</a></div></section>
    <section className="final-cta"><p className="eyebrow">{c.final[0]}</p><h2>{c.final[1]}</h2><SearchBox compact locale={locale}/></section>
  </main><Footer locale={locale}/></>;
}
