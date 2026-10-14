import { notFound, permanentRedirect } from "next/navigation";
import { guideOrder, type GuideSlug } from "../../../data/guides";

export function generateStaticParams() { return guideOrder.map(slug => ({ slug })); }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!guideOrder.includes(slug as GuideSlug)) notFound();
  permanentRedirect(`/de/guide/${slug}`);
}
