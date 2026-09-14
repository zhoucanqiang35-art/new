import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PikoBuy Spreadsheet SE | Product Finds, QC & Shipping Guides",
  description: "Search PikoBuy spreadsheet products, compare categories, review QC priorities, and plan China shopping agent orders for Europe and North America.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
