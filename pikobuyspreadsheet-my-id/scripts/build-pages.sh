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

test -s "${project_root}/out/index.html"
test -s "${project_root}/out/en/index.html"
test -s "${project_root}/out/en/categories/index.html"
test -s "${project_root}/out/en/articles/read-pikobuy-qc-photos/index.html"
test -s "${project_root}/out/sitemap.xml"
test -s "${project_root}/out/priority-sitemap.xml"
test -s "${project_root}/out/google-sitemap.xml"
test -s "${project_root}/out/sitemap.txt"
test -s "${project_root}/out/robots.txt"
echo "Cloudflare Pages output ready in out/."
