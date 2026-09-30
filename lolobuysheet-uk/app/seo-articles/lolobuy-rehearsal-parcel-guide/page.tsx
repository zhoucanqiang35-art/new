import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { rehearsalParcelArticle } from "@/lib/lolobuy-rehearsal-parcel-article";

export const metadata: Metadata = {
  title: "LoloBuy Rehearsal Parcel Guide: Test Weight Before Shipping",
  description: rehearsalParcelArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-rehearsal-parcel-guide" },
  openGraph: {
    type: "article",
    title: rehearsalParcelArticle.title,
    description: rehearsalParcelArticle.description,
    url: "/seo-articles/lolobuy-rehearsal-parcel-guide",
  },
};

export default function LoloBuyRehearsalParcelGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: rehearsalParcelArticle.title,
    description: rehearsalParcelArticle.description,
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-rehearsal-parcel-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={rehearsalParcelArticle} />
    </>
  );
}
