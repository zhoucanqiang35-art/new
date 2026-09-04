import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calculator, Camera, Link2, ListChecks, PackageSearch, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { SiteFooter, SiteHeader } from "../site-chrome";
import SeoParitySections from "../seo-parity-sections";
import { localizedAlternates } from "../seo-metadata";

export const metadata: Metadata = {
  title: "PikoBuy SEO Articles | Independent Guides for 2026",
  description: "Read independent PikoBuy guides about the shipping calculator, product links, QC photos, warehouse returns, shipping and buyer checks.",
  alternates: localizedAlternates("seo-articles"),
};

const articles = [
  { icon: Calculator, tag: "SHIPPING ESTIMATOR", title: "PikoBuy Shipping Calculator Guide 2026: Estimate a Parcel", description: "Use destination, product type, weight and dimensions correctly, then replace early guesses with current warehouse and parcel data.", href: "/pikobuy-shipping-calculator", time: "10 min read" },
  { icon: Link2, tag: "PRODUCT LINKS", title: "PikoBuy Product Links Guide 2026: Find and Verify Items", description: "A step-by-step guide to finding source links, matching exact variants, checking the live order and verifying warehouse evidence.", href: "/pikobuy-product-links", time: "10 min read" },
  { icon: RotateCcw, tag: "RETURNS & REFUNDS", title: "PikoBuy Return Policy 2026: Warehouse Returns Explained", description: "A practical guide to the five-day warehouse window, eligibility, fees, seller responsibility, packaging rules and return evidence.", href: "/pikobuy-return-policy", time: "10 min read" },
  { icon: ListChecks, tag: "SPREADSHEET GUIDE", title: "How to Use a PikoBuy Spreadsheet Without Buying Blind", description: "A new 1,500-word workflow for verifying source links, variants, live prices, warehouse evidence and parcel impact before each decision.", href: "/how-to-use-pikobuy-spreadsheet", time: "10 min read" },
  { icon: PackageSearch, tag: "BEGINNER GUIDE", title: "How PikoBuy Works: From Product Link to International Parcel", description: "A 1,300-word, fact-checked explanation of link search, first payment, warehouse photos, parcel submission and international shipping.", href: "/how-pikobuy-works", time: "9 min read" },
  { icon: Camera, tag: "QUALITY CONTROL", title: "PikoBuy QC Photos: What to Inspect Before Parcel Submission", description: "A 1,300-word guide to order matching, measurements, category-specific photo checks, extra images and the return clock.", href: "/qc-guide", time: "9 min read" },
  { icon: Truck, tag: "SHIPPING", title: "PikoBuy Shipping Planning for the US, UK, Canada and Europe", description: "A 1,300-word guide to weight, dimensions, packaging, estimates, route comparison, forwarding and tracking.", href: "/shipping-guide", time: "9 min read" },
  { icon: ShieldCheck, tag: "BUYER CHECKLIST", title: "The Seven-Point PikoBuy Spreadsheet Buyer Checklist", description: "A 1,400-word human-readable filter for sources, options, QC evidence, sizing, price, parcel impact and return timing.", href: "/buyer-checklist", time: "10 min read" },
  { icon: BookOpen, tag: "DIRECT ANSWERS", title: "PikoBuy FAQ: Orders, QC, Returns and Shipping", description: "Eighteen short answers based on PikoBuy’s public beginner guide, estimate form, shipping terms and returns policy.", href: "/faq", time: "7 min read" },
];

export default function SeoArticlesPage() {
  return <main>
    <SiteHeader />
    <section className="directory-hero seo-hub-hero"><p className="kicker">SEO ARTICLE LIBRARY</p><h1>Useful PikoBuy answers, not keyword filler.</h1><p>Each long-form article is written in plain English, follows one search intent and separates PikoBuy’s published process from independent buying checks.</p></section>
    <section className="section article-hub">
      <div className="article-featured"><div><p className="kicker">NEW GUIDE · 4 SEPTEMBER 2026</p><h2>Estimate a PikoBuy parcel without turning guesses into facts.</h2><p>Learn how to enter destination, product type, weight and dimensions, then update the estimate when warehouse data arrives.</p></div><Link href="/pikobuy-shipping-calculator">Read the new guide <ArrowRight size={16}/></Link></div>
      <div className="article-card-grid">
        {articles.map(({icon:Icon,tag,title,description,href,time}) => <Link href={href} className="article-card" key={href}><div className="article-icon"><Icon/></div><span>{tag} · {time}</span><h2>{title}</h2><p>{description}</p><b>Read full article <ArrowRight size={15}/></b></Link>)}
      </div>
    </section>
    <SeoParitySections lang="en"/>
    <section className="editorial-standard"><div><p className="kicker">EDITORIAL STANDARD</p><h2>How these articles are written</h2></div><ul><li>One clear search question per article</li><li>Official facts kept separate from independent advice</li><li>No fixed shipping claims without live route context</li><li>No copied customer reviews or invented experience</li><li>Links and categories lead to FindSpreadsheet</li></ul></section>
    <SiteFooter />
  </main>;
}
