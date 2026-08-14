import type { Metadata } from "next";
import HomeClient from "./home-client";
import { getDictionary } from "./i18n";
import { locales, localizedPath, type Locale } from "./i18n-config";
import { absoluteSiteUrl } from "./site-config";

export const metadata: Metadata = {
  title: "PikoBuy Spreadsheet Pro",
  description:
    "Independent PikoBuy product-link, QC, sizing and shipping research.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: absoluteSiteUrl("/"),
    languages: Object.fromEntries(
      locales
        .map((item) => [
          item.code,
          absoluteSiteUrl(localizedPath(item.code, "/")),
        ])
        .concat([["x-default", absoluteSiteUrl("/")]]),
    ),
  },
  openGraph: {
    type: "website",
    url: absoluteSiteUrl("/"),
    title: "PikoBuy Spreadsheet Pro",
    description:
      "Independent PikoBuy product-link, QC, sizing and shipping research.",
  },
  twitter: {
    card: "summary",
    title: "PikoBuy Spreadsheet Pro",
    description: "Independent source-backed PikoBuy research.",
  },
};

export function LocalizedHome({ locale = "en" }: { locale?: Locale }) {
  const dictionary = getDictionary(locale);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteSiteUrl(localizedPath(locale, "/"))}#website`,
        name: "PikoBuy Spreadsheet Pro",
        url: absoluteSiteUrl(localizedPath(locale, "/")),
        inLanguage: locale,
        description:
          dictionary[
            "Independent PikoBuy product-link, QC, sizing and shipping research."
          ] ??
          "Independent PikoBuy product-link, QC, sizing and shipping research.",
      },
      {
        "@type": "Organization",
        "@id": `${absoluteSiteUrl("/")}#publisher`,
        name: "PikoBuy Spreadsheet Pro",
        url: absoluteSiteUrl("/"),
        description:
          "Independent editorial research site; not affiliated with or endorsed by PikoBuy.",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeClient locale={locale} dictionary={dictionary} />
    </>
  );
}

export default function HomePage() {
  return <LocalizedHome locale="en" />;
}
