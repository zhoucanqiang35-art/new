import type { Metadata } from "next";
import { locales } from "./data";

export const siteOrigin = "https://pikobuyspreadsheet.es";

function cleanPath(path = "") {
  return path.replace(/^\/+|\/+$/g, "");
}

function routeUrl(locale: string, path = "") {
  const route = cleanPath(path);
  const prefix = locale === "en-US" ? "" : `/${locale}`;
  return `${siteOrigin}${prefix}${route ? `/${route}` : ""}/`;
}

export function routeAlternates(locale: string, path = ""): Metadata["alternates"] {
  return {
    canonical: routeUrl(locale, path),
    languages: {
      ...Object.fromEntries(locales.map(({ code }) => [code, routeUrl(code, path)])),
      "x-default": routeUrl("en-US", path),
    },
  };
}

export function pageMetadata(locale: string, path: string, title: string, description: string): Metadata {
  return { title, description, alternates: routeAlternates(locale, path) };
}
