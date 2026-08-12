import type { CSSProperties } from "react";
import { ContentLayout, PageSearchParams } from "../content-layout";
import { normalizeLanguage } from "../i18n";
import { articleRecords, formatEditorialDate } from "../page-registry";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Latest PikoBuy Spreadsheet Research Updates",
  description: "See dated PikoBuy Spreadsheet research releases, source-check dates and the exact buyer decision covered by each independent English article.",
  path: "/updates",
});

export default async function UpdatesPage({ searchParams }: PageSearchParams) {
  const language = normalizeLanguage((await searchParams).lang);
  const suffix = language === "en" ? "" : `?lang=${language}`;
  const newestFirst = [...articleRecords].reverse();

  return <ContentLayout language={language} pathname="/updates" kicker="LATEST UPDATES / PUBLICATION LOG" title="What changed, when it changed and why it helps." intro="This dated log records each long-form release and its last primary-source review. Current prices, routes, terms and account features still require a live check." tone="blue">
    <section className="content-section article-index article-library">
      <div className="article-card-list">{newestFirst.map((article) => <article className="featured-article-card" style={{ "--article-color": article.color } as CSSProperties} key={article.path}><div><span>{formatEditorialDate(article.published)} · {article.tag}</span><small>Source review · {formatEditorialDate(article.sourceReviewed)}</small></div><h2>{article.headline}</h2><p>{article.summary}</p><footer><span>{article.topic} · English</span><a href={`${article.path}${suffix}`}>Read update ↗</a></footer></article>)}</div>
      <aside className="editorial-rules"><span>UPDATE STANDARD</span><ol><li>One primary long-tail intent per article.</li><li>Official PikoBuy pages for platform facts.</li><li>Visible publication and source-review dates.</li><li>No invented tests, reviews, prices or outcomes.</li><li>Material corrections update metadata and sitemap together.</li></ol><a className="inline-full-link" href={`/editorial-policy${suffix}`}>Read editorial policy ↗</a></aside>
    </section>
  </ContentLayout>;
}
