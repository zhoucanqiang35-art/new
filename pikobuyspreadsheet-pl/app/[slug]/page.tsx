import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide, guides, primaryLinks } from "../content";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | PikoBuy Spreadsheet Europe`,
    description: guide.description,
    robots: { index: false, follow: false },
    openGraph: { title: guide.title, description: guide.description, type: "article", images: [] },
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
    dateModified: "2026-08-21",
    author: { "@type": "Organization", name: "PikoBuy Spreadsheet Europe" },
    publisher: { "@type": "Organization", name: "PikoBuy Spreadsheet Europe" },
  };

  return (
    <main className="article-page">
      <div className="preview-bar">Independent public review build · formal domain and Google indexing are not active</div>
      <SiteHeader />

      <article>
        <header className="article-hero shell">
          <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a href="/#guides">Guides</a><span>/</span><b>{guide.eyebrow}</b></div>
          <p className="eyebrow"><span /> {guide.eyebrow}</p>
          <h1>{guide.title}</h1>
          <p className="article-deck">{guide.description}</p>
          <div className="article-meta"><span>{guide.readTime}</span><span>{guide.updated}</span><span>Independent guide</span></div>
        </header>

        <div className="article-layout shell">
          <aside>
            <b>On this page</b>
            {guide.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}><span>0{index + 1}</span>{section.heading}</a>)}
            <a href="#sources"><span>→</span>Sources</a>
          </aside>
          <div className="article-body">
            <div className="article-intro">{guide.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            {guide.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <p className="section-index">0{index + 1}</p>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
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
    </main>
  );
}
