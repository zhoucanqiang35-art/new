import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import { TrustPage } from "../trust-page";

export const metadata: Metadata = buildMetadata({ title: "Affiliate Disclosure | LoloBuy Sheet", description: "Understand how external links and commercial relationships are kept separate from LoloBuy Sheet editorial standards.", path: "/affiliate-disclosure" });
export default function AffiliateDisclosurePage() { return <TrustPage slug="affiliate-disclosure" />; }

