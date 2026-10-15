const host = "lolobuysheet.lt";
const key = "cb89d955-78c9-4cba-8863-675c4a9ddee2";

const articleSlugs = [
  "lolobuy-spreadsheet-search-guide-2026",
  "lolobuy-qc-bilder-photo-checklist",
  "lolobuy-logo-official-site-safety-guide",
];

const languageCodes = [
  "en", "es", "fr", "de", "it", "pl", "nl", "sv", "no", "da", "pt", "cs",
  "ro", "hu", "fi", "el", "tr", "lt", "lv", "et", "sk", "bg", "hr", "ga",
];

const urlList = [
  ...articleSlugs.map((slug) => `https://${host}/articles/${slug}`),
  ...languageCodes.flatMap((lang) =>
    articleSlugs.map((slug) => `https://${host}/languages/${lang}/articles/${slug}`),
  ),
];

process.stdout.write(
  JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList,
  }),
);
