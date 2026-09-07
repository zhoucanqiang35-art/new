"use client";

import { useEffect, useState } from "react";

const languages = [
  ["en", "EN · English"],
  ["de", "DE · Deutsch"],
  ["fr", "FR · Français"],
  ["es", "ES · Español"],
  ["it", "IT · Italiano"],
  ["nl", "NL · Nederlands"],
  ["pt", "PT · Português"],
  ["pl", "PL · Polski"],
];

export default function LanguageSwitcher({ current = "en" }: { current?: string }) {
  const [localeFromPath, setLocaleFromPath] = useState(current);

  useEffect(() => {
    setLocaleFromPath(window.location.pathname.match(/^\/language\/([a-z]{2})(?:\/|$)/)?.[1] || "en");
  }, []);

  function switchLanguage(locale: string) {
    const pathname = window.location.pathname;
    const basePath = pathname.replace(/^\/language\/[a-z]{2}(?=\/|$)/, "") || "/";
    const target = locale === "en" ? basePath : `/language/${locale}${basePath === "/" ? "" : basePath}`;
    window.location.assign(target);
  }

  return (
    <label className="language-switcher">
      <span className="sr-only">Choose language</span>
      <span aria-hidden="true">◎</span>
      <select
        aria-label="Choose language and open its page"
        value={localeFromPath}
        onChange={(event) => switchLanguage(event.target.value)}
      >
        {languages.map(([code, label]) => <option value={code} key={code}>{label}</option>)}
      </select>
      <span aria-hidden="true">⌄</span>
    </label>
  );
}
