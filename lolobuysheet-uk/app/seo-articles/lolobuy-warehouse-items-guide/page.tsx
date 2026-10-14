import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { warehouseItemsArticle } from "@/lib/lolobuy-warehouse-items-article";

export const metadata: Metadata = {
  title: "LoloBuy Warehouse Items Guide: Organise Stored Goods",
  description: warehouseItemsArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-warehouse-items-guide" },
  openGraph: {
    type: "article",
    title: warehouseItemsArticle.title,
    description: warehouseItemsArticle.description,
    url: "/seo-articles/lolobuy-warehouse-items-guide",
  },
};

export default function LoloBuyWarehouseItemsGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: warehouseItemsArticle.title,
    description: warehouseItemsArticle.description,
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-warehouse-items-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={warehouseItemsArticle} />
    </>
  );
}
