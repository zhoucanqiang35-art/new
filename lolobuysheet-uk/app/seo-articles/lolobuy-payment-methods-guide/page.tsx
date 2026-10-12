import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { paymentMethodsArticle } from "@/lib/lolobuy-payment-methods-article";

export const metadata: Metadata = {
  title: "LoloBuy Payment Methods Guide: Verify Checkout",
  description: paymentMethodsArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-payment-methods-guide" },
  openGraph: {
    type: "article",
    title: paymentMethodsArticle.title,
    description: paymentMethodsArticle.description,
    url: "/seo-articles/lolobuy-payment-methods-guide",
  },
};

export default function LoloBuyPaymentMethodsGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: paymentMethodsArticle.title,
    description: paymentMethodsArticle.description,
    datePublished: "2026-10-11",
    dateModified: "2026-10-11",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-payment-methods-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={paymentMethodsArticle} />
    </>
  );
}
