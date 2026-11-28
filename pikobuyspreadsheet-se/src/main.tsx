import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { seoTranslations } from "../app/seo-translations";
import { seoTranslationCoverage } from "../app/seo-translation-coverage";
import { articleByLanguage, type Article } from "./articles";
import { locales } from "./data";
import { getCopy, getExtra, localPath } from "./i18n";
import { getLocalizedContent, getLocalizedFaq } from "./localized-content";
import { getHeaderCopy } from "./header-copy";
import { currencies, rateDate } from "./currency-data";
import { selectCurrency, useCurrency } from "./currency";
import { catalogHref } from "./main-catalog";
import { MainCatalog, MainCatalogProduct } from "./main-catalog-ui";
import { ImageSearch } from "./image-search-ui";
import { imageSearchCopy } from "./image-search-copy";
import { BuyingGuide } from "./buying-guide";
import "./style.css";

const legacyLanguages = ["en", "de", "fr", "es", "it", "nl", "pl", "sv", "pt"] as const;
type Lang = typeof legacyLanguages[number];
const categories = [
  ["shoes", 0], ["hoodies-sweaters", 3], ["t-shirts", 2], ["jackets", 4], ["pants-shorts", 5],
  ["headwear", 6], ["ShortSets", 7], ["accessories", 8], ["jersey", 9], ["electronics", 10],
  ["other-stuff", 11],
] as const;
const registration = "https://www.pikobuy.com/register?invitedCode=KPNJVF&inviteUserId=1109716";
type UI = {nav:string[]; kicker:string; hero:string; intro:string; search:string; categories:string; categoryText:string; articles:string; articleText:string; guides:string; products:string; faq:string; read:string; database:string; independent:string; source:string; faqItems:string[]};
const ui:Record<Lang,UI>={
en:{nav:["Home","Categories","Products","Guides","SEO Articles","FAQ"],kicker:"INDEPENDENT PIKOBUY RESEARCH",hero:"PikoBuy Spreadsheet: product links, QC photos and shipping checks.",intro:"Compare the current listing, visible warehouse evidence and parcel choices before you order.",search:"Search products",categories:"Browse product categories",categoryText:"Start with the product type, then compare the details that matter.",articles:"PikoBuy spreadsheet guides",articleText:"Evidence-led articles on product links, QC photos, source checks and shipping planning.",guides:"Plan each buying decision",products:"Featured products",faq:"PikoBuy Spreadsheet FAQ",read:"Read article",database:"Open FindSpreadsheet",independent:"Independent research resource. Not operated by PikoBuy.",source:"Listings, prices, route eligibility and policies can change.",faqItems:["This is an independent FindSpreadsheet research resource, not an official PikoBuy website.","Product prices and availability are not final until checked on the live listing.","QC photos show visible details, not authenticity, durability or customs guarantees.","Shipping depends on destination, route, weight, volume and restrictions."]},
de:{nav:["Startseite","Kategorien","Produkte","Ratgeber","SEO-Artikel","FAQ"],kicker:"UNABHÄNGIGE PIKOBUY-RECHERCHE",hero:"PikoBuy Spreadsheet: Produktlinks, QC-Fotos und Versand prüfen.",intro:"Vergleiche das aktuelle Angebot, sichtbare Lagerfotos und Paketentscheidungen vor der Bestellung.",search:"Produkte suchen",categories:"Produktkategorien durchsuchen",categoryText:"Beginne mit dem Produkttyp und vergleiche die wichtigen Details.",articles:"PikoBuy-Spreadsheet-Ratgeber",articleText:"Faktenbasierte Artikel zu Links, QC-Fotos, Quellenprüfung und Versand.",guides:"Kaufentscheidungen planen",products:"Ausgewählte Produkte",faq:"PikoBuy Spreadsheet FAQ",read:"Artikel lesen",database:"FindSpreadsheet öffnen",independent:"Unabhängige Recherche. Nicht von PikoBuy betrieben.",source:"Angebote, Preise, Routen und Regeln können sich ändern.",faqItems:["Dies ist eine unabhängige FindSpreadsheet-Ressource, keine offizielle PikoBuy-Seite.","Preise und Verfügbarkeit müssen im Live-Angebot geprüft werden.","QC-Fotos zeigen Sichtbares, keine Garantie für Echtheit, Haltbarkeit oder Zoll.","Versand hängt von Ziel, Route, Gewicht, Volumen und Einschränkungen ab."]},
fr:{nav:["Accueil","Catégories","Produits","Guides","Articles SEO","FAQ"],kicker:"RECHERCHE PIKOBUY INDÉPENDANTE",hero:"PikoBuy Spreadsheet : liens produits, photos QC et contrôles d’expédition.",intro:"Comparez l’annonce actuelle, les preuves visibles de l’entrepôt et le colis avant commande.",search:"Rechercher des produits",categories:"Parcourir les catégories",categoryText:"Commencez par le type de produit puis comparez les détails utiles.",articles:"Guides PikoBuy Spreadsheet",articleText:"Articles fondés sur des faits sur les liens, photos QC, sources et expédition.",guides:"Planifier chaque décision",products:"Produits sélectionnés",faq:"FAQ PikoBuy Spreadsheet",read:"Lire l’article",database:"Ouvrir FindSpreadsheet",independent:"Ressource indépendante. Non exploitée par PikoBuy.",source:"Annonces, prix, routes et règles peuvent changer.",faqItems:["Ceci est une ressource FindSpreadsheet indépendante, non un site officiel PikoBuy.","Vérifiez prix et disponibilité sur l’annonce active.","Les photos QC montrent le visible, sans garantie d’authenticité, de durée ou de douane.","L’expédition dépend de la destination, route, poids, volume et restrictions."]},
es:{nav:["Inicio","Categorías","Productos","Guías","Artículos SEO","FAQ"],kicker:"INVESTIGACIÓN PIKOBUY INDEPENDIENTE",hero:"PikoBuy Spreadsheet: enlaces de producto, fotos QC y comprobaciones de envío.",intro:"Compara el anuncio actual, la evidencia del almacén y el paquete antes de comprar.",search:"Buscar productos",categories:"Explorar categorías",categoryText:"Empieza por el tipo de producto y compara los detalles relevantes.",articles:"Guías de PikoBuy Spreadsheet",articleText:"Artículos basados en evidencia sobre enlaces, QC, fuentes y envío.",guides:"Planifica cada decisión",products:"Productos destacados",faq:"FAQ de PikoBuy Spreadsheet",read:"Leer artículo",database:"Abrir FindSpreadsheet",independent:"Recurso independiente. No operado por PikoBuy.",source:"Los anuncios, precios, rutas y reglas pueden cambiar.",faqItems:["Es un recurso FindSpreadsheet independiente, no una web oficial de PikoBuy.","Revisa precio y disponibilidad en el anuncio actual.","Las fotos QC muestran detalles visibles, sin garantía de autenticidad, duración ni aduanas.","El envío depende de destino, ruta, peso, volumen y restricciones."]},
it:{nav:["Home","Categorie","Prodotti","Guide","Articoli SEO","FAQ"],kicker:"RICERCA PIKOBUY INDIPENDENTE",hero:"PikoBuy Spreadsheet: link prodotto, foto QC e controlli di spedizione.",intro:"Confronta l’inserzione attuale, le prove del magazzino e il pacco prima di ordinare.",search:"Cerca prodotti",categories:"Sfoglia le categorie",categoryText:"Inizia dal tipo di prodotto e confronta i dettagli pertinenti.",articles:"Guide PikoBuy Spreadsheet",articleText:"Articoli basati su fatti su link, QC, fonti e spedizione.",guides:"Pianifica ogni decisione",products:"Prodotti in evidenza",faq:"FAQ PikoBuy Spreadsheet",read:"Leggi articolo",database:"Apri FindSpreadsheet",independent:"Risorsa indipendente. Non gestita da PikoBuy.",source:"Inserzioni, prezzi, rotte e regole possono cambiare.",faqItems:["È una risorsa FindSpreadsheet indipendente, non un sito PikoBuy ufficiale.","Controlla prezzo e disponibilità nell’inserzione attuale.","Le foto QC mostrano dettagli visibili, non garanzie su autenticità, durata o dogana.","La spedizione dipende da destinazione, rotta, peso, volume e restrizioni."]},
nl:{nav:["Home","Categorieën","Producten","Gidsen","SEO-artikelen","FAQ"],kicker:"ONAFHANKELIJK PIKOBUY-ONDERZOEK",hero:"PikoBuy Spreadsheet: productlinks, QC-foto’s en verzendcontroles.",intro:"Vergelijk de actuele aanbieding, magazijnbewijs en pakketkeuzes vóór je bestelt.",search:"Producten zoeken",categories:"Productcategorieën bekijken",categoryText:"Begin met het producttype en vergelijk daarna relevante details.",articles:"PikoBuy Spreadsheet-gidsen",articleText:"Onderbouwde artikelen over links, QC-foto’s, bronnen en verzending.",guides:"Plan elke beslissing",products:"Uitgelichte producten",faq:"PikoBuy Spreadsheet FAQ",read:"Lees artikel",database:"Open FindSpreadsheet",independent:"Onafhankelijke bron. Niet beheerd door PikoBuy.",source:"Aanbiedingen, prijzen, routes en regels kunnen wijzigen.",faqItems:["Dit is een onafhankelijke FindSpreadsheet-bron, geen officiële PikoBuy-site.","Controleer prijs en voorraad in de actuele aanbieding.","QC-foto’s tonen zichtbare details, geen garantie voor echtheid, duurzaamheid of douane.","Verzending hangt af van bestemming, route, gewicht, volume en beperkingen."]},
pl:{nav:["Strona główna","Kategorie","Produkty","Poradniki","Artykuły SEO","FAQ"],kicker:"NIEZALEŻNE BADANIA PIKOBUY",hero:"PikoBuy Spreadsheet: linki produktów, zdjęcia QC i kontrola wysyłki.",intro:"Porównaj aktualną ofertę, zdjęcia magazynu i decyzje dotyczące paczki przed zamówieniem.",search:"Szukaj produktów",categories:"Przeglądaj kategorie",categoryText:"Zacznij od typu produktu i porównaj ważne szczegóły.",articles:"Poradniki PikoBuy Spreadsheet",articleText:"Artykuły oparte na faktach o linkach, QC, źródłach i wysyłce.",guides:"Zaplanuj każdą decyzję",products:"Polecane produkty",faq:"FAQ PikoBuy Spreadsheet",read:"Czytaj artykuł",database:"Otwórz FindSpreadsheet",independent:"Niezależne źródło. Nie jest prowadzone przez PikoBuy.",source:"Oferty, ceny, trasy i zasady mogą się zmienić.",faqItems:["To niezależny zasób FindSpreadsheet, nie oficjalna strona PikoBuy.","Sprawdź cenę i dostępność w aktualnej ofercie.","Zdjęcia QC pokazują widoczne szczegóły, nie gwarancję autentyczności, trwałości ani cła.","Wysyłka zależy od kraju, trasy, wagi, objętości i ograniczeń."]},
sv:{nav:["Hem","Kategorier","Produkter","Guider","SEO-artiklar","FAQ"],kicker:"OBEROENDE PIKOBUY-RESEARCH",hero:"PikoBuy Spreadsheet: produktlänkar, QC-bilder och fraktkontroller.",intro:"Jämför aktuell annons, lagerbevis och paketval före beställning.",search:"Sök produkter",categories:"Bläddra bland kategorier",categoryText:"Börja med produkttypen och jämför relevanta detaljer.",articles:"PikoBuy Spreadsheet-guider",articleText:"Faktabaserade artiklar om länkar, QC-bilder, källor och frakt.",guides:"Planera varje beslut",products:"Utvalda produkter",faq:"PikoBuy Spreadsheet FAQ",read:"Läs artikel",database:"Öppna FindSpreadsheet",independent:"Oberoende resurs. Drivs inte av PikoBuy.",source:"Annonser, priser, rutter och regler kan ändras.",faqItems:["Detta är en oberoende FindSpreadsheet-resurs, inte en officiell PikoBuy-sajt.","Kontrollera pris och lager i aktuell annons.","QC-bilder visar synliga detaljer, inte garanti för äkthet, hållbarhet eller tull.","Frakt beror på destination, rutt, vikt, volym och begränsningar."]},
pt:{nav:["Início","Categorias","Produtos","Guias","Artigos SEO","FAQ"],kicker:"PESQUISA PIKOBUY INDEPENDENTE",hero:"PikoBuy Spreadsheet: links de produtos, fotos QC e verificações de envio.",intro:"Compare o anúncio atual, as provas do armazém e as decisões do pacote antes de encomendar.",search:"Pesquisar produtos",categories:"Explorar categorias",categoryText:"Comece pelo tipo de produto e compare detalhes relevantes.",articles:"Guias PikoBuy Spreadsheet",articleText:"Artigos baseados em factos sobre links, QC, fontes e envio.",guides:"Planeie cada decisão",products:"Produtos em destaque",faq:"FAQ PikoBuy Spreadsheet",read:"Ler artigo",database:"Abrir FindSpreadsheet",independent:"Recurso independente. Não é operado pela PikoBuy.",source:"Anúncios, preços, rotas e regras podem mudar.",faqItems:["É um recurso FindSpreadsheet independente, não um site PikoBuy oficial.","Confirme preço e stock no anúncio atual.","Fotos QC mostram detalhes visíveis, não garantias de autenticidade, duração ou alfândega.","O envio depende de destino, rota, peso, volume e restrições."]}
};
const existingEn={title:"How to Use a PikoBuy Spreadsheet Without Buying Blind",intro:"A practical guide to product links, warehouse photos and international shipping decisions.",quick:"A spreadsheet is a discovery tool, not a final product record.",sections:[["Start with the live listing",["Confirm the current price, stock, selected variation and seller information before payment. A saved product row cannot freeze an offer that may be edited or removed.","Use measurements rather than letter sizes alone. Keep a small comparison list so product, colour, version and seller details stay clear."]],["Use warehouse photos honestly",["Check the visible identity before judging quality: product type, colour, size tag, quantity and included parts. Then inspect category-specific details such as shoe shape, clothing measurements or bag hardware.","Photos are useful visible evidence but cannot prove authenticity, fibre composition, durability, exact screen colour or a customs result."]],["Plan the parcel before submission",["Compare packed weight, dimensions, route eligibility and insurance choices. Bulky packaging, batteries, liquids and sensitive goods can change the available routes.","Keep product, warehouse, return and tracking records together until delivery."]]],checklist:["Match the spreadsheet row to the current listing.","Confirm the exact variant and stock.","Inspect warehouse identity before visible quality.","Compare route eligibility before parcel payment."],final:["Use current evidence at every decision point.","Independent research should explain risk rather than promise an outcome."]};

