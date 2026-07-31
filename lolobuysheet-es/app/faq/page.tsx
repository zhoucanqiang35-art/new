import type { Metadata } from "next";
import { StandalonePage } from "../standalone-page";

export const metadata: Metadata = {
  title: "LoloBuy FAQ — Spreadsheet, QC, Shipping and Return Answers",
  description: "Clear answers to common LoloBuy spreadsheet, warehouse QC, shipping estimate, storage and return questions.",
  alternates: { canonical: "https://lolobuysheet.es/faq" },
};

export default function FaqPage() {
  return <StandalonePage section="faq" />;
}
