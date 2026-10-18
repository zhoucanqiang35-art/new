import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { shipCareClaimArticle } from "@/lib/lolobuy-shipcare-claim-article";

export const metadata: Metadata = {
  title: "LoloBuy ShipCare Claim Guide: Parcel Evidence",
  description: shipCareClaimArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-shipcare-claim-guide" },
  openGraph: {
    type: "article",
    title: shipCareClaimArticle.title,
    description: shipCareClaimArticle.description,
    url: "/seo-articles/lolobuy-shipcare-claim-guide",
  },
};

export default function LoloBuyShipCareClaimGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: shipCareClaimArticle.title,
    description: shipCareClaimArticle.description,
    datePublished: "2026-10-17",
    dateModified: "2026-10-17",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-shipcare-claim-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={shipCareClaimArticle} />
    </>
  );
}