function parseLocation() {
  const segments = location.pathname.split("/").filter(Boolean);
  const selected = locales.find(locale => locale.code.split("-")[0] === segments[0]);
  if (selected) segments.shift();
  return { locale: selected?.code ?? "en-US", path: segments.join("/") };
}

const articlePath = "seo-articles/pikobuy-spreadsheet-research-guide";
const routes = ["", "categories", "products", "image-search", "guides", "seo-articles", "faq"];

function articleLanguage(locale: string): Lang {
  const language = locale.split("-")[0] as Lang;
  return legacyLanguages.includes(language) ? language : "en";
}

function labels(locale: string) {
  const a = getCopy(locale), b = getExtra(locale);
  const language = locale.split("-")[0] as Lang;
  if (legacyLanguages.includes(language)) {
    const local = ui[language];
    return { ...local, nav: [...local.nav.slice(0, 3), imageSearchCopy(locale).title, ...local.nav.slice(3)] };
  }
  return {
    nav: [b.home, b.categories, a.navProducts, imageSearchCopy(locale).title, a.navGuides, b.seoArticles, "FAQ"],
    kicker: a.eyebrow, hero: a.title, intro: a.intro, categories: a.categories, categoryText: "",
    articles: b.seoArticles, articleText: b.researchIntro, guides: a.workflow, products: a.navProducts,
    faq: getLocalizedContent(locale).faqTitle, read: b.readMore, independent: b.independent, source: b.workflowIntro,
  };
}

