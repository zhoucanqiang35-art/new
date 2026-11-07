import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "./analytics";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LoloBuy Spreadsheet 2026 | Finds, Links & Buying Guide",
    template: "%s | LoloBuy US",
  },
  description: "Browse LoloBuy spreadsheet finds by category, compare estimated USD prices and open matching product links. Explore independent buying and shipping guides.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "LoloBuy Spreadsheet 2026 | Finds, Links & Buying Guide",
    description: "Product discovery with context: categories, QC methodology, parcel planning and official-source checks.",
    type: "website",
    siteName: "LoloBuy US",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/lolobuy-official-logo.svg", shortcut: "/lolobuy-official-logo.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><Analytics />{children}</body></html>;
}

