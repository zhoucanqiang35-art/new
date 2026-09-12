import { localizedPath } from "@/content/navigation";
import type { Metadata } from "next";

export const categoryKeys = ["shoes", "clothing", "accessories"] as const;
export type CategoryKey = typeof categoryKeys[number];

const data: Record<CategoryKey, { title:string; description:string; search:string; checks:string[]; guides:{title:string;href:string;text:string}[] }> = {
  shoes:{title:"LoloBuy Shoes Spreadsheet Guide",description:"Compare shoe listings with a repeatable size, construction and warehouse-photo checklist before opening current results.",search:"shoes",checks:["Compare the seller's centimetre size chart with a shoe that already fits.","Request or review insole measurements when the available photos do not resolve sizing.","Inspect both shoes, outsole shape, stitching, heel alignment and visible glue marks.","Recheck the live listing, selected option, domestic freight and availability before paying."],guides:[{title:"QC photo checklist",href:"/articles/lolobuy-qc-photo-checklist",text:"Use a consistent inspection order for visible details."},{title:"Shipping guide",href:"/articles/lolobuy-shipping-guide",text:"Plan for boxes, packed dimensions and chargeable weight."}]},
  clothing:{title:"LoloBuy Clothing Spreadsheet Guide",description:"Use garment measurements, fabric information and warehouse evidence to shortlist hoodies, T-shirts, jackets and bottoms.",search:"clothing",checks:["Compare chest, length, shoulder and sleeve measurements in centimetres.","Do not rely on S/M/L labels across different sellers.","Check print placement, seams, closures, colour and visible fabric texture in QC photos.","Allow for outerwear and protective packing when estimating parcel volume."],guides:[{title:"How LoloBuy works",href:"/articles/how-lolobuy-works",text:"Understand ordering, warehouse intake and parcel submission."},{title:"Fees and budget guide",href:"/articles/lolobuy-fees-budget-guide",text:"Separate item cost, domestic freight and international shipping."}]},
  accessories:{title:"LoloBuy Accessories Spreadsheet Guide",description:"Review bags, wallets, jewellery and other accessories with material, dimension, hardware and shipping-risk checks.",search:"accessories",checks:["Confirm exact dimensions instead of judging scale from a single image.","Inspect zips, clasps, stitching, edges, engraving and included pieces.","Check route restrictions for batteries, liquids, magnets or sensitive materials when relevant.","Balance retail packaging, protection and parcel volume before submitting a shipment."],guides:[{title:"QC photo checklist",href:"/articles/lolobuy-qc-photo-checklist",text:"Identify what warehouse photos can and cannot prove."},{title:"Shipping guide",href:"/articles/lolobuy-shipping-guide",text:"Compare packed weight, dimensions and route restrictions."}]}
};

export function categoryMetadata(category:CategoryKey,lang="en"):Metadata {
  const d=data[category]; const path=localizedPath(lang,`/${category}`); const url=`https://lolobuyspreadsheet.pl${path}`;
  return {title:`${d.title} 2026`,description:d.description,alternates:{canonical:url},openGraph:{title:`${d.title} 2026`,description:d.description,url,type:"article"}};
}

export default function CategoryPage({category,lang="en"}:{category:CategoryKey;lang?:string}) {
  const d=data[category];
  const home=localizedPath(lang,"/");
  const categoryUrl=`https://lolobuyspreadsheet.pl${localizedPath(lang,`/${category}`)}`;
  const schema={"@context":"https://schema.org","@type":"ItemList",name:d.title,itemListElement:d.checks.map((name,index)=>({"@type":"ListItem",position:index+1,name}))};
  const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`https://lolobuyspreadsheet.pl${home}`},{"@type":"ListItem",position:2,name:d.title,item:categoryUrl}]};
  return <main className="subpage">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}} />
    <header className="articleTopbar"><a href={home}><img src="/lolobuy-logo.png" alt="LoloBuy"/></a><nav><a href={home}>Home</a><a href={localizedPath(lang,"/products")}>Products</a><a href={localizedPath(lang,"/guides")}>Guides</a><a href={localizedPath(lang,"/articles")}>SEO articles</a></nav></header>
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={home}>Home</a><span>›</span><span>{d.title}</span></nav>
    <section className="subHero"><p className="kicker">CATEGORY BUYER GUIDE</p><h1>{d.title}</h1><p>{d.description}</p></section>
    <section className="subGrid">{d.checks.map((text,index)=><article key={text}><span>{String(index+1).padStart(2,"0")}</span><h2>{["Verify sizing","Inspect visible details","Check the live listing","Plan the parcel"][index]}</h2><p>{text}</p></article>)}</section>
    <section className="subGrid">{d.guides.map(g=><a href={localizedPath(lang,g.href)} key={g.href}><h2>{g.title}</h2><p>{g.text}</p><b>Read guide →</b></a>)}</section>
    <section className="subCta"><h2>Browse current {category} results</h2><a href={`https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(d.search)}`}>Open FindSpreadsheet ↗</a></section>
  </main>;
}