function Head({ locale, path }: { locale: string; path: string }) {
  useEffect(() => {
    const t = labels(locale);
    const lang = articleLanguage(locale);
    const article = articleByLanguage[path]?.[lang] ??
      (path === articlePath ? (lang === "en" ? existingEn : seoTranslations[lang]) : null);
    const title = article?.title ?? (path ? (t.nav[routes.indexOf(path)] ?? t.products) : t.hero);
    document.title = path ? `${title} | PikoBuy Spreadsheet` : title;
    document.documentElement.lang = locale;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = article?.intro ?? t.intro;
    function link(rel: string, language: string, url: string) {
      const selector = language ? `link[rel="${rel}"][hreflang="${language}"]` : `link[rel="${rel}"]`;
      const element = document.querySelector<HTMLLinkElement>(selector) ?? document.createElement("link");
      element.rel = rel;
      if (language) element.hreflang = language;
      element.href = `https://pikobuyspreadsheet.se${url}`;
      document.head.append(element);
    }
    const canonicalLocale = article && lang === "en" ? "en-US" : locale;
    link("canonical", "", localPath(canonicalLocale, path));
    document.querySelector('link[hreflang="en"]')?.remove();
    const alternates = article ? locales.filter(x => legacyLanguages.includes(x.code.split("-")[0] as Lang)) : locales;
    alternates.forEach(x => link("alternate", x.code, localPath(x.code, path)));
    link("alternate", "x-default", localPath("en-US", path));
  }, [locale, path]);
  return null;
}

