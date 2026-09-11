"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getLang, languageOptions, t } from "@/lib/site-language";
export function SiteHeader() {
  const path = usePathname(),
    router = useRouter(),
    params = useSearchParams(),
    lang = getLang(params.get("lang")),
    x = t(lang),
    href = (p: string) => `${p}?lang=${lang}`;
  return (
    <header className="site-header">
      <a href={href("/")} className="brand" aria-label="LoloBuy Sheet home">
        <img
          src="/lolobuy-logo-complete.png"
          width="220"
          height="100"
          alt="LoloBuy"
        />
      </a>
      <nav aria-label="Main navigation">
        {[
          ["/", x.nav[0]],
          ["/categories", x.nav[1]],
          ["/product-details", x.nav[2]],
          ["/seo-articles", x.nav[3]],
          ["/faq", x.nav[4]],
        ].map(([p, label]) => (
          <a key={p} href={href(p)}>
            {label}
          </a>
        ))}
      </nav>
      <select
        value={lang}
        onChange={(e) => router.push(`${path}?lang=${e.target.value}`)}
        aria-label="Language"
      >
        {languageOptions.map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </header>
  );
}
