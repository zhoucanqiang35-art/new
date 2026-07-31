import { notFound } from "next/navigation";
import { buyerGuides, getBuyerGuide } from "./guide-data";
import { localePath, PageFrame } from "./site-shell";

export function GuidePage({ slug, locale = "en" }: { slug: string; locale?: string }) {
  const guide = getBuyerGuide(slug);
  if (!guide) notFound();
  const currentPath = `/guides/${slug}`;

  return (
    <PageFrame locale={locale} currentPath={currentPath}>
      <article className="long-article practical-guide">
        <header className="article-hero guide-hero">
          <a className="article-back" href={localePath(locale, "/guides")}>← Buyer Guides</a>
          <p className="kicker">{guide.stage}</p>
          <h1>{guide.title}</h1>
          <p className="article-dek">{guide.summary}</p>
          <div className="article-byline">
            <span><b>Outcome</b>{guide.outcome}</span>
            <span><b>Use time</b>{guide.readTime}</span>
            <span><b>Sources checked</b>{guide.verified}</span>
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-sources">
            <b>Official sources</b>
            {guide.sources.map((source) => (
              <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label} ↗</a>
            ))}
            <p>Account status, fees, routes and policies can change. Recheck the live order or warehouse page before paying or missing a deadline.</p>
          </aside>

          <div className="article-body guide-body">
            <section className="guide-fact-boundary">
              <h2>What the official material supports</h2>
              <ul>{guide.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
            </section>

            {guide.steps.map((step, index) => (
              <section className="guide-step" key={step.heading}>
                <small>STEP {String(index + 1).padStart(2, "0")}</small>
                <h2>{step.heading}</h2>
                <h3>Action</h3>
                <p>{step.action}</p>
                <h3>Why it matters</h3>
                <p>{step.why}</p>
                <ul>{step.checks.map((check) => <li key={check}>{check}</li>)}</ul>
              </section>
            ))}

            <div className="article-disclaimer">
              <b>Fact boundary</b>
              <p>This checklist does not claim daily stock checking, universal QC verification, authenticity, customs clearance, a fixed delivery time or a guaranteed refund. Those claims are not established by the cited official material.</p>
            </div>
          </div>
        </div>

        <section className="related-reading">
          <p className="kicker">Next decision</p>
          <h2>Continue through the buying journey</h2>
          <div>
            {buyerGuides.filter((item) => item.slug !== slug).slice(0, 3).map((item) => (
              <a href={localePath(locale, `/guides/${item.slug}`)} key={item.slug}>
                <b>{item.title}</b><span>{item.stage} →</span>
              </a>
            ))}
          </div>
        </section>
      </article>
    </PageFrame>
  );
}
