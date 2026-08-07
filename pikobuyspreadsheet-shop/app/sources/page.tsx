import type { Metadata } from "next";
import { ContentLayout, PageSearchParams } from "../content-layout";
import { normalizeLanguage } from "../i18n";

export const metadata: Metadata = {
  title: "PikoBuy Official Sources & Independent Editorial Policy",
  description: "See the official PikoBuy pages used for claims about buying, QC, shipping, fees, returns, restrictions and platform responsibilities.",
};

const sources = [
  ["Official homepage", "Platform positioning, link/image/request discovery, purchasing assistance, warehouse QC and worldwide shipping overview.", "https://www.pikobuy.com/", "Service overview"],
  ["About PikoBuy", "Access to Taobao, 1688 and Weidian, multiple payment options, warehouse quality checks and carrier choices.", "https://www.pikobuy.com/About", "Platform positioning"],
  ["Beginner’s Guide", "The six published steps from product selection through order payment, warehouse inspection, route selection and tracking.", "https://www.pikobuy.com/guide", "Operational flow"],
  ["Shipping Estimate", "The live estimator inputs: destination, product type, weight, length, width and height.", "https://www.pikobuy.com/shipping-cost", "Current route estimate"],
  ["Returns & Exchanges", "Eligibility, the five-day / 120-hour request period, responsibility examples, fees and special packaging standards.", "https://www.pikobuy.com/protocol/returns", "Return policy"],
  ["Shipping Policy", "Transfer workflow, warehouse inspection, additional photos, inspection limits and third-party logistics risks.", "https://www.pikobuy.com/protocol/shipping", "Transfer & risk"],
  ["User Agreement", "Purchasing/forwarding role, the current 8%-of-freight fee language, restrictions, insurance and customs responsibility.", "https://www.pikobuy.com/protocol/user", "Detailed agreement"],
  ["Terms of Service", "Service scope, orders, payments, duties, liability, prohibited items, anti-counterfeit policy and regional governing-law clauses.", "https://www.pikobuy.com/protocol/terms", "Legal terms"],
];

const claimMap = [
  ["PikoBuy can accept links or keywords", "Beginner’s Guide + homepage", "Confirmed"],
  ["Warehouse photos are part of the flow", "Beginner’s Guide + Shipping Policy", "Confirmed"],
  ["Professional inspection has limits", "Shipping Policy + User Agreement", "Confirmed"],
  ["Eligible request window is 120 hours", "Returns & Exchanges", "Confirmed with conditions"],
  ["Unconditional-return formula includes 5 RMB", "Returns & Exchanges", "Confirmed with shipping costs"],
  ["Package-forwarding fee is stated as 8% of freight", "User Agreement", "Current wording—recheck at payment"],
  ["Tracking appears within three days after dispatch", "Beginner’s Guide", "Published expectation, not delivery time"],
  ["Country-by-country user shares", "No reviewed official page", "Not claimed"],
];

export default async function SourcesPage({ searchParams }: PageSearchParams) {
  const language = normalizeLanguage((await searchParams).lang);
  const suffix = language === "en" ? "" : `?lang=${language}`;
  return <ContentLayout language={language} kicker="EDITORIAL POLICY / PRIMARY SOURCES" title="Every factual claim should have somewhere to go." intro="We use PikoBuy’s published pages for platform facts, show when they were checked and avoid turning changeable routes, prices or policies into permanent promises." tone="blue">
    <section className="content-section"><div className="source-list">{sources.map(([title, copy, href, use], index) => <a href={href} target="_blank" rel="noopener noreferrer" key={href}><span>{String(index + 1).padStart(2, "0")}</span><div><small>{use}</small><h2>{title}</h2><p>{copy}</p></div><b>Open official page ↗</b></a>)}</div></section>

    <section className="content-section">
      <div className="content-section-heading"><span>CLAIM REGISTER</span><h2>What the reviewed pages support—and what they do not.</h2><p>“Confirmed” means the statement appears on a current official page. It does not make a temporary fee, route or seller decision permanent.</p></div>
      <div className="claim-table"><header><span>Claim</span><span>Primary evidence</span><span>Status</span></header>{claimMap.map(([claim, evidence, status]) => <article key={claim}><b>{claim}</b><span>{evidence}</span><em>{status}</em></article>)}</div>
    </section>

    <section className="content-section prose-grid">
      <aside className="sticky-index"><span>OUR METHOD</span><a href="#primary">Primary pages</a><a href="#judgment">Facts vs judgment</a><a href="#change">Changes</a><a href="#reviews">Reviews</a><a href="#corrections">Corrections</a></aside>
      <div className="prose-body">
        <article id="primary"><span>01 / PRIMARY PAGES FIRST</span><h2>Platform claims start with PikoBuy’s own documents.</h2><p>We use the beginner guide for the operational sequence, the return page for eligibility and fees, the shipping policy for transfer inspection and logistics risk, and the user agreement or terms for responsibility and current fee wording. A blog post or community comment is not used to override a current official policy.</p></article>
        <article id="judgment"><span>02 / FACTS VS JUDGMENT</span><h2>Practical advice is labelled as our interpretation.</h2><p>For example, PikoBuy officially asks for weight and dimensions in its estimator. Our advice to run both a low and high packaging case is an independent planning method, not an official formula. Keeping that distinction visible prevents helpful advice from turning into a false platform promise.</p></article>
        <article id="change"><span>03 / CHANGEABLE INFORMATION</span><h2>Routes, prices, promotions and seller stock are live data.</h2><p>We do not copy a temporary shipping quote into evergreen content as though it will remain valid. Spreadsheet rows should record a last-check date; policy pages show an editorial review date; buyers are directed to the live source before payment.</p></article>
        <article id="reviews"><span>04 / REVIEWS AND EXPERIENCE</span><h2>No invented orders, ratings or traffic.</h2><p>If a future article summarizes public customer commentary, it will identify the source, date and limits of that evidence. We will not write in first person as though we placed an order when we did not, and we will not publish unsupported “success rates” or country usage shares.</p></article>
        <article id="corrections"><span>05 / CORRECTIONS</span><h2>A changed official page should change our guide.</h2><p>The policy set was rechecked on 06 August 2026. When a material fact changes, the affected page should update its wording and date rather than silently preserving the old statement for search traffic.</p></article>
      </div>
    </section>

    <section className="split-callout"><div><span>OUR RULE</span><h2>No invented traffic, reviews or “tested” results.</h2></div><div><p>PikoBuy does not publish a country-by-country user table on the official pages reviewed. The language module targets major European and North American commerce languages without claiming unsupported user shares.</p><a href={`/seo-articles${suffix}`}>Read the source-checked articles ↗</a></div></section>
  </ContentLayout>;
}
