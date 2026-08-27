#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${project_root}"

next="${project_root}/node_modules/.bin/next"

if [[ ! -x "${next}" ]]; then
  echo "Missing build dependencies. Run npm ci before building." >&2
  exit 69
fi

echo "Generating static HTML for every page and language..."
node "${project_root}/scripts/generate-sitemap-text.mjs"
"${next}" build

# Publish a fresh, byte-for-byte copy under a new stable URL. Search Console
# can fetch this path without inheriting the failed history of /sitemap.xml.
cp "${project_root}/out/sitemap.xml" "${project_root}/out/sitemap-direct.xml"

test -s "${project_root}/out/index.html"
test -s "${project_root}/out/en/index.html"
test -s "${project_root}/out/en/categories/index.html"
test -s "${project_root}/out/en/articles/read-pikobuy-qc-photos/index.html"
test -s "${project_root}/out/sitemap.xml"
test -s "${project_root}/out/sitemap-direct.xml"
cmp -s "${project_root}/out/sitemap.xml" "${project_root}/out/sitemap-direct.xml"
test -s "${project_root}/out/robots.txt"
test ! -e "${project_root}/out/priority-sitemap.xml"
test ! -e "${project_root}/out/google-sitemap.xml"
test ! -e "${project_root}/out/sitemap.txt"
echo "Cloudflare Pages output ready in out/."
