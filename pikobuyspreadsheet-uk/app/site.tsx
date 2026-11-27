import { BaggageClaim, BookOpen, Boxes, ChartNoAxesCombined, Check, CircleHelp, ExternalLink, Footprints, Gem, PackageCheck, Search, ShieldCheck, Shirt, Warehouse, Watch } from "lucide-react";
import languages from "./locales.json";
import { getLocale, phrase } from "./translations";
import { HeaderControls } from "./header-controls";
import { Analytics } from "./analytics";
import { CatalogCards, CatalogSearch, ProductDetail } from "./catalog-ui";
import { catalogCategories, catalogHref } from "./catalog-model";
import { catalogLabels } from "./catalog-labels";
import catalogData from "./catalog-featured.json";
import featuredTitles from "./featured-titles.json";
import { GuidePage, FAQPage } from "./support-pages";
import { supportCopy } from "./support-copy";
import { SeoPage } from "./seo-page";

type Lang = string;

export const en={
 nav:["Home","Product categories","Product details","Guide","QC checks","Shipping","Research","FAQ","SEO articles"], kicker:"Independent PikoBuy research hub", title:"PikoBuy Spreadsheet: Find Products, QC Photos and Category Guides", intro:"Research PikoBuy product finds by category, source link and option before you commit. Search the live FindSpreadsheet catalog, compare QC evidence and plan the parcel with current warehouse data.", search:"Try sneakers, hoodies or bags", button:"Search FindSpreadsheet", trust:"Independent guide — not PikoBuy support or checkout.",
 facts:["Officially described as a China purchasing and forwarding platform","Supports buying from Taobao, Weidian and 1688","International delivery is presented as worldwide; exact lines and prices require a live account check"],
 browse:"Browse the catalog by category", browseIntro:"Each card opens the matching category on FindSpreadsheet. No competitor directories or unrelated outbound links.", workflow:"A safer spreadsheet workflow", workflowIntro:"Treat every row as a lead, not a guarantee. Five checks turn a long list into a shortlist you can explain.",
 steps:[["Define the item","Choose one category and size requirement before opening links."],["Check the source","Match the title, options, seller page and current listing."],["Review QC","Inspect colour, size tag, visible defects and included parts after warehouse arrival."],["Plan the parcel","Consider actual weight, volumetric weight, restrictions and route availability."],["Decide calmly","Ship, return or replace only after the evidence matches the order."]],
 evidence:"What this site will — and will not — claim", yes:"Evidence we can use", no:"Claims we will avoid", yesItems:["PikoBuy's own published platform description","The live listing and option selected","Warehouse photos and measured parcel data","Country-specific route information shown at checkout"], noItems:["Invented user counts by country","Guaranteed delivery dates or customs outcomes","Calling every spreadsheet seller verified","Fabricated customer reviews or outdated prices"],
 sourceNote:"Language choice note", sourceText:"The guide is available in 22 languages.", cta:"Start with the live product database", ctaText:"Use the guide to narrow the question, then move to FindSpreadsheet for current product rows and category pages.", ctaButton:"Browse all products", footer:"Independent informational website. Not affiliated with or endorsed by PikoBuy.", back:"Back to overview", database:"Open product database",
 pageTitles:{categories:"Browse PikoBuy finds by product category",products:"Read the product details before opening a listing",guide:"How to use a PikoBuy spreadsheet without guessing",qc:"Warehouse QC: what to inspect before shipping",shipping:"Plan the parcel before a cheap item becomes expensive",articles:"Evidence-led PikoBuy research",faq:"Straight answers to common spreadsheet questions",seo:"PikoBuy spreadsheet SEO articles and practical buyer guides"},
 pageIntros:{categories:"Start with one product type, compare like with like, and move to the matching FindSpreadsheet category only when you are ready to inspect live rows.",products:"A spreadsheet row is only a summary. Use the source listing, selected option, photos, measurements and parcel information to understand what you may actually receive.",guide:"A spreadsheet is a discovery tool. It organises possible finds, but cannot confirm stock, seller reliability, fit or the final delivered cost.",qc:"QC photos are a decision checkpoint after warehouse arrival. Compare what arrived with the exact option you ordered.",shipping:"International shipping depends on destination, dimensions, weight, restrictions and routes currently offered. Treat estimates as context, not quotes.",articles:"The editorial plan concentrates on questions real buyers need answered, with facts separated from opinions and user reports.",faq:"This page separates spreadsheet discovery from platform support, seller decisions and shipping promises.",seo:"Long-form articles are organised around real search questions, but each one must add practical value, distinguish verified facts from judgement and avoid invented reviews or promises."},
 categoryNames:["Shoes","Sneakers","Shirts","Hoodies","Jackets","Pants","Bags","Shorts","Accessories","Jewelry","Watches","Sweaters"],
  ui:{preview:"Independent PikoBuy research guide",factTitle:"What PikoBuy publicly says",readEvidence:"Read the evidence standard",priorityLanguages:"priority languages",focusedCategories:"focused categories",decisionChecks:"decision checks",exploreSite:"Explore the site",threeWays:"Three direct ways to continue",threeWaysText:"Each card opens its own page. Product discovery links lead only to FindSpreadsheet.",featureCategories:"Browse twelve focused product groups and open the matching live category.",featureProducts:"Understand options, source listings, images, measurements and parcel factors.",featureSeo:"Read practical, evidence-led PikoBuy spreadsheet and buyer research topics.",liveDatabase:"Live database",decisionSystem:"Decision system",factCheck:"Fact check",calloutFlow:"Finds → checks → decision",evidenceStandard:"Evidence standard",evidenceText:"Platform facts come from PikoBuy public pages. Product rows come from FindSpreadsheet. Route availability, prices and account outcomes must be checked live.",seoEyebrow:"PikoBuy spreadsheet / SEO articles",seoIntro:"Thirty-eight evidence-led guides based on PikoBuy's public Home, About, Beginner's Guide, product pages, Privacy Policy, Shipping Terms, Shipping Estimate, Returns & Exchanges, Contact and Terms of Service pages. Claims that cannot be verified are left out.",wordRange:"Evidence-led guides",updated:"Updated",readFull:"Read full article",backSeo:"Back to SEO articles",articleEyebrow:"Evidence-led PikoBuy guide",independent:"Independent guide",factCheckStandard:"Fact-check standard",factCheckText:"Checked against PikoBuy's public Home, About Us, Beginner's Guide, Shipping Terms, Shipping Estimate, Returns & Exchanges and Terms of Service pages. No invented user numbers, delivery guarantees, customs promises or fabricated reviews."},
 sections:{
  categories:[["Choose one category first","Narrowing the search makes price, material, sizing and photo quality easier to compare. The category links on this site lead only to the matching pages on FindSpreadsheet."],["Compare equivalent items","Compare the same product type and similar specifications. A cheap price is not meaningful when the material, option or included parts are different."],["Open the live category","Use the category page to inspect current rows, then return to the source listing before making a purchase decision."],["Keep a short list","Save only rows with a clear title, useful images, an identifiable source and enough information to support the next check."]],
  products:[["Read the full title and option","Confirm model, colour, size, quantity and included parts. Do not assume the first image represents every selectable option."],["Check the source listing","A product card can become outdated. Verify the live seller page, current options and any notices before paying."],["Separate listing images from QC","Seller images describe an offer; warehouse QC photos show the item received for an order. They answer different questions."],["Estimate the delivered decision","Item price is only one part of cost. Packaging, actual or volumetric weight, route and destination affect the parcel decision."]],
  guide:[["Start category-first","Compare shoes with shoes and jackets with jackets. Missing measurements, weak photos and odd price differences become easier to see."],["Preserve the original source","Keep the Taobao, Weidian or 1688 source clue beside the row. Confirm the current listing still matches before paying."],["Separate two payments","The product purchase and international parcel are separate decisions. A low item price says nothing about final delivered value."],["Keep a decision note","Save a row only when the source matches, the option is clear, the photos help and the likely parcel cost makes sense."]],
  qc:[["Identity and option","Check item count, colour, model, selected size and included parts. A correct-looking product can still be the wrong option."],["Shape and construction","Look for symmetry, seams, fastenings, sole shape, prints and obvious damage. Request detail photos when needed."],["Measurements","A label is not a measurement. Compare warehouse measurements with an item that already fits you."],["Decision window","Raise an issue before approving international shipment, while return or replacement may still be possible."]],
  shipping:[["Actual vs volumetric weight","Carriers may price by scale weight or space occupied. Bulky packaging can change the charge."],["Route restrictions","Batteries, liquids, magnets, branded goods and oversized parcels may have fewer eligible lines."],["Consolidation","Combining items may reduce repeated base charges, but a larger parcel concentrates value and can change available routes."],["Before submission","Confirm destination, declaration, insurance, packaging requests and tracking expectations in the active account."]],
  articles:[["Beginner's PikoBuy spreadsheet workflow","Pillar guide · source checks · category-first browsing · 1,400–1,700 words"],["How to read warehouse QC photos","Practical guide · apparel, footwear and accessory examples · 1,300–1,600 words"],["Actual weight vs volumetric weight","Shipping guide · worked parcel examples · 1,200–1,500 words"],["PikoBuy review research: a fair method","Separate verified facts, user reports and unresolved claims · 1,400–1,800 words"]],
  faq:[["Is this the official PikoBuy website?","No. This is an independent FindSpreadsheet guide. Account, payment and order issues should be handled through PikoBuy's support inside the relevant account."],["What does PikoBuy do?","PikoBuy describes itself as a China purchasing and forwarding platform that supports product sourcing, purchasing assistance, warehouse inspection and international shipping."],["Which shopping sources are named by PikoBuy?","Its beginner guide names Taobao, Tmall, 1688, Weidian and Yupoo, while its About page specifically highlights Taobao, 1688 and Weidian."],["How do I submit a product?","PikoBuy says users can paste a product link or keywords into its search box. Its home page also mentions images and sourcing requests."],["Why are there two payment stages?","PikoBuy's guide places the first payment at the purchasing-order stage. After warehouse inspection, the user selects a route, submits a parcel and pays international shipping."],["What happens at the warehouse?","The published guide says warehouse processing includes check-in, photo confirmation and a defect check. Standard photos cannot prove every hidden or specialist issue."],["Can I request more detailed photographs?","PikoBuy's forwarding terms say users can review inspection photos or purchase additional detailed photos. Check the live account for availability and price."],["What information does the shipping estimator need?","Destination country or region, product type, weight, length, width and height. The result is an estimate, not a guaranteed final charge or delivery date."],["How long is the published warehouse return window?","For eligible products, the returns policy describes five days after the status changes to In Warehouse, defined as 120 hours from the next hour. Seller rules and product condition still apply."],["Are returns always free?","No. Customer-choice returns may include return shipping, the seller's original shipping charge and a service fee. Seller-responsibility cases follow the evidence and final seller response."],["When should tracking appear?","PikoBuy's beginner guide says tracking information should be available within three days after shipment. International delivery time still depends on the selected route and logistics conditions."],["Can PikoBuy guarantee customs clearance or delivery?","No such guarantee is published. Its shipping terms identify third-party logistics, customs action, damage, loss and peak-season delays as cross-border risks."]],
  seo:[["PikoBuy spreadsheet beginner guide","A structured introduction to finding rows, verifying source listings and building a shortlist without treating the sheet as a guarantee."],["PikoBuy QC photo checklist","A practical inspection article covering identity, option, construction, measurements, visible defects and the decision before international shipping."],["PikoBuy shipping weight explained","A plain-language guide to actual weight, volumetric weight, packaging, consolidation and why a cheap item can become an expensive parcel."],["How PikoBuy review research should be written","A transparent method that separates platform-published facts, verifiable order evidence, attributed user reports and claims that remain unresolved."]],
 }
};
export type Copy=typeof en;
const routes=["home","categories","products","guide","qc","shipping","articles","faq","seo","product"];
type CatIcon="shoe"|"shirt"|"bag"|"pants"|"accessory"|"jewelry"|"watch";
const cats:{name:string;icon:CatIcon;category:string}[]=[
 {name:"Shoes",icon:"shoe",category:"shoes"},
 {name:"Sneakers",icon:"shoe",category:"shoes"},
 {name:"Shirts",icon:"shirt",category:"t-shirts"},
 {name:"Hoodies",icon:"shirt",category:"hoodies-sweaters"},
 {name:"Jackets",icon:"shirt",category:"jackets"},
 {name:"Pants",icon:"pants",category:"pants-shorts"},
 {name:"Bags",icon:"bag",category:"accessories"},
 {name:"Shorts",icon:"pants",category:"pants-shorts"},
 {name:"Accessories",icon:"accessory",category:"accessories"},
 {name:"Jewelry",icon:"jewelry",category:"accessories"},
 {name:"Watches",icon:"watch",category:"accessories"},
 {name:"Sweaters",icon:"shirt",category:"hoodies-sweaters"},
];
const href=(l:Lang,r:string)=>`/${l}${r==="home"?"":`/${r}`}`;
export function Site({ lang, route }: { lang: string; route: string }) {
  const code = languages.find((language) => language.code === lang)?.code ?? "en";
  const bundle = getLocale(code);
  const t = (bundle?.copy ?? en) as Copy;
  const current = routes.includes(route) ? route : "home";
  const direction = code === "ar" ? "rtl" : "ltr";
  const shopLabels = catalogLabels(code);
  const support = supportCopy(code);
  const navIndexes = [0, 2, 3, 7, 8];
  const labels = {
    language: phrase(code, "Language"),
    currency: phrase(code, "Currency"),
    estimate: phrase(code, "Approximate conversion"),
    dated: phrase(code, "Rates dated"),
  };

  return (
    <div className={current === "home" ? "site-shell home-shell" : "site-shell"} lang={code} dir={direction}>
      <header className="topbar">
        <a className="brand" href={href(code, "home")}><img src="/pikobuy.png" alt="PikoBuy" /></a>
        <nav dir={direction}>
          {navIndexes.map((index) => (
            <a key={routes[index]} className={current === routes[index] || (index === 2 && current === "product") ? "active" : ""}
              href={href(code, routes[index])}>
              {index === 2 ? shopLabels.browse : t.nav[index]}
            </a>
          ))}
        </nav>
        <HeaderControls locale={code} route={current} labels={labels} />
      </header>
      {current === "home" ? <Home t={t} code={code} />
        : current === "product" ? <ProductDetail locale={code} labels={shopLabels}
          photoLabels={{ previous: support.previousPhoto, next: support.nextPhoto }} />
        : current === "guide" ? <GuidePage code={code} />
        : current === "seo" ? <SeoPage code={code} />
        : current === "faq" ? <FAQPage code={code} />
        : current === "products" ? (
          <main className="catalog-page">
            <h1>{shopLabels.browse}</h1>
            <CatalogSearch locale={code} labels={shopLabels} placeholder={t.search}
              initial={catalogData.initial}
              categories={catalogCategories.map(([slug, key]) => ({ slug, label: shopLabels[key] }))} />
          </main>
        ) : current === "categories" ? (
          <main className="catalog-page">
            <h1>{t.nav[1]}</h1>
            <CategoryGrid t={t} code={code} />
          </main>
        ) : <Inner t={t} code={code} route={current} />}
      <footer>
        <a className="brand footer-brand" href={href(code, "home")}><img src="/pikobuy.png" alt="PikoBuy" /></a>
        <p>{t.footer}</p>
        <div>
          <a href={href(code, "categories")}>{t.nav[1]}</a>
          <a href={catalogHref(code)}>{shopLabels.browse}</a>
          <a href={href(code, "seo")}>{t.nav[8]}</a>
          <a href="https://findspreadsheet.com/">FindSpreadsheet <ExternalLink size={12} /></a>
        </div>
      </footer>
      <Analytics locale={code} />
    </div>
  );
}

