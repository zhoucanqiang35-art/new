"use client";

import { useLayoutEffect, useRef } from "react";
import { readSelectedLanguage, selectSiteLanguage } from "./TranslationEngine";

const languages = [
  ["en", "EN · English"], ["de", "DE · Deutsch"], ["fr", "FR · Français"],
  ["es", "ES · Español"], ["it", "IT · Italiano"], ["nl", "NL · Nederlands"],
  ["pl", "PL · Polski"], ["pt", "PT · Português"], ["sv", "SV · Svenska"],
] as const;

export default function LanguageSwitcher() {
  const selectRef = useRef<HTMLSelectElement>(null);

  useLayoutEffect(() => {
    const syncSelectedLanguage = () => {
      if (selectRef.current) selectRef.current.value = readSelectedLanguage();
    };
    syncSelectedLanguage();
    window.addEventListener("pageshow", syncSelectedLanguage);
    window.addEventListener("popstate", syncSelectedLanguage);
    return () => {
      window.removeEventListener("pageshow", syncSelectedLanguage);
      window.removeEventListener("popstate", syncSelectedLanguage);
    };
  }, []);

  return (
    <label className="language-switcher notranslate" translate="no">
      <span className="sr-only">Translate every page</span>
      <span className="language-icon" aria-hidden="true">◎</span>
      <select ref={selectRef} suppressHydrationWarning aria-label="Translate every page" defaultValue="en" onChange={(event) => {
        const nextLanguage = event.target.value;
        selectSiteLanguage(nextLanguage);
      }}>
        {languages.map(([code, label]) => <option value={code} key={code}>{label}</option>)}
      </select>
    </label>
  );
}
