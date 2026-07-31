import { notFound } from "next/navigation";
import { localePath, PageFrame } from "./site-shell";
import { getOfficialUpdate, officialUpdates } from "./update-data";

export function UpdatePage({ slug, locale = "en" }: { slug: string; locale?: string }) {
  const update = getOfficialUpdate(slug);
  if (!update) notFound();
  const related = officialUpdates.filter((item) => item.slug !== slug).slice(0, 3);
  const currentPath = `/updates/${slug}`;

  return (
    <PageFrame locale={locale} currentPath={currentPath}>
      <article className="long-article update-detail">
        <header className="article-hero">
          <a className="article-back" href={localePath(locale, "/updates")}>← All LoloBuy updates</a>
          <p className="kicker">{update.category} · {update.date}</p>
          <h1>{update.title}</h1>
          <p className="article-dek">{update.summary}</p>
          <div className="verified-strip">
            <span>✓</span>
            <b>Official sources reviewed July 30, 2026</b>
            <small>Time-sensitive availability, fees and policies must be checked again in the live account.</small>
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-sources">
            <b>Primary sources</b>
            {update.sources.map((source) => (
              <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label} ↗</a>
            ))}
            <p>
              The competing lolobuysheet.com page was reviewed for search intent and page structure only.
              Its promotional claims are not treated as LoloBuy policy.
            </p>
          </aside>
          <div className="article-body">
            <div className="update-takeaway">
              <b>What to do</b>
              <p>{update.takeaway}</p>
            </div>
            {update.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <div className="article-disclaimer">
              <b>Fact boundary</b>
              <p>
                This article explains public information checked on the date above. It does not guarantee
                stock, seller performance, app availability, payment acceptance, shipping cost, delivery
                time, customs clearance or after-sales approval.
              </p>
            </div>
          </div>
        </div>

        <section className="related-reading">
          <p className="kicker">Continue checking</p>
          <h2>More dated LoloBuy updates</h2>
          <div>
            {related.map((item) => (
              <a href={localePath(locale, `/updates/${item.slug}`)} key={item.slug}>
                <b>{item.title}</b><span>{item.date} →</span>
              </a>
            ))}
          </div>
        </section>
      </article>
    </PageFrame>
  );
}
