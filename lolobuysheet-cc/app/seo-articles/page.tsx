import Link from "next/link";
import { Header, Footer, MobileModule } from "../components";
import { guides } from "../data";

export const metadata = { title: "LoloBuy SEO Articles | Independent Research Library", description: "Read evidence-led LoloBuy articles on product discovery, QC photos, shipping, warehouse consolidation, tracking and safety." };

const series=[
  ["Beginner intent","What is a LoloBuy spreadsheet, how product-link buying works and which records to save."],
  ["Inspection intent","QC photo checklists by category, measurement requests and the limits of warehouse images."],
  ["Cost intent","Billable weight, parcel dimensions, consolidation and why item price is not total cost."],
  ["Country intent","Shipping research for the US, Canada, Germany, the Netherlands, France and the UK."],
  ["Trust intent","Official claims, app identity, individual reviews and how to label weak evidence."],
  ["After-purchase intent","Tracking handoffs, quiet scans, support records and protecting personal shipment data."],
  ["Alternative-order intent","Manual and transfer order preparation, warehouse matching and responsibility checks."],
];

const readingPath=[
  ["Start with the workflow","Understand the product, order, warehouse and parcel stages before comparing individual listings."],
  ["Inspect before shipping","Use category-specific QC checks and treat warehouse images as visible evidence, not authentication."],
  ["Plan the whole parcel","Compare consolidation, packed dimensions, billable weight, routes and customs exposure before dispatch."],
  ["Track and evaluate","Keep order records, read carrier handoffs carefully and separate platform facts from individual reports."],
];

export default function SeoArticlesPage(){return <><Header/><main className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>SEO article centre</p><h1>Written for decisions.<br/><em>Structured for search.</em></h1><p>Every article answers one real buyer task, identifies what was verified on the current official application and avoids unsupported prices, delivery promises or popularity claims.</p></div><MobileModule title="All research articles" defaultOpen><div className="guide-grid seo-grid">{guides.map((g,i)=><Link className={i===0?"guide-card featured":"guide-card"} href={`/seo-articles/${g.slug}`} key={g.slug}><small>{g.kicker} · {g.read}</small><h2>{g.title}</h2><p>{g.dek}</p><span>Read full article →</span></Link>)}</div></MobileModule><MobileModule title="Guide reading path"><section className="content-section"><div className="section-head"><div><p className="eyebrow"><span></span>Evidence-led knowledge base</p><h2>Understand the journey<br/><em>before funding it.</em></h2></div><p className="section-intro dark">Each guide separates official platform claims, practical checks and individual community experiences.</p></div><div className="series-grid">{readingPath.map(([title,text],i)=><article key={title}><small>{String(i+1).padStart(2,"0")}</small><h3>{title}</h3><p>{text}</p></article>)}</div></section></MobileModule><MobileModule title="Publishing architecture"><section className="content-section"><div className="section-head"><div><p className="eyebrow"><span></span>Publishing architecture</p><h2>Seven search intents.<br/><em>No repeated filler.</em></h2></div></div><div className="series-grid">{series.map(([title,text],i)=><article key={title}><small>{String(i+1).padStart(2,"0")}</small><h3>{title}</h3><p>{text}</p></article>)}</div></section></MobileModule><div className="notice"><b>Editorial rule</b><p>Every current article is between 1,200 and 1,800 words, is written around a real buyer decision and separates verified platform functions from limitations and changing live terms.</p></div></main><Footer/></>}
