import type { Metadata } from "next";
import "./globals.css";
import { localeCodes, localePath } from "./data/locales";

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet DE — Independent QC & Shipping Guide",
  description: "Independent LoloBuy spreadsheet, QC, warehouse, shipping and product-discovery guide for Germany, Europe, the US, UK, Canada and Australia.",
  metadataBase: new URL("https://lolobuyspreadsheet.de"),
  alternates: { canonical: "/", languages: { ...Object.fromEntries(localeCodes.map(code => [code, localePath(code)])), "x-default": "/" } },
  robots: { index: false, follow: true },
  openGraph: { title: "LoloBuy Spreadsheet DE", description: "A source-led LoloBuy QC and shipping guide.", type: "website" },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
