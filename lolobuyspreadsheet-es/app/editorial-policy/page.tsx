import type { Metadata } from "next";
import ArticleShell from "../article-shell";

export const metadata: Metadata = {
  title: "Editorial, Independence and Corrections Policy | LoloBuy Research",
  description:
    "How this independent LoloBuy research site separates official facts, dated observations, guidance, corrections and commercial uncertainty.",
};

export default function EditorialPolicyPage() {
  return (
    <ArticleShell
      eyebrow="Editorial standard · Version 1.1"
      title="Independence is a method, not a label in the footer"
      lead="This policy explains how claims enter the site, how changing commercial information is dated, what is excluded without evidence and how substantive corrections are recorded."
      ctaTitle="Inspect the evidence files"
      ctaText="The source ledger shows how this policy is applied to LoloBuy interface facts and FindSpreadsheet observations."
      ctaHref="/sources/"
      ctaLabel="Open the source ledger →"
    >
      <div className="article-meta"><span>Effective 13 Aug 2026</span><span>Independent informational site</span><span>No platform affiliation claimed</span></div>
      <h2>Independence and purpose</h2>
      <p>This site is an independent research and product-discovery guide. It is not operated by or presented as the official website of LoloBuy, Taobao, Weidian, 1688, Tmall or other third-party marketplaces. Brand names are used to identify the subject of research and the destinations readers may choose to visit.</p>
      <p>The site links to FindSpreadsheet product and category pages because that database is the maintained product-discovery destination for this project. That relationship is disclosed rather than hidden. A destination link does not convert a database observation into proof of stock, authenticity, seller performance, final condition or a LoloBuy policy.</p>

      <h2>Four claim classes</h2>
      <table className="evidence-table"><thead><tr><th>Class</th><th>Required evidence</th><th>Publication rule</th></tr></thead><tbody>
        <tr><td>Official platform fact</td><td>A dated statement, route, field or notice visible on the official current application.</td><td>Use narrow wording and state what the evidence does not prove.</td></tr>
        <tr><td>Dated database observation</td><td>A specific product or category page, visible field and review date.</td><td>Keep the source link, original value and freshness warning.</td></tr>
        <tr><td>Independent guidance</td><td>A transparent reasoning method tied to a user decision.</td><td>Label it as guidance rather than a platform guarantee.</td></tr>
        <tr><td>Unverified claim</td><td>No current primary evidence or only an unattributed second-hand statement.</td><td>Exclude it, qualify it as unresolved or investigate before publication.</td></tr>
      </tbody></table>

      <h2>Commercial claims require stricter review</h2>
      <p>Prices, stock, route availability, delivery timing, discounts, warehouse rules, insurance, tax handling, refunds and compensation can change. These statements need a review date and a source connected to the relevant scenario. The site does not turn one user’s transaction, one old screenshot or one interface label into a universal promise.</p>
      <p>When evidence exists only inside a particular account, order or parcel quote, the article tells readers to use the live transaction record. It does not manufacture a public rule from missing information.</p>

      <h2>Corrections policy</h2>
      <p>A material correction changes a factual claim, source interpretation, product destination, price observation, date, calculation or conclusion. When a material correction is made, the affected page is updated and the change is recorded on the public Updates page with the date and reason. Typographical corrections that do not change meaning may be fixed without a separate log entry.</p>
      <p>If a source disappears, the site does not silently cite the homepage as a replacement. The claim is rechecked, narrowed, archived or removed. Historical observations remain clearly dated so they cannot be mistaken for current policy.</p>

      <h2>Images and screenshots</h2>
      <p>Product images used in the carousel must correspond to the linked product page at the review date. Interface screenshots, when added, must identify the source route and capture date, remove personal account information and explain what the image proves. Decorative generated imagery is not used as evidence.</p>

      <h2>Translation policy</h2>
      <p>The current public inspection copy offers browser-assisted translation for layout review. It is not yet the final indexable multilingual architecture. Formal language editions require complete page translation, dedicated language URLs, consistent layout, self-referencing canonicals and corresponding hreflang annotations. A machine-translated view is not labelled as a separately reviewed local-language article.</p>

      <h2>Update cadence</h2>
      <p>Evergreen checking methods are reviewed when the underlying workflow changes. Product links, prices and time-sensitive commercial statements require more frequent verification. The update log records substantive new pages, source changes and corrections; a date is advanced only after the relevant evidence is actually reviewed.</p>
    </ArticleShell>
  );
}
