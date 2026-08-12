import { articleRecords, formatEditorialDate, getPageRecord } from "./page-registry";

export const EDITORIAL_AUTHOR_NAME = "PikoBuy Spreadsheet Editorial";
export const EDITORIAL_AUTHOR_PATH = "/editorial-policy";

export function ArticleMeta({ pathname, label }: { pathname: string; label: string }) {
  const article = getPageRecord(pathname);
  if (article.kind !== "article" || !article.modified) throw new Error(`Missing article dates for ${pathname}`);

  return <div className="article-meta">
    <span>By <a href={EDITORIAL_AUTHOR_PATH}>{EDITORIAL_AUTHOR_NAME}</a></span>
    <span>Updated {formatEditorialDate(article.modified)}</span>
    <span>{label}</span>
  </div>;
}

export function ArticleNavigation({ pathname }: { pathname: string }) {
  const index = articleRecords.findIndex((article) => article.path === pathname);
  if (index < 0) throw new Error(`Missing article navigation entry for ${pathname}`);
  const previous = articleRecords[index - 1];
  const next = articleRecords[index + 1];

  return <nav className="article-navigation" aria-label="Article navigation">
    {previous ? <a href={previous.path}><span>← Previous article</span><strong>{previous.headline}</strong></a> : <span aria-hidden="true" />}
    {next ? <a href={next.path}><span>Next article →</span><strong>{next.headline}</strong></a> : <a href="/seo-articles"><span>Article archive →</span><strong>Browse all PikoBuy research articles</strong></a>}
  </nav>;
}
