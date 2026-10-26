import ResearchShell from "../research-shell";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "PikoBuy Guides: QC Photos, Links, Sizing & Shipping", description: "Evidence-led PikoBuy guides for source links, QC photos, parcel weight, route checks and size measurements.", alternates: { canonical: "/guides" } };
export default function GuidesPage(){ return <ResearchShell page="guides"/>; }
