import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lolobuysheet.lt"),
  title: { default: "LoloBuy Spreadsheet: Finds, QC Photos & Shipping Guide (2026)", template: "%s | LoloBuy Sheet" },
  description: "Research LoloBuy spreadsheet finds with product categories, QC-photo checks, warehouse planning and shipping-cost guidance for US and European buyers.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: { title: "LoloBuy Spreadsheet: Finds, QC Photos & Shipping Guide", description: "Independent product research for global buyers", url: "https://lolobuysheet.lt/", siteName: "LoloBuy Sheet", images: [{ url: "/og.png", width: 1731, height: 909, alt: "LoloBuy Spreadsheet — independent product research for global buyers" }], type: "website" },
  twitter: { card: "summary_large_image", title: "LoloBuy Spreadsheet: Finds, QC Photos & Shipping Guide", description: "Independent product research for global buyers", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZK5X5Z51KD" strategy="afterInteractive" />
      <Script id="ga4-lolobuysheet-lt" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ZK5X5Z51KD');`}
      </Script>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "LoloBuy Sheet",
        url: "https://lolobuysheet.lt/",
        description: "Independent LoloBuy spreadsheet research, product discovery and buying guides.",
        inLanguage: ["en", "es", "fr", "de", "it", "pl", "nl", "sv", "no", "da", "pt", "cs", "ro", "hu", "fi", "el", "tr", "lt", "lv", "et", "sk", "bg", "hr", "ga"],
        potentialAction: {
          "@type": "SearchAction",
          target: "https://findspreadsheet.com/search.html?keywords={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }) }} />
      {children}
    </body></html>
  );
}
