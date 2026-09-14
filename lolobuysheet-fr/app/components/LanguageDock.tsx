"use client";

import { useEffect, useState } from "react";

const languages = [["en", "EN"], ["de", "DE"], ["fr", "FR"], ["es", "ES"], ["it", "IT"], ["pt", "PT"], ["nl", "NL"], ["pl", "PL"], ["sv", "SV"]] as const;

export function LanguageDock() {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    document.cookie = "googtrans=;path=/;max-age=0";
    const stored = window.localStorage.getItem("lolobuysheet-language");
    const requested = new URLSearchParams(window.location.search).get("lang");
    setLanguage(requested || stored || "en");
  }, []);
  const change = (next: string) => {
    window.localStorage.setItem("lolobuysheet-language", next);
    const destination = new URL(window.location.href);
    destination.searchParams.set("lang", next);
    window.location.assign(destination.toString());
  };
  return <label className="site-language-dock" data-no-translate translate="no"><span>Language</span><select aria-label="Choose language" value={language} onChange={event => change(event.target.value)}>{languages.map(([code, label]) => <option key={code} value={code}>{label}</option>)}</select></label>;
}
