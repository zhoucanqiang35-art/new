"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, BadgeCheck, Box, CheckCircle2, CircleDollarSign, ClipboardCheck, Footprints, Gem, Globe2, Layers3, Menu, Package, PackageCheck, Search, Shirt, ShoppingBag, ShieldCheck, Sparkles, Watch, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { factualFaqs, researchArticles, type ResearchArticle } from "./articles";
import contentTranslations from "./content-translations.json";
import uiEnglish from "./ui-en.json";
import uiTranslations from "./ui-translations.json";

type Lang = "en"|"de"|"fr"|"es"|"it"|"pt"|"nl"|"pl"|"sv";
type Section = "home"|"categories"|"products"|"guides"|"articles"|"faq";
type LocalizedPack={researchArticles:ResearchArticle[];factualFaqs:[string,string][]};
type UiContent=typeof uiEnglish;

function localizedPack(lang:Lang):LocalizedPack{
  if(lang==="en")return{researchArticles,factualFaqs:[...factualFaqs] as [string,string][]};
  const translated=(contentTranslations as unknown as Record<string,LocalizedPack>)[lang];
  if(!translated)return{researchArticles,factualFaqs:[...factualFaqs] as [string,string][]};
  const bySlug=new Map(translated.researchArticles.map(article=>[article.slug,article]));
  return{...translated,researchArticles:researchArticles.map(article=>bySlug.get(article.slug)||article)};
}
function localizedUi(lang:Lang):UiContent{return lang==="en"?uiEnglish:((uiTranslations as unknown as Record<string,UiContent>)[lang]||uiEnglish)}