function Header({ locale, path }: { locale: string; path: string }) {
  const currency = useCurrency();
  const copy = getHeaderCopy(locale);
  const t = labels(locale);

  function closeOtherMenus(event: React.SyntheticEvent<HTMLDetailsElement>) {
    if (!event.currentTarget.open) return;
    const current = event.currentTarget;
    current.parentElement?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach(menu => {
      if (menu !== current) menu.open = false;
    });
  }

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      document.querySelectorAll<HTMLDetailsElement>(".settings-menu[open]").forEach(menu => {
        if (!menu.contains(event.target as Node)) menu.open = false;
      });
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const menu = document.querySelector<HTMLDetailsElement>(".settings-menu[open]");
      if (menu) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return <header className="site-header">
    <a className="brand" href={localPath(locale)}><img src="/pikobuy-logo.webp" alt="PikoBuy"/><span>Spreadsheet</span></a>
    <nav aria-label={t.nav[0]}>{routes.map((route, i) => <a key={route}
      aria-current={path === route ? "page" : undefined} href={localPath(locale, route)}>{t.nav[i]}</a>)}</nav>
    <div className="settings">
      <details className="settings-menu" onToggle={closeOtherMenus}>
        <summary aria-label={copy.language}>{locales.find(x => x.code === locale)?.short}</summary>
        <div className="settings-grid" aria-label={copy.language}>
          {locales.map(choice => <a key={choice.code} href={localPath(choice.code, path) + location.search + location.hash}
            lang={choice.code} hrefLang={choice.code} aria-current={choice.code === locale ? "true" : undefined}>{choice.label}</a>)}
        </div>
      </details>
      <details className="settings-menu" onToggle={closeOtherMenus}>
        <summary aria-label={copy.currency}>{currency}</summary>
        <div className="settings-grid" aria-label={copy.currency}>
          {currencies.map(code => <button key={code} type="button" aria-pressed={code === currency}
            onClick={event => {
              const menu = event.currentTarget.closest("details");
              selectCurrency(code);
              if (menu) { menu.open = false; menu.querySelector("summary")?.focus(); }
            }}>{code}</button>)}
          <small>{copy.indicativePrices} · ECB {rateDate}</small>
        </div>
      </details>
      <a className="join" href={registration} rel="sponsored noopener noreferrer">{copy.join}</a>
    </div>
  </header>;
}

