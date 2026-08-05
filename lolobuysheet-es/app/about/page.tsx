import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import { TrustPage } from "../trust-page";

export const metadata: Metadata = buildMetadata({ title: "About LoloBuy Sheet", description: "Learn how LoloBuy Sheet provides independent product research, QC education and shipping guidance.", path: "/about" });
export default function AboutPage() { return <TrustPage slug="about" />; }