const languageNames:Record<Lang,string>={en:"English",de:"Deutsch",fr:"Français",es:"Español",it:"Italiano",pt:"Português",nl:"Nederlands",pl:"Polski",sv:"Svenska"};
const copy:Record<Lang,string[]>={
  en:["Home","Categories","Product finds","Guides","SEO articles","FAQ","Independent spreadsheet research · Updated for 2026","Find better PikoBuy products. Check before you ship.","A focused research hub for US and European shoppers. Search the live FindSpreadsheet catalog, compare item details, prepare warehouse QC checks and estimate shipping with current information.","Search shoes, hoodies, bags or an item ID","Search products","Browse the full database","Built around verifiable product data","Start with a clear next step","Choose a category, inspect the live listing, then use the right checklist before paying.","Recently reviewed finds","Representative entries from the main FindSpreadsheet database. Prices are reference amounts and must be confirmed on the current product page.","A more useful research flow","The site separates product discovery from the checks that happen before ordering and before international shipping.","Independent resource. Not affiliated with or endorsed by PikoBuy.","Platform statements are checked against current public PikoBuy pages. Product records open only on FindSpreadsheet.","View on FindSpreadsheet","Open guide","View all products","Why this is different","No invented delivery times, no guaranteed QC claims and no copied link dump. Each page explains what can be checked and what must be confirmed live."],
  de:["Startseite","Kategorien","Produktfunde","Ratgeber","SEO-Artikel","FAQ","Unabhängige Tabellen-Recherche · Aktualisiert für 2026","Bessere PikoBuy-Produkte finden. Vor dem Versand prüfen.","Ein fokussiertes Rechercheportal für Käufer in den USA und Europa. Durchsuche FindSpreadsheet, vergleiche Artikeldetails, plane die Lager-QC und schätze den Versand mit aktuellen Angaben.","Schuhe, Hoodies, Taschen oder Artikel-ID suchen","Produkte suchen","Gesamte Datenbank öffnen","Auf überprüfbaren Produktdaten aufgebaut","Mit einem klaren nächsten Schritt starten","Kategorie wählen, Live-Angebot prüfen und vor der Zahlung die passende Checkliste nutzen.","Kürzlich geprüfte Funde","Beispiele aus FindSpreadsheet. Preise sind Richtwerte und müssen auf der aktuellen Produktseite bestätigt werden.","Ein nützlicherer Rechercheablauf","Produktsuche und Prüfungen vor Bestellung und internationalem Versand sind klar getrennt.","Unabhängige Ressource. Nicht mit PikoBuy verbunden oder von PikoBuy empfohlen.","Plattformaussagen werden anhand aktueller öffentlicher PikoBuy-Seiten geprüft. Produktdaten öffnen nur FindSpreadsheet.","Auf FindSpreadsheet ansehen","Ratgeber öffnen","Alle Produkte","Was hier anders ist","Keine erfundenen Laufzeiten, keine garantierten QC-Aussagen und keine kopierte Linksammlung. Jede Seite zeigt, was geprüft werden kann und was live bestätigt werden muss."],
  fr:["Accueil","Catégories","Produits","Guides","Articles SEO","FAQ","Recherche indépendante · Mise à jour 2026","Trouvez de meilleurs produits PikoBuy. Vérifiez avant l’envoi.","Un centre de recherche pour les acheteurs américains et européens. Recherchez dans FindSpreadsheet, comparez les détails, préparez le contrôle en entrepôt et estimez l’expédition avec des informations actuelles.","Rechercher chaussures, sweats, sacs ou ID","Rechercher","Voir toute la base","Fondé sur des données vérifiables","Commencez par l’étape utile","Choisissez une catégorie, vérifiez l’annonce actuelle puis utilisez la bonne liste avant de payer.","Produits récemment examinés","Exemples de FindSpreadsheet. Les prix sont indicatifs et doivent être confirmés sur la page actuelle.","Un parcours de recherche plus utile","La découverte est séparée des contrôles avant commande et avant expédition internationale.","Ressource indépendante, sans affiliation ni approbation de PikoBuy.","Les affirmations sont vérifiées sur les pages publiques actuelles de PikoBuy. Les produits ouvrent uniquement FindSpreadsheet.","Voir sur FindSpreadsheet","Ouvrir le guide","Tous les produits","Ce qui change","Aucun délai inventé, aucune garantie QC et aucune liste copiée. Chaque page distingue ce qui est vérifiable de ce qui doit être confirmé en direct."],
  es:["Inicio","Categorías","Productos","Guías","Artículos SEO","Preguntas","Investigación independiente · Actualizado para 2026","Encuentra mejores productos PikoBuy. Revisa antes de enviar.","Un centro de investigación para compradores de EE. UU. y Europa. Busca en FindSpreadsheet, compara detalles, prepara el control de almacén y estima el envío con información actual.","Buscar zapatos, sudaderas, bolsos o ID","Buscar productos","Ver toda la base","Basado en datos verificables","Empieza con el siguiente paso claro","Elige una categoría, revisa el anuncio actual y usa la lista adecuada antes de pagar.","Productos revisados recientemente","Ejemplos de FindSpreadsheet. Los precios son orientativos y deben confirmarse en la página actual.","Un proceso de investigación más útil","Separamos el descubrimiento de las comprobaciones previas al pedido y al envío internacional.","Recurso independiente. Sin afiliación ni respaldo de PikoBuy.","Las afirmaciones se contrastan con páginas públicas actuales de PikoBuy. Los productos solo abren FindSpreadsheet.","Ver en FindSpreadsheet","Abrir guía","Ver todos","Por qué es diferente","Sin plazos inventados, garantías QC ni listas copiadas. Cada página explica qué puede comprobarse y qué debe confirmarse en vivo."],
  it:["Home","Categorie","Prodotti","Guide","Articoli SEO","FAQ","Ricerca indipendente · Aggiornata al 2026","Trova prodotti PikoBuy migliori. Controlla prima della spedizione.","Un centro di ricerca per acquirenti USA ed europei. Cerca su FindSpreadsheet, confronta i dettagli, prepara il QC in magazzino e stima la spedizione con dati attuali.","Cerca scarpe, felpe, borse o ID","Cerca prodotti","Apri il database","Basato su dati verificabili","Inizia dal prossimo passo chiaro","Scegli una categoria, verifica l’inserzione attuale e usa la checklist giusta prima di pagare.","Prodotti verificati di recente","Esempi dal database FindSpreadsheet. I prezzi sono indicativi e vanno confermati nella pagina attuale.","Un flusso di ricerca più utile","La scoperta è separata dai controlli prima dell’ordine e della spedizione internazionale.","Risorsa indipendente. Non affiliata o approvata da PikoBuy.","Le informazioni sono verificate sulle pagine pubbliche correnti di PikoBuy. I prodotti aprono solo FindSpreadsheet.","Vedi su FindSpreadsheet","Apri guida","Tutti i prodotti","Perché è diverso","Nessun tempo inventato, nessuna garanzia QC e nessun elenco copiato. Ogni pagina distingue ciò che si può verificare da ciò che va confermato live."],
  pt:["Início","Categorias","Produtos","Guias","Artigos SEO","FAQ","Pesquisa independente · Atualizada para 2026","Encontre melhores produtos PikoBuy. Verifique antes de enviar.","Um centro de pesquisa para compradores dos EUA e Europa. Pesquise no FindSpreadsheet, compare detalhes, prepare o QC no armazém e estime o envio com dados atuais.","Pesquisar sapatos, hoodies, malas ou ID","Pesquisar","Abrir base completa","Baseado em dados verificáveis","Comece pelo próximo passo claro","Escolha uma categoria, confira o anúncio atual e use a lista certa antes de pagar.","Produtos revistos recentemente","Exemplos do FindSpreadsheet. Os preços são indicativos e devem ser confirmados na página atual.","Um fluxo de pesquisa mais útil","A descoberta é separada das verificações antes da encomenda e do envio internacional.","Recurso independente. Sem afiliação ou aprovação da PikoBuy.","As informações são verificadas nas páginas públicas atuais da PikoBuy. Produtos abrem apenas no FindSpreadsheet.","Ver no FindSpreadsheet","Abrir guia","Todos os produtos","Por que é diferente","Sem prazos inventados, garantias QC ou listas copiadas. Cada página mostra o que pode ser verificado e o que deve ser confirmado ao vivo."],
  nl:["Home","Categorieën","Producten","Gidsen","SEO-artikelen","FAQ","Onafhankelijk onderzoek · Bijgewerkt voor 2026","Vind betere PikoBuy-producten. Controleer vóór verzending.","Een onderzoekshub voor Amerikaanse en Europese kopers. Zoek in FindSpreadsheet, vergelijk details, bereid magazijn-QC voor en schat verzending met actuele informatie.","Zoek schoenen, hoodies, tassen of item-ID","Producten zoeken","Volledige database","Gebaseerd op controleerbare data","Begin met een duidelijke stap","Kies een categorie, controleer de actuele listing en gebruik vóór betaling de juiste checklist.","Recent bekeken vondsten","Voorbeelden uit FindSpreadsheet. Prijzen zijn indicatief en moeten op de actuele productpagina worden bevestigd.","Een nuttiger onderzoeksproces","Productontdekking staat los van controles vóór bestelling en internationale verzending.","Onafhankelijke bron. Niet verbonden met of aanbevolen door PikoBuy.","Uitspraken worden gecontroleerd op actuele openbare PikoBuy-pagina’s. Producten openen alleen FindSpreadsheet.","Bekijk op FindSpreadsheet","Open gids","Alle producten","Waarom dit anders is","Geen verzonnen levertijden, QC-garanties of gekopieerde linkdump. Elke pagina toont wat controleerbaar is en wat live moet worden bevestigd."],
  pl:["Start","Kategorie","Produkty","Poradniki","Artykuły SEO","FAQ","Niezależne badanie · Aktualizacja 2026","Znajdź lepsze produkty PikoBuy. Sprawdź przed wysyłką.","Centrum badań dla klientów z USA i Europy. Przeszukuj FindSpreadsheet, porównuj dane, przygotuj kontrolę QC w magazynie i szacuj wysyłkę na podstawie aktualnych informacji.","Szukaj butów, bluz, toreb lub ID","Szukaj produktów","Pełna baza","Oparte na sprawdzalnych danych","Zacznij od jasnego kroku","Wybierz kategorię, sprawdź aktualną ofertę i użyj właściwej listy przed płatnością.","Ostatnio sprawdzone produkty","Przykłady z FindSpreadsheet. Ceny są orientacyjne i wymagają potwierdzenia na aktualnej stronie.","Lepszy proces badawczy","Oddzielamy wyszukiwanie od kontroli przed zamówieniem i wysyłką międzynarodową.","Niezależne źródło. Bez powiązania i rekomendacji PikoBuy.","Informacje są sprawdzane na aktualnych publicznych stronach PikoBuy. Produkty otwierają tylko FindSpreadsheet.","Zobacz w FindSpreadsheet","Otwórz poradnik","Wszystkie produkty","Dlaczego to inne","Bez wymyślonych terminów, gwarancji QC i kopiowanych list. Każda strona wyjaśnia, co można sprawdzić, a co wymaga potwierdzenia."],
  sv:["Hem","Kategorier","Produkter","Guider","SEO-artiklar","FAQ","Oberoende research · Uppdaterad för 2026","Hitta bättre PikoBuy-produkter. Kontrollera före frakt.","En researchhubb för köpare i USA och Europa. Sök i FindSpreadsheet, jämför detaljer, förbered lager-QC och uppskatta frakt med aktuell information.","Sök skor, hoodies, väskor eller artikel-ID","Sök produkter","Öppna hela databasen","Byggd på verifierbara produktdata","Börja med ett tydligt nästa steg","Välj kategori, kontrollera den aktuella annonsen och använd rätt checklista före betalning.","Nyligen granskade fynd","Exempel från FindSpreadsheet. Priser är referenser och måste bekräftas på den aktuella produktsidan.","Ett mer användbart researchflöde","Produktupptäckt skiljs från kontroller före beställning och internationell frakt.","Oberoende resurs. Inte ansluten till eller godkänd av PikoBuy.","Påståenden kontrolleras mot aktuella offentliga PikoBuy-sidor. Produkter öppnas endast på FindSpreadsheet.","Visa på FindSpreadsheet","Öppna guide","Alla produkter","Varför detta är annorlunda","Inga påhittade leveranstider, QC-garantier eller kopierade länklistor. Varje sida visar vad som kan kontrolleras och vad som måste bekräftas live."],
};

