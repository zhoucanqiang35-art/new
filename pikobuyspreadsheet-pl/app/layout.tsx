import type { Metadata } from "next";
import "./globals.css";
import { indexableRobots, pageAlternates, SITE_URL } from "./seo";

// Rebuild trigger for the current Cloudflare Pages project.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pikobuy Spreadsheet 2026 | Searchable Finds, QC Photos & Guides",
  description: "Search a Pikobuy spreadsheet for Taobao, Weidian, 1688 and Yupoo finds. Compare listings, QC photos, sizing and shipping weight before opening a product route.",
  robots: indexableRobots,
  alternates: pageAlternates("/"),
  openGraph: {
    title: "Pikobuy Spreadsheet 2026 | Searchable Finds & QC Photos",
    description: "Independent Pikobuy research: searchable finds, listing checks, QC photos and parcel planning.",
    type: "website",
    url: SITE_URL,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PikoBuy Spreadsheet Europe — Finds, QC and Shipping" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pikobuy Spreadsheet 2026 | Searchable Finds & QC Photos",
    description: "Independent Pikobuy research: searchable finds, listing checks, QC photos and parcel planning.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/pikobuy-favicon.svg",
    shortcut: "/pikobuy-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="codex-preview" content="development" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
