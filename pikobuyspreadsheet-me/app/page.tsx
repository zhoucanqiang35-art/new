import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, Globe2, PackageCheck, Ruler, ShieldCheck, Truck } from "lucide-react";
import SearchBox from "./search-box";
import CategoryCards from "./category-cards";
import { SiteFooter, SiteHeader } from "./site-chrome";

const guides = [
  { icon: PackageCheck, title: "How PikoBuy works", text: "A fact-checked walk-through from product discovery and buy-for-me ordering to warehouse handling.", href: "/how-pikobuy-works" },
  { icon: Camera, title: "QC photo guide", text: "Category-specific photo checks that help you spot missing evidence before approving a parcel.", href: "/qc-guide" },
  { icon: Truck, title: "Shipping planner", text: "Plan around item weight, packaging, destination and route—not an invented universal delivery promise.", href: "/shipping-guide" },
  { icon: ShieldCheck, title: "Buyer checklist", text: "A practical seven-point filter for source links, photos, sizing, price context and parcel risk.", href: "/buyer-checklist" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot"/> Independent PikoBuy research desk · 2026</div>
          <h1>A clearer way to use a <em>PikoBuy spreadsheet.</em></h1>
          <p className="hero-lead">Search product ideas, compare source links, review QC evidence, check sizing and think through shipping weight before you save a find.</p>
          <SearchBox />
          <a className="hero-database-link" href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">Browse the complete product database <ArrowRight size={16}/></a>
          <div className="trust-row">
            <span><CheckCircle2 size={17}/> Official-process facts checked</span><span><ShieldCheck size={17}/> No “verified seller” claims</span><span><Globe2 size={17}/> Built for US, UK, Canada & Europe</span>
          </div>
        </div>
        <div className="hero-visual" role="img" aria-label="International product research, quality checks and parcel planning" />
      </section>

      <section className="proof-strip" aria-label="Verified PikoBuy workflow">
        <p>WHAT PIKOBUY PUBLICLY DESCRIBES</p><div><span>Product search</span><ArrowRight/><span>Buy-for-me order</span><ArrowRight/><span>China warehouse</span><ArrowRight/><span>Quality inspection</span><ArrowRight/><span>International shipping</span></div>
      </section>

      <section className="section" id="categories">
        <div className="section-heading"><div><p className="kicker">CATEGORY-FIRST RESEARCH</p><h2>Compare like with like.</h2></div><p>Every category needs different evidence. Use the right checks before opening a product result.</p></div>
        <CategoryCards />
      </section>

      <section className="section guide-section">
        <div className="section-heading light"><div><p className="kicker">THE RESEARCH LIBRARY</p><h2>Answers before checkout.</h2></div><p>Each guide has one job, with clear boundaries between independent research and official account support.</p></div>
        <div className="guide-grid">
          {guides.map(({icon: Icon, title, text, href}) => <Link href={href} className="guide-card" key={title}><Icon/><h3>{title}</h3><p>{text}</p><b>Read guide <ArrowRight size={15}/></b></Link>)}
        </div>
      </section>

      <section className="section decision-section">
        <div className="decision-copy"><p className="kicker">THE 60-SECOND SAVE TEST</p><h2>Make every row earn its place.</h2><p>A low price is not enough. Keep a product only when its evidence survives a quick structured review.</p><Link className="button-dark" href="/buyer-checklist">Open the full checklist <ArrowRight size={16}/></Link></div>
        <ol className="decision-list">
          <li><Camera/><div><b>Useful photos</b><span>Do they show the details that matter for this category?</span></div></li>
          <li><Ruler/><div><b>Measurements, not guesses</b><span>Can you compare the listing to an item that fits?</span></div></li>
          <li><PackageCheck/><div><b>Matching source</b><span>Does the external listing still match the saved row?</span></div></li>
          <li><Truck/><div><b>Weight-aware value</b><span>Does the find still make sense after packaging?</span></div></li>
        </ol>
      </section>

      <section className="source-note"><div><span>FACT-CHECKED SCOPE</span><h2>What we can—and cannot—confirm.</h2></div><p>PikoBuy publicly describes product discovery, buy-for-me purchasing, quality inspection, repacking and worldwide delivery. Exact availability, pricing, route eligibility and final shipping costs depend on the live item, parcel, destination and account. This independent guide never turns those variables into made-up guarantees.</p></section>

      <SiteFooter />
    </main>
  );
}