const categories=[
  ["Sneakers","https://findspreadsheet.com/shoes/",Footprints],
  ["Shirts","https://findspreadsheet.com/t-shirts/",Shirt],
  ["Hoodies","https://findspreadsheet.com/hoodies-sweaters/",Shirt],
  ["Jackets","https://findspreadsheet.com/jackets/",Shirt],
  ["Pants","https://findspreadsheet.com/pants-shorts/",Layers3],
  ["Bags","https://findspreadsheet.com/search.html?keywords=Bags&method=1&channelid=2",ShoppingBag],
  ["Shorts","https://findspreadsheet.com/pants-shorts/",Layers3],
  ["Accessories","https://findspreadsheet.com/accessories/",Package],
  ["Jewelry","https://findspreadsheet.com/search.html?keywords=Jewelry&method=1&channelid=2",Gem],
  ["Watches","https://findspreadsheet.com/search.html?keywords=Watches&method=1&channelid=2",Watch],
  ["Sweaters","https://findspreadsheet.com/hoodies-sweaters/",Shirt],
];
const products=[
  ["C.P. Company T-shirt","$16.40 ref.","ID 7711451421","https://findspreadsheet.com/t-shirts/cp-company-t-shirt-2993.html","T-shirts"],
  ["Supreme Wallet","$7.35 ref.","ID 7714549654","https://findspreadsheet.com/accessories/supreme-wallet-2995.html","Accessories"],
  ["Beats Studio Buds","$15.15 ref.","ID 7680975089","https://findspreadsheet.com/electronics/beats-studio-buds-wireless-headset-20-styles-664.html","Electronics"],
  ["Qatar Short Sleeve Set","Check live price","Product record","https://findspreadsheet.com/jersey/qatar-short-sleeve-suits-2249.html","Jerseys"],
];
const guides=[
  ["How to use a PikoBuy spreadsheet","Search by product or ID, narrow by category, compare the source record and confirm the current listing before ordering.",Search],
  ["Warehouse QC: what photos can show","Use photos for visible identity, colour, labels, measurements and damage—not for guarantees about material or long-term durability.",ClipboardCheck],
  ["Plan shipping without a fake flat rate","Destination, actual weight, dimensions, route and product restrictions can all change the estimate. Confirm the live calculator.",Box],
  ["Check a product link before paying","Match the title, item ID, selected option, quantity, price and seller images. Treat the spreadsheet as research.",ShieldCheck],
];
function route(lang:Lang,section:Section,articleSlug?:string){const prefix=lang==="en"?"":`/${lang}`;if(section==="home")return prefix||"/";return `${prefix}/${section}${section==="articles"&&articleSlug?`/${articleSlug}`:""}`}

