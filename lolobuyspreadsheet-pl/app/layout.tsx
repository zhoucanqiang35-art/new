import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet Europe | Product Finds, QC & Shipping Guide",
  description: "An independent multilingual guide to finding products, checking listings, reviewing QC photos and planning international shipping with LoloBuy.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
