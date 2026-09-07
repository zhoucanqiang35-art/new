"use client";

import { useEffect, useState } from "react";

const locales = [
  ["EN", "English", "US · UK", "en"], ["DE", "Deutsch", "Germany · Austria", "de"], ["FR", "Français", "France · Belgium", "fr"],
  ["ES", "Español", "Spain", "es"], ["IT", "Italiano", "Italy", "it"], ["NL", "Nederlands", "Netherlands", "nl"],
  ["PL", "Polski", "Poland", "pl"], ["PT", "Português", "Portugal", "pt"], ["SV", "Svenska", "Sweden", "sv"],
] as const;

type LanguageSelectProps = { value?: string; onChange?: (language: string) => void };

declare global {
  interface Window {
    google?: { translate?: { TranslateElement?: new (options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean }, element: string) => unknown } };
    googleTranslateElementInit?: () => void;
  }
}

const storageKey = "pikobuysheet-language";
const widgetId = "pikobuysheet-google-translate";
const scriptId = "pikobuysheet-google-translate-script";

function initializeGoogleTranslate() {
  const target = document.getElementById(widgetId);
  if (!target || target.childElementCount || !window.google?.translate?.TranslateElement) return;
  new window.google.translate.TranslateElement({ pageLanguage: "en", includedLanguages: locales.map(([, , , code]) => code).filter((code) => code !== "en").join(","), autoDisplay: false }, widgetId);
  removeGoogleChrome();
  window.setTimeout(removeGoogleChrome, 80);
  window.setTimeout(removeGoogleChrome, 350);
}

function removeGoogleChrome() {
  document.querySelectorAll<HTMLElement>("iframe.goog-te-banner-frame, .goog-te-banner-frame, #goog-gt-tt").forEach((element) => element.remove());
  document.documentElement.style.setProperty("margin-top", "0", "important");
  document.body.style.setProperty("top", "0", "important");
}

function setGoogleTranslation(languageCode: string) {
  const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (!combo) return false;
  combo.value = languageCode;
  combo.dispatchEvent(new Event("change", { bubbles: true }));
  window.setTimeout(removeGoogleChrome, 80);
  window.setTimeout(removeGoogleChrome, 350);
  return true;
}

export function LanguageSelect({ value, onChange }: LanguageSelectProps) {
  const [savedLanguage, setSavedLanguage] = useState("EN");
  const language = value ?? savedLanguage;

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(storageKey);
    const nextLanguage = locales.some(([code]) => code === storedLanguage) ? storedLanguage! : "EN";
    setSavedLanguage(nextLanguage);
    onChange?.(nextLanguage);
    document.documentElement.lang = locales.find(([code]) => code === nextLanguage)?.[3] ?? "en";
    window.googleTranslateElementInit = initializeGoogleTranslate;
    if (window.google?.translate?.TranslateElement) initializeGoogleTranslate();
    else if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    }
    const chromeGuard = new MutationObserver(removeGoogleChrome);
    chromeGuard.observe(document.body, { childList: true });
    removeGoogleChrome();
    return () => chromeGuard.disconnect();
  }, []);

  const selectLanguage = (nextLanguage: string) => {
    setSavedLanguage(nextLanguage);
    onChange?.(nextLanguage);
    window.localStorage.setItem(storageKey, nextLanguage);
    const languageCode = locales.find(([code]) => code === nextLanguage)?.[3] ?? "en";
    document.documentElement.lang = languageCode;
    if (languageCode === "en") {
      document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      window.location.reload();
      return;
    }
    document.cookie = `googtrans=/en/${languageCode}; path=/; max-age=31536000`;
    if (!setGoogleTranslation(languageCode)) {
      window.setTimeout(() => setGoogleTranslation(languageCode), 450);
      window.setTimeout(() => setGoogleTranslation(languageCode), 1200);
    }
  };

  return <><label className="language-select notranslate"><span className="sr-only">Choose site language</span><select value={language} onChange={(event) => selectLanguage(event.target.value)}>{locales.map(([code, name, market]) => <option key={code} value={code}>{code} · {name} ({market})</option>)}</select></label><div id={widgetId} className="google-translate-widget" aria-hidden="true" /></>;
}
