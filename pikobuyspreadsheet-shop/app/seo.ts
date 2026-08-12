import type { Metadata } from "next";
import { getPageRecord } from "./page-registry";

export const SITE_ORIGIN = "https://pikobuyspreadsheet.shop";
export const SITE_NAME = "PikoBuy Spreadsheet Research Hub";
export const DEFAULT_SOCIAL_IMAGE = "/og-pikobuy-spreadsheet.png";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_ORIGIN).href;
}

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const page = getPageRecord(path);
  const resolvedPublishedTime = publishedTime ?? page.published;
  const resolvedModifiedTime = modifiedTime ?? page.modified;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{ url: DEFAULT_SOCIAL_IMAGE, width: 1200, height: 630, alt: `${title} — ${SITE_NAME}` }],
      ...(type === "article" ? { publishedTime: resolvedPublishedTime, modifiedTime: resolvedModifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_SOCIAL_IMAGE],
    },
  };
}
