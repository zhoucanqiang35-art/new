#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
output_dir="${project_root}/dist"

echo "Generating and auditing the Cloudflare Pages site..."
node "${project_root}/public/generate-locales.mjs"
node "${project_root}/scripts/update-official-guides.mjs"
node "${project_root}/scripts/repair-static-site.mjs"
node --test "${project_root}/tests/localized-pages.test.mjs"
node --test "${project_root}/tests/site-integrity.test.mjs"

rm -rf "${output_dir}"
mkdir -p "${output_dir}"
cp -a "${project_root}/public/." "${output_dir}/"

test -f "${output_dir}/index.html"
test -f "${output_dir}/faq/index.html"
test -f "${output_dir}/seo-articles/index.html"
test -f "${output_dir}/robots.txt"
test -f "${output_dir}/sitemap.xml"

echo "Cloudflare Pages output is ready in dist/."
