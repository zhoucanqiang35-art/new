"use client";

import { useEffect } from "react";
import { LanguageCode, uiText } from "./i18n";
import { SiteTranslator } from "./site-translator";

export function SiteHeader({ language }: { language: LanguageCode }) {
  const words = uiText[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
        <a href={`/faq${language === "en" ? "" : `?lang=${language}`}`}>FAQ</a>
        <a href={`/sources${language === "en" ? "" : `?lang=${language}`}`}>{words.sources}</a>
        <a href={`/seo-articles${language === "en" ? "" : `?lang=${language}`}`} className="nav-articles">{words.articles}</a>
      </nav>
      <div className="preview-actions">
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
