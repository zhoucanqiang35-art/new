import Link from "next/link";
import { Header, Footer, MobileModule } from "../components";
import { markets } from "../data";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({ title: "Where Is LoloBuy Used? Public Market Evidence", description: "Public country signals for LoloBuy in the US, Canada, Germany, Netherlands, France and UK, with evidence limits clearly labelled.", path: "/markets" });

export default function MarketsPage(){return <><Header/><main className="inner-page shell"><div className="page-hero"><p className="eyebrow"><span></span>Country research</p><h1>Market signals,<br/><em>not invented market share.</em></h1><p>LoloBuy advertises global shipping but does not publish country-level user totals. These priorities use traceable public destination evidence and search opportunity.</p></div><MobileModule title="All market records" defaultOpen><div className="market-cards">{markets.map((m)=><Link href={`/markets/${m.slug}`} key={m.slug}><div><span className="country-code">{m.flag}</span><small>{m.tier}</small></div><h2>{m.name}</h2><p>{m.summary}</p><ul>{m.evidence.map((e)=><li key={e}>{e}</li>)}</ul><b>{m.confidence} →</b></Link>)}</div></MobileModule><div className="notice"><b>Important limitation</b><p>A public post proves that a particular destination was discussed or used. It does not reveal total customers, conversion rate or the reliability of every route. Those figures require LoloBuy’s private analytics.</p></div></main><Footer/></>}
