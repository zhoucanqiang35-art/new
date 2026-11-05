import type { Metadata } from "next";
import { HomeClient } from "@/components/home-client";

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet UK | Product Finds, QC & Shipping Guides",
  description: "Explore LoloBuy spreadsheet product categories, check listings and use practical quality-control and shipping guides.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeClient />;
}
