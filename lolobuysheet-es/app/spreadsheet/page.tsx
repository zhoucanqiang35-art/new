import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import { StandalonePage } from "../standalone-page";

export const metadata: Metadata = buildMetadata({
  title: "LoloBuy Spreadsheet 2026 — Checked Finds & Buying Context",
  description: "Browse an independent LoloBuy spreadsheet with clearly labelled review dates, category context and practical verification limits.",
  path: "/spreadsheet",
});

export default function SpreadsheetPage() {
  return <StandalonePage section="spreadsheet" />;
}
