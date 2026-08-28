import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getGuide, guides, primaryLinks } from "../content";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { indexableRobots, pageAlternates, SITE_URL } from "../seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.seoTitle ?? guide.title} | PikoBuy Spreadsheet Europe`,
    description: guide.description,
    robots: indexableRobots,
    alternates: pageAlternates(`/${guide.slug}`),
    openGraph: { title: guide.title, description: guide.description, type: "article", url: `${SITE_URL}/${guide.slug}`, images: [] },
    twitter: { card: "summary", title: guide.title, description: guide.description, images: [] },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = guides.filter((item) => item.slug !== guide.slug).slice(0, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: `${SITE_URL}/${guide.slug}`,
    datePublished: guide.publishedDate ?? "2026-08-21",
    dateModified: guide.modifiedDate ?? "2026-08-22",
    author: { "@type": "Organization", name: "PikoBuy Spreadsheet Europe" },
    publisher: { "@type": "Organization", name: "PikoBuy Spreadsheet Europe" },
    ...(guide.visual ? { image: `${SITE_URL}${guide.visual.src}` } : {}),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "SEO articles", item: `${SITE_URL}/seo-articles` },
      { "@type": "ListItem", position: 3, name: guide.title, item: `${SITE_URL}/${guide.slug}` },
    ],
  };
  const faqSchema = guide.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  } : null;

  return (
    <main className="article-page">
      <div className="preview-bar">Independent research hub · 2026</div>
      <SiteHeader />

      <article>
        <header className="article-hero shell">
          <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a href="/#guides">Guides</a><span>/</span><b>{guide.eyebrow}</b></div>
          <p className="eyebrow"><span /> {guide.eyebrow}</p>
          <h1>{guide.title}</h1>
          <p className="article-deck">{guide.description}</p>
          <div className="article-meta"><span>{guide.readTime}</span><span>{guide.updated}</span><span>Independent guide</span></div>
          {guide.editorialNote && <p className="editorial-note"><b>Editorial note:</b> {guide.editorialNote}</p>}
        </header>

        <div className="article-layout shell">
          <aside>
            <b>On this page</b>
            {guide.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}><span>0{index + 1}</span>{section.heading}</a>)}
            {guide.internalLinks && <a href="#related-reading"><span>+</span>Related checks</a>}
            {guide.faq && <a href="#article-faq"><span>?</span>Practical FAQ</a>}
            <a href="#sources"><span>→</span>Sources</a>
          </aside>
          <div className="article-body">
            <div className="article-intro">{guide.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            {guide.visual && <figure className="article-visual"><Image src={guide.visual.src} alt={guide.visual.alt} width={1200} height={675} unoptimized /><figcaption>{guide.visual.caption}</figcaption></figure>}
            {guide.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <p className="section-index">0{index + 1}</p>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            {guide.internalLinks && <section className="article-links" id="related-reading">
              <p className="section-index">Related reading</p><h2>Continue the verification workflow</h2>
              {guide.internalLinks.map((link) => <a href={link.href} key={link.href}><div><b>{link.label}</b><p>{link.note}</p></div><span>Open guide ↗</span></a>)}
            </section>}
            {guide.faq && <section className="article-faq" id="article-faq">
              <p className="section-index">Practical FAQ</p><h2>{guide.faqHeading ?? "Questions buyers ask before ordering"}</h2>
              {guide.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
            </section>}
            <section className="article-sources" id="sources">
              <p className="section-index">Source record</p><h2>What this guide relies on</h2>
              <p>Platform functions and policies can change. Open the current source before relying on a route, deadline, fee or account decision.</p>
              {guide.sources.map((source) => <a href={source.href} key={source.href}>{source.label}<span>↗</span></a>)}
            </section>
          </div>
        </div>
      </article>

      <section className="related-guides">
        <div className="shell"><p className="eyebrow"><span /> Keep researching</p><h2>Related PikoBuy guides</h2><div className="related-grid">{related.map((item) => <a href={`/${item.slug}`} key={item.slug}><p>{item.eyebrow}</p><h3>{item.title}</h3><span>Read guide ↗</span></a>)}</div></div>
      </section>
      <section className="cta"><div className="shell"><div><p>Ready to research a product?</p><h2>Open the live database and keep this checklist nearby.</h2></div><a className="button button-invert" href={primaryLinks.products}>Browse all products <span>↗</span></a></div></section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </main>
  );
}
