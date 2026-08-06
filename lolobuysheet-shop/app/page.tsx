import type { Metadata } from "next";
import SitePage from "./SitePage";
import { localeCodes } from "./site-data";

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet 2026 | Researched Product Finds & Buyer Guides",
  description: "Independent LoloBuy spreadsheet research with verified product links, QC checklists, beginner guidance, and shipping research for Europe and North America.",
  alternates: {
    canonical: "https://lolobuysheet.shop/",
    languages: Object.fromEntries([...localeCodes.map((code) => [code, code === "en" ? "https://lolobuysheet.shop/" : `https://lolobuysheet.shop/${code}`]), ["x-default", "https://lolobuysheet.shop/"]]),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "LoloBuy Spreadsheet 2026 | Researched Product Finds & Buyer Guides",
    description: "Independent LoloBuy spreadsheet research with verified product links, QC checklists, beginner guidance, and shipping research for Europe and North America.",
    url: "https://lolobuysheet.shop/",
    siteName: "LoloBuy Sheet",
    type: "website",
    images: [{ url: "/lolobuy-research-desk.jpg", width: 1536, height: 1024, alt: "LoloBuy Sheet research desk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LoloBuy Spreadsheet 2026 | Researched Product Finds & Buyer Guides",
    description: "Independent LoloBuy spreadsheet research with verified product links, QC checklists, beginner guidance, and shipping research for Europe and North America.",
    images: ["/lolobuy-research-desk.jpg"],
  },
};

export default function Home() { return <SitePage lang="en" path="/" />; }
