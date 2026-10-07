import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Standards | LoloBuy Guide",
  description: "How the independent LoloBuy Guide researches, dates and corrects its practical articles.",
  alternates: { canonical: "/editorial-standards/" },
};

export default function EditorialStandardsPage() {
  return <main className="standards-page">
    <header className="standards-header">
      <a className="brand brand-image" href="/" aria-label="LoloBuy guide home"><img src="/lolobuy-logo.png" alt="LoloBuy"/></a>
      <a href="/en/seo-articles/">Research articles</a>
    </header>
    <article className="standards-content">
      <p className="eyebrow">EDITORIAL STANDARDS</p>
      <h1>How this guide is researched</h1>
      <p className="standards-lede">This is an independent educational guide. It is not LoloBuy’s official website, and readers should confirm live prices, route availability, account terms and after-sales rules through LoloBuy’s official channels before acting.</p>

      <section>
        <h2>What we use as evidence</h2>
        <p>Our practical guides begin with publicly available platform pages and help-centre information. Where a guide refers to a process, we describe only what the cited public material supports and distinguish it from advice on how to keep records, compare options or ask clearer questions.</p>
        <p>Each article displays the date on which the relevant public material was reviewed. Time-sensitive details—including prices, promotions, storage allowances, route availability, parcel estimates and return terms—should be treated as snapshots, not promises.</p>
      </section>

      <section>
        <h2>What we do not claim</h2>
        <p>Inspection photographs can show visible details, but they cannot prove authenticity, hidden construction, precise material composition, customs outcomes or long-term performance. We do not present them as proof of those matters. Guides are general information, not shipping, customs, legal or financial advice.</p>
      </section>

      <section>
        <h2>Independence and links</h2>
        <p>The guide is published by FindSpreadsheet Research. References to LoloBuy identify the platform discussed; they do not mean that LoloBuy owns, operates or endorses this site. Links to FindSpreadsheet are clearly identified as a separate product-discovery resource.</p>
      </section>

      <section>
        <h2>Updates and corrections</h2>
        <p>When a guide is materially revised, its on-page review or update date is changed. If the public source is incomplete or a detail cannot be verified, the guide should state that limitation rather than fill the gap with a certainty claim.</p>
      </section>

      <p className="standards-updated">Editorial standards published 7 October 2026.</p>
    </article>
  </main>;
}
