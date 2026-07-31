import type { ReactNode } from "react";
import { getUiCopy } from "./i18n";

export const siteLanguages = [
  ["EN", "English"], ["ES", "Español"], ["DE", "Deutsch"], ["FR", "Français"],
  ["IT", "Italiano"], ["PT", "Português"], ["NL", "Nederlands"], ["PL", "Polski"],
  ["SV", "Svenska"], ["DA", "Dansk"], ["NO", "Norsk"], ["FI", "Suomi"],
  ["CS", "Čeština"], ["RO", "Română"], ["HU", "Magyar"], ["EL", "Ελληνικά"],
  ["UK", "Українська"], ["TR", "Türkçe"], ["RU", "Русский"], ["BG", "Български"],
  ["JA", "日本語"], ["KO", "한국어"], ["AR", "العربية"], ["ZH", "中文"],
] as const;

export const supportedLocales = new Set(siteLanguages.map(([code]) => code.toLowerCase()));

const sectionSlugs = ["spreadsheet", "categories", "guides", "seo-articles", "updates", "faq"] as const;

export const sectionTitles: Record<string, string> = {
  spreadsheet: "LoloBuy Spreadsheet",
  categories: "LoloBuy Product Categories",
  guides: "LoloBuy Buyer Guides",
  "seo-articles": "LoloBuy SEO Articles",
  updates: "LoloBuy Official Updates",
  faq: "LoloBuy Questions and Answers",
};

export function localePath(locale: string, path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return locale === "en" ? cleanPath : `/${locale}${cleanPath === "/" ? "/" : cleanPath}`;
}

export function SiteHeader({
  locale = "en",
  currentPath = "/",
}: {
  locale?: string;
  currentPath?: string;
}) {
  const active = siteLanguages.find(([code]) => code.toLowerCase() === locale) || siteLanguages[0];
  const home = localePath(locale, "/");
  const ui = getUiCopy(locale);

  return (
    <>
      <div className="preview-ribbon">
        <span>{ui.previewBadge}</span>
        <p>{ui.previewText}</p>
      </div>
      <header className="site-header">
        <a className="brand" href={home} aria-label="LoloBuy Sheet home">
          <img className="brand-logo" src="/lolobuy.webp" alt="" width="44" height="44" />
          <span>LoloBuy <b>Sheet</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {sectionSlugs.map((slug, index) => (
            <a href={localePath(locale, `/${slug}`)} key={slug}>{ui.nav[index]}</a>
          ))}
        </nav>
        <div className="header-actions">
          <details className="mobile-pages">
            <summary aria-label={ui.pages}>{ui.pages} <span>⌄</span></summary>
            <div className="mobile-pages-menu">
              {sectionSlugs.map((slug, index) => (
                <a href={localePath(locale, `/${slug}`)} key={slug}>{ui.nav[index]}</a>
              ))}
            </div>
          </details>
          <details className="language-menu">
            <summary aria-label={ui.chooseLanguage}>{active[0]} <span>⌄</span></summary>
            <div className="language-grid">
              {siteLanguages.map(([code, name]) => {
                const nextLocale = code.toLowerCase();
                return (
                  <a
                    className={nextLocale === locale ? "current" : ""}
                    href={localePath(nextLocale, currentPath)}
                    key={code}
                  >
                    <b>{code}</b><span>{name}</span>
                  </a>
                );
              })}
            </div>
          </details>
          <a className="button small" href="https://findspreadsheet.com" target="_blank" rel="noreferrer">
            {ui.fullDatabase} <span>↗</span>
          </a>
        </div>
      </header>
    </>
  );
}

export function SiteFooter({ locale = "en" }: { locale?: string }) {
  const ui = getUiCopy(locale);
  return (
    <footer>
      <div className="footer-brand">
        <a className="brand" href={localePath(locale, "/")}>
          <img className="brand-logo" src="/lolobuy.webp" alt="" width="44" height="44" />
          <span>LoloBuy <b>Sheet</b></span>
        </a>
        <p>{ui.footerIntro}</p>
      </div>
      <div><b>{ui.explore}</b>{sectionSlugs.slice(0, 3).map((slug, index) => <a href={localePath(locale, `/${slug}`)} key={slug}>{ui.nav[index]}</a>)}</div>
      <div><b>{ui.research}</b>{sectionSlugs.slice(3).map((slug, index) => <a href={localePath(locale, `/${slug}`)} key={slug}>{ui.nav[index + 3]}</a>)}</div>
      <div><b>{ui.sources}</b><a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">{ui.mainDatabase} ↗</a></div>
      <p className="legal">{ui.legal}</p>
    </footer>
  );
}

export function PageFrame({
  locale = "en",
  currentPath,
  children,
}: {
  locale?: string;
  currentPath: string;
  children: ReactNode;
}) {
  return (
    <main dir={locale === "ar" ? "rtl" : "ltr"}>
      <SiteHeader locale={locale} currentPath={currentPath} />
      {children}
      <SiteFooter locale={locale} />
    </main>
  );
}
