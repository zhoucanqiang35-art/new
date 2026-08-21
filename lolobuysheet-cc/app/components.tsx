"use client";

import { FormEvent, type ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { markets } from "./data";
import { languageOptions, localeCodes, localeCopy, type LocaleCode, withLocale } from "./locales";
import { localizedPageCopy } from "./localized-content";
import { getLocalizedCategoryNames } from "./collection-localized";

const accessibility:Record<LocaleCode,{home:string;menu:string;nav:string;language:string;search:string;market:string;choose:string}>={
  en:{home:"LoloBuy Sheet home",menu:"Toggle navigation",nav:"Primary navigation",language:"Site language",search:"Search FindSpreadsheet products",market:"Market brief",choose:"Choose a country"},
  es:{home:"Inicio de LoloBuy Sheet",menu:"Abrir navegación",nav:"Navegación principal",language:"Idioma del sitio",search:"Buscar productos en FindSpreadsheet",market:"Resumen de mercado",choose:"Elegir un país"},
  de:{home:"LoloBuy-Sheet Startseite",menu:"Navigation öffnen",nav:"Hauptnavigation",language:"Websitesprache",search:"Produkte auf FindSpreadsheet suchen",market:"Marktübersicht",choose:"Land auswählen"},
  fr:{home:"Accueil LoloBuy Sheet",menu:"Ouvrir la navigation",nav:"Navigation principale",language:"Langue du site",search:"Rechercher des produits FindSpreadsheet",market:"Aperçu du marché",choose:"Choisir un pays"},
  it:{home:"Home LoloBuy Sheet",menu:"Apri navigazione",nav:"Navigazione principale",language:"Lingua del sito",search:"Cerca prodotti FindSpreadsheet",market:"Sintesi del mercato",choose:"Scegli un paese"},
  pt:{home:"Início LoloBuy Sheet",menu:"Abrir navegação",nav:"Navegação principal",language:"Idioma do site",search:"Pesquisar produtos FindSpreadsheet",market:"Resumo do mercado",choose:"Escolher um país"},
  nl:{home:"Startpagina LoloBuy Sheet",menu:"Navigatie openen",nav:"Hoofdnavigatie",language:"Websitetaal",search:"Zoek FindSpreadsheet-producten",market:"Marktoverzicht",choose:"Kies een land"},
  pl:{home:"Strona główna LoloBuy Sheet",menu:"Otwórz nawigację",nav:"Główna nawigacja",language:"Język strony",search:"Szukaj produktów FindSpreadsheet",market:"Przegląd rynku",choose:"Wybierz kraj"},
  sv:{home:"LoloBuy Sheet startsida",menu:"Öppna navigering",nav:"Huvudnavigering",language:"Webbplatsens språk",search:"Sök FindSpreadsheet-produkter",market:"Marknadsöversikt",choose:"Välj ett land"},
  no:{home:"LoloBuy Sheet startside",menu:"Åpne navigasjon",nav:"Hovednavigasjon",language:"Nettstedsspråk",search:"Søk etter FindSpreadsheet-produkter",market:"Markedsoversikt",choose:"Velg et land"},
  da:{home:"LoloBuy Sheet forside",menu:"Åbn navigation",nav:"Hovednavigation",language:"Webstedets sprog",search:"Søg efter FindSpreadsheet-produkter",market:"Markedsoversigt",choose:"Vælg et land"},
  fi:{home:"LoloBuy Sheet -etusivu",menu:"Avaa navigointi",nav:"Päänavigointi",language:"Sivuston kieli",search:"Hae FindSpreadsheet-tuotteita",market:"Markkinakatsaus",choose:"Valitse maa"}
};

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const currentLocale = (localeCodes.includes(firstSegment as LocaleCode) ? firstSegment : "en") as LocaleCode;
  const basePath = localeCodes.includes(firstSegment as LocaleCode) ? pathname.replace(new RegExp(`^/${firstSegment}(?=/|$)`), "") || "/" : pathname;
  const copy = localeCopy[currentLocale];
  const ui = localizedPageCopy[currentLocale];
  const menuLabel:Record<LocaleCode,string>={en:"Menu",es:"Menú",de:"Menü",fr:"Menu",it:"Menu",pt:"Menu",nl:"Menu",pl:"Menu",sv:"Meny",no:"Meny",da:"Menu",fi:"Valikko"};
  const labels = copy.nav;
  useEffect(() => {
    document.documentElement.lang = currentLocale;
  }, [currentLocale]);
  const navItems = [
    { label: labels[0], href: withLocale(currentLocale, "/"), active: basePath === "/" },
    { label: labels[1], href: withLocale(currentLocale, "/spreadsheet"), active: basePath.startsWith("/spreadsheet") },
    { label: copy.products, href: withLocale(currentLocale, "/products"), active: basePath.startsWith("/products") || basePath.startsWith("/categories") },
    { label: labels[2], href: withLocale(currentLocale, "/seo-articles/qc-photo-checklist"), active: basePath === "/seo-articles/qc-photo-checklist" },
    { label: labels[3], href: withLocale(currentLocale, "/seo-articles/shipping-guide"), active: basePath === "/seo-articles/shipping-guide" },
    { label: ui.marketEvidence, href: withLocale(currentLocale, "/markets"), active: basePath.startsWith("/markets") },
    { label: labels[5], href: withLocale(currentLocale, "/seo-articles"), active: basePath === "/seo-articles" || (basePath.startsWith("/seo-articles/") && !basePath.endsWith("qc-photo-checklist") && !basePath.endsWith("shipping-guide")) },
    { label: labels[6], href: withLocale(currentLocale, "/faq"), active: basePath.startsWith("/faq") },
  ];
  function switchLanguage(locale: string) {
    const next = withLocale(locale as LocaleCode, basePath);
    window.location.assign(`${next}${window.location.search}${window.location.hash}`);
  }
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={withLocale(currentLocale, "/")} aria-label={accessibility[currentLocale].home}>
          <img className="brand-logo" src="/lolobuy-logo.png" width="220" height="100" alt="LoloBuy" />
          <small>{copy.heroKicker}</small>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={accessibility[currentLocale].menu}>{menuLabel[currentLocale]}</button>
        <nav className={open ? "nav open" : "nav"} aria-label={accessibility[currentLocale].nav}>
          {navItems.map((item) => <Link className={item.active ? "nav-link active" : "nav-link"} href={item.href} key={item.href}>{item.label}</Link>)}
          <label className="language-picker"><span aria-hidden="true">⊙</span><span className="sr-only">{accessibility[currentLocale].language}</span>
            <select aria-label={accessibility[currentLocale].language} value={currentLocale} onChange={(event) => switchLanguage(event.target.value)}>
              {languageOptions.map((language) => <option value={language.code} key={language.code}>{language.label}</option>)}
            </select>
          </label>
        </nav>
      </div>
    </header>
  );
}

