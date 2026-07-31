import type { Metadata } from "next";
import { StandalonePage } from "../standalone-page";

export const metadata: Metadata = {
  title: "LoloBuy Updates — Official Platform Notices Explained",
  description: "Follow recent LoloBuy app, payment, warehouse and value-added service notices with practical shopper context.",
  alternates: { canonical: "https://lolobuysheet.es/updates" },
};

export default function UpdatesPage() {
  return <StandalonePage section="updates" />;
}
