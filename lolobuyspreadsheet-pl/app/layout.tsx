import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lolobuyspreadsheet.pl"),
  title: "LoloBuy Spreadsheet 2026 | Finds, QC & Shipping Guides",
  description: "An independent multilingual guide to finding products, checking listings, reviewing QC photos and planning international shipping with LoloBuy.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title:"LoloBuy Spreadsheet 2026 | Finds, QC & Shipping Guides", description:"Independent product-discovery, QC and parcel-planning guides for LoloBuy buyers in Europe.", url:"https://lolobuyspreadsheet.pl/", type:"website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