function Header({lang,t}:{lang:Lang;t:string[]}){
  const [open,setOpen]=useState(false);
  const router=useRouter();
  const pathname=usePathname();
  const links:[[Section,string],[Section,string],[Section,string],[Section,string],[Section,string],[Section,string]]=[["home",t[0]],["categories",t[1]],["products",t[2]],["guides",t[3]],["articles",t[4]],["faq",t[5]]];
  const change=(next:string)=>{if(next===lang)return;const parts=pathname.split("/").filter(Boolean);const hit=parts.find(p=>["categories","products","guides","articles","faq"].includes(p)) as Section|undefined;const slug=hit==="articles"?parts[parts.indexOf("articles")+1]:undefined;router.replace(route(next as Lang,hit||"home",slug),{scroll:false})};
  return <header className="site-header"><div className="shell nav-row"><Link className="brand-logo" href={route(lang,"home")} aria-label="PikoBuy Spreadsheet home"><img src="/pikobuy-logo.png" alt="PikoBuy" width="232" height="48"/></Link><nav className="desktop-nav">{links.map(([key,label])=><Link key={key} href={route(lang,key)}>{label}</Link>)}</nav><div className="nav-actions"><Select value={lang} onValueChange={change}><SelectTrigger className="language-select" aria-label="Select language"><Globe2 size={15}/><SelectValue/></SelectTrigger><SelectContent className="language-menu" position="popper" side="bottom" align="end" sideOffset={6} avoidCollisions={false}>{(Object.keys(languageNames) as Lang[]).map(code=><SelectItem key={code} value={code}>{languageNames[code]}</SelectItem>)}</SelectContent></Select><Button className="menu-button" variant="outline" size="icon" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div></div>{open&&<nav className="mobile-nav shell">{links.map(([key,label])=><Link onClick={()=>setOpen(false)} key={key} href={route(lang,key)}>{label}</Link>)}</nav>}</header>
}
function SearchPanel({t}:{t:string[]}){const[q,setQ]=useState("");const go=(e:React.FormEvent)=>{e.preventDefault();window.location.href=q.trim()?`https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(q.trim())}&method=1&channelid=2`:"https://findspreadsheet.com/"};return <form className="search-panel" onSubmit={go}><Search size={20}/><Input value={q} onChange={e=>setQ(e.target.value)} placeholder={t[9]}/><Button size="lg">{t[10]}<ArrowUpRight/></Button></form>}
function CategoryGrid({lang,compact=false}:{lang:Lang;compact?:boolean}){const ui=localizedUi(lang);return <div className={`category-grid ${compact?"compact":""}`}>{categories.map(([name,url,Icon],index)=>{const I=Icon as typeof Search;return <a href={url as string} className="category-card" key={name as string}><span className="category-icon"><I/></span><h3>{ui.categories[index]}</h3></a>})}</div>}
function ProductGrid({t}:{t:string[]}){return <div className="product-grid">{products.map(([name,price,id,url,cat],i)=><a href={url} className="product-card" key={name}><div className={`product-visual tone-${i+1}`}><span>{cat}</span><PackageCheck/></div><div className="product-copy"><span>{id}</span><h3>{name}</h3><p>{price}</p><b>{t[21]}<ArrowUpRight/></b></div></a>)}</div>}
function GuideGrid({t,lang}:{t:string[];lang:Lang}){const ui=localizedUi(lang);return <div className="guide-grid">{guides.map(([title,,Icon],i)=>{const I=Icon as typeof Search;return <article key={title as string}><div><span>0{i+1}</span><I/></div><h3>{ui.guides[i][0]}</h3><p>{ui.guides[i][1]}</p><Link href={route(lang,"guides")}>{t[22]}<ArrowUpRight/></Link></article>})}</div>}

