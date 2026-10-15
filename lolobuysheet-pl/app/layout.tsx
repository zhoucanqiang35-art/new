import type { Metadata } from "next";
import "./globals.css";
import { LanguageDock } from "./components/LanguageDock";

export const metadata: Metadata = {
  metadataBase: new URL("https://lolobuysheet.pl"),
  title: "LoloBuy Spreadsheet Poland | QC Photos, Shipping & Product Research",
  description: "Independent LoloBuy spreadsheet guide for product research, visible QC-photo checks, parcel planning, shipping-cost context and FindSpreadsheet category discovery.",
  keywords: [
    "lolobuy spreadsheet",
    "lolobuy spreadsheet poland",
    "lolobuy qc photos",
    "lolobuy shipping cost",
    "lolobuy product research",
    "weidian taobao 1688 shopping agent guide",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    url: "https://lolobuysheet.pl/",
    title: "LoloBuy Spreadsheet Poland | Independent Research Guide",
    description: "Research product listings, QC photos and live parcel choices before opening the matching FindSpreadsheet route.",
    siteName: "LoloBuy Sheet Poland",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <link rel="alternate" hrefLang="en" href="https://lolobuysheet.pl/?lang=en" />
        <link rel="alternate" hrefLang="de" href="https://lolobuysheet.pl/?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://lolobuysheet.pl/?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://lolobuysheet.pl/?lang=es" />
        <link rel="alternate" hrefLang="it" href="https://lolobuysheet.pl/?lang=it" />
        <link rel="alternate" hrefLang="pt" href="https://lolobuysheet.pl/?lang=pt" />
        <link rel="alternate" hrefLang="nl" href="https://lolobuysheet.pl/?lang=nl" />
        <link rel="alternate" hrefLang="pl" href="https://lolobuysheet.pl/?lang=pl" />
        <link rel="alternate" hrefLang="sv" href="https://lolobuysheet.pl/?lang=sv" />
        <link rel="alternate" hrefLang="x-default" href="https://lolobuysheet.pl/?lang=en" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "LoloBuy Sheet Poland",
          url: "https://lolobuysheet.pl/",
          description: "Independent multilingual product-research guide for LoloBuy spreadsheet searches.",
          inLanguage: ["en", "de", "fr", "es", "it", "pt", "nl", "pl", "sv"],
          isAccessibleForFree: true,
        }) }} />
      </head>
      <body className="antialiased" translate="no">{children}<LanguageDock/></body>
    </html>
  );
}
