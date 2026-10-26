import SiteApp from "./site-app";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PikoBuy Spreadsheet 2026: Links, QC Photos & Shipping Checks",
  description: "Research PikoBuy spreadsheet links by category. Compare source context, QC photos, sizing notes and shipping weight before saving a find.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <SiteApp active="home" />;
}