function Home({lang,t}:{lang:Lang;t:string[]}){const ui=localizedUi(lang);return <><section className="hero"><div className="hero-art"><img src="/pikobuy-spreadsheet-us-hero.png" alt="Streetwear, parcel and quality-control research desk"/></div><div className="shell hero-grid"><div className="hero-copy"><div className="eyebrow"><BadgeCheck size={16}/>{t[6]}</div><h1>{t[7]}</h1><p>{t[8]}</p><SearchPanel t={t}/><div className="hero-links"><Button asChild variant="outline" size="lg"><a href="https://findspreadsheet.com/">{t[11]}<ArrowUpRight/></a></Button><span><CheckCircle2 size={16}/>{t[12]}</span></div></div><div className="hero-rail">{ui.heroRail.map(([title,sub],i)=><div key={title}><span>0{i+1}</span><b>{title}</b><small>{sub}</small></div>)}</div></div></section><section className="section shell"><SectionHead no="01 / DISCOVER" title={t[13]} sub={t[14]} link="https://findspreadsheet.com/" label={t[23]}/><CategoryGrid lang={lang} compact/></section><section className="section section-dark"><div className="shell"><SectionHead light no="02 / LIVE DATA" title={t[15]} sub={t[16]} link="https://findspreadsheet.com/" label={t[23]}/><ProductGrid t={t}/></div></section><section className="section shell"><SectionHead no="03 / CHECK" title={t[17]} sub={t[18]} link={route(lang,"guides")} label={t[3]}/><GuideGrid t={t} lang={lang}/></section><section className="statement"><div className="shell statement-grid"><div><span>{t[24]}</span><h2>{t[25]}</h2></div><div className="source-note"><ShieldCheck/><p>{t[20]}</p></div></div></section></>}
function SectionHead({no,title,sub,link,label,light=false}:{no:string;title:string;sub:string;link:string;label:string;light?:boolean}){return <div className={`section-head ${light?"light":""}`}><div><span>{no}</span><h2>{title}</h2><p>{sub}</p></div><a href={link}>{label}<ArrowUpRight/></a></div>}
function PageHero({label,title,sub}:{label:string;title:string;sub:string}){return <section className="page-hero"><div className="shell"><span>{label}</span><h1>{title}</h1><p>{sub}</p></div></section>}

