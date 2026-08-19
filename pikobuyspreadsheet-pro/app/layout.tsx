import type { Metadata } from "next";
import "./globals.css";
import { locales } from "../lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuyspreadsheet.pro"),
  title: "PikoBuy Spreadsheet 2026 — Product Finds, QC & Shipping Guide",
  description: "Search PikoBuy spreadsheet finds, score product evidence, review QC photos, plan shipping, understand returns and browse 24 language editions.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/", languages: { "x-default": "/", ...Object.fromEntries(locales.map(locale => [locale.lang, `/${locale.code}/`])) } },
  openGraph: { title: "PikoBuy Spreadsheet 2026", description: "Product discovery, live row scoring, QC, shipping and returns guidance in 24 language editions.", type: "website" },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
