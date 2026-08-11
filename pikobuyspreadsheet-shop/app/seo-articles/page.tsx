import type { CSSProperties } from "react";
import { ContentLayout, PageSearchParams } from "../content-layout";
import { normalizeLanguage } from "../i18n";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "PikoBuy Spreadsheet Guides & SEO Research Articles (2026)",
  description: "Read human-edited PikoBuy spreadsheet articles on link checking, warehouse QC, returns, shipping cost, fees, routes and buyer risk.",
  path: "/seo-articles",
});

const articles = [
  ["01 · BEGINNER GUIDE", "How to Use a PikoBuy Spreadsheet Without Skipping the Important Checks", "A practical walkthrough of seller-link verification, product variants, warehouse QC, the 120-hour return window, packaging, shipping routes and the current fee language.", "/seo-articles/pikobuy-spreadsheet-guide-2026", "Buyer workflow", "#f8ff70"],
  ["02 · SHIPPING & FEES", "PikoBuy Shipping Cost and Fees: What to Calculate Before You Build a Haul", "A fact-checked explanation of estimator inputs, packaging choices, live route selection, the published 8%-of-freight fee wording and cross-border risk.", "/seo-articles/pikobuy-shipping-cost-fees-2026", "Cost planning", "#79e8ff"],
  ["03 · QC & RETURNS", "PikoBuy QC Photos and Returns: The Warehouse Decision Guide", "A category-specific method for requesting useful photographs, protecting return condition and understanding seller acceptance and the published fee formula.", "/seo-articles/pikobuy-qc-returns-guide-2026", "Warehouse checks", "#ff9fc3"],
];

export default async function SeoArticlesPage({ searchParams }: PageSearchParams) {
  const language = normalizeLanguage((await searchParams).lang);
  const suffix = language === "en" ? "" : `?lang=${language}`;
  return <ContentLayout language={language} pathname="/seo-articles" kicker="SEO ARTICLES / HUMAN-EDITED RESEARCH" title="Long-form answers built from the buyer’s real decision." intro="Each article begins with a narrow question, checks current primary sources, separates facts from judgment and records when the policy information was reviewed." tone="pink">
    <section className="content-section article-index article-library">
      <div className="article-card-list">{articles.map(([tag, title, copy, href, length, color]) => <article className="featured-article-card" style={{ "--article-color": color } as CSSProperties} key={href}><div><span>{tag}</span><small>{length} · English</small></div><h2>{title}</h2><p>{copy}</p><footer><span>Official sources rechecked · 06 Aug 2026</span><a href={`${href}${suffix}`}>Read article ↗</a></footer></article>)}</div>
      <aside className="editorial-rules"><span>EDITORIAL CHECKLIST</span><ol><li>Start with a real search intent.</li><li>Use primary PikoBuy sources for policy claims.</li><li>Do not invent customer experiences, ratings or traffic.</li><li>Label estimates, interpretation and changing information.</li><li>Keep every visible article arrow connected to a complete page.</li><li>Recheck facts before each update.</li></ol></aside>
    </section>

    <section className="content-section prose-body wide-prose">
      <h2>Why these articles are narrower than a generic “PikoBuy review”</h2><p>A broad review often mixes platform facts, seller quality, shipping outcomes and individual expectations into one verdict. That is not useful enough for a buyer. PikoBuy’s own documents describe separate stages: choose a seller listing, submit and pay for the item, inspect it at the warehouse, choose a route, pay international freight and track the parcel. Each stage has different evidence and a different party responsible for the outcome.</p><p>Our article cluster follows those decisions. The beginner guide explains the whole path. The shipping article focuses on landed-cost inputs and logistics boundaries. The QC and returns article focuses on what can still be changed while the product remains at the warehouse. This structure creates useful internal links without repeating the same paragraphs under three keywords.</p>
      <h2>What will never be presented as a fact</h2><p>We will not claim a country share, order-success rate, delivery speed, customer score or “tested” product count without a verifiable dataset. Current route prices, stock and promotions belong to live tools and listings. Community commentary may be useful for finding questions, but an official policy claim must link back to the relevant PikoBuy page.</p>
    </section>
  </ContentLayout>;
}
