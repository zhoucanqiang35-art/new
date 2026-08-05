import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import { TrustPage } from "../trust-page";

export const metadata: Metadata = buildMetadata({ title: "Privacy | LoloBuy Sheet", description: "Read how LoloBuy Sheet handles basic technical request data, external links and visitor privacy.", path: "/privacy" });
export default function PrivacyPage() { return <TrustPage slug="privacy" />; }

