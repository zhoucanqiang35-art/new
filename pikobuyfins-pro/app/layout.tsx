import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuyfins.pro"),
  title: { default: "PikoBuy Spreadsheet 2026 | Links, QC Photos & Shipping", template: "%s | PikoBuyFins" },
  description: "Independent PikoBuy spreadsheet guide for product links, QC photos, sizing notes, source checks and shipping-weight research.",
  keywords: ["pikobuy spreadsheet", "pikobuy qc photos", "pikobuy links", "pikobuy shipping weight", "pikobuy size guide"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: "PikoBuyFins", url: "https://pikobuyfins.pro/", description: "Independent PikoBuy spreadsheet research guide." },
      { "@type": "Organization", name: "PikoBuyFins", url: "https://pikobuyfins.pro/" }
    ]
  };
  return <html lang="en"><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></head><body>{children}</body></html>;
}
