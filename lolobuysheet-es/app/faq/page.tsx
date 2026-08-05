import type { Metadata } from "next";
import { buildMetadata, translatedFaqLocales } from "../seo";
import { StandalonePage } from "../standalone-page";

export const metadata: Metadata = buildMetadata({
  title: "LoloBuy FAQ — Spreadsheet, QC, Shipping and Return Answers",
  description: "Clear answers to common LoloBuy spreadsheet, warehouse QC, shipping estimate, storage and return questions.",
  path: "/faq",
  alternateLocales: translatedFaqLocales,
});

export default function FaqPage() {
  return <StandalonePage section="faq" />;
}
