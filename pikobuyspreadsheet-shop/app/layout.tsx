import type { Metadata } from "next";
import "./globals.css";
import { SiteIdentityJsonLd } from "./structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuyspreadsheet.shop"),
  title: {
    default: "PikoBuy Spreadsheet 2026: Product Finds, QC & Shipping Guides",
    template: "%s | PikoBuy Spreadsheet",
  },
  description: "Search focused PikoBuy finds, compare category-specific QC checks and review current official shipping and return information.",
  robots: { index: true, follow: true },
  applicationName: "PikoBuy Spreadsheet Research Hub",
  creator: "PikoBuy Spreadsheet Research Hub",
  publisher: "PikoBuy Spreadsheet Research Hub",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "PikoBuy Spreadsheet Research Hub",
    title: "PikoBuy Spreadsheet 2026: Product Finds, QC & Shipping Guides",
    description: "Independent PikoBuy product research, QC checklists, shipping planning and source-checked buyer guides.",
    url: "https://pikobuyspreadsheet.shop/",
    images: [{ url: "/og-pikobuy-spreadsheet.png", width: 1200, height: 630, alt: "PikoBuy Spreadsheet 2026 research hub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PikoBuy Spreadsheet 2026: Product Finds, QC & Shipping Guides",
    description: "Independent PikoBuy product research, QC checklists, shipping planning and source-checked buyer guides.",
    images: ["/og-pikobuy-spreadsheet.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteIdentityJsonLd />{children}</body></html>;
}
