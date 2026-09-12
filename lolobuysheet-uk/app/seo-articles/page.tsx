import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "LoloBuy Research Articles | Independent China Shopping Guides",
  description: "Independent, evidence-first research guides for China product listings, order preparation and parcel decisions.",
  alternates: { canonical: "/seo-articles" },
};

const articles = [
  {
    href: "/seo-articles/lolobuy-product-link-research",
    date: "11 September 2026",
    title: "LoloBuy Product Link Research: How to Check a China Listing Before You Order",
    description: "A focused method for checking the live listing, selected option, dimensions and evidence gaps before placing an order.",
  },
  {
    href: "/seo-articles/research-a-lolobuy-order",
    date: "Earlier guide",
    title: "How to Research a LoloBuy Order Before You Commit",
    description: "An independent workflow for comparing candidates, keeping evidence and planning a parcel without relying on promises.",
  },
];

export default function Articles() {
  return (
    <main>
      <SiteHeader />
      <section className="inner prose">
        <p className="eyebrow">INDEPENDENT RESEARCH · 2026</p>
        <h1>LoloBuy research library</h1>
        <p className="lead">Practical buyer research, based on visible evidence and current first-party information. Articles do not promise quality, availability, delivery, fees, or customs outcomes.</p>
        {articles.map((article) => (
          <article key={article.href} className="article">
            <p className="eyebrow">{article.date.toUpperCase()}</p>
            <h2><Link href={article.href}>{article.title}</Link></h2>
            <p>{article.description}</p>
            <Link href={article.href}>Read the guide →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
