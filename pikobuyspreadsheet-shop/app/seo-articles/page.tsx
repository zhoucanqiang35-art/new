import type { CSSProperties } from "react";
import { ContentLayout, PageSearchParams } from "../content-layout";
import { normalizeLanguage } from "../i18n";
import { articleRecords, formatEditorialDate } from "../page-registry";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "PikoBuy Spreadsheet Research Articles & Guides 2026",
  description: "Read human-edited PikoBuy articles on link checks, warehouse QC, returns, shipping cost, consolidation, packaging, routes and buyer risk.",
  path: "/seo-articles",
});

export default async function SeoArticlesPage({ searchParams }: PageSearchParams) {
  const language = normalizeLanguage((await searchParams).lang);
  const suffix = language === "en" ? "" : `?lang=${language}`;
  return <ContentLayout language={language} pathname="/seo-articles" kicker="SEO ARTICLES / HUMAN-EDITED RESEARCH" title="Long-form answers built from the buyer’s real decision." intro="Each article begins with a narrow question, checks current primary sources, separates facts from judgment and records when the policy information was reviewed." tone="pink">
    <section className="content-section article-index article-library">
      <div className="article-card-list">{articleRecords.map((article, index) => <article className="featured-article-card" style={{ "--article-color": article.color } as CSSProperties} key={article.path}><div><span>{String(index + 1).padStart(2, "0")} · {article.tag}</span><small>{article.topic} · English</small></div><h2>{article.headline}</h2><p>{article.summary}</p><footer><span>Official sources rechecked · {formatEditorialDate(article.sourceReviewed)}</span><a href={`${article.path}${suffix}`}>Read article ↗</a></footer></article>)}</div>
      <aside className="editorial-rules"><span>EDITORIAL CHECKLIST</span><ol><li>Start with a real search intent.</li><li>Use primary PikoBuy sources for policy claims.</li><li>Do not invent customer experiences, ratings or traffic.</li><li>Label estimates, interpretation and changing information.</li><li>Keep every visible article arrow connected to a complete page.</li><li>Recheck facts before each update.</li></ol></aside>
    </section>

    <section className="content-section prose-body wide-prose">
      <h2>Why these articles are narrower than a generic “PikoBuy review”</h2><p>A broad review often mixes platform facts, seller quality, shipping outcomes and individual expectations into one verdict. That is not useful enough for a buyer. PikoBuy’s own documents describe separate stages: choose a seller listing, submit and pay for the item, inspect it at the warehouse, choose a route, pay international freight and track the parcel. Each stage has different evidence and a different party responsible for the outcome.</p><p>Our article cluster follows those decisions. The beginner guide explains the whole path. The shipping article focuses on landed-cost inputs and logistics boundaries. The QC and returns article focuses on what can still be changed while the product remains at the warehouse. The consolidation article starts after individual QC and asks how compatible items should become a parcel. This structure creates useful internal links without assigning two pages the same primary keyword.</p>
      <p><a className="inline-full-link" href={`/updates${suffix}`}>Open the dated publication log ↗</a></p>
      <h2>What will never be presented as a fact</h2><p>We will not claim a country share, order-success rate, delivery speed, customer score or “tested” product count without a verifiable dataset. Current route prices, stock and promotions belong to live tools and listings. Community commentary may be useful for finding questions, but an official policy claim must link back to the relevant PikoBuy page.</p>
    </section>
  </ContentLayout>;
}
