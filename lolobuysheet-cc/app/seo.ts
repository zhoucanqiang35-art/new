import type { Metadata } from "next";
import { languageOptions, type LocaleCode, withLocale } from "./locales";

export const SITE_URL = "https://lolobuysheet.cc";

function absoluteUrl(path: string) {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function languageAlternates(path: string) {
  const languages = Object.fromEntries(
    languageOptions.map(({ code }) => [code, absoluteUrl(withLocale(code, path))]),
  );

  return {
    canonical: absoluteUrl(path),
    languages: {
      ...languages,
      "x-default": absoluteUrl(path),
    },
  };
}

export function localizedAlternates(locale: LocaleCode, path: string) {
  const languages = Object.fromEntries(
    languageOptions.map(({ code }) => [code, absoluteUrl(withLocale(code, path))]),
  );

  return {
    canonical: absoluteUrl(withLocale(locale, path)),
    languages: {
      ...languages,
      "x-default": absoluteUrl(path),
    },
  };
}

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({ title, description, path, image }: PageMetadata): Metadata {
  const canonical = absoluteUrl(path);
  const images = image ? [image] : [`${SITE_URL}/og.png`];

  return {
    title: { absolute: title },
    description,
    alternates: languageAlternates(path),
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
