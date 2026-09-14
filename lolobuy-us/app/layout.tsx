import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LoloBuy Spreadsheet 2026 — Independent QC & Buying Guide",
    template: "%s | LoloBuy US",
  },
  description: "An independent, source-led LoloBuy spreadsheet, QC, warehouse, shipping and tracking guide for shoppers in the United States and Europe.",
  robots: { index: false, follow: false },
  other: { "codex-preview": "public-inspection" },
  openGraph: {
    title: "LoloBuy Spreadsheet 2026 — Independent QC & Buying Guide",
    description: "Product discovery with context: categories, QC methodology, parcel planning and official-source checks.",
    type: "website",
    siteName: "LoloBuy US",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/lolobuy-logo.webp", shortcut: "/lolobuy-logo.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
