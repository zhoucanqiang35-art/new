import { ImageSearch } from "./image-search-ui";
import { imageSearchCopy } from "./image-search-copy";
import { Suspense } from "react";
import { BuyingGuide } from "./buying-guide";
import { editorialSources, faqEn, faqEs, getEditorialArticle } from "./editorial-content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, countrySignals, mainSite, products, seoArticles } from "./data";
import { siteOrigin } from "./seo";
import { getCopy, getExtra, localPath } from "./i18n";
import { HeaderControls } from "./language-switcher";
import { Price } from "./currency";
import { rateDate, formatPrice } from "./currency-data";
import { getHeaderCopy } from "./header-copy";
import { MobileFold } from "./mobile-fold";
import { ProductDetail } from "./product-detail";
import { productListings } from "./product-listings";
import { ProductExplorer } from "./product-explorer";
import { SearchForm } from "./search-form";
import { MainCatalog, MainCatalogProduct } from "./main-catalog-ui";
import { catalogCategories, catalogHref } from "./main-catalog";
import { getLocalizedArticleMeta, getLocalizedContent, getLocalizedDetailedFaq, getLocalizedFaq, getLocalizedSeoSections } from "./localized-content";
import { getShippingCopy } from "./shipping-copy";

const isEnglishLocale = (locale: string) => locale === "en-US" || locale === "en-GB";

export function Header({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale), e = getExtra(locale), l = getLocalizedContent(locale);
  return <header className="site-header"><div className="header-inner">
    <Link className="image-brand" href={localPath(locale)} aria-label="PikoBuy Spreadsheet Europe home"><Image src="/pikobuy-logo-final-v2.png" alt="PikoBuy" width={204} height={48} priority unoptimized/></Link>
    <nav aria-label="Primary navigation"><Link href={localPath(locale)}>{e.home}</Link><Link href={localPath(locale,"products")}>{e.productDetails}</Link><Link href={localPath(locale,"image-search")}>{imageSearchCopy(locale).title}</Link><Link href={localPath(locale,"guides")}>{t.navGuides}</Link><Link href={localPath(locale,"seo-articles")}>{e.seoArticles}</Link><Link href={localPath(locale,"faq")}>{l.faqTitle}</Link></nav>
    <HeaderControls locale={locale}/>
  </div></header>;
}

export function Footer({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale), e = getExtra(locale), l = getLocalizedContent(locale);
  return <footer><div><Link className="image-brand footer-logo" href={localPath(locale)}><Image src="/pikobuy-logo-final-v2.png" alt="PikoBuy" width={204} height={48} unoptimized/></Link><p>{e.independent}</p></div><div className="footer-links"><Link href={localPath(locale,"categories")}>{e.categories}</Link><Link href={localPath(locale,"products")}>{e.productDetails}</Link><Link href={localPath(locale,"seo-articles")}>{e.seoArticles}</Link><Link href={localPath(locale,"faq")}>{l.faqTitle}</Link><Link href={localPath(locale,"methodology")}>{t.evidence}</Link><Link href={localPath(locale,"countries")}>{t.navCountries}</Link><a href={mainSite} target="_blank" rel="noopener">FindSpreadsheet ↗</a></div></footer>;
}

export function PageFrame({ children, locale = "en-US", home = false }: { children: React.ReactNode; locale?: string; home?: boolean }) {
  return <><Header locale={locale}/><main className={home ? "site-main home-page" : "site-main inner-page"}>{children}</main><Footer locale={locale}/></>;
}

export function SearchBand({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale), e = getExtra(locale);
  return <section className="search-band"><div><span className="section-index">{e.searchButton}</span><h2>{t.search}</h2></div><SearchForm ariaLabel={t.search} buttonLabel={e.searchButton} placeholder={t.searchPlaceholder} action={catalogHref(locale)}/></section>;
}

function priceNote(locale: string) {
  return `${getHeaderCopy(locale).indicativePrices} · ECB · ${new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeZone: "UTC" }).format(new Date(rateDate))}`;
}