function ArticleDetail({slug,lang}:{slug:string;lang:Lang}){
  const article=localizedPack(lang).researchArticles.find(item=>item.slug===slug),ui=localizedUi(lang);
  if(!article)return null;
  const canonical=`https://pikobuyspreadsheet.us${route(lang,"articles",article.slug)}`;
  const structuredData={
    "@context":"https://schema.org",
    "@graph":[
      {
        "@type":"Article",
        headline:article.title,
        description:article.description,
        datePublished:article.published,
        dateModified:article.published,
        mainEntityOfPage:canonical,
        inLanguage:lang,
        keywords:article.keywords?.join(", "),
        citation:article.sources?.map(source=>source.href),
        author:{"@type":"Organization",name:"PikoBuy Spreadsheet US Editorial"},
        publisher:{"@type":"Organization",name:"PikoBuy Spreadsheet US",url:"https://pikobuyspreadsheet.us/"}
      },
      ...(article.faq?[{
        "@type":"FAQPage",
        mainEntity:article.faq.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))
      }]:[])
    ]
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
    <PageHero label={`${ui.articleUi[0]} / ${article.tag.toUpperCase()}`} title={article.title} sub={article.description}/>
    <main className="article-reading shell">
      <div className="article-meta"><BadgeCheck/><span>{article.reviewed}</span><b>{ui.articleUi[1]}</b></div>
      <article>
        {article.intro.map((paragraph,i)=><p className="article-lead" key={i}>{paragraph}</p>)}
        {article.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph,i)=><p key={i}>{paragraph}</p>)}{section.checklist&&<ul>{section.checklist.map(item=><li key={item}><CheckCircle2/>{item}</li>)}</ul>}</section>)}
        {article.faq&&<section className="article-faq"><h2>Frequently asked questions</h2>{article.faq.map(([question,answer])=><div key={question}><h3>{question}</h3><p>{answer}</p></div>)}</section>}
        {article.related&&<section className="article-related"><h2>Continue your research</h2><ul>{article.related.map(link=><li key={link.href}><Link href={lang==="en"?link.href:`/${lang}${link.href}`}>{link.label}<ArrowUpRight/></Link></li>)}</ul></section>}
        {article.sources&&<section className="article-sources"><h2>Sources checked</h2><p>Platform features and policies can change. These first-party pages were checked on the date shown above.</p><ol>{article.sources.map(source=><li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}<ArrowUpRight/></a></li>)}</ol></section>}
      </article>
      <div className="article-end"><div><h2>{ui.articleUi[2]}</h2><p>{ui.articleUi[3]}</p></div><Button asChild><a href="https://findspreadsheet.com/">{ui.articleUi[4]}<ArrowUpRight/></a></Button><Link href={route(lang,"articles")}>{ui.articleUi[5]}</Link></div>
    </main>
  </>
}

