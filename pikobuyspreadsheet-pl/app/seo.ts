export const SITE_URL = "https://pikobuyspreadsheet.pl";

export const supportedLocales = ["de", "fr", "es", "it", "nl", "pt", "pl"] as const;

export const indexableRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export function localisedPath(pathname: string, locale?: string) {
  const path = pathname === "/" ? "" : pathname;
  return locale ? `/language/${locale}${path}` : path || "/";
}

export function pageAlternates(pathname: string, locale?: string) {
  return {
    canonical: localisedPath(pathname, locale),
    languages: {
      "x-default": localisedPath(pathname),
      en: localisedPath(pathname),
      ...Object.fromEntries(
        supportedLocales.map((language) => [language, localisedPath(pathname, language)]),
      ),
    },
  };
}