const homeResources = [
  { navIndex: 3, icon: BookOpen },
  { navIndex: 7, icon: CircleHelp },
  { navIndex: 8, icon: ChartNoAxesCombined },
];

function Home({ t, code }: { t: Copy; code: Lang }) {
  const labels = catalogLabels(code);
  const support = supportCopy(code);
  const titles = (featuredTitles as Record<string, Record<string, string>>)[code];
  const featured = catalogData.featured.map(item => ({ ...item, title: titles?.[item.id] ?? item.title }));
  const homeSchema = {
    "@context": "https://schema.org", "@type": "WebSite", name: "PikoBuy Spreadsheet UK",
    url: `https://pikobuyspreadsheet.uk/${code}/`, description: t.intro,
    potentialAction: {
      "@type": "SearchAction",
      target: `https://pikobuyspreadsheet.uk/${code}/products/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <main className="catalog-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <section className="home-hero">
        <p className="eyebrow">{t.kicker}</p>
        <h1>{t.title}</h1>
        <form className="catalog-search" action={catalogHref(code)} method="get">
          <div className="catalog-search-input">
            <Search size={20} aria-hidden="true" />
            <input name="q" type="search" maxLength={200} required placeholder={t.search} aria-label={labels.search} />
          </div>
          <button type="submit">{labels.search}</button>
        </form>
      </section>
      <section className="home-categories">
        <div className="home-section-head"><h2>{t.nav[1]}</h2></div>
        <div className="home-category-links">
          {catalogCategories.map(([slug, label]) => (
            <a href={catalogHref(code, { category: slug })} key={slug}>{labels[label]}</a>
          ))}
        </div>
      </section>
      <section className="home-featured">
        <div className="home-section-head">
          <h2>{labels.featured}</h2>
          <a href={catalogHref(code)}>{labels.browse}</a>
        </div>
        <CatalogCards locale={code} labels={labels} items={featured} />
      </section>
      <section className="home-guides">
        <div className="home-section-head"><h2>{labels.buying}</h2></div>
        <div className="home-guide-links">
          {homeResources.map(({ navIndex, icon: Icon }, position) => (
            <a key={routes[navIndex]} href={href(code, routes[navIndex])}>
              <Icon size={21} aria-hidden="true" />
              <div><strong>{t.nav[navIndex]}</strong><span>{support.cards[position]}</span></div>
            </a>
          ))}
        </div>
        <details className="home-about">
          <summary>{t.ui.factTitle}</summary>
          <p>{t.intro}</p>
          <ul>{t.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>
        </details>
      </section>
    </main>
  );
}

function CategoryIcon({kind}:{kind:CatIcon}){return kind==="shoe"?<Footprints/>:kind==="shirt"?<Shirt/>:kind==="bag"?<BaggageClaim/>:kind==="jewelry"?<Gem/>:kind==="watch"?<Watch/>:kind==="accessory"?<Boxes/>:<PackageCheck/>}
function CategoryGrid({ t, code }: { t: Copy; code: Lang }) {
  return (
    <div className="category-grid">
      {cats.map((cat, index) => {
        const label = t.categoryNames[index];
        return <a key={cat.name} href={catalogHref(code, { category: cat.category })}>
          <span><CategoryIcon kind={cat.icon} /></span><b>{label}</b>
        </a>;
      })}
    </div>
  );
}
function Callout({t}:{t:Copy}){return <section className="cta"><div><p className="eyebrow">{t.ui.calloutFlow}</p><h2>{t.cta}</h2><p>{t.ctaText}</p></div><a href="https://findspreadsheet.com/">{t.ctaButton}<ExternalLink/></a></section>}
function Breadcrumbs({t,code,route,label}:{t:Copy;code:Lang;route:string;label:string}){
 const canonical=`https://pikobuyspreadsheet.uk${href(code,route)}/`;
 const schema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:t.nav[0],item:`https://pikobuyspreadsheet.uk/${code}/`},{"@type":"ListItem",position:2,name:label,item:canonical}]};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><nav className="article-breadcrumbs" aria-label={phrase(code, "Breadcrumb")}><a href={href(code,"home")}>{t.nav[0]}</a><span>/</span><span aria-current="page">{label}</span></nav></>;
}

