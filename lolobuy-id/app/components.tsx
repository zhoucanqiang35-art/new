import { LanguageSwitcher } from "./language-switcher";
import { common, type Locale } from "./translations";

const localPath=(locale:Locale,path="")=>`/${locale}${path}`;
const accessibilityCopy={
  en:{home:"FindSpreadsheet Agent Guide home",nav:"Primary navigation"},
  de:{home:"FindSpreadsheet Agent Guide Startseite",nav:"Hauptnavigation"},
  fr:{home:"Accueil FindSpreadsheet Agent Guide",nav:"Navigation principale"},
  es:{home:"Inicio de FindSpreadsheet Agent Guide",nav:"Navegación principal"},
  it:{home:"Home di FindSpreadsheet Agent Guide",nav:"Navigazione principale"},
  pt:{home:"Início do FindSpreadsheet Agent Guide",nav:"Navegação principal"},
} as const;

function BrandLogo(){return <img src="/lolobuy-logo.png" alt="LoloBuy" width={220} height={100}/>;}

export function Header({locale="en"}:{locale?:Locale}) {
  const copy=common[locale], access=accessibilityCopy[locale];
  return <header className="site-header"><a className="brand brand-logo" href={localPath(locale)} aria-label={access.home}><BrandLogo/></a><nav aria-label={access.nav}><a href={localPath(locale)}>{copy.home}</a><a href={localPath(locale,"/categories")}>{copy.categories}</a><a href={localPath(locale,"/product-details")}>{copy.details}</a><a href={localPath(locale,"/seo-articles")}>{copy.articles}</a><a href={localPath(locale,"/faq")}>{copy.faq}</a></nav><LanguageSwitcher locale={locale}/></header>;
}
export function SearchBox({ compact = false, locale="en" }: { compact?: boolean; locale?:Locale }) {
  const copy=common[locale];
  return <div className={compact?"search-area compact":"search-area"}><form className={compact ? "search-box compact" : "search-box"} method="get" action="https://findspreadsheet.com/search.html"><label className="sr-only" htmlFor={compact ? "product-search-compact" : "product-search"}>{copy.search}</label><span aria-hidden="true">⌕</span><input id={compact ? "product-search-compact" : "product-search"} name="keywords" placeholder={copy.placeholder} required/><input type="hidden" name="channelid" value="2"/><button type="submit">{copy.search} <span>↗</span></button></form><a className="search-database-link" href="https://findspreadsheet.com/" target="_blank" rel="noopener">{copy.database}</a></div>;
}
export function Footer({locale="en"}:{locale?:Locale}) {
  const copy=common[locale], access=accessibilityCopy[locale];
  return <footer><div><a className="brand footer-brand brand-logo" href={localPath(locale)} aria-label={access.home}><BrandLogo/></a><p>{copy.independent}</p></div><div className="footer-links"><div><b>{copy.explore}</b><a href={localPath(locale,"/categories")}>{copy.categories}</a><a href={localPath(locale,"/product-details")}>{copy.details}</a><a href={localPath(locale,"/guide")}>{copy.guide}</a></div><div><b>{copy.research}</b><a href={localPath(locale,"/seo-articles")}>{copy.articles}</a><a href={localPath(locale,"/shipping")}>{copy.shipping}</a><a href={localPath(locale,"/faq")}>{copy.faq}</a></div><div><b>{copy.about}</b><a href={localPath(locale,"/about")}>{copy.method}</a><a href="https://findspreadsheet.com/" target="_blank" rel="noopener">{copy.main}</a></div></div><div className="legal">{copy.legal} © 2026 FindSpreadsheet Agent Guide.</div></footer>;
}
export function PageShell({ eyebrow, title, intro, children, locale="en" }: { eyebrow: string; title: string; intro: string; children: React.ReactNode; locale?:Locale }) { return <><Header locale={locale}/><main><section className="inner-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{intro}</p><SearchBox compact locale={locale}/></section>{children}</main><Footer locale={locale}/></>; }
export function ArticleSections({ sections }: { sections: readonly (readonly string[])[] }) { return <section className="article-grid">{sections.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h2>{title}</h2><p>{text}</p></article>)}</section>; }
export function CategoryVisualCard({slug,icon,name,note,href,action}:{slug:string;icon:string;name:string;note:string;href:string;action:string}){const external=href.startsWith("http");return <a className={`category-card category-card-${slug}`} href={href} target={external?"_blank":undefined} rel={external?"noopener":undefined}><i className="category-media" aria-hidden="true"></i><div className="category-copy"><span>{icon}</span><h3>{name}</h3><p>{note}</p><b>{action}</b></div></a>;}
