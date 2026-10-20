import type { Metadata } from "next";
import "./globals.css";
import { locales } from "../lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuyspreadsheet.pro"),
  title: "PikoBuy Spreadsheet: Search Finds, QC Photos & Shipping Guide (2026)",
  description: "Search PikoBuy spreadsheet finds by category, compare source links and QC photos, then plan sizing, returns, tracking and shipping with independent research guides.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/", languages: { "x-default": "/", ...Object.fromEntries(locales.map(locale => [locale.lang, `/${locale.code}`])) } },
  openGraph: { title: "PikoBuy Spreadsheet: Search Finds, QC Photos & Shipping Guide", description: "Compare source links and QC photos, then use independent guides for size charts, returns, tracking and shipping.", type: "website" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
