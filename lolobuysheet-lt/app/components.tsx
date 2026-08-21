import { categories, navItems } from "./data";
import LanguageSelect from "./LanguageSelect";
import { routeCopy } from "./routeCopy";
import { localizedSiteContent } from "./localizedSiteContent";

function localHref(href:string,lang?:string){if(!lang)return href;if(href==="/")return `/languages/${lang}`;return `/languages/${lang}${href}`;}

export function Header({lang}:{lang?:string}={}) {
  const labels=lang?routeCopy[lang]:undefined;
  const shell=lang?localizedSiteContent[lang]?.text.shell:undefined;
  const navLabels:Record<string,string>|undefined=labels?{"/":labels.home,"/categories":labels.categories,"/products":labels.products,"/guides":labels.guides,"/qc-guide":labels.qc,"/shipping":labels.shipping,"/research":labels.research,"/faq":labels.faq,"/articles":labels.articles}:undefined;
  return <><div className="noticebar"><span>{shell?.noticeTitle??"Independent research site"}</span><span className="noticebar__detail">{shell?.noticeDetail??"Official sources checked · 20 Aug 2026"}</span></div><header className="site-header">
    <a className="brand" href={localHref("/",lang)} aria-label="LoloBuy Sheet home"><img className="brand-logo" src="/lolobuy-logo.png" alt="LoloBuy"/></a>
    <nav aria-label="Primary navigation">{navItems.map(item=><a key={item.href} href={localHref(item.href,lang)}>{navLabels?.[item.href]??item.label}</a>)}</nav>
    <a className="mobile-home" href={localHref("/",lang)}>{labels?.home??"Home"}</a>
    <LanguageSelect/>
  </header></>;
}

export function Footer({lang}:{lang?:string}={}) {
  const labels=lang?routeCopy[lang]:undefined;
  const shell=lang?localizedSiteContent[lang]?.text.shell:undefined;
  return <footer className="footer"><div className="footer__top"><div><a className="brand brand--light" href={localHref("/",lang)}><img className="brand-logo brand-logo--footer" src="/lolobuy-logo.png" alt="LoloBuy"/></a><p>{shell?.footerIntro??"Independent product discovery, QC education and shipping research for global buyers."}</p></div><div className="footer__links"><div><strong>{shell?.explore??"Explore"}</strong><a href={localHref("/categories",lang)}>{labels?.categories??"Categories"}</a><a href={localHref("/products",lang)}>{labels?.products??"Products"}</a><a href={localHref("/articles",lang)}>{labels?.articles??"SEO Articles"}</a></div><div><strong>{shell?.research??"Research"}</strong><a href={localHref("/qc-guide",lang)}>{labels?.qc??"QC Guide"}</a><a href={localHref("/shipping",lang)}>{labels?.shipping??"Shipping"}</a><a href={localHref("/faq",lang)}>{labels?.faq??"FAQ"}</a></div><div><strong>{shell?.trust??"Trust"}</strong><a href={localHref("/about",lang)}>{labels?.about??"About"}</a><a href={localHref("/sources",lang)}>{labels?.sources??"Sources"}</a><a href="/languages">{shell?.languages??"Languages"}</a></div></div></div><div className="footer__bottom"><span>© 2026 LoloBuy Sheet</span><span>{shell?.footerDisclaimer??"Independent and not affiliated with LoloBuy, Taobao, Weidian, 1688 or Tmall. Verify live prices, availability, route rules and local import requirements before ordering."}</span></div></footer>;
}

export function PageHero({eyebrow,title,intro,lang}:{eyebrow:string;title:string;intro:string;lang?:string}) { const shell=lang?localizedSiteContent[lang]?.text.shell:undefined;return <section className="page-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-hero__intro">{intro}</p><div className="page-hero__meta"><span>{shell?.independentResearch??"Independent research"}</span><span>{shell?.sourcesLinked??"Sources linked"}</span><span>{shell?.reviewed??"Reviewed Aug 2026"}</span></div></section>; }
export function SourceNote({children,lang}:{children:React.ReactNode;lang?:string}) { const shell=lang?localizedSiteContent[lang]?.text.shell:undefined;return <aside className="source-note"><strong>{shell?.sourceNote??"Source note"}</strong><p>{children}</p></aside>; }
export function PageShell({children,lang}:{children:React.ReactNode;lang?:string}) { return <><Header lang={lang}/><main lang={lang}>{children}</main><Footer lang={lang}/></>; }
export function CategoryVisualGrid({lang}:{lang?:string}={}){const prefix=lang?`/languages/${lang}`:"";const bundle=lang?localizedSiteContent[lang]:undefined;const shell=bundle?.text.shell;const labels=lang?routeCopy[lang]:undefined;return <div className="category-visual-grid">{categories.map(category=>{const translated=bundle?.categories.find(item=>item.slug===category.slug);const name=translated?.name??category.name;return <a className="category-visual-card" href={`${prefix}/categories/${category.slug}`} key={category.slug} style={{backgroundPosition:category.visualPosition}} aria-label={`${labels?.open??"Open"} ${name}`}><span>{name}</span></a>})}<a className="category-view-all" href={`${prefix}/categories`}><i aria-hidden="true">▦</i><strong>{shell?.viewAll??"View all"}</strong><small>{shell?.categoryCount??"11 categories"}</small></a></div>}
