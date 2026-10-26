import ResearchShell from "../research-shell";
import type { Metadata } from "next";
import { factualFaq } from "../research-data";
export const metadata: Metadata = { title: "PikoBuy FAQ: QC, Shipping, Returns & Research", description: "Factual PikoBuy FAQ covering source links, QC photos, shipping estimates, tracking and return-check timing.", alternates: { canonical: "/faq" } };
export default function FaqPage(){ const schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:factualFaq.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))}; return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><ResearchShell page="faq"/></>; }
