import type { Metadata } from "next";
import "./globals.css";
import { localeCodes, localePath } from "./data/locales";

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet 2026: QC Photos, Product Finds & Shipping Guide",
  description: "Independent LoloBuy spreadsheet guide: find product links, check QC photos, plan warehouse storage and compare shipping decisions before a parcel is submitted.",
  metadataBase: new URL("https://lolobuyspreadsheet.de"),
  alternates: { canonical: "/", languages: { ...Object.fromEntries(localeCodes.map(code => [code, localePath(code)])), "x-default": "/" } },
  robots: { index: true, follow: true },
  openGraph: { title: "LoloBuy Spreadsheet 2026", description: "A source-led LoloBuy guide to product links, QC photos, warehouse storage and shipping.", type: "website" },
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
