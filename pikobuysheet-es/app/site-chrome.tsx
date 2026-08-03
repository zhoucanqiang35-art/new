"use client";

import { useEffect, useRef, useState } from "react";
import { getInterfaceLabels, getLocaleCopy, localeCopies, localPath, navKeys, type PageKey } from "./site-config";

function GlobeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>;
}

export function SiteHeader({ locale = "en", active = "home", articleSlug }: { locale?: string; active?: PageKey; articleSlug?: string }) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const copy = getLocaleCopy(locale);
  const labels = getInterfaceLabels(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    const close = (event: PointerEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) setLanguageOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
    };
  }, [locale]);

  const localeTarget = (nextLocale: string) => {
    const page = active === "home" ? "home" : active;
    const base = localPath(nextLocale, page);
    return articleSlug ? `${base}/${articleSlug}` : base;
  };

  return (
    <header className="site-header">
      <a className="brand brand-image" href={localPath(locale, "home")} aria-label="PikoBuy Sheet home">
        <img src="/pikobuy-logo.png" alt="PikoBuy" width="204" height="48" />
        <span>Sheet</span>
      </a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open navigation">
        <span/><span/><span/>
      </button>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
        {navKeys.map((key) => (
          <a key={key} className={active === key ? "active" : ""} href={localPath(locale, key)} onClick={() => setMenuOpen(false)}>
            {copy.nav[key]}
          </a>
        ))}
      </nav>
      <div className="language-wrap" ref={languageRef}>
        <button className="language-button" onClick={() => setLanguageOpen(!languageOpen)} aria-expanded={languageOpen} aria-haspopup="menu">
          <GlobeIcon /> <span>{locale.toUpperCase()}</span><b>⌄</b>
        </button>
          <div className={languageOpen ? "language-menu open" : "language-menu"} role="menu" aria-label={copy.language} hidden={!languageOpen}>
            <p>{copy.language} · 24</p>
            <div>{localeCopies.map((item) => (
              <a key={item.code} className={locale === item.code ? "selected" : ""} href={localeTarget(item.code)} role="menuitem" hrefLang={item.code} lang={item.code} onClick={() => setLanguageOpen(false)}>
                <span><b>{item.code.toUpperCase()}</b>{item.nativeName}</span><i>{locale === item.code ? "✓" : ""}</i>
              </a>
            ))}</div>
            <small>{labels.languageNote}</small>
          </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale = "en" }: { locale?: string }) {
  const copy = getLocaleCopy(locale);
  const labels = getInterfaceLabels(locale);
  return (
    <footer>
      <div>
        <a className="brand brand-image footer-logo" href={localPath(locale, "home")}><img src="/pikobuy-logo.png" alt="PikoBuy" width="204" height="48"/><span>Sheet</span></a>
        <p>{copy.independent}</p>
      </div>
      <div>
        <b>{copy.nav.method}</b>
        <a href={localPath(locale, "spreadsheet")}>{copy.nav.spreadsheet}</a>
        <a href={localPath(locale, "method")}>{copy.nav.method}</a>
        <a href={localPath(locale, "updates")}>{copy.nav.updates}</a>
        <a href={localPath(locale, "seo-articles")}>{copy.nav["seo-articles"]}</a>
      </div>
      <div>
        <b>{labels.officialSources}</b>
        <a href="https://www.pikobuy.com/guide" target="_blank" rel="noopener noreferrer">PikoBuy · {copy.nav.guides} ↗</a>
        <a href="https://www.pikobuy.com/shipping-cost" target="_blank" rel="noopener noreferrer">PikoBuy · {copy.nav.method} 01 ↗</a>
        <a href="https://www.pikobuy.com/protocol/returns" target="_blank" rel="noopener noreferrer">PikoBuy · {copy.nav.method} 02 ↗</a>
      </div>
      <p className="legal">{locale === "en" ? "PikoBuy Sheet is an independent informational website. It is not affiliated with, endorsed by, or operated by PikoBuy. External prices, links, policies, and availability can change." : `${copy.independent} ${copy.homeIntro}`} © 2026 PikoBuy Sheet.</p>
    </footer>
  );
}
