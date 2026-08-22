import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { faqItems, getFaq } from "../../faq-content";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return faqItems.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { slug } = await params; const faq = getFaq(slug); return faq ? { title: `${faq.question} | PikoBuy Spreadsheet FAQ`, description: faq.description, robots: { index: false, follow: false }, openGraph: { title: faq.question, description: faq.description, images: [] }, twitter: { card: "summary", title: faq.question, description: faq.description, images: [] } } : {}; }

export default async function FaqDetailPage({ params }: PageProps) {
  const { slug } = await params; const faq = getFaq(slug); if (!faq) notFound();
  const related = faqItems.filter((item) => item.slug !== faq.slug).slice(0, 3);
  const schema = { "@context": "https://schema.org", "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.shortAnswer } };
  return <main className="article-page faq-detail-page">
    <div className="preview-bar">Independent public review build · formal domain and Google indexing are not active</div><SiteHeader />
    <article><header className="article-hero shell"><div className="breadcrumbs"><a href="/">Home</a><span>/</span><a href="/faq">FAQ</a><span>/</span><b>Answer</b></div><p className="eyebrow"><span /> Frequently asked question</p><h1>{faq.question}</h1><p className="article-deck">{faq.shortAnswer}</p></header>
      <div className="article-layout shell"><aside><b>On this page</b>{faq.sections.map((section, index) => <a href={`#faq-section-${index + 1}`} key={section.heading}><span>0{index + 1}</span>{section.heading}</a>)}<a href="#next-step"><span>→</span>Next step</a></aside><div className="article-body"><div className="article-intro"><p>{faq.description}</p></div>{faq.sections.map((section, index) => <section id={`faq-section-${index + 1}`} key={section.heading}><p className="section-index">0{index + 1}</p><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}<section className="faq-next-step" id="next-step"><p className="section-index">Main-site next step</p><h2>Continue with the matching FindSpreadsheet page.</h2><p>The button below leads to the relevant independent page on the owner’s main product database.</p><a className="button" href={faq.mainLink}>{faq.mainLinkLabel} <span>↗</span></a></section></div></div>
    </article>
    <section className="related-guides"><div className="shell"><p className="eyebrow"><span /> More common questions</p><h2>Continue with another answer</h2><div className="related-grid">{related.map((item) => <a href={`/faq/${item.slug}`} key={item.slug}><p>FAQ</p><h3>{item.question}</h3><span>Read answer ↗</span></a>)}</div></div></section>
    <SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
