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
    href: "/seo-articles/lolobuy-coupon-guide",
    date: "9 October 2026",
    title: "LoloBuy Coupon Guide: Verify a Discount Before Checkout",
    description: "A practical method for checking coupon type, status, threshold, scope, destination, delivery-line limits, and expiration before payment.",
  },
  {
    href: "/seo-articles/lolobuy-shopping-cart-guide",
    date: "7 October 2026",
    title: "LoloBuy Shopping Cart Guide: Audit a China Order Before Payment",
    description: "An evidence-first method for checking product identity, variants, quantities, shop groups, and cart totals before moving to payment.",
  },
  {
    href: "/seo-articles/lolobuy-shipping-calculator-guide",
    date: "5 October 2026",
    title: "LoloBuy Shipping Calculator Guide: Build a Pre-Order Freight Scenario",
    description: "An evidence-first method for testing destination, weight, dimensions, categories, and billing assumptions before ordering or warehouse arrival.",
  },
  {
    href: "/seo-articles/lolobuy-customs-declaration-guide",
    date: "3 October 2026",
    title: "LoloBuy Customs Declaration Guide: Build an Evidence-Ready Parcel Record",
    description: "A practical method for reconciling declaration names, quantities, weights, values, currency, and tax-method information with the real parcel.",
  },
  {
    href: "/seo-articles/lolobuy-rehearsal-parcel-guide",
    date: "29 September 2026",
    title: "LoloBuy Rehearsal Parcel Guide: Test Weight and Dimensions Before Real Submission",
    description: "A practical method for treating pre-packing weight, dimensions, volumetric weight, and billing evidence as estimates before submitting a real parcel.",
  },
  {
    href: "/seo-articles/lolobuy-order-status-guide",
    date: "27 September 2026",
    title: "LoloBuy Order Status Guide: Read Purchase-to-Warehouse Updates Before Shipping",
    description: "An evidence-first guide to reading payment, purchasing, seller dispatch, and warehouse-arrival updates without confusing an order with a parcel.",
  },
  {
    href: "/seo-articles/lolobuy-manual-order-guide",
    date: "25 September 2026",
    title: "LoloBuy Manual Order Guide: Prepare an Unlisted Product Request Without Guesswork",
    description: "A practical method for preparing the link, specifications, price evidence, quantity, and reference image for a clear manual order request.",
  },
  {
    href: "/seo-articles/lolobuy-image-search-guide",
    date: "23 September 2026",
    title: "LoloBuy Image Search Guide: Turn a Product Photo into a Verifiable Shortlist",
    description: "A practical method for preparing a reference image, comparing visual results, and turning candidates into a research-ready shortlist.",
  },
  {
    href: "/seo-articles/lolobuy-return-request-guide",
    date: "19 September 2026",
    title: "LoloBuy Return Request Guide: Build an Evidence-Ready Warehouse Case",
    description: "A practical method for choosing a return or exchange reason, organising warehouse evidence, and reviewing a request before submission.",
  },
  {
    href: "/seo-articles/lolobuy-parcel-tracking-guide",
    date: "17 September 2026",
    title: "LoloBuy Parcel Tracking Guide: How to Read Shipping Updates After Dispatch",
    description: "An evidence-first method for reading parcel events, recording waybill details, and responding to unclear updates without guessing.",
  },
  {
    href: "/seo-articles/lolobuy-shipping-plan",
    date: "15 September 2026",
    title: "LoloBuy Shipping Plan: How to Build a China-to-Home Parcel Before Submission",
    description: "A practical method for grouping warehouse items, comparing current shipping evidence, and recording a parcel decision before submission.",
  },
  {
    href: "/seo-articles/lolobuy-qc-photos-guide",
    date: "13 September 2026",
    title: "LoloBuy QC Photos Guide: How to Inspect a Warehouse Item Before Parcel Submission",
    description: "An evidence-first method for checking identity, variants, measurements and visible condition before making a parcel decision.",
  },
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
