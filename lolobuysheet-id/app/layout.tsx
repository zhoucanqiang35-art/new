import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet 2026: Finds, QC Photos & Buying Guides",
  description: "Independent LoloBuy Spreadsheet research: compare listings, QC photos, product details and shipping questions before you search.",
  alternates:{ canonical:"https://lolobuysheet.id/" },
  icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className="antialiased">{children}</body></html>;}