function ArticleView({article, locale}: {article: Article; locale: string}) {
  return <article lang={articleLanguage(locale)}>
    <div className="article-top"><p>{article.label}</p><h1>{article.title}</h1><p>{article.intro}</p></div>
    <div className="fact"><b>{article.quick}</b></div>
    {article.sections.map(section => <section key={section.title}><h2>{section.title}</h2>
      {section.paragraphs.map(p => <p key={p}>{p}</p>)}
    </section>)}
    <ul>{article.checklist.map(item => <li key={item}>{item}</li>)}</ul>
    {article.final.map(item => <p key={item}>{item}</p>)}
  </article>;
}

function ExistingArticle({locale}: {locale: string}) {
  const lang = articleLanguage(locale);
  const data = lang === "en" ? existingEn : seoTranslations[lang];
  const coverage = lang === "en" ? [] : seoTranslationCoverage[lang];
  return <article lang={lang}>
    <div className="article-top"><h1>{data.title}</h1><p>{data.intro}</p></div>
    <div className="fact"><b>{data.quick}</b></div>
    {data.sections.map((item, i) => {
      const [heading, paragraphs] = Array.isArray(item) ? item as [string, string[]] : [item.title, item.paragraphs];
      return <section key={heading}><h2>{heading}</h2>{paragraphs.map(p => <p key={p}>{p}</p>)}
        {coverage[i] && <p>{coverage[i]}</p>}</section>;
    })}
  </article>;
}

