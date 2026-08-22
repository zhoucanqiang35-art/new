import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lolobuysheet.cc"),
  title: { default: "LoloBuy Spreadsheet Guide for Global Buyers", template: "%s | LoloBuy Sheet" },
  description: "Independent LoloBuy spreadsheet research for product discovery, QC photos, warehouse planning, shipping and tracking.",
  robots: { index: true, follow: true },
  openGraph: { title: "LoloBuy Spreadsheet Guide for Global Buyers", description: "Research first. Order second.", type: "website", images: ["https://lolobuysheet.cc/og.png"] },
  twitter: { card: "summary_large_image", title: "LoloBuy Spreadsheet Guide for Global Buyers", description: "Research first. Order second.", images: ["https://lolobuysheet.cc/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
