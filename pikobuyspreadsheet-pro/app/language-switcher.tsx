"use client";

import { usePathname } from "next/navigation";
import { locales, localizedPath, type Locale } from "./i18n-config";

export function LanguageSwitcher({ locale, compact = false }:{ locale:Locale; compact?:boolean }) {
  const pathname = usePathname() || "/";
  return <label className={`language-switcher${compact ? " compact" : ""}`}>
    <span className="sr-only">Choose language</span>
    <select
      value={locale}
      onChange={(event) => { window.location.href = localizedPath(event.target.value as Locale, pathname); }}
      aria-label="Choose language"
    >
      {locales.map((item) => <option value={item.code} key={item.code}>
        {item.code.toUpperCase()} · {item.name} — {item.market}
      </option>)}
    </select>
  </label>;
}
