import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuyspreadsheet.es"),
  title: { default: "PikoBuy Spreadsheet Europe — Finds, QC & Shipping Research", template: "%s | PikoBuy Spreadsheet Europe" },
  description: "Independent PikoBuy product discovery, shipping, warehouse QC and country research for buyers in Europe and the Americas.",
  robots: { index: true, follow: true },
  openGraph: { title: "PikoBuy Spreadsheet Europe", description: "Finds, QC, shipping and country research — independently verified.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