function Inner({section,t,lang,articleSlug}:{section:Exclude<Section,"home">;t:string[];lang:Lang;articleSlug?:string}){
  const ui=localizedUi(lang),pack=localizedPack(lang);
  if(section==="categories")return <><PageHero label={ui.pages.categories[0]} title={ui.pages.categories[1]} sub={ui.pages.categories[2]}/><main className="section shell"><CategoryGrid lang={lang}/><div className="inline-cta"><Search/><div><h2>{ui.pages.categories[3]}</h2><p>{ui.pages.categories[4]}</p></div><Button asChild><a href="https://findspreadsheet.com/">{t[23]}<ArrowUpRight/></a></Button></div></main></>;
  if(section==="products")return <><PageHero label={ui.pages.products[0]} title={ui.pages.products[1]} sub={ui.pages.products[2]}/><main className="section shell"><ProductGrid t={t}/><div className="research-bar"><div><BadgeCheck/><b>{ui.pages.products[3]}</b><span>{ui.pages.products[4]}</span></div><div><ClipboardCheck/><b>{ui.pages.products[5]}</b><span>{ui.pages.products[6]}</span></div><div><CircleDollarSign/><b>{ui.pages.products[7]}</b><span>{ui.pages.products[8]}</span></div></div></main></>;
  if(section==="guides")return <><PageHero label={ui.pages.guides[0]} title={ui.pages.guides[1]} sub={ui.pages.guides[2]}/><main className="section shell"><GuideGrid t={t} lang={lang}/><div className="workflow"><h2>{ui.pages.guides[3]}</h2>{ui.workflow.map(([title,desc],i)=><div key={title}><span>{String(i+1).padStart(2,"0")}</span><b>{title}</b><p>{desc}</p></div>)}</div></main></>;
  if(section==="articles"&&articleSlug)return <ArticleDetail slug={articleSlug} lang={lang}/>;
  if(section==="articles")return <><PageHero label={ui.pages.articles[0]} title={ui.pages.articles[1]} sub={ui.pages.articles[2]}/><main className="section shell"><div className="article-grid">{pack.researchArticles.map((article,i)=><Link className="article-card" href={route(lang,"articles",article.slug)} key={article.slug}><span>{article.tag} · {12+i} min read</span><h2>{article.title}</h2><p>{article.description}</p><div><BadgeCheck/>{ui.pages.articles[5]}<ArrowUpRight/></div></Link>)}</div><div className="editorial-note"><Sparkles/><div><h2>{ui.pages.articles[3]}</h2><p>{ui.pages.articles[4]}</p></div></div></main></>;
  return <><PageHero label={ui.pages.faq[0]} title={ui.pages.faq[1]} sub={ui.pages.faq[2]}/><main className="section shell"><div className="faq-list">{pack.factualFaqs.map(([q,a],i)=><article key={q}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{q}</h2><p>{a}</p></div></article>)}</div><div className="fact-check-note"><BadgeCheck/><p>{ui.pages.faq[3]}</p></div></main></>
}

export default function Site({lang,section,articleSlug}:{lang:string;section:string;articleSlug?:string}){const l=(lang in copy?lang:"en") as Lang,s=section as Section,t=copy[l];return <div className="site"><Header lang={l} t={t}/><main>{s==="home"?<Home lang={l} t={t}/>:<Inner section={s} t={t} lang={l} articleSlug={articleSlug}/>}</main><footer><div className="shell footer-grid"><div className="footer-logo"><img src="/pikobuy-logo.png" alt="PikoBuy" width="232" height="48"/></div><div><b>{t[19]}</b><p>{t[20]}</p></div><a href="https://findspreadsheet.com/">FindSpreadsheet.com<ArrowUpRight/></a></div></footer></div>}
