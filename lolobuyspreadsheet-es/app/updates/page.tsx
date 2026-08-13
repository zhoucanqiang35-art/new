import type { Metadata } from "next";
import ArticleShell from "../article-shell";

export const metadata: Metadata = { title: "Editorial Updates | LoloBuy Spreadsheet Research", description: "Dated substantive updates to LoloBuy source research, links, guides and long-form SEO articles." };

export default function UpdatesPage() {
  return (
    <ArticleShell eyebrow="Editorial update log · Last updated 13 August 2026" title="A dated record of what changed and why" lead="This is a substantive changelog, not a row of artificial freshness dates. An entry appears when evidence, a page, a link record, a calculation or an editorial rule materially changes." ctaTitle="Audit the correction standard" ctaText="Material factual changes are recorded here under the public editorial policy." ctaHref="/editorial-policy/" ctaLabel="Read the editorial policy →">
      <h2>13 August 2026 · Five-part shipping research centre published</h2>
      <p>Added five independent pages for shipping-estimator inputs and billable weight, delivery-line restrictions, rehearsal packing, customs declarations and tracking exceptions. The pages were deliberately assigned different questions so they do not become near-duplicate articles that repeat the same volumetric-weight explanation.</p>
      <p>Each guide now names the official interface surface reviewed, states what that surface supports and lists the commercial conclusions it cannot establish. The original parcel-submission article remains the end-to-end workflow; it now links to the specialist pages instead of trying to contain every detail.</p>

      <h2>13 August 2026 · Official route evidence rechecked</h2>
      <p>Rechecked the current LoloBuy production homepage metadata and route definitions. The public homepage continued to identify release 1.0.1 and a build timestamp of 3 August 2026. The evidence file now records the observed roles and limits of <code>/estimate</code>, stored-items, rehearsal, parcel-submission, parcel-list and parcel-detail routes.</p>
      <p>This update does not claim that every route is fully available without sign-in, an eligible order or a stored item. It records the surfaces delivered by the current production application and keeps transaction-specific availability separate.</p>

      <h2>13 August 2026 · Product link and price record added</h2>
      <p>Tested twelve homepage product destinations plus eleven category or all-product destinations; all twenty-three returned HTTP 200 at the check time. Added a product freshness file containing each source product page, the observed CNY amount and the editorial USD calculation.</p>
      <p>The conversion benchmark is now explicit: observed CNY ÷ 6.78, rounded to two decimals. The benchmark is based on OFX’s historical USD/CNY figure of 6.78046 dated 26 July 2026. It is not presented as a live exchange or checkout rate. Homepage USD figures were recalculated consistently under that documented benchmark.</p>

      <h2>13 August 2026 · Editorial and privacy notices published</h2>
      <p>Added a public editorial policy covering independence, four evidence classes, material corrections, changing commercial claims, product images and translation status. Added a plain-language privacy and external-link notice explaining that the inspection copy has no registration, payment, upload, comment or contact form and that product search submits keywords to FindSpreadsheet.</p>

      <h2>12 August 2026 · Research baseline established</h2>
      <p>Created the first official-source and FindSpreadsheet evidence files, mapped ten current product categories and excluded unsupported claims about live stock, universal QC, “best batches,” guaranteed discounts and guaranteed delivery outcomes.</p>

      <h2>12 August 2026 · Practical and long-form libraries completed</h2>
      <p>Published the category directory, product-link ordering guide, warehouse workflow, parcel-submission guide, QC checklist, concise weight guide, FAQ, method and three long-form English research articles. Every page was written as an independent answer rather than a placeholder card.</p>

      <h2>Current review status</h2>
      <ul><li>The public inspection URL remains intentionally excluded from search indexing.</li><li>The formal canonical domain, XML sitemap and 24-language URL map are not activated in this review copy.</li><li>Those technical launch controls will be enabled only after the final domain and complete translated routes are ready.</li><li>Future entries will record new evidence, link changes, material corrections and genuinely new articles—not routine date changes.</li></ul>
      <div className="article-note">The noindex setting is intentional for this inspection deployment. It must be removed, together with the all-site robots block, only when the formal domain has canonical, sitemap and hreflang coverage ready.</div>
    </ArticleShell>
  );
}
