import type { Metadata } from "next";
import "./globals.css";
import { indexableRobots, pageAlternates, SITE_URL } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PikoBuy Spreadsheet Europe | Finds, QC & Shipping Guides",
  description: "Independent PikoBuy spreadsheet research for Europe: browse FindSpreadsheet products, review QC photos, understand returns and estimate parcel shipping.",
  robots: indexableRobots,
  alternates: pageAlternates("/"),
  openGraph: {
    title: "PikoBuy Spreadsheet Europe",
    description: "Product finds, warehouse QC, returns and Europe shipping—checked against current sources.",
    type: "website",
    url: SITE_URL,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PikoBuy Spreadsheet Europe — Finds, QC and Shipping" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PikoBuy Spreadsheet Europe",
    description: "Product finds, warehouse QC, returns and Europe shipping—checked against current sources.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
