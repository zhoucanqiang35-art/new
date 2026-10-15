import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lolobuyspreadsheet.pl"),
  title: {
    default: "LoloBuy Spreadsheet Poland | QC Photos, Fees & Shipping Guide",
    template: "%s | LoloBuy Spreadsheet Poland",
  },
  description: "Independent LoloBuy spreadsheet guide for Poland and Europe: product research, visible QC photos, warehouse checks, parcel planning and current shipping-cost context.",
  keywords: ["LoloBuy spreadsheet", "LoloBuy Poland", "LoloBuy QC photos", "LoloBuy fees", "LoloBuy shipping", "LoloBuy warehouse", "parcel planning"],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title:"LoloBuy Spreadsheet Poland | QC Photos, Fees & Shipping Guide", description:"Independent product research, QC and parcel-planning guides for LoloBuy buyers in Poland and Europe.", url:"https://lolobuyspreadsheet.pl/", type:"website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
