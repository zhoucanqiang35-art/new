export const SITE_URL =
  "https://pikobuyspreadsheet-pro.canqiangzhou32.chatgpt.site";

export function absoluteSiteUrl(pathname = "/") {
  return new URL(pathname, SITE_URL).toString();
}
