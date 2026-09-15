import type { Metadata } from "next";
import "./globals.css";
import { homepageDescription, homepageTitle } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuyspreadsheet.es"),
  title: { default: homepageTitle, template: "%s | PikoBuy Spreadsheet" },
  description: homepageDescription,
  robots: { index: true, follow: true },
  openGraph: { title: "PikoBuy Spreadsheet Europe", description: "Finds, QC, shipping and country research — independently verified.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
