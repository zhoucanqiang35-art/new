import type { Metadata } from "next";
import type { Article } from "./site-data";
import { getCopy, languages } from "./site-data";
import { translate, type LocaleDictionary } from "./locale-dictionaries";
import { sitePath } from "./routing";

export const productionOrigin = "https://pikobuyspreadsheet.cc";
export const formalDomainConfirmed = process.env.FORMAL_DOMAIN_CONFIRMED === "pikobuyspreadsheet.cc";
export const siteIndexable = process.env.SITE_INDEXABLE === "true" && formalDomainConfirmed;
const requestedIndexableLocales = new Set(
  (process.env.INDEXABLE_LOCALES || "en").split(",").map((value) => value.trim()).filter(Boolean),
);
const humanQaApprovedLocales = new Set(
  (process.env.QA_APPROVED_LOCALES || "en").split(",").map((value) => value.trim()).filter(Boolean),
);
export const reviewedLocales = new Set(
  [...requestedIndexableLocales].filter((locale) => humanQaApprovedLocales.has(locale)),
);

const englishSeoTitles: Record<string, string> = {
  home: "PikoBuy Spreadsheet Research, QC & Shipping Guide",
  "shipping-cost-guide": "PikoBuy Shipping Cost: Weight, Size & Route Variables",
  "payment-process": "PikoBuy Payments: Product Cost and Freight Stages",
  "packaging-guide": "PikoBuy Parcel Packaging: Protection by Product Type",
  faq: "PikoBuy Spreadsheet FAQ: Links, QC, Shipping & Returns",
  "seo-articles": "PikoBuy Guides: QC, Shipping, Links & Spreadsheet Research",
};

export function absoluteSiteUrl(locale = "en", slug?: string) {
  return new URL(sitePath(locale, slug), productionOrigin).toString();
}

export function pageMetadata(locale: string, dictionary: LocaleDictionary, article?: Article): Metadata {
  const copy = getCopy(locale, dictionary);
  const title = article ? translate(dictionary, article.title) : copy.title;
  const seoTitle = locale === "en" ? englishSeoTitles[article?.slug || "home"] || title : title;
  const description = article ? translate(dictionary, article.summary) : copy.description;
  const slug = article?.slug;
  const canonical = absoluteSiteUrl(locale, slug);
  const languageAlternates = Object.fromEntries(
    languages
      .filter(([code]) => reviewedLocales.has(code))
      .map(([code]) => [code, absoluteSiteUrl(code, slug)]),
  );
  languageAlternates["x-default"] = absoluteSiteUrl("en", slug);
  const mayIndex = siteIndexable && reviewedLocales.has(locale);

  return {
    // Use an absolute title so the root layout does not repeat the long site
    // name on every route. Descriptive H1 text remains unchanged in the page.
    title: { absolute: seoTitle },
    description,
    alternates: { canonical, languages: languageAlternates },
    robots: { index: mayIndex, follow: true },
    openGraph: {
      type: article ? "article" : "website",
      url: canonical,
      title: seoTitle,
      description,
      siteName: "PikoBuy Spreadsheet Research Hub",
      locale,
    },
    twitter: { card: "summary_large_image", title: seoTitle, description },
  };
}
