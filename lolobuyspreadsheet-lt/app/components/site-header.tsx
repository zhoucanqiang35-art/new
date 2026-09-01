"use client";

import { useEffect, useRef, useState } from "react";

const languages = [
  ["English", "en"], ["Deutsch", "de"], ["Français", "fr"], ["Español", "es"],
  ["Italiano", "it"], ["Nederlands", "nl"], ["Português", "pt"], ["Polski", "pl"], ["Svenska", "sv"],
] as const;
const links = [["Home", "/"], ["Product Categories", "/categories"], ["Product Details", "/product-details"], ["Guides", "/guides"], ["Reviews", "/reviews"], ["Updates", "/updates"], ["SEO Articles", "/seo-articles"], ["FAQ", "/faq"]];

export function SiteHeader() {
  const [language, setLanguage] = useState("en");
  const selectedLanguage = useRef("en");

  const applyGoogleLanguage = (nextLanguage: string, attempt = 0) => {
    // Ignore an older delayed request after the visitor has selected another language.
    if (nextLanguage !== selectedLanguage.current) return false;
    const translateSelect = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!translateSelect) {
      // The user may choose a language before Google's small helper has finished loading.
      // Keep the chosen language and apply it as soon as the helper is available.
      if (attempt < 30) window.setTimeout(() => applyGoogleLanguage(nextLanguage, attempt + 1), 120);
      return false;
    }
    translateSelect.value = nextLanguage === "en" ? "" : nextLanguage;
    translateSelect.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  };

  useEffect(() => {
    const savedLanguage = document.cookie.match(/(?:^|; )googtrans=\/en\/([^;]+)/)?.[1];
    const preferredLanguage = savedLanguage && languages.some(([, code]) => code === savedLanguage) ? savedLanguage : "en";
    selectedLanguage.current = preferredLanguage;
    setLanguage(preferredLanguage);
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: "en", autoDisplay: false }, "google_translate_element");
      applyGoogleLanguage(preferredLanguage);
    };
    if (window.google?.translate && !document.querySelector(".goog-te-combo")) window.googleTranslateElementInit();
    if (document.querySelector(".goog-te-combo")) applyGoogleLanguage(preferredLanguage);
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const changeLanguage = (nextLanguage: string) => {
    selectedLanguage.current = nextLanguage;
    setLanguage(nextLanguage);
    document.cookie = nextLanguage === "en"
      ? "googtrans=; path=/; max-age=0; SameSite=Lax"
      : `googtrans=/en/${nextLanguage}; path=/; max-age=31536000; SameSite=Lax`;
    applyGoogleLanguage(nextLanguage);
  };

  return <header className="site-header">
    <a className="logo" href="/" aria-label="LoloBuy Spreadsheet home"><img src="/lolobuy-logo.png" alt="LoloBuy" /></a>
    <div className="nav-center"><nav aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav></div>
    <select value={language} onChange={event => changeLanguage(event.target.value)} aria-label="Language">{languages.map(([languageName, code]) => <option key={code} value={code}>{languageName}</option>)}</select>
    <a className="page-database" href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">Database ↗</a>
    <div id="google_translate_element" className="google-translate-element" aria-hidden="true" />
  </header>;
}

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google: { translate: { TranslateElement: new (options: { pageLanguage: string; autoDisplay: boolean }, elementId: string) => unknown } };
  }
}