export function ProductGrid({ limit = 4, locale = "en-US", items = products }: { limit?: number; locale?: string; items?: readonly (typeof products)[number][] }) {
  const e = getExtra(locale), translated = !isEnglishLocale(locale);
  return <div className="product-grid">{items.slice(0, limit).map((product) => <Link key={product.slug} className="product-card" href={localPath(locale,`product/${product.slug}`)}><div className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 720px) 48vw, 25vw"/></div><div className="product-info"><span>{translated ? e.productDetails : product.category}</span><h3>{product.name}</h3><p>{translated ? e.productsIntro : product.check}</p><strong><Price cny={product.cny} locale={locale}/> <small>{formatPrice(product.cny, "CNY", locale)}</small></strong><em>{e.viewPage} →</em></div></Link>)}</div>;
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
  return <div className="category-grid" data-locale={locale}>{categories.map((cat,i) => <a key={cat.slug} href={catalogHref(locale,catalogCategories[i])} aria-label={l.categories[i]}><span className="category-visual"><CategoryIcon kind={cat.glyph}/></span><h3>{l.categories[i]}</h3><span className="category-destination">{getExtra(locale).viewPage}</span></a>)}</div>;
}

export function SeoArticleGrid({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale), e = getExtra(locale), translated = !isEnglishLocale(locale);
  return <div className="seo-grid">{seoArticles.map((article,i) => { const editorial=getEditorialArticle(locale,article.slug); const localizedArticle=editorial||getLocalizedArticleMeta(locale,article.slug,{title:article.title,intro:article.excerpt}); return <Link key={article.slug} href={localPath(locale,`seo-articles/${article.slug}`)}><span>{e.seoArticles} {String(i+1).padStart(2,"0")}{translated || editorial ? "" : ` · ${article.readTime}`}</span><h3>{localizedArticle.title}</h3><p>{localizedArticle.intro}</p><b>{e.readMore} →</b></Link>;})}</div>;
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
  const t = getCopy(locale), e = getExtra(locale), l=getLocalizedContent(locale), translated = !isEnglishLocale(locale);
  const rewrittenFaq = locale === "es-ES" ? faqEs : locale === "en-US" ? faqEn : null;
  const localizedFaq = rewrittenFaq ? [0, 3, 6, 10, 14, 18].map(i => ({question:rewrittenFaq[i][0],answer:rewrittenFaq[i][1]}))
    : getLocalizedFaq(locale,e.researchIntro);
  const homepageFaqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:localizedFaq.slice(0,6).map((item)=>({"@type":"Question",name:item.question,acceptedAnswer:{"@type":"Answer",text:item.answer}}))};
  const homepageSiteSchema={"@context":"https://schema.org","@graph":[
    {"@type":"WebSite",name:"PikoBuy Spreadsheet",url:siteOrigin,description:"Independent PikoBuy product-discovery and warehouse-QC research."},
    {"@type":"ItemList",name:"PikoBuy product categories",itemListOrder:"https://schema.org/ItemListUnordered",numberOfItems:categories.length,itemListElement:categories.map((category,position)=>({"@type":"ListItem",position:position+1,name:category.name,url:`${siteOrigin}/category/${category.slug}/`}))}
  ]};
  const quickCategoryIndexes=[1,2,4,8] as const;
  return <PageFrame locale={locale} home>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(homepageFaqSchema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(homepageSiteSchema)}}/>
    <section className="hero">
      <div className="hero-copy">
        <div className="home-hero-heading">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.title}</h1>
        </div>
        <div className="home-hero-discovery">
          <div className="hero-search"><SearchForm ariaLabel={t.search} buttonLabel={e.searchButton} placeholder={t.searchPlaceholder} action={catalogHref(locale)}/></div>
          <Link className="home-image-search" href={localPath(locale,"image-search")}>{imageSearchCopy(locale).title}</Link>
          <div className="hero-categories" aria-label={e.categories}>
            {quickCategoryIndexes.map(index => <Link key={categories[index].slug} href={catalogHref(locale,catalogCategories[index])}>{l.categories[index]}</Link>)}
          </div>
        </div>
        <div className="home-hero-overview">
          <p>{t.intro}</p>
          <div className="actions">
            <Link className="button" href={catalogHref(locale)}>{t.browse}</Link>
            <Link className="button button-secondary" href={localPath(locale,"guides")}>{t.navGuides}</Link>
            <Link className="text-link" href={localPath(locale,"methodology")}>{t.evidence}</Link>
          </div>
        </div>
      </div>
    </section>
    <section className="section home-category-section">
      <MobileFold label={t.categories} defaultOpen openLabel={l.open} closeLabel={l.close}>
        <div className="section-head"><h2>{t.categories}</h2><p>{e.categoriesIntro}</p></div>
        <CategoryGrid locale={locale}/>
        <Link className="under-link" href={localPath(locale,"categories")}>{e.categories} →</Link>
      </MobileFold>
    </section>
    <section className="section mint home-featured-section">
      <MobileFold label={t.latest} defaultOpen openLabel={l.open} closeLabel={l.close}>
        <div className="section-head"><h2>{t.latest}</h2><p>{priceNote(locale)}</p></div>
        <ProductExplorer locale={locale}/>
        <Link className="under-link" href={localPath(locale,"products")}>{e.productDetails} →</Link>
      </MobileFold>
    </section>
    <div className="home-resources">
      <section className="section quick-section"><MobileFold allScreens label={e.exploreTitle} openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><h2>{e.exploreTitle}</h2></div><p>{e.exploreIntro}</p></div><div className="quick-grid"><Link href={localPath(locale,"categories")}><h3>{e.categories}</h3><p>{e.categoriesIntro}</p><b>{e.viewPage} →</b></Link><Link href={localPath(locale,"products")}><h3>{e.productDetails}</h3><p>{e.productsIntro}</p><b>{e.viewPage} →</b></Link><Link href={localPath(locale,"seo-articles")}><h3>{e.seoArticles}</h3><p>{e.researchIntro}</p><b>{e.viewPage} →</b></Link><Link href={localPath(locale,"faq")}><h3>{l.faqTitle}</h3><p>{l.faqIntro}</p><b>{e.viewPage} →</b></Link></div></MobileFold></section>
      <section className="section"><MobileFold allScreens label={t.workflow} openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><h2>{t.workflow}</h2></div><Link className="text-link" href={localPath(locale,"guides")}>{e.readMore} →</Link></div><p className="section-intro">{e.workflowIntro}</p><div className="workflow">{workflow.map(([title,body],i) => <article key={title}><b>{String(i+1).padStart(2,"0")}</b><h3>{translated?`${t.workflow} ${i+1}`:title}</h3><p>{translated?e.workflowIntro:body}</p></article>)}</div></MobileFold></section>
      <section className="section seo-home"><MobileFold allScreens label={e.seoArticles} openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><h2>{e.seoArticles}</h2></div><p>{e.researchIntro}</p></div><SeoArticleGrid locale={locale}/></MobileFold></section>
      <section className="section faq-home"><MobileFold allScreens label={l.faqTitle} openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><h2>{l.faqTitle}</h2></div><p>{l.faqIntro}</p></div><div className="faq-preview">{localizedFaq.slice(0,6).map((item)=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div><Link className="under-link" href={localPath(locale,"faq")}>{l.allFaq} →</Link></MobileFold></section>
      <section className="section dark"><MobileFold allScreens label={t.research} openLabel={l.open} closeLabel={l.close}><div className="section-head"><div><h2>{t.research}</h2></div><p>{e.researchIntro}</p></div><div className="research-grid"><Link href={localPath(locale,"countries")}><span>{t.navCountries}</span><h3>{t.navCountries}</h3><p>{e.categoriesIntro}</p><b>{e.readMore} →</b></Link><Link href={localPath(locale,"shipping")}><span>{t.navShipping}</span><h3>{t.navShipping}</h3><p>{e.researchIntro}</p><b>{e.readMore} →</b></Link><Link href={localPath(locale,"qc")}><span>{e.productDetails}</span><h3>QC</h3><p>{e.productsIntro}</p><b>{e.readMore} →</b></Link></div></MobileFold></section>
      <section className="section home-intro"><MobileFold allScreens label={t.eyebrow} openLabel={l.open} closeLabel={l.close}><HomeSeoCopy locale={locale}/></MobileFold></section>
    </div>
  </PageFrame>;
}

function HomeSeoCopy({ locale }: { locale: string }) {
  const localized: Record<string, [string, string, string, string]> = {
    "de-DE": ["PikoBuy Spreadsheet 2026: QC-Links und Budget-Funde sinnvoll nutzen", "Ein brauchbares PikoBuy Spreadsheet garantiert weder Artikel, Versandweg noch Lieferdatum. Es hilft dabei, einen Produktlink in eine nachvollziehbare Entscheidung zu verwandeln. Speichere Variante, Größe und Verkäuferbilder und vergleiche sie nach Wareneingang mit den Lagerfotos. Jede Karte führt erst zu einer Rechercheseite und anschließend zum FindSpreadsheet-Katalog, damit sichtbare Merkmale vor dem nächsten Schritt geprüft werden können.", "Bei günstigen Funden müssen Artikelpreis und Paketkosten getrennt bleiben. Ein günstiger Artikel kann durch Inlandversand, Verpackung, internationalen Versand, Steuern oder Zoll teurer werden. Die Versandguides erklären die Eingaben einer Schätzung: Zielland, Warenart, verpacktes Gewicht und Maße. Eine Zahl ist deshalb eine datierte Schätzung und keine dauerhafte Preiszusage.", "QC-Links sind nützlich, wenn sie eine konkrete Frage beantworten: Stimmt die Variante, passt das Größenetikett, ist ein Maß sichtbar oder gibt es offensichtliche Schäden? Bilder belegen keine Echtheit, Materialzusammensetzung, verdeckten Mängel oder Haltbarkeit. Prüfe die Fotos innerhalb des Rückgabefensters, lies die aktuellen Bedingungen vor dem Versand und dokumentiere jede Versandannahme. Das ist der Zweck dieses PikoBuy Spreadsheet 2026."],
    "fr-FR": ["PikoBuy Spreadsheet 2026 : liens QC et trouvailles petit budget", "Un spreadsheet PikoBuy utile ne garantit ni article, ni ligne, ni date de livraison. Il sert à transformer un lien produit en décision vérifiable. Enregistrez la variante, la taille et les images du vendeur, puis comparez-les aux photos d’entrepôt à l’arrivée. Chaque fiche ouvre d’abord une page de recherche puis le catalogue FindSpreadsheet afin de vérifier les éléments visibles avant de poursuivre.", "Pour les trouvailles à petit budget, séparez le prix de l’article du coût du colis. Un article peu cher peut coûter davantage après livraison nationale, emballage, transport international, taxes ou douane. Les guides expliquent les données qui modifient un devis : destination, type de produit, poids emballé et dimensions. Un montant affiché est donc une estimation datée, pas un tarif permanent.", "Les liens QC sont utiles s’ils répondent à une question précise : variante correcte, étiquette de taille, mesure demandée ou dommage visible. Les photos ne prouvent ni l’authenticité, ni la composition, ni les défauts cachés, ni la durabilité. Vérifiez pendant la fenêtre de retour, lisez les conditions actuelles et conservez les données de chaque comparaison. C’est l’objectif de ce PikoBuy Spreadsheet 2026."],
    "it-IT": ["PikoBuy Spreadsheet 2026: link QC e prodotti convenienti", "Uno spreadsheet PikoBuy utile non garantisce articolo, rotta o consegna. Serve a trasformare un link prodotto in una decisione verificabile. Salva variante, taglia e immagini del venditore e confrontale con le foto di magazzino all’arrivo. Ogni scheda apre prima una pagina di ricerca e poi il catalogo FindSpreadsheet, così puoi controllare gli elementi visibili prima di proseguire.", "Per i prodotti convenienti, separa il prezzo dell’articolo dal costo del pacco. Un articolo economico può costare di più dopo spedizione nazionale, imballaggio, trasporto internazionale, imposte o dogana. Le guide spiegano i dati che cambiano un preventivo: destinazione, tipo di prodotto, peso imballato e dimensioni. Un importo mostrato è quindi una stima datata, non una tariffa permanente.", "I link QC sono utili quando rispondono a una domanda precisa: variante corretta, etichetta della taglia, misura richiesta o danno visibile. Le immagini non provano autenticità, composizione, difetti nascosti o durata. Controlla durante la finestra di reso, leggi i termini attuali e conserva i dati di ogni confronto. Questo è lo scopo di PikoBuy Spreadsheet 2026."],
    "nl-NL": ["PikoBuy Spreadsheet 2026: QC-links en budgetvondsten zorgvuldig gebruiken", "Een bruikbaar PikoBuy-spreadsheet belooft geen artikel, route of bezorgdatum. Het helpt een productlink om te zetten in een controleerbare keuze. Bewaar variant, maat en verkopersfoto’s en vergelijk ze bij aankomst met magazijnfoto’s. Elke kaart opent eerst een onderzoekspagina en daarna de FindSpreadsheet-catalogus, zodat zichtbare details vóór de volgende stap kunnen worden gecontroleerd.", "Houd bij budgetvondsten de artikelprijs apart van de pakketkosten. Een goedkoop artikel kan duurder worden door binnenlandse verzending, verpakking, internationale verzending, belasting of douane. De verzendgidsen leggen uit welke invoer een offerte verandert: bestemming, producttype, verpakt gewicht en afmetingen. Een getoond bedrag is daarom een gedateerde schatting, geen vaste prijs.", "QC-links zijn nuttig wanneer zij een concrete vraag beantwoorden: klopt de variant, staat het maatlabel erop, is een gevraagde maat zichtbaar of is er schade? Foto’s bewijzen geen authenticiteit, materiaal, verborgen gebreken of duurzaamheid. Controleer binnen het retourvenster, lees de actuele voorwaarden en bewaar de gegevens van elke vergelijking. Dat is het doel van PikoBuy Spreadsheet 2026."],
    "pl-PL": ["PikoBuy Spreadsheet 2026: linki QC i budżetowe znaleziska", "Przydatny spreadsheet PikoBuy nie gwarantuje produktu, trasy ani daty dostawy. Pomaga zmienić link produktu w sprawdzalną decyzję. Zapisz wariant, rozmiar i zdjęcia sprzedawcy, a po przyjęciu porównaj je ze zdjęciami magazynowymi. Każda karta najpierw otwiera stronę badawczą, a potem katalog FindSpreadsheet, aby można było sprawdzić widoczne cechy przed przejściem dalej.", "Przy budżetowych znaleziskach oddziel cenę artykułu od kosztu paczki. Tani produkt może kosztować więcej po doliczeniu wysyłki krajowej, pakowania, transportu międzynarodowego, podatków lub cła. Przewodniki wyjaśniają dane zmieniające wycenę: kraj, typ produktu, zapakowaną wagę i wymiary. Pokazana kwota jest zatem szacunkiem z konkretnego dnia, a nie stałą ceną.", "Linki QC są przydatne, gdy odpowiadają na konkretne pytanie: czy wariant jest właściwy, czy etykieta rozmiaru się zgadza, czy widać żądany pomiar albo uszkodzenie. Zdjęcia nie potwierdzają autentyczności, składu, ukrytych wad ani trwałości. Sprawdź dowody w czasie zwrotu, przeczytaj aktualne zasady i zachowaj dane z porównań. Taki jest cel PikoBuy Spreadsheet 2026."],
    "pt-PT": ["PikoBuy Spreadsheet 2026: links QC e achados de baixo orçamento", "Um spreadsheet PikoBuy útil não garante artigo, rota ou data de entrega. Ajuda a transformar um link de produto numa decisão verificável. Guarde a variante, o tamanho e as imagens do vendedor e compare-os com as fotografias de armazém quando o artigo chegar. Cada cartão abre primeiro uma página de pesquisa e depois o catálogo FindSpreadsheet, para verificar os detalhes visíveis antes de continuar.", "Nos achados económicos, separe o preço do artigo do custo da encomenda. Um artigo barato pode ficar mais caro depois de transporte nacional, embalagem, envio internacional, impostos ou alfândega. Os guias explicam os dados que alteram uma cotação: destino, tipo de produto, peso embalado e dimensões. Um valor mostrado é uma estimativa datada, não uma tarifa permanente.", "Os links QC são úteis quando respondem a uma pergunta concreta: a variante está correta, a etiqueta de tamanho coincide, há uma medida pedida ou dano visível? As imagens não provam autenticidade, composição, defeitos ocultos ou durabilidade. Verifique dentro da janela de devolução, leia as condições atuais e guarde os dados de cada comparação. Esse é o propósito deste PikoBuy Spreadsheet 2026."],
    "sv-SE": ["PikoBuy Spreadsheet 2026: QC-länkar och budgetfynd med eftertanke", "Ett användbart PikoBuy-spreadsheet garanterar inte vara, fraktlinje eller leveransdatum. Det hjälper dig att göra en produktlänk till ett kontrollerbart beslut. Spara variant, storlek och säljarbilder och jämför dem med lagerbilder när varan anländer. Varje kort öppnar först en forskningssida och sedan FindSpreadsheet-katalogen, så att synliga detaljer kan granskas innan du går vidare.", "För budgetfynd ska varupriset skiljas från paketkostnaden. En billig vara kan bli dyrare efter inrikes frakt, emballage, internationell frakt, skatt eller tull. Fraktguiderna förklarar vilka uppgifter som ändrar en offert: destination, produkttyp, packad vikt och mått. Ett visat belopp är därför en daterad uppskattning, inte ett fast pris.", "QC-länkar är användbara när de besvarar en konkret fråga: är varianten rätt, stämmer storleksetiketten, syns ett begärt mått eller finns en synlig skada? Bilder bevisar inte äkthet, materialsammansättning, dolda fel eller hållbarhet. Kontrollera under returperioden, läs aktuella villkor och spara uppgifterna från varje jämförelse. Det är syftet med PikoBuy Spreadsheet 2026."],
  };
  const copy = localized[locale];
  if (!isEnglishLocale(locale) && !copy && locale !== "es-ES") {
    const shipping = getShippingCopy(locale);
    const article = getLocalizedArticleMeta(locale, "pikobuy-qc-photo-checklist", { title: "PikoBuy QC", intro: shipping.intro });
    const faq = getLocalizedFaq(locale, shipping.intro);
    return <div className="prose"><h2>{article.title}</h2><p>{article.intro} {faq[5].answer}</p><p>{shipping.intro}</p><p>{faq[4].answer} {faq[9].answer}</p></div>;
  }
  if (copy) return <div className="prose"><h2>{copy[0]}</h2><p>{copy[1]}</p><p>{copy[2]}</p><p>{copy[3]}</p></div>;
  if (locale === "es-ES") return <div className="prose"><h2>Pikobuy Spreadsheet España 2026: enlaces QC y hallazgos con presupuesto</h2><p>Un spreadsheet útil de PikoBuy no promete que un artículo, una ruta o una fecha de entrega estén garantizados. Es una página de trabajo para transformar un enlace de producto en una decisión más clara. Guarda la variante, la talla y las imágenes del vendedor; después compáralas con las fotos de almacén cuando llegue el artículo. Cada ficha abre primero una página de investigación y después el catálogo de FindSpreadsheet, para que puedas revisar la variante y la evidencia visible antes de continuar.</p><p>En los hallazgos económicos, separa el precio del artículo del coste del paquete. Un producto barato puede acabar costando más cuando se añaden envío nacional, embalaje, transporte internacional, impuestos o aduanas. Las guías de envío explican qué datos cambian una cotización: destino, tipo de producto, peso embalado y dimensiones. Por eso cualquier cifra debe leerse como una estimación fechada y no como una tarifa permanente.</p><p>Los enlaces QC sirven cuando responden una pregunta concreta: si llegó la variante correcta, si la etiqueta de talla coincide, si aparece una medida solicitada o si hay un daño visible. Las imágenes no prueban autenticidad, composición del material, defectos ocultos ni durabilidad. Revisa la evidencia durante la ventana de devolución, consulta las condiciones vigentes antes de aprobar el envío y guarda los datos usados en cada comparación. Ese método prudente y basado en evidencia es el objetivo de este recurso Pikobuy Spreadsheet 2026.</p></div>;
  return <div className="prose"><h2>PikoBuy Spreadsheet 2026: QC Links and Budget Finds, Used Carefully</h2><p>A useful PikoBuy spreadsheet is not a promise that an item, route or delivery date is guaranteed. It is a working research page for turning a product link into a clearer decision. Start with the live listing, save the chosen colour, size and seller images, then compare that record with warehouse photos after the item arrives. The product cards here open a research page first and then the matching FindSpreadsheet catalog page, so a buyer can check the route, selected variation and visible evidence before leaving the site.</p><p>For budget finds, separate the item price from the parcel cost. A low product price may still lead to a higher final amount after domestic delivery, packaging, international shipping, taxes or customs. The shipping guides explain which inputs can change a quote—destination, product type, packed weight and dimensions—and why a displayed price should be treated as a dated estimate rather than a permanent rate. This avoids the common mistake of comparing two items only by their headline price.</p><p>QC links are most useful when they answer a specific question: is the correct variation present, is the visible size label right, is a requested measurement shown, or is there obvious damage? Images cannot prove authenticity, material composition, hidden defects or long-term durability. Check the warehouse evidence while the return window is still open, read current policy wording before approving shipment, and keep a record of the inputs used for any shipping comparison. That practical, evidence-led workflow is the purpose of this PikoBuy Spreadsheet 2026 resource.</p></div>;
}

export function ArticleShell({ eyebrow,title,intro,children,locale="en-US" }: { eyebrow:string;title:string;intro:string;children:React.ReactNode;locale?:string }) { return <PageFrame locale={locale}><article className="article"><header><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></header>{children}</article></PageFrame>; }
export function WorkflowList({ locale = "en-US" }: { locale?: string }) { const t=getCopy(locale),e=getExtra(locale),translated=!isEnglishLocale(locale); return <div className="article-steps">{workflow.map(([title,body],i) => <section key={title}><b>{String(i+1).padStart(2,"0")}</b><div><h2>{translated?`${t.workflow} ${i+1}`:title}</h2><p>{translated?e.workflowIntro:body}</p></div></section>)}</div>; }

export function CategoriesPage({ locale="en-US" }: { locale?:string }) { const e=getExtra(locale),l=getLocalizedContent(locale); const schema={"@context":"https://schema.org","@type":"ItemList",name:`${e.categories} | PikoBuy Spreadsheet`,itemListOrder:"https://schema.org/ItemListUnordered",numberOfItems:categories.length,itemListElement:categories.map((category,position)=>({"@type":"ListItem",position:position+1,name:l.categories[position],url:`${siteOrigin}${localPath(locale,`category/${category.slug}`)}`}))}; return <ArticleShell locale={locale} eyebrow={`${e.categories} / ${categories.length}`} title={e.categories} intro={e.categoriesIntro}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><CategoryGrid locale={locale}/><div className="prose page-copy"><h2>{e.currentPage}</h2><p>{e.exploreIntro}</p><div className="category-guide-links">{categories.map((cat,i)=><Link key={cat.slug} href={localPath(locale,`category/${cat.slug}`)}>{l.categories[i]} {l.guide} →</Link>)}</div></div><SearchBand locale={locale}/></ArticleShell>; }

export function CategoryDetailPage({ slug,locale="en-US" }: { slug:string;locale?:string }) {
  const category=categories.find((item)=>item.slug===slug); if(!category) notFound(); const t=getCopy(locale),e=getExtra(locale),l=getLocalizedContent(locale),translated=!isEnglishLocale(locale); const index=categories.findIndex((item)=>item.slug===slug),categoryName=l.categories[index]; const matching=products.filter((item)=>item.category.toLowerCase().includes(category.name.toLowerCase().replace("other finds","other")));
  return <ArticleShell locale={locale} eyebrow={`${e.categories} / ${category.icon}`} title={translated?`${categoryName} — ${t.navGuides}`:`${categoryName} PikoBuy Spreadsheet Guide`} intro={translated?e.categoriesIntro:`${e.categoriesIntro} ${category.note}.`}><div className="article-body"><div className="prose"><h2>{translated?`${e.categories}: ${categoryName}`:`${categoryName}: warehouse-photo priorities`}</h2><p>{translated?e.categoriesIntro:"Use this category page before opening the live catalog. Confirm the selected variation, measurements, quantity and visible condition while the item is still in the warehouse."}</p><div className="callout"><strong>{translated?e.primarySources:"Category QC focus"}</strong>{translated?e.productsIntro:`${category.note}. Compare the warehouse item with the original seller listing and check the current return policy before international dispatch.`}</div><h2>{e.productDetails}</h2>{matching.length?<ProductGrid locale={locale} limit={4} items={matching}/>:<p>{translated?e.productsIntro:"Product records change frequently. Use the exact category catalog below for the newest available listings."}</p>}<a className="button inline-button" href={`${mainSite}${category.path}`} target="_blank" rel="noopener">{e.liveCatalog}: {categoryName} ↗</a></div><SourcesBlock locale={locale}/></div></ArticleShell>;
}

export function ProductsPage({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale);
  return <PageFrame locale={locale}><section className="catalog-page">
    <h1>{t.browse}</h1>
    <p>{priceNote(locale)}</p>
    <Suspense fallback={<p role="status">…</p>}><MainCatalog locale={locale}/></Suspense>
  </section></PageFrame>;
}

export function ImageSearchPage({ locale = "en-US" }: { locale?: string }) {
  const copy = imageSearchCopy(locale);
  return <PageFrame locale={locale}><section className="image-search-page">
    <h1>{copy.title}</h1>
    <p>{copy.privacy}</p>
    <ImageSearch locale={locale}/>
  </section></PageFrame>;
}

export function CatalogProductPage({ locale = "en-US" }: { locale?: string }) {
  return <PageFrame locale={locale}>
    <Suspense fallback={<p className="listing-detail" role="status">…</p>}>
      <MainCatalogProduct locale={locale} priceNote={priceNote(locale)}/>
    </Suspense>
  </PageFrame>;
}

export function ProductDetailPage({ slug,locale="en-US" }: { slug:string;locale?:string }) {
  const product = products.find((item) => item.slug === slug);
  const listing = productListings[slug];
  if (!product || !listing) notFound();

  return <PageFrame locale={locale}>
    <ProductDetail key={slug} listing={listing} name={product.name} basePrice={product.cny} locale={locale}
      priceNote={priceNote(locale)} catalogUrl={`${mainSite}${product.href}`} catalogLabel={getExtra(locale).openMain}/>
  </PageFrame>;
}

export function SeoHubPage({ locale="en-US" }: { locale?:string }) { const e=getExtra(locale),translated=!isEnglishLocale(locale); return <ArticleShell locale={locale} eyebrow={e.independent} title={e.seoArticles} intro={e.researchIntro}><SeoArticleGrid locale={locale}/><div className="prose page-copy"><h2>{e.primarySources}</h2><p>{translated?e.researchIntro:"Every article separates official platform statements, live interface observations and editorial inference. Dates and limitations are shown where a fact may change."}</p></div></ArticleShell>; }

export function SeoArticlePage({ slug,locale="en-US" }: { slug:string;locale?:string }) {
  const article=seoArticles.find((item)=>item.slug===slug); if(!article) notFound(); const e=getExtra(locale),l=getLocalizedContent(locale),translated=!isEnglishLocale(locale); const localizedArticle=getEditorialArticle(locale,article.slug)||getLocalizedArticleMeta(locale,article.slug,{title:article.title,intro:article.excerpt}); const splitMasterParagraph=(body:string)=>{const sentences=body.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((sentence)=>sentence.trim()).filter(Boolean)||[body];const size=Math.ceil(sentences.length/3);return [sentences.slice(0,size),sentences.slice(size,size*2),sentences.slice(size*2)].map((group)=>group.join(" ")).filter(Boolean);}; const editorial=getEditorialArticle(locale,slug); const sections=editorial ? editorial.sections.map(([heading,...paragraphs],position)=>({slot:`${slug}:${position+1}`,heading,paragraphs})) : translated?getLocalizedSeoSections(locale,article.slug,localizedArticle.intro):article.sections.map(([heading,body],position)=>({slot:`${article.slug}:${position+1}`,heading,paragraphs:splitMasterParagraph(body)})); const minutes=editorial ? String(Math.max(2,Math.ceil(editorial.sections.flat().join(" ").split(/\s+/).length/180))) : article.readTime.match(/\d+/)?.[0]||"14";
  return <ArticleShell locale={locale} eyebrow={`${e.seoArticles} / ${minutes}′`} title={localizedArticle.title} intro={localizedArticle.intro}><div className="article-body"><div className="prose" data-article-template="seo-v3" data-article-slug={article.slug}>{sections.map(({slot,heading,paragraphs})=><section key={slot} data-content-slot={slot}><span className="section-index">{slot.split(":")[1].padStart(2,"0")}</span><h2>{heading}</h2>{paragraphs.map((paragraph,index)=><p key={`${slot}:${index+1}`} data-paragraph-slot={`${slot}:${index+1}`}>{paragraph}</p>)}</section>)}{editorial && <div className="guide-next"><Link href={localPath(locale,"guides")}>{getCopy(locale).navGuides}</Link>{editorial.sources.map(source=><a key={source} href={editorialSources[source]} target="_blank" rel="noopener noreferrer">{sourceLabel(source,locale)}</a>)}</div>}<div className="callout"><strong>{editorial ? e.primarySources + " · " + new Intl.DateTimeFormat(locale,{dateStyle:"medium",timeZone:"UTC"}).format(new Date("2026-11-28")) : l.researchBasis}</strong>{translated?`${localizedArticle.intro} ${l.scopeText}`:"Official PikoBuy beginner guide, shipping estimator, shipping terms and returns policy. No route, delivery date, return approval or product quality is guaranteed; check the current interface before paying."}</div><Link className="button inline-button" href={localPath(locale,"products")}>{e.productDetails} →</Link></div><SourcesBlock locale={locale}/></div></ArticleShell>;
}

export function FaqPage({ locale="en-US" }: { locale?:string }) {
  const e=getExtra(locale),l=getLocalizedContent(locale);
  const rewritten = locale === "en-US" ? faqEn : locale === "es-ES" ? faqEs : null;
  const items = rewritten ? rewritten.map(([question, answer, source]) => ({question,answer,source}))
    : getLocalizedDetailedFaq(locale,e.researchIntro).map(item => ({...item,source:undefined}));
  const schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:items.map((item)=>({"@type":"Question",name:item.question,acceptedAnswer:{"@type":"Answer",text:item.answer}}))};
  return <ArticleShell locale={locale} eyebrow={l.factCheckedHelp} title={l.faqTitle} intro={l.faqIntro}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><div className="article-body"><div className="prose faq-page">{items.map((item,i)=><section key={`${i}-${item.question}`}><span className="section-index">{String(i+1).padStart(2,"0")}</span><h2>{item.question}</h2><p>{item.answer}</p>{item.source && <a href={editorialSources[item.source]} target="_blank" rel="noopener noreferrer">{sourceLabel(item.source,locale)}</a>}</section>)}<div className="callout"><strong>{l.scopeTitle}</strong>{l.scopeText}</div><Link className="button inline-button" href={localPath(locale,"seo-articles")}>{e.seoArticles} →</Link></div><SourcesBlock locale={locale}/></div></ArticleShell>;
}

