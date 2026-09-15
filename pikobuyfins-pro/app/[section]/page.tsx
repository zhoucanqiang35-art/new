import SiteApp from "../site-app";

const allowed = ["categories", "products", "guides", "faq"] as const;

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  return <SiteApp active={allowed.includes(section as (typeof allowed)[number]) ? section : "home"} />;
}
