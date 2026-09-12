"use client";

import { useEffect, useState } from "react";

export type Locale = "en" | "de" | "fr" | "es" | "it" | "pt" | "nl" | "pl" | "sv";
const locales: Locale[] = ["en", "de", "fr", "es", "it", "pt", "nl", "pl", "sv"];

const labels: Record<Locale, { home: string; categories: string; details: string; articles: string; faq: string }> = {
  en: { home: "Home", categories: "Product categories", details: "Product details", articles: "SEO articles", faq: "FAQ" },
  de: { home: "Startseite", categories: "Produktkategorien", details: "Produktdetails", articles: "SEO-Artikel", faq: "FAQ" },
  fr: { home: "Accueil", categories: "Catégories", details: "Détails produits", articles: "Articles SEO", faq: "FAQ" },
  es: { home: "Inicio", categories: "Categorías", details: "Detalles del producto", articles: "Artículos SEO", faq: "FAQ" },
  it: { home: "Home", categories: "Categorie", details: "Dettagli prodotto", articles: "Articoli SEO", faq: "FAQ" },
  pt: { home: "Início", categories: "Categorias", details: "Detalhes do produto", articles: "Artigos SEO", faq: "FAQ" },
  nl: { home: "Home", categories: "Productcategorieën", details: "Productdetails", articles: "SEO-artikelen", faq: "FAQ" },
  pl: { home: "Strona główna", categories: "Kategorie", details: "Szczegóły produktu", articles: "Artykuły SEO", faq: "FAQ" },
  sv: { home: "Hem", categories: "Produktkategorier", details: "Produktdetaljer", articles: "SEO-artiklar", faq: "FAQ" },
};

export function useSiteLocale() {
  const [locale, setLocale] = useState<Locale>("en");
  useEffect(() => { const value = new URLSearchParams(window.location.search).get("lang") as Locale | null; if (value && locales.includes(value)) setLocale(value); }, []);
  return locale;
}

export function SiteHeader() {
  const locale = useSiteLocale();
  const t = labels[locale];
  const changeLocale = (next: Locale) => {
    window.location.href = `${window.location.pathname}?lang=${next}`;
  };
  const link = (path: string) => `${path}?lang=${locale}`;
  return <header className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-5 sm:px-8 lg:px-12">
    <a href={link("/")} className="flex items-center"><img src="/images/lolobuy-logo.png" alt="LoloBuy" className="h-9 w-auto" /></a>
    <nav className="hidden items-center gap-5 text-sm font-semibold text-[#40506d] lg:flex">
      <a href={link("/")}>{t.home}</a><a href={link("/product-categories")}>{t.categories}</a><a href={link("/product-details")}>{t.details}</a><a href={link("/seo-articles")}>{t.articles}</a><a href={link("/faq")}>{t.faq}</a>
    </nav>
    <select aria-label="Choose site language" value={locale} onChange={e => changeLocale(e.target.value as Locale)} className="rounded-xl border border-[#cbd3e6] bg-white px-3 py-2 text-sm font-bold text-[#1647cf] outline-none focus:ring-2 focus:ring-[#ff6947]">
      {locales.map(item => <option key={item} value={item}>{item.toUpperCase()}</option>)}
    </select>
  </header>;
}
