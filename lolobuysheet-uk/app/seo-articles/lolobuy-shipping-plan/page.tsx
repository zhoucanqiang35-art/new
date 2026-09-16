import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { shippingPlanArticle } from "@/lib/lolobuy-shipping-plan-article";

export const metadata: Metadata = {
  title: "LoloBuy Shipping Plan: Build a Parcel Before Submission",
  description: shippingPlanArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-shipping-plan" },
  openGraph: {
    type: "article",
    title: shippingPlanArticle.title,
    description: shippingPlanArticle.description,
    url: "/seo-articles/lolobuy-shipping-plan",
  },
};

export default function LoloBuyShippingPlanPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: shippingPlanArticle.title,
    description: shippingPlanArticle.description,
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-shipping-plan",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={shippingPlanArticle} />
    </>
  );
}