export function SearchBox({initialQuery=""}:{initialQuery?:string}={}) {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const currentLocale = (localeCodes.includes(firstSegment as LocaleCode) ? firstSegment : "en") as LocaleCode;
  const ui = localizedPageCopy[currentLocale];
  const localizedCategories=getLocalizedCategoryNames(currentLocale);
  const [query, setQuery] = useState(initialQuery);
  const cleanQuery = query.trim();
  const normalizedQuery = cleanQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const searchRoutes = [
    { label:localizedCategories[0]||"Shoes",href:"https://findspreadsheet.com/shoes/",words:["shoe","shoes","sneaker","sneakers","boot","boots","trainer","trainers","zapato","zapatos","schuh","schuhe","chaussure","chaussures","scarpa","scarpe","sapato","sapatos","schoen","schoenen","buty","skor","sko","kenkiä"] },
    { label:localizedCategories[1]||"Hoodies & Sweaters",href:"https://findspreadsheet.com/hoodies-sweaters/",words:["hoodie","hoodies","sweater","sweaters","sweatshirt","knitwear","sudadera","sudaderas","kapuzenpullover","sweat","felpa","felpe","moletom","huppari","huppareita"] },
    { label:localizedCategories[2]||"T-Shirts",href:"https://findspreadsheet.com/t-shirts/",words:["t-shirt","t-shirts","tshirt","tshirts","tee","tees","camiseta","camisetas","shirt","shirts","maglietta","magliette"] },
    { label:localizedCategories[3]||"Jackets",href:"https://findspreadsheet.com/jackets/",words:["jacket","jackets","coat","coats","outerwear","windbreaker","chaqueta","chaquetas","jacke","jacken","veste","vestes","giacca","giacche","casaco","casacos"] },
    { label:localizedCategories[4]||"Pants & Shorts",href:"https://findspreadsheet.com/pants-shorts/",words:["pants","trousers","jeans","denim","cargo","cargos","shorts","sweatpants","pantalon","pantalones","hose","hosen","pantaloni","calcas","broek","broeken"] },
    { label:localizedCategories[5]||"Matching Sets",href:"https://findspreadsheet.com/ShortSets/",words:["set","sets","tracksuit","tracksuits","matching set","co-ord","conjunto","conjuntos","anzug","ensemble","completo"] },
    { label:localizedCategories[6]||"Jerseys",href:"https://findspreadsheet.com/Jersey/",words:["jersey","jerseys","football shirt","basketball jersey","sportswear","camisola","maillot","trikot","maglia"] },
    { label:localizedCategories[7]||"Accessories",href:"https://findspreadsheet.com/accessories/",words:["accessory","accessories","bag","bags","wallet","wallets","glasses","eyewear","jewellery","jewelry","bolso","bolsos","tasche","taschen","sac","sacs","borsa","borse","mala","malas","laukkua","laukkuja"] },
    { label:localizedCategories[8]||"Electronics",href:"https://findspreadsheet.com/electronics/",words:["electronic","electronics","headphone","headphones","earbuds","speaker","speakers","device","devices","electronica","elektronik","electronique","elettronica"] },
    { label:localizedCategories[9]||"Home & More",href:"https://findspreadsheet.com/other-stuff/",words:["home","lifestyle","decor","other","misc","hogar","maison","casa","heim","koti"] },
  ];
  const queryTokens=normalizedQuery.split(/[^a-z0-9]+/).filter(Boolean);
  const matchedRoute=cleanQuery?searchRoutes.find((route)=>route.words.some((word)=>word.includes(" ")?normalizedQuery.includes(word):queryTokens.includes(word))):undefined;
  const fallbackParams=new URLSearchParams({channelid:"2",keywords:cleanQuery});
  const searchHref=matchedRoute?.href||(cleanQuery?`https://findspreadsheet.com/search.html?${fallbackParams.toString()}`:"https://findspreadsheet.com/AllProducts/");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.assign(searchHref);
  }
  return (
    <div className="search-cluster">
      <form className="search-box" action="https://findspreadsheet.com/search.html" method="get" onSubmit={submit}>
        <input type="hidden" name="channelid" value="2" />
        <label className="sr-only" htmlFor="product-search">{accessibility[currentLocale].search}</label>
        <input id="product-search" name="keywords" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={ui.searchPlaceholder} list="product-search-suggestions" autoComplete="off" />
        <datalist id="product-search-suggestions">{searchRoutes.map((route)=><option value={route.label} key={route.label}/>)}</datalist>
        <a className="search-submit" href={searchHref} aria-label={cleanQuery?`${ui.searchAction}: ${cleanQuery}`:ui.browseDatabase}>{ui.searchAction} <span>↗</span></a>
        <button className="sr-only" type="submit">{ui.searchAction}</button>
      </form>
      <a className="database-cta" href="https://findspreadsheet.com/AllProducts/">{ui.browseDatabase} <span>↗</span></a>
    </div>
  );
}

