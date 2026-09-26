import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { manualOrderArticle } from "@/lib/lolobuy-manual-order-article";

export const metadata: Metadata = {
  title: "LoloBuy Manual Order Guide: Prepare an Unlisted Request",
  description: manualOrderArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-manual-order-guide" },
  openGraph: {
    type: "article",
    title: manualOrderArticle.title,
    description: manualOrderArticle.description,
    url: "/seo-articles/lolobuy-manual-order-guide",
  },
};

export default function LoloBuyManualOrderGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: manualOrderArticle.title,
    description: manualOrderArticle.description,
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-manual-order-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={manualOrderArticle} />
    </>
  );
}
