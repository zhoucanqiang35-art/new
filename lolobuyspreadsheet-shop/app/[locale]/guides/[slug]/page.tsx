import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoHeader } from "@/components/seo-header";
import { getGuide, guideKeys, guideProse, isLocale, locales, localPath, seoMetadata, siteUrl, type GuideKey, ui } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) => guideKeys().map((key) => ({ locale, slug: getGuide(key, locale).slug })));
}

function guideKey(slug: string): GuideKey | undefined {
  return guideKeys().find((key) => getGuide(key, "en").slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const key = guideKey(slug);
  if (!key) return {};
  const guide = getGuide(key, locale);
  return seoMetadata(locale, `/{locale}/guides/${guide.slug}`, guide.title, guide.description);
}

export default async function GuidePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const key = guideKey(slug);
  if (!key) notFound();
  const guide = getGuide(key, locale);
  const t = ui(locale);
  const prose = guideProse(locale);
  const content = locale === "en" ? guide : prose;
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, datePublished: "2026-10-20", dateModified: "2026-10-20", inLanguage: locale, mainEntityOfPage: `${siteUrl}/${locale}/guides/${guide.slug}`, author: { "@type": "Organization", name: "LoloBuy Spreadsheet Research Atlas" }, publisher: { "@type": "Organization", name: "LoloBuy Spreadsheet Research Atlas" } };
  const related = guideKeys().filter((item) => item !== key).slice(0, 3);

  return <main lang={locale} className="min-h-screen bg-[#e8ebf4] text-[#10213b]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SeoHeader locale={locale} />
    <article className="mx-auto max-w-4xl px-5 pb-16 pt-8 sm:px-8">
      <a href={localPath(locale, "/guides")} className="text-sm font-bold text-[#1647cf]">← {t.guides}</a>
      <p className="mt-9 text-xs font-extrabold tracking-[.16em] text-[#ff6947]">{guide.keyword.toUpperCase()} · REVIEWED 20 OCT 2026</p>
      <h1 className="mt-4 text-4xl font-black leading-[.98] tracking-[-.06em] sm:text-6xl">{guide.title}</h1>
      <p className="mt-6 text-lg leading-8 text-[#40506d]">{guide.description}</p>
      <aside className="mt-9 rounded-2xl border border-[#cbd3e6] bg-[#edf1fb] p-5 text-sm leading-7 text-[#40506d]"><strong>{t.checked}</strong></aside>
      <div className="mt-10 space-y-10 rounded-[2rem] bg-white p-6 shadow-sm sm:p-10">
        <section><h2 className="text-2xl font-black tracking-[-.04em]">{t.evidence}</h2><p className="mt-4 leading-8 text-[#40506d]">{content.focus}</p><p className="mt-4 leading-8 text-[#40506d]">{t.intro}</p></section>
        <section><h2 className="text-2xl font-black tracking-[-.04em]">{t.record}</h2><p className="mt-4 leading-8 text-[#40506d]">{content.record}</p><div className="mt-5 rounded-2xl bg-[#f6f8fd] p-5"><p className="text-sm font-extrabold text-[#1647cf]">{t.checklist}</p><ul className="mt-3 space-y-2 text-sm leading-6 text-[#40506d]">{prose.checklist.map((item) => <li key={item}>• {item}</li>)}</ul></div></section>
        <section><h2 className="text-2xl font-black tracking-[-.04em]">{t.limit}</h2><p className="mt-4 leading-8 text-[#40506d]">{content.limit}</p><p className="mt-4 leading-8 text-[#40506d]">{prose.limit}</p></section>
        <section><h2 className="text-2xl font-black tracking-[-.04em]">{t.action}</h2><p className="mt-4 leading-8 text-[#40506d]">{content.action}</p><p className="mt-4 leading-8 text-[#40506d]">{prose.action}</p></section>
      </div>
      <section className="mt-10"><p className="text-xs font-extrabold tracking-[.15em] text-[#ff6947]">CONTINUE RESEARCH</p><div className="mt-4 grid gap-3 md:grid-cols-3">{related.map((item) => { const relatedGuide = getGuide(item, locale); return <a key={item} href={localPath(locale, `/guides/${relatedGuide.slug}`)} className="rounded-2xl border border-[#cbd3e6] bg-white p-5 text-sm font-extrabold hover:border-[#1647cf]">{relatedGuide.title} →</a>; })}</div></section>
    </article>
  </main>;
}