function sourceLabel(source: keyof typeof editorialSources, locale: string) {
  const spanish = locale === "es-ES";
  const labels = {
    guide: ["PikoBuy buying guide", "Guía de compra de PikoBuy"],
    estimate: ["PikoBuy shipping estimator", "Calculadora de envío de PikoBuy"],
    returns: ["PikoBuy return policy", "Política de devoluciones de PikoBuy"],
    forwarding: ["PikoBuy forwarding terms", "Condiciones de reenvío de PikoBuy"],
    terms: ["PikoBuy terms of service", "Condiciones de PikoBuy"],
    support: ["PikoBuy support", "Soporte de PikoBuy"],
    vat: ["European Commission: import VAT", "Comisión Europea: IVA de importación"],
    territories: ["European Commission: special territories", "Comisión Europea: territorios especiales"],
  };
  return labels[source][spanish ? 1 : 0];
}

export function IllustratedGuidesPage({ locale = "en-US" }: { locale?: string }) {
  const t = getCopy(locale), e = getExtra(locale);
  const english = locale === "en-US", spanish = locale === "es-ES";
  const title = english ? "How to buy with PikoBuy" : spanish ? "Cómo comprar en PikoBuy desde España" : t.navGuides;
  const intro = english ? "Nine steps from finding an item on this spreadsheet to tracking your parcel, with annotated screenshots."
    : spanish ? "Nueve pasos desde la búsqueda en este spreadsheet hasta el seguimiento del paquete, con capturas anotadas." : e.workflowIntro;
  return <ArticleShell locale={locale} eyebrow={e.independent} title={title} intro={intro}>
    <div className="article-body"><div>
      {!english && !spanish && <WorkflowList locale={locale}/>}
      <BuyingGuide locale={locale}/>
    </div><SourcesBlock locale={locale}/></div>
  </ArticleShell>;
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
  if (slug.length === 1 && slug[0] === "image-search") return <ImageSearchPage locale={locale}/>;
  if (slug.length === 1 && slug[0] === "catalog-product") return <CatalogProductPage locale={locale}/>;
  const [first,second]=slug;
  if(slug.length===1&&first==="categories") return <CategoriesPage locale={locale}/>;
  if(slug.length===2&&first==="category") return <CategoryDetailPage locale={locale} slug={second}/>;
  if(slug.length===1&&first==="products") return <ProductsPage locale={locale}/>;
  if(slug.length===2&&first==="product") return <ProductDetailPage locale={locale} slug={second}/>;
  if(slug.length===1&&first==="seo-articles") return <SeoHubPage locale={locale}/>;
  if(slug.length===2&&first==="seo-articles") return <SeoArticlePage locale={locale} slug={second}/>;
  if(slug.length===1&&first==="faq") return <FaqPage locale={locale}/>;
  if(slug.length===1&&first==="shipping") return <ShippingContentPage locale={locale}/>;
  if(slug.length===1&&first==="guides") return <IllustratedGuidesPage locale={locale}/>;
  if(slug.length===1&&["countries","qc","methodology"].includes(first)) return <GenericLocalizedPage locale={locale} page={first}/>;
  notFound();
}
