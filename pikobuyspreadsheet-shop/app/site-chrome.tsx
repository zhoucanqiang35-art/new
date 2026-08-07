"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { LanguageCode, supportedLanguages, uiText } from "./i18n";
import { SiteTranslator } from "./site-translator";

export function SiteHeader({ language }: { language: LanguageCode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const words = uiText[language];
  const currentLanguage = supportedLanguages.find((item) => item.code === language) ?? supportedLanguages[0];
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (!languageOpen) return;
    const closeFromOutside = (event: MouseEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) setLanguageOpen(false);
    };
    const closeFromKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLanguageOpen(false);
    };
    document.addEventListener("mousedown", closeFromOutside);
    document.addEventListener("keydown", closeFromKeyboard);
    return () => {
      document.removeEventListener("mousedown", closeFromOutside);
      document.removeEventListener("keydown", closeFromKeyboard);
    };
  }, [languageOpen]);

  const changeLanguage = (next: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "en") params.delete("lang");
    else params.set("lang", next);
    setLanguageOpen(false);
    window.location.assign(`${pathname}${params.size ? `?${params.toString()}` : ""}`);
  };

  return (
    <>
    <SiteTranslator language={language} />
    <header className="preview-header site-header">
      <a className="preview-brand" href={`/${language === "en" ? "" : `?lang=${language}`}`}>
        <img src="/pikobuy-logo.png" width="204" height="48" alt="PikoBuy" />
        <small>{words.brandNote}</small>
      </a>
      <nav aria-label="Primary navigation">
        <a href={`/finds${language === "en" ? "" : `?lang=${language}`}`}>{words.finds}</a>
        <a href={`/qc-method${language === "en" ? "" : `?lang=${language}`}`}>{words.qc}</a>
        <a href={`/guides${language === "en" ? "" : `?lang=${language}`}`}>{words.guides}</a>
        <a href={`/sources${language === "en" ? "" : `?lang=${language}`}`}>{words.sources}</a>
        <a href={`/seo-articles${language === "en" ? "" : `?lang=${language}`}`} className="nav-articles">{words.articles}</a>
      </nav>
      <div className="preview-actions">
        <div className="language-picker" ref={languageMenuRef}>
          <button type="button" className="language-trigger" aria-label="Choose language" aria-haspopup="listbox" aria-expanded={languageOpen} onClick={() => setLanguageOpen((value) => !value)}>
            <span>{currentLanguage.short}</span><b>{currentLanguage.name}</b><i aria-hidden="true">{languageOpen ? "↑" : "↓"}</i>
          </button>
          {languageOpen && <div className="language-menu" role="listbox" aria-label="Available languages">
            <div className="language-menu-heading"><strong>Choose language</strong><small>24 languages</small></div>
            <div className="language-grid">
              {supportedLanguages.map((item) => <button type="button" role="option" aria-selected={item.code === language} className={item.code === language ? "active" : ""} key={item.code} onClick={() => changeLanguage(item.code)}>
                <b>{item.short}</b><span><strong>{item.name}</strong><small>{item.markets}</small></span>
              </button>)}
            </div>
          </div>}
        </div>
        <a href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noopener noreferrer">{words.database} ↗</a>
      </div>
    </header>
    </>
  );
}

export function SiteFooter({ language }: { language: LanguageCode }) {
  const words = uiText[language];
  return (
    <footer className="preview-footer">
      <strong>PikoBuy Spreadsheet</strong>
      <p>{words.disclaimer} Product discovery data is provided by <a href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">FindSpreadsheet</a>.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
