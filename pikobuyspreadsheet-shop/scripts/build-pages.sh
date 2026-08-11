#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_root="$(cd "${script_dir}/.." && pwd)"

cd "${project_root}"
bash scripts/build-verified.sh

pages_output="${project_root}/dist/pages"
rm -rf "${pages_output}"
mkdir -p "${pages_output}"
cp -R "${project_root}/dist/client/." "${pages_output}/"

node "${project_root}/scripts/generate-pages-seo.mjs" "${pages_output}"

"${project_root}/node_modules/.bin/esbuild" \
  "${project_root}/scripts/pages-worker-entry.js" \
  --bundle \
  --format=esm \
  --platform=neutral \
  --target=es2022 \
  --external:node:* \
  --outfile="${pages_output}/_worker.js"

test -s "${pages_output}/_worker.js"
test -s "${pages_output}/sitemap.xml"
test -s "${pages_output}/robots.txt"
test -s "${pages_output}/og-pikobuy-spreadsheet.png"
compgen -G "${pages_output}/assets/*.css" >/dev/null || {
  echo "Missing Pages client assets after packaging." >&2
  exit 66
}

rm -f "${project_root}/.wrangler/deploy/config.json"
echo "Prepared Cloudflare Pages Advanced Mode artifact in dist/pages."
