import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PikoBuy Spreadsheet Europe | Finds, QC & Shipping Guides",
  description: "Independent PikoBuy spreadsheet research for Europe: browse FindSpreadsheet products, review QC photos, understand returns and estimate parcel shipping.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "PikoBuy Spreadsheet Europe",
    description: "Product finds, warehouse QC, returns and Europe shipping—checked against current sources.",
    type: "website",
    images: [{ url: "https://pikobuyspreadsheet-eu.canqiangzhou32.chatgpt.site/og.png", width: 1200, height: 630, alt: "PikoBuy Spreadsheet Europe — Finds, QC and Shipping" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PikoBuy Spreadsheet Europe",
    description: "Product finds, warehouse QC, returns and Europe shipping—checked against current sources.",
    images: ["https://pikobuyspreadsheet-eu.canqiangzhou32.chatgpt.site/og.png"],
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
