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

export const homepageTitle = "Best PikoBuy Spreadsheet 2026 – Verified QC Links & Rep Finds";
export const homepageDescription = "Find the best PikoBuy spreadsheets with verified QC links, shipping guides to Spain & Europe, and daily updated rep finds.";
