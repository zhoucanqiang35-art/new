import type { Metadata } from "next";
import { StandalonePage } from "../standalone-page";

export const metadata: Metadata = {
  title: "LoloBuy Guides — Ordering, QC, Shipping, Returns & Storage",
  description: "Practical LoloBuy buyer guides based on official help material, with facts separated from editorial recommendations.",
  alternates: { canonical: "https://lolobuysheet.es/guides" },
};

export default function GuidesPage() {
  return <StandalonePage section="guides" />;
}
