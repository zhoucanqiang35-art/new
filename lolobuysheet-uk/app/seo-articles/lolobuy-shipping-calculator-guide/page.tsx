import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { shippingCalculatorArticle } from "@/lib/lolobuy-shipping-calculator-article";

export const metadata: Metadata = {
  title: "LoloBuy Shipping Calculator Guide: Pre-Order Estimates",
  description: shippingCalculatorArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-shipping-calculator-guide" },
  openGraph: {
    type: "article",
    title: shippingCalculatorArticle.title,
    description: shippingCalculatorArticle.description,
    url: "/seo-articles/lolobuy-shipping-calculator-guide",
  },
};

export default function LoloBuyShippingCalculatorGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: shippingCalculatorArticle.title,
    description: shippingCalculatorArticle.description,
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-shipping-calculator-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={shippingCalculatorArticle} />
    </>
  );
}
