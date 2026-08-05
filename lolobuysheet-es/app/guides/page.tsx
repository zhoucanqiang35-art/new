import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import { StandalonePage } from "../standalone-page";

export const metadata: Metadata = buildMetadata({
  title: "LoloBuy Guides — Ordering, QC, Shipping, Returns & Storage",
  description: "Practical LoloBuy buyer guides based on official help material, with facts separated from editorial recommendations.",
  path: "/guides",
});

export default function GuidesPage() {
  return <StandalonePage section="guides" />;
}
