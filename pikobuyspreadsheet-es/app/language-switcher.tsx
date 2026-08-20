"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "./data";

export function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname() || "/";
  const first = pathname.split("/").filter(Boolean)[0];
  const hasLocale = locales.some((item) => item.code === first && item.code !== "en-US");
  const rest = hasLocale ? pathname.split("/").filter(Boolean).slice(1).join("/") : pathname.replace(/^\//, "");

  return <details className="language">
    <summary>{locale} <span>⌄</span></summary>
    <div>{locales.map((item) => {
      const href = item.code === "en-US" ? (rest ? `/${rest}` : "/") : `/${item.code}${rest ? `/${rest}` : ""}`;
      return <Link key={item.code} href={href} aria-current={item.code === locale ? "page" : undefined}>{item.label}<small>{item.country}</small></Link>;
    })}</div>
  </details>;
}
