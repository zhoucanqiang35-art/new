"use client";

import { useEffect, useRef, useState } from "react";

type GoogleTranslateElement = new (
  options: {
    pageLanguage: string;
    includedLanguages: string;
    autoDisplay: boolean;
    multilanguagePage: boolean;
  },
  elementId: string,
) => unknown;

declare global {
  interface Window {
    google?: { translate?: { TranslateElement?: GoogleTranslateElement } };
    googleTranslateElementInit?: () => void;
  }
}

export const languages = [
  { code: "EN", google: "en", name: "English" },
  { code: "DE", google: "de", name: "Deutsch" },
  { code: "FR", google: "fr", name: "Français" },
  { code: "ES", google: "es", name: "Español" },
  { code: "IT", google: "it", name: "Italiano" },
  { code: "PT", google: "pt", name: "Português" },
  { code: "NL", google: "nl", name: "Nederlands" },
  { code: "PL", google: "pl", name: "Polski" },
  { code: "SV", google: "sv", name: "Svenska" },
  { code: "DA", google: "da", name: "Dansk" },
  { code: "NO", google: "no", name: "Norsk" },
  { code: "FI", google: "fi", name: "Suomi" },
  { code: "CS", google: "cs", name: "Čeština" },
  { code: "RO", google: "ro", name: "Română" },
  { code: "HU", google: "hu", name: "Magyar" },
  { code: "EL", google: "el", name: "Ελληνικά" },
  { code: "UK", google: "uk", name: "Українська" },
  { code: "TR", google: "tr", name: "Türkçe" },
  { code: "RU", google: "ru", name: "Русский" },
  { code: "BG", google: "bg", name: "Български" },
  { code: "JA", google: "ja", name: "日本語" },
  { code: "KO", google: "ko", name: "한국어" },
  { code: "AR", google: "ar", name: "العربية" },
  { code: "ZH", google: "zh-CN", name: "中文" },
] as const;

function getSavedLanguage() {
  if (typeof window === "undefined") return "EN";
  const queryLanguage = new URL(window.location.href).searchParams.get("lang")?.toUpperCase();
  if (queryLanguage && languages.some((language) => language.code === queryLanguage)) return queryLanguage;
  const saved = window.localStorage.getItem("lolobuy-language")?.toUpperCase();
  return saved && languages.some((language) => language.code === saved) ? saved : "EN";
}

function writeTranslateCookie(target: string) {
  document.cookie = `googtrans=/en/${target}; path=/; SameSite=Lax`;
}

function clearTranslateCookie() {
  document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax";
  document.cookie = `googtrans=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
}

export function GoogleTranslateRuntime() {
  useEffect(() => {
    const includedLanguages = languages.filter((language) => language.code !== "EN").map((language) => language.google).join(",");

    window.googleTranslateElementInit = () => {
      const TranslateElement = window.google?.translate?.TranslateElement;
      if (!TranslateElement || document.querySelector("#google_translate_element select")) return;
      new TranslateElement(
        { pageLanguage: "en", includedLanguages, autoDisplay: false, multilanguagePage: true },
        "google_translate_element",
      );
    };

    if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
      return;
    }

    if (!document.getElementById("google-translate-runtime")) {
      const script = document.createElement("script");
      script.id = "google-translate-runtime";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return <div id="google_translate_element" aria-hidden="true" />;
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = getSavedLanguage();
    setLanguage(current);
    const target = languages.find((item) => item.code === current);
    document.documentElement.lang = target?.google ?? "en";

    function closeMenu(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function chooseLanguage(code: string) {
    const selected = languages.find((item) => item.code === code);
    if (!selected) return;

    setOpen(false);
    window.localStorage.setItem("lolobuy-language", selected.code);
    const destination = new URL(window.location.href);

    if (selected.code === "EN") {
      clearTranslateCookie();
      destination.searchParams.delete("lang");
      window.location.assign(destination.toString());
      return;
    } else {
      destination.searchParams.set("lang", selected.code.toLowerCase());
    }

    const googleSelector = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (googleSelector) {
      googleSelector.value = selected.google;
      googleSelector.dispatchEvent(new Event("change", { bubbles: true }));
      window.history.replaceState({}, "", destination.toString());
      document.documentElement.lang = selected.google;
      setLanguage(selected.code);
      return;
    }

    writeTranslateCookie(selected.google);
    window.location.assign(destination.toString());
  }

  return (
    <div className="language-wrap notranslate" ref={menuRef} translate="no">
      <button className="language-trigger" onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="menu">
        {language} · 24 languages ↓
      </button>
      {open && (
        <div className="language-menu" role="menu" aria-label="Choose language">
          {languages.map(({ code, name }) => (
            <button
              key={code}
              className={language === code ? "selected" : ""}
              onClick={() => chooseLanguage(code)}
              role="menuitem"
              lang={code.toLowerCase()}
            >
              <strong>{code}</strong> {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
