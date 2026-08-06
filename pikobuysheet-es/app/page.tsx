import type { Metadata } from "next";
import HomeExperience from "./home-experience";

export const metadata: Metadata = {
  title: "PikoBuy Spreadsheet 2026 | QC Finds, Categories & Shopping Guide",
  description: "Browse the PikoBuy spreadsheet by category, compare QC notes, check source links, and learn how to use PikoBuy finds more safely in 2026.",
  alternates: {
    canonical: "https://pikobuysheet.es/",
  },
  openGraph: {
    type: "website",
    url: "https://pikobuysheet.es/",
    title: "PikoBuy Spreadsheet 2026 | QC Finds, Categories & Shopping Guide",
    description: "Browse the PikoBuy spreadsheet by category, compare QC notes, check source links, and learn how to use PikoBuy finds more safely in 2026.",
    siteName: "PikoBuy Sheet",
  },
  twitter: {
    card: "summary",
    title: "PikoBuy Spreadsheet 2026 | QC Finds, Categories & Shopping Guide",
    description: "Browse PikoBuy categories, compare source links and QC checkpoints, and follow a clearer 2026 research workflow.",
  },
};

export default function Home() {
  return <HomeExperience locale="en" />;
}