function ArticleIndex({locale}: {locale: string}) {
  const t = labels(locale), lang = articleLanguage(locale);
  const original = lang === "en" ? existingEn : seoTranslations[lang];
  const cards = [...Object.entries(articleByLanguage).map(([path, copy]) => [path, copy[lang]] as const), [articlePath, original] as const];
  return <section><h2>{t.articles}</h2><p className="lead">{t.articleText}</p>
    <div className="article-grid">{cards.map(([path, copy]) => <a className="feature" href={localPath(locale, path)} key={path}>
      <b lang={lang}>{copy.title}</b><span lang={lang}>{copy.intro}</span><strong>{t.read}</strong>
    </a>)}</div>
  </section>;
}

function CategoryGrid({locale}: {locale: string}) {
  const names = getLocalizedContent(locale).categories;
  return <div className="grid">{categories.map(([slug, index]) => <a className="card" href={catalogHref(locale, slug)} key={slug}>
    <b>{names[index]}</b>
  </a>)}</div>;
}

function Home({locale}: {locale: string}) {
  const t = labels(locale), copy = getCopy(locale);
  return <>
    <section className="hero"><p>{t.kicker}</p><h1>{t.hero}</h1><p>{t.intro}</p>
      <form action={localPath(locale, "products")}>
        <input type="search" name="q" placeholder={copy.searchPlaceholder}
          aria-label={getExtra(locale).searchButton} maxLength={200}/>
        <button>{getExtra(locale).searchButton}</button>
      </form>
      <div className="hero-links"><a href={localPath(locale, "image-search")}>{imageSearchCopy(locale).title}</a>
        <a href={localPath(locale, "guides")}>{t.guides}</a></div>
    </section>
    <section><h2>{t.categories}</h2>{t.categoryText && <p className="lead">{t.categoryText}</p>}<CategoryGrid locale={locale}/></section>
    <ArticleIndex locale={locale}/>
  </>;
}

function Page({locale, path}: {locale: string; path: string}) {
  const t = labels(locale);
  const article = articleByLanguage[path]?.[articleLanguage(locale)];
  if (!path) return <Home locale={locale}/>;
  if (article) return <ArticleView article={article} locale={locale}/>;
  if (path === articlePath) return <ExistingArticle locale={locale}/>;
  if (path === "categories") return <section><h1>{t.categories}</h1><CategoryGrid locale={locale}/></section>;
  if (path === "products") return <section><h1>{t.products}</h1><MainCatalog locale={locale}/></section>;
  if (path.startsWith("product/")) return <MainCatalogProduct id={path.slice(8)} locale={locale}
    priceNote={`${getHeaderCopy(locale).indicativePrices} · ECB ${rateDate}`}/>;
  if (path === "guides" || path === "guides/how-to-buy") return <BuyingGuide locale={locale}/>;
  if (path === "image-search") return <section><h1>{imageSearchCopy(locale).title}</h1>
    <p>{imageSearchCopy(locale).privacy}</p><ImageSearch locale={locale}/>
  </section>;
  if (path === "faq") return <section><h1>{t.faq}</h1>{getLocalizedFaq(locale, t.independent).map(item =>
    <details className="faq" key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>;
  return <ArticleIndex locale={locale}/>;
}

function App() {
  const {locale, path} = parseLocation();
  return <><Head locale={locale} path={path}/><Header locale={locale} path={path}/>
    <main><Page locale={locale} path={path}/></main>
    <footer>{labels(locale).independent} · <a href="https://findspreadsheet.com/">FindSpreadsheet</a></footer></>;
}

createRoot(document.getElementById("root")!).render(<App/>);
