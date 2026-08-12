import { ContentLayout, PageSearchParams } from "../content-layout";
import { normalizeLanguage } from "../i18n";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Editorial Policy: How PikoBuy Spreadsheet Research Is Produced",
  description: "Meet PikoBuy Spreadsheet Editorial and read the sourcing, fact-checking, correction, independence and update rules behind every guide.",
  path: "/editorial-policy",
});

export default async function EditorialPolicyPage({ searchParams }: PageSearchParams) {
  const language = normalizeLanguage((await searchParams).lang);
  return <ContentLayout language={language} pathname="/editorial-policy" kicker="EDITORIAL POLICY / ACCOUNTABLE RESEARCH" title="How PikoBuy Spreadsheet Editorial checks and updates each guide." intro="This independent editorial page identifies who is responsible for the site, which sources are acceptable and how changing platform information is separated from practical buyer guidance." tone="lime">
    <section className="content-section prose-grid">
      <aside className="sticky-index"><span>ON THIS PAGE</span><a href="#author">Author identity</a><a href="#sources">Source rules</a><a href="#dates">Dates and updates</a><a href="#corrections">Corrections</a><a href="#independence">Independence</a></aside>
      <div className="prose-body">
        <article id="author"><span>01 / AUTHOR IDENTITY</span><h2>PikoBuy Spreadsheet Editorial</h2><p>PikoBuy Spreadsheet Editorial is the named editorial team responsible for the research guides and long-form articles on this site. The team turns public platform documentation, live product records and category-specific inspection questions into practical checklists. It does not claim to be PikoBuy, a marketplace seller, a carrier or a customs authority.</p><p>Every long-form article links back to this page from its visible byline. The same author name and URL are included in the Article structured data so readers and search engines receive one consistent authorship signal.</p></article>

        <article id="sources"><span>02 / SOURCE RULES</span><h2>Primary sources support platform claims.</h2><p>Claims about PikoBuy&apos;s buying flow, warehouse stage, returns, shipping responsibilities, fees or published terms are checked against the relevant official PikoBuy page. Product names, images, item identifiers and reference prices are tied to the matching FindSpreadsheet record and the live destination remains the final place to verify availability.</p><p>Editorial interpretation is labelled through the context of the guide. Warehouse-photo checklists explain how a buyer can use visible evidence; they do not promise that every angle, measurement or specialist test will be supplied automatically. Community comments may identify questions worth researching, but they do not override a current primary policy source.</p></article>

        <article id="dates"><span>03 / DATES AND UPDATES</span><h2>Publication, modification and source-review dates have different jobs.</h2><p>Each article keeps its own publication date and last meaningful editorial update. A separate source-review date records when changeable official information was checked. The sitemap uses a page-level last-modified value from the same central registry that powers the article index and structured data.</p><p>Live prices, exchange rates, stock, routes, promotions and checkout totals can change after an article is published. The site therefore directs readers to the current listing, estimator, policy or checkout rather than presenting a dated value as a permanent guarantee.</p></article>

        <article id="corrections"><span>04 / CORRECTIONS</span><h2>A factual correction should update every public signal.</h2><p>When a material factual error is found, the page copy, source note, modification date, structured data and sitemap entry are updated together. Minor typography or visual-only adjustments do not receive a misleading new article date. A claim that cannot be verified is removed or rewritten as a clearly limited observation.</p></article>

        <article id="independence"><span>05 / INDEPENDENCE</span><h2>The site is an independent research and discovery layer.</h2><p>This site is not the official PikoBuy website and does not speak for PikoBuy. Product-discovery links lead to the matching FindSpreadsheet category or product record. Those links are kept separate from the independent explanations of QC, shipping and return decisions published here.</p><p>The editorial standard is simple: do not invent customer experiences, ratings, order-success claims or product tests; do not hide important uncertainty; and do not let an SEO keyword make a page broader than the evidence can support.</p></article>
      </div>
    </section>
  </ContentLayout>;
}
