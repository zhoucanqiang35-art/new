"use client";

import { useEffect, useState } from "react";
import { Language, languageFromPathname, localeHref } from "../i18n";

const languages = [["en", "EN"], ["de", "DE"], ["fr", "FR"], ["es", "ES"], ["it", "IT"], ["pt", "PT"], ["nl", "NL"], ["pl", "PL"], ["sv", "SV"]] as const;

export function LanguageDock() {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    document.cookie = "googtrans=;path=/;max-age=0";
    const stored = window.localStorage.getItem("lolobuysheet-language");
    const requested = languageFromPathname(window.location.pathname) ?? new URLSearchParams(window.location.search).get("lang");
    setLanguage(requested || stored || "en");
  }, []);
  const change = (next: string) => {
    window.localStorage.setItem("lolobuysheet-language", next);
    const current = window.location.pathname.replace(/^\/(en|de|fr|es|it|pt|nl|pl|sv)(?=\/|$)/, "") || "/";
    window.location.assign(localeHref(current, next as Language));
  };
  return <label className="site-language-dock" data-no-translate translate="no"><span>Language</span><select aria-label="Choose language" value={language} onChange={event => change(event.target.value)}>{languages.map(([code, label]) => <option key={code} value={code}>{label}</option>)}</select></label>;
}
