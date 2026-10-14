#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
output_dir="${project_root}/dist"

rm -rf "${output_dir}"
mkdir -p "${output_dir}"
cp -a "${project_root}/public/." "${output_dir}/"

test -f "${output_dir}/index.html"
test -f "${output_dir}/faq/index.html"
test -f "${output_dir}/seo-articles/index.html"
test -f "${output_dir}/seo-articles/lolobuy-return-refund-guide/index.html"
test -f "${output_dir}/seo-articles/lolobuy-warehouse-storage-consolidation-guide/index.html"
test -f "${output_dir}/seo-articles/lolobuy-customs-import-tax-guide/index.html"
test -f "${output_dir}/robots.txt"
test -f "${output_dir}/sitemap.xml"

echo "Pre-generated Cloudflare Pages output is ready in dist/."