function useMobileLayout() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 600px)");
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return mobile;
}

export function MobileModule({title,children,defaultOpen=false}:{title:string;children:ReactNode;defaultOpen?:boolean}) {
  const mobile = useMobileLayout();
  const [expanded,setExpanded] = useState(defaultOpen);
  if(!mobile) return <>{children}</>;
  return <details className="mobile-module" open={expanded} onToggle={(event)=>setExpanded(event.currentTarget.open)}>
    <summary><span>{title}</span><b aria-hidden="true">+</b></summary>
    <div className="mobile-module-body">{children}</div>
  </details>;
}

export function ArticleSection({id,index,title,body,extra}:{id:string;index:number;title:string;body:string;extra?:ReactNode}) {
  const mobile = useMobileLayout();
  const number=String(index).padStart(2,"0");
  if(mobile) return <details className="mobile-article-section" id={id}>
    <summary><small>{number}</small><span>{title}</span><b aria-hidden="true">+</b></summary>
    <div><p>{body}</p>{extra}</div>
  </details>;
  return <section id={id}><small>{number}</small><h2>{title}</h2><p>{body}</p>{extra}</section>;
}

export function MarketSelect() {
  const pathname=usePathname();
  const firstSegment=pathname.split("/").filter(Boolean)[0];
  const currentLocale=(localeCodes.includes(firstSegment as LocaleCode)?firstSegment:"en") as LocaleCode;
  const regionNames=new Intl.DisplayNames([currentLocale],{type:"region"});
  const regionCodes=["US","CA","DE","NL","FR","GB"];
  function change(value: string) { if (value) window.location.href = `/markets/${value}`; }
  return (
    <label className="market-select">{accessibility[currentLocale].market}
      <select defaultValue="" onChange={(e) => change(e.target.value)}>
        <option value="" disabled>{accessibility[currentLocale].choose}</option>
        {markets.map((market,index) => <option key={market.slug} value={market.slug}>{market.flag} · {regionNames.of(regionCodes[index])||market.name}</option>)}
      </select>
    </label>
  );
}

export function Footer() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const currentLocale = (localeCodes.includes(firstSegment as LocaleCode) ? firstSegment : "en") as LocaleCode;
  const copy = localeCopy[currentLocale];
  const ui = localizedPageCopy[currentLocale];
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><img className="footer-logo" src="/lolobuy-logo.png" width="220" height="100" alt="LoloBuy" /><h2>{copy.heroTitle}<br/>{copy.heroAccent}</h2></div>
        <div><h3>{ui.explore}</h3><Link href={withLocale(currentLocale,"/spreadsheet")}>{copy.nav[1]}</Link><Link href={withLocale(currentLocale,"/categories")}>{copy.categories}</Link><Link href={withLocale(currentLocale,"/products")}>{copy.products}</Link><Link href={withLocale(currentLocale,"/seo-articles")}>{ui.seo[0]}</Link></div>
        <div><h3>{ui.trust}</h3><Link href={withLocale(currentLocale,"/sources")}>{ui.sourceLibrary}</Link><Link href={withLocale(currentLocale,"/markets")}>{ui.marketEvidence}</Link><a href="https://findspreadsheet.com/">FindSpreadsheet ↗</a></div>
      </div>
      <p className="fine-print">{ui.finePrint}</p>
    </footer>
  );
}
