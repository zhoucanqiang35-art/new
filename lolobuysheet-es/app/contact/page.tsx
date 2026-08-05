import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import { TrustPage } from "../trust-page";

export const metadata: Metadata = buildMetadata({ title: "Contact | LoloBuy Sheet", description: "Contact the LoloBuy Sheet editorial team about factual corrections, source questions or product-link issues.", path: "/contact" });
export default function ContactPage() { return <TrustPage slug="contact" />; }

