import type { Metadata } from "next";
import ArticleShell from "../components/ArticleShell";

export const metadata: Metadata = {
  title: "PikoBuy SEO Articles: Buying, QC, Shipping & Research",
  description: "Fact-checked English PikoBuy research articles covering first orders, QC photos, shipping planning, warehouse returns and spreadsheet link checks.",
  alternates: { canonical: "/articles" },
};

const articles = [
  { tag: "Beginner workflow", title: "How to Use a PikoBuy Spreadsheet Without Treating Every Row as a Recommendation", summary: "A step-by-step framework for narrowing categories, checking the live source and using warehouse evidence before shipping.", href: "/guides", time: "12 min" },
  { tag: "Payment planning", title: "PikoBuy First and Second Payment Explained: A Buyer’s Budget Guide", summary: "Why the purchasing payment and international shipping payment happen at different stages, plus what to verify before each one.", href: "/articles/first-vs-second-payment", time: "10 min" },
  { tag: "Shipping research", title: "PikoBuy Shipping Estimates: Why Destination, Weight and Dimensions Belong Together", summary: "What the official estimator asks for, how warehouse packing changes the result and when to hold a parcel.", href: "/shipping", time: "11 min" },
  { tag: "QC method", title: "A Category-by-Category QC Photo Checklist for Spreadsheet Finds", summary: "The photo angles, measurements and unresolved questions that differ across shoes, clothing, bags and electronics.", href: "/articles/qc-photo-checklist", time: "10 min" },
  { tag: "Return timing", title: "The Five-Day Warehouse Return Window: What Buyers Need to Check First", summary: "A plain-language review of eligibility, timing, evidence and fees described in the public return terms.", href: "/articles/warehouse-return-window", time: "9 min" },
  { tag: "Link health", title: "Working Link Does Not Mean Matching Product: How to Recheck a Spreadsheet Record", summary: "A defensive process for variant changes, image mismatches, source redirects and stale prices.", href: "/articles/recheck-product-links", time: "9 min" },
  { tag: "Market research", title: "Building a PikoBuy Guide for US, UK and European Search Intent", summary: "Why country claims need evidence and how language-market demand should be validated after launch.", href: "/articles/western-market-search-intent", time: "8 min" },
];

export default function ArticlesPage() {
  return (
    <ArticleShell
      eyebrow="SEO article centre"
      title="Useful English research, not a pile of rewritten keywords."
      intro="A planned editorial cluster for buyers comparing spreadsheet rows, PikoBuy workflow stages, QC evidence, return timing and parcel decisions."
    >
      <p className="lead">Each article has one search intent, one practical outcome and a source-check date. Topics are selected to answer real research questions while avoiding invented delivery promises, unverified customer claims and repetitive template copy.</p>
      <div className="article-card-grid">
        {articles.map((article, index) => (
          <a href={article.href} className="editorial-card" key={article.title}>
            <span className="editorial-index">{String(index + 1).padStart(2, "0")}</span>
            <div><span className="kicker">{article.tag}</span><h2>{article.title}</h2><p>{article.summary}</p></div>
            <small>{article.time} read <b>→</b></small>
          </a>
        ))}
      </div>
      <div className="publishing-note">
        <span className="kicker">Publishing standard</span>
        <h2>One carefully researched English article every two days.</h2>
        <p>Planned articles will normally contain 1,200–1,800 words, human-readable structure, specific source notes, internal links and a checked date. Customer-review articles will separate direct user reports from verified platform policy and will not manufacture ratings or testimonials.</p>
      </div>
    </ArticleShell>
  );
}
