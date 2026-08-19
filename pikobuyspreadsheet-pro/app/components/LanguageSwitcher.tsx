"use client";

import { usePathname } from "next/navigation";
import { locales } from "../../lib/site-data";
import { getUi } from "../../lib/i18n";

export default function LanguageSwitcher({ current = "en" }: { current?: string }) {
  const pathname = usePathname();

  function hrefFor(code: string) {
    const parts = pathname.split("/").filter(Boolean);
    const hasLocale = locales.some((locale) => locale.code === parts[0]);
    const nextParts = hasLocale ? [code, ...parts.slice(1)] : [code];
    return `/${nextParts.join("/")}/`;
  }

  const currentLocale = locales.find((locale) => locale.code === current) ?? locales[0];
  const ui=getUi(currentLocale.code);

  return <details className="v3-language-switcher">
    <summary aria-label={ui.language}><span>{ui.language}</span><b>{currentLocale.name}</b></summary>
    <div className="v3-language-menu">
      {locales.map((locale) => <a href={hrefFor(locale.code)} className={locale.code === current ? "current" : ""} key={locale.code}><span>{locale.code.toUpperCase()}</span>{locale.name}</a>)}
    </div>
  </details>;
}
