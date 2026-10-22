import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { shippingAddressArticle } from "@/lib/lolobuy-shipping-address-article";

export const metadata: Metadata = {
  title: "LoloBuy Shipping Address Guide: Parcel Recipient",
  description: shippingAddressArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-shipping-address-guide" },
  openGraph: {
    type: "article",
    title: shippingAddressArticle.title,
    description: shippingAddressArticle.description,
    url: "/seo-articles/lolobuy-shipping-address-guide",
  },
};

export default function LoloBuyShippingAddressGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: shippingAddressArticle.title,
    description: shippingAddressArticle.description,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-shipping-address-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={shippingAddressArticle} />
    </>
  );
}
