"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { locales, localeUiCopy } from "./site-data";

function Arrow() { return <span aria-hidden="true">↗</span>; }

function prefixed(locale: string, path: string) {
  return locale === "en" ? path : `/${locale}${path === "/" ? "" : path}`;
}

export function Logo({ locale = "en" }: { locale?: string }) {
  const copy = localeUiCopy[locale] || localeUiCopy.en;
  return (
    <Link className="elite-logo" href={prefixed(locale, "/")} aria-label={copy.homeLabel}>
      <img className="brand-logo-image" src="/lolobuy-logo.webp?v=20260810-3" alt="" width="200" height="200" />
      <span className="logo-word">LOLOBUY<span>.US</span></span>
      <small>{copy.brandLine}</small>
    </Link>
  );
}

function routeForLocale(pathname: string, nextLocale: string) {
  const localeCodes = new Set(locales.map(([code]) => code));
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && localeCodes.has(parts[0] as (typeof locales)[number][0])) parts.shift();
  const base = parts.length ? `/${parts.join("/")}` : "/";
  return nextLocale === "en" ? base : `/${nextLocale}${base === "/" ? "" : base}`;
}

export function SiteHeader({ locale = "en" }: { locale?: string }) {
  const pathname = usePathname() || "/";
  const copy = localeUiCopy[locale] || localeUiCopy.en;
  const languageMenu = useRef<HTMLDetailsElement>(null);
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const navItems = [
    [copy.nav[0], "/spreadsheet"],
    [copy.nav[1], "/guides/how-lolobuy-works"],
    [copy.nav[2], "/guides/qc-photos"],
    [copy.nav[3], "/guides/shipping"],
    [copy.nav[4], "/seo-articles"],
    [copy.nav[5], "/updates"],
    [copy.nav[6], "/faq"],
  ];

  useEffect(() => {
    function closeFromOutside(event: PointerEvent) {
      const target = event.target as Node;
      if (languageMenu.current?.open && !languageMenu.current.contains(target)) languageMenu.current.removeAttribute("open");
      if (mobileMenu.current?.open && !mobileMenu.current.contains(target)) mobileMenu.current.removeAttribute("open");
    }
    function closeFromKeyboard(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      languageMenu.current?.removeAttribute("open");
      mobileMenu.current?.removeAttribute("open");
    }
    document.addEventListener("pointerdown", closeFromOutside);
    document.addEventListener("keydown", closeFromKeyboard);
    return () => {
      document.removeEventListener("pointerdown", closeFromOutside);
      document.removeEventListener("keydown", closeFromKeyboard);
    };
  }, []);

  return (
    <header className="cobalt-header">
      <Logo locale={locale} />
      <nav aria-label={copy.primaryNavLabel}>
        {navItems.map(([label, path]) => <Link key={path} href={prefixed(locale, path)}>{label}</Link>)}
      </nav>
      <details className="mobile-nav" ref={mobileMenu}>
        <summary>{copy.menu} <span aria-hidden="true">+</span></summary>
        <div>{navItems.map(([label, path]) => <Link onClick={() => mobileMenu.current?.removeAttribute("open")} key={path} href={prefixed(locale, path)}>{label}<Arrow /></Link>)}</div>
      </details>
      <details className="language-menu" ref={languageMenu}>
        <summary aria-label={copy.languageLabel}>{locale.toUpperCase()} / 24 <Arrow /></summary>
        <div>
          {locales.map(([code, name]) => (
            <Link
              key={code}
              href={routeForLocale(pathname, code)}
              hrefLang={code}
              lang={code}
              aria-current={code === locale ? "page" : undefined}
              onClick={() => languageMenu.current?.removeAttribute("open")}
            >
              {name}<small>{code.toUpperCase()}</small>
            </Link>
          ))}
        </div>
      </details>
    </header>
  );
}