function Inner({t,code,route}:{t:Copy;code:Lang;route:string}){
 const key=route as keyof Copy["pageTitles"],sections=t.sections[route as keyof Copy["sections"]]??t.sections.guide;
 const pageTitle=t.pageTitles[key]??t.pageTitles.guide;
 const pageCanonical=`https://pikobuyspreadsheet.uk${href(code,route)}/`;
 const pageSchema={"@context":"https://schema.org","@type":route==="categories"?"CollectionPage":"WebPage",name:pageTitle,description:t.pageIntros[key]??t.pageIntros.guide,url:pageCanonical,isPartOf:{"@type":"WebSite",name:"PikoBuy Spreadsheet UK",url:"https://pikobuyspreadsheet.uk/"}};
 return <main className="inner"><Breadcrumbs t={t} code={code} route={route} label={pageTitle}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(pageSchema)}}/><section className="inner-hero"><p className="eyebrow">{phrase(code, "PIKOBUY /") + " "}{t.nav[routes.indexOf(route)]}</p><h1>{pageTitle}</h1><p>{t.pageIntros[key]??t.pageIntros.guide}</p></section>{route==="categories"?<><section className="inner-category-panel"><CategoryGrid t={t} code={code}/></section><div className="article-grid category-notes"><article className="article-body">{sections.map(([h,p],i)=><section key={h}><span>0{i+1}</span><div><h2>{h}</h2><p>{p}</p></div></section>)}</article><aside><a className="database-button" href="https://findspreadsheet.com/">{t.database}<ExternalLink/></a></aside></div></>:<div className="article-grid"><article className="article-body">{sections.map(([h,p],i)=><section key={h}><span>0{i+1}</span><div><h2>{h}</h2><p>{p}</p></div></section>)}</article><aside><div className="aside-card"><ShieldCheck/><h3>{t.ui.evidenceStandard}</h3><p>{t.ui.evidenceText}</p></div><a className="database-button" href="https://findspreadsheet.com/">{t.database}<ExternalLink/></a></aside></div>}<Callout t={t}/></main>
}
