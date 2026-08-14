export const SITE_URL =
  "https://pikobuyspreadsheet.pro";

export function absoluteSiteUrl(pathname = "/") {
  return new URL(pathname, SITE_URL).toString();
}
