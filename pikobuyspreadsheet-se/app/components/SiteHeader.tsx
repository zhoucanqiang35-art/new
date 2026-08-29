"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
  ["en", "English"], ["de", "Deutsch"], ["fr", "Français"], ["es", "Español"],
  ["it", "Italiano"], ["nl", "Nederlands"], ["pl", "Polski"], ["sv", "Svenska"], ["pt", "Português"],
] as const;

const navLabels: Record<string, string[]> = {
  en:["Home","Categories","Products","Guides","SEO Articles","FAQ"], de:["Startseite","Kategorien","Produkte","Ratgeber","SEO-Artikel","FAQ"],
  fr:["Accueil","Catégories","Produits","Guides","Articles SEO","FAQ"], es:["Inicio","Categorías","Productos","Guías","Artículos SEO","FAQ"],
  it:["Home","Categorie","Prodotti","Guide","Articoli SEO","FAQ"], nl:["Home","Categorieën","Producten","Gidsen","SEO-artikelen","FAQ"],
  pl:["Strona główna","Kategorie","Produkty","Poradniki","Artykuły SEO","FAQ"], sv:["Hem","Kategorier","Produkter","Guider","SEO-artiklar","FAQ"],
  pt:["Início","Categorias","Produtos","Guias","Artigos SEO","FAQ"],
};

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const first = pathname.split("/")[1];
  const language = languages.some(([code]) => code === first) ? first : "en";
  const basePath = language === "en" ? pathname : pathname.replace(new RegExp(`^/${language}(?=/|$)`), "") || "/";
  const prefix = language === "en" ? "" : `/${language}`;
  const labels = navLabels[language] || navLabels.en;
  const paths = ["/", "/categories", "/products", "/guides", "/seo-articles", "/faq"];
  const languageTarget = (next: string) => next === "en" ? basePath : `/${next}${basePath === "/" ? "" : basePath}`;
  return (
    <header className="site-header">
      <Link className="brand brand-logo-link" href={prefix || "/"} aria-label="PikoBuy Spreadsheet home">
        <img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" />
      </Link>
      <nav aria-label="Main navigation">
        {paths.map((path, index) => <Link key={path} href={`${prefix}${path === "/" ? "" : path}` || "/"}>{labels[index]}</Link>)}
      </nav>
      <div className="language-fixed">
        <details className="language-picker">
          <summary className="language-trigger" aria-label="Choose language">{languages.find(([code]) => code === language)?.[1]} <span aria-hidden="true">⌄</span></summary>
          <div className="language-menu">{languages.map(([code, label]) => <a key={code} href={languageTarget(code)} lang={code} aria-current={code === language ? "page" : undefined}>{label}</a>)}</div>
        </details>
      </div>
    </header>
  );
}
