import { notFound } from "next/navigation";
import { getSeoArticle, seoArticles } from "./seo-content";
import { localePath, PageFrame } from "./site-shell";
import { localizedUrl } from "./seo";
import { articleStructuredData, breadcrumbStructuredData, StructuredData } from "./structured-data";

export function ArticlePage({ slug, locale = "en" }: { slug: string; locale?: string }) {
  const article = getSeoArticle(slug);
  if (!article) notFound();
  const currentPath = `/seo-articles/${slug}`;

  return (
    <PageFrame locale={locale} currentPath={currentPath}>
      <StructuredData data={[
        breadcrumbStructuredData([
          { name: "LoloBuy Sheet", url: localizedUrl(locale, "/") },
          { name: "SEO Articles", url: localizedUrl(locale, "/seo-articles") },
          { name: article.title, url: localizedUrl(locale, currentPath) },
        ]),
        articleStructuredData({ headline: article.title, description: article.description, url: localizedUrl(locale, currentPath), dateModified: article.verified }),
      ]} />
      <article className="long-article">
        <header className="article-hero">
          <a className="article-back" href={localePath(locale, "/seo-articles")}>← SEO Articles</a>
          <p className="kicker">Independent LoloBuy research</p>
          <h1>{article.title}</h1>
          <p className="article-dek">{article.dek}</p>
          <div className="article-byline">
            <span><b>Verified</b>{article.verified}</span>
            <span><b>Reading time</b>{article.readTime}</span>
            <span><b>Standard</b>Official facts separated from editorial advice</span>
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-sources">
            <b>Primary sources</b>
            {article.sources.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label} ↗</a>)}
            <p>Platform fees, routes, payment methods and policies can change. Recheck the live LoloBuy account page before paying.</p>
          </aside>
          <div className="article-body">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <div className="article-disclaimer"><b>Independent resource</b><p>LoloBuy Sheet is not affiliated with LoloBuy. This article explains published information and practical review methods; it is not a guarantee of product quality, customs clearance, delivery time or refund outcome.</p></div>
          </div>
        </div>

        <section className="related-reading">
          <p className="kicker">Continue researching</p>
          <h2>Related LoloBuy guides</h2>
          <div>{seoArticles.filter((item) => item.slug !== slug).slice(0, 3).map((item) => <a href={localePath(locale, `/seo-articles/${item.slug}`)} key={item.slug}><b>{item.title}</b><span>Read →</span></a>)}</div>
        </section>
      </article>
    </PageFrame>
  );
}
