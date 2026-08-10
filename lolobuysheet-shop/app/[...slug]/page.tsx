import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import SitePage from "../SitePage";
import { copy, isLocale, localeCodes, products, type LocaleCode } from "../site-data";
import { findEditorialArticle, isEditorialArticleAvailable } from "../editorial-data";

function resolve(slug: string[]) {
  const lang: LocaleCode = isLocale(slug[0]) ? slug[0] : "en";
  const rest = isLocale(slug[0]) ? slug.slice(1) : slug;
  return { lang, path: rest.length ? `/${rest.join("/")}` : "/" };
}

const staticPaths = new Set(["/", "/spreadsheet", "/categories", "/guides", "/guides/beginner", "/guides/qc", "/guides/shipping", "/reviews", "/faq", "/sources", "/method", "/seo-articles", "/updates"]);

function isKnownPath(path: string, lang: LocaleCode) {
  if (staticPaths.has(path)) return true;
  if (path.startsWith("/products/")) return products.some((item) => item.slug === path.slice("/products/".length));
  if (path.startsWith("/seo-articles/")) {
    const article = findEditorialArticle(path.slice("/seo-articles/".length));
    return Boolean(article && isEditorialArticleAvailable(article, lang));
  }
  return false;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const { lang, path } = resolve(slug);
  if (!isKnownPath(path, lang)) return { title: "Page not found", robots: { index: false, follow: false } };
  const c = copy[lang];
  const product = path.startsWith("/products/") ? products.find((item) => item.slug === path.slice("/products/".length)) : undefined;
  const editorialArticle = path.startsWith("/seo-articles/") ? findEditorialArticle(path.slice("/seo-articles/".length)) : undefined;
  const editorialIndex = editorialArticle ? ["how-to-use-lolobuy-spreadsheet", "lolobuy-qc-photo-checklist", "lolobuy-shipping-rehearsal-weight-routes"].indexOf(editorialArticle.slug) : -1;
  const localizedEditorialTitles = [c.spreadsheetTitle, `${c.nav[3]} · ${c.guidesTitle}`, `${c.nav[4]} · ${c.guidesTitle}`];
  const localizedEditorialDescriptions = [c.spreadsheetIntro, c.qcBody, c.shippingBody];
  const editorialTitle = lang === "en" ? editorialArticle?.title : localizedEditorialTitles[editorialIndex] ?? c.seoTitle;
  const editorialDescription = lang === "en" ? editorialArticle?.description : localizedEditorialDescriptions[editorialIndex] ?? c.seoIntro;
  const title = product ? `${product.name} · ${product.usd}` : editorialArticle ? editorialTitle : path === "/" ? c.heroTitle : path === "/spreadsheet" ? c.spreadsheetTitle : path === "/categories" ? c.categoryTitle : path.startsWith("/guides") ? c.guidesTitle : path === "/reviews" ? c.reviewTitle : path === "/faq" ? c.faqTitle : path === "/sources" ? c.source : path === "/method" ? c.checks : path === "/updates" ? c.updated : c.seoTitle;
  const description = product ? `${product.name}, ${product.usd}, ID ${product.itemId}. ${c.researchNote}` : editorialArticle ? editorialDescription : path === "/" ? c.heroLede : path === "/spreadsheet" ? c.spreadsheetIntro : path.startsWith("/guides") ? c.guidesIntro : path === "/reviews" ? c.reviewIntro : path === "/faq" ? c.faqIntro : path === "/sources" || path === "/method" || path === "/updates" ? c.researchNote : c.seoIntro;
  const localizedCanonical = (code: LocaleCode) => path === "/"
    ? `https://lolobuysheet.shop${code === "en" ? "/" : `/${code}`}`
    : `https://lolobuysheet.shop${code === "en" ? "" : `/${code}`}${path}`;
  const canonical = localizedCanonical(lang);
  const availableLocales = editorialArticle?.locales === "en" ? (["en"] as const) : localeCodes;
  const languages = Object.fromEntries([...availableLocales.map((code) => [code, localizedCanonical(code)]), ["x-default", localizedCanonical("en")]]);
  const socialImage = product ? product.image : "/lolobuy-research-desk.jpg";
  return {
    title,
    description,
    alternates: { canonical, languages },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "LoloBuy Sheet",
      type: editorialArticle ? "article" : "website",
      images: [{ url: socialImage, alt: product?.name ?? "LoloBuy Sheet research desk" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

export default async function RoutedPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const { lang, path } = resolve(slug);
  if (slug[0] === "en") permanentRedirect(path);
  if (!isKnownPath(path, lang)) notFound();
  return <SitePage lang={lang} path={path} />;
}
