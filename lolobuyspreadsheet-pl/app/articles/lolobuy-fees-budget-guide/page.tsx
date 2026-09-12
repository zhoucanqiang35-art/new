import type { Metadata } from "next";
import ArticlePage from "@/components/article-page";
import { articleBySlug } from "@/content/articles";

const canonical = "https://lolobuyspreadsheet.pl/articles/lolobuy-fees-budget-guide/";

export const metadata: Metadata = {
  title: "LoloBuy Fees & Budget Guide | Real Cost Breakdown",
  description: "Calculate LoloBuy costs across item payment, China delivery, warehouse choices, international shipping, volumetric weight, discounts and taxes.",
  keywords: [
    "LoloBuy fees",
    "LoloBuy shipping cost",
    "LoloBuy budget",
    "LoloBuy agent fees",
    "how much does LoloBuy cost",
    "LoloBuy international shipping fee",
    "LoloBuy volumetric weight",
  ],
  alternates: {
    canonical,
    languages: {
      "x-default": canonical,
      en: canonical,
      de: "https://lolobuyspreadsheet.pl/de/articles/lolobuy-fees-budget-guide/",
      fr: "https://lolobuyspreadsheet.pl/fr/articles/lolobuy-fees-budget-guide/",
      es: "https://lolobuyspreadsheet.pl/es/articles/lolobuy-fees-budget-guide/",
      it: "https://lolobuyspreadsheet.pl/it/articles/lolobuy-fees-budget-guide/",
      nl: "https://lolobuyspreadsheet.pl/nl/articles/lolobuy-fees-budget-guide/",
      pl: "https://lolobuyspreadsheet.pl/pl/articles/lolobuy-fees-budget-guide/",
      pt: "https://lolobuyspreadsheet.pl/pt/articles/lolobuy-fees-budget-guide/",
      sv: "https://lolobuyspreadsheet.pl/sv/articles/lolobuy-fees-budget-guide/",
    },
  },
  openGraph: {
    type: "article",
    url: canonical,
    title: "LoloBuy Fees and Budget Guide: Calculate Your Real Buying Cost",
    description: "A fact-checked guide to product, warehouse, payment and international parcel costs.",
  },
};

export default function Page() {
  return <ArticlePage article={articleBySlug["lolobuy-fees-budget-guide"]} />;
}
