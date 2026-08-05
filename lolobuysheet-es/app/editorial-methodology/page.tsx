import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import { TrustPage } from "../trust-page";

export const metadata: Metadata = buildMetadata({ title: "Editorial Methodology | LoloBuy Sheet", description: "See how LoloBuy Sheet checks sources, labels editorial advice, handles conflicts and corrects material errors.", path: "/editorial-methodology" });
export default function EditorialMethodologyPage() { return <TrustPage slug="editorial-methodology" />; }

