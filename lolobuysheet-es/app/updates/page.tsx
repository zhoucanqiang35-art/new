import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import { StandalonePage } from "../standalone-page";

export const metadata: Metadata = buildMetadata({
  title: "LoloBuy Updates — Official Platform Notices Explained",
  description: "Follow recent LoloBuy app, payment, warehouse and value-added service notices with practical shopper context.",
  path: "/updates",
});

export default function UpdatesPage() {
  return <StandalonePage section="updates" />;
}
