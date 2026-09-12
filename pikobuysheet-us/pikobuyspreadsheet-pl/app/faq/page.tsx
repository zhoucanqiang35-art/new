import type { Metadata } from "next";
import { faqItems } from "../faq-content";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { indexableRobots, pageAlternates } from "../seo";

export const metadata: Metadata = {
  title: "PikoBuy Spreadsheet FAQ | Six Practical Answers",
  description: "Six independent PikoBuy spreadsheet FAQ pages covering product links, QC photos, European shipping, returns and site independence.",
  robots: indexableRobots,
  alternates: pageAlternates("/faq"),
};

export default function FaqPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.shortAnswer } })) };
  return <main className="listing-page">
    <div className="preview-bar">Independent research hub · 2026</div><SiteHeader />
    <section className="listing-hero shell"><p className="eyebrow"><span /> Frequently asked questions</p><h1>Six useful answers before you order.</h1><p>Each question opens a complete independent page with a clear checklist and a relevant next step on FindSpreadsheet.</p></section>
    <section className="section shell"><div className="faq-card-grid">{faqItems.map((item, index) => <a className="faq-card" href={`/faq/${item.slug}`} key={item.slug}><span>0{index + 1}</span><h2>{item.question}</h2><p>{item.shortAnswer}</p><strong>Read the complete answer ↗</strong></a>)}</div></section>
    <SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
