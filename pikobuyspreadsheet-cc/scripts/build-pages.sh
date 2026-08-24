#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_root="$(cd "${script_dir}/.." && pwd)"

cd "${project_root}"

# The Cloudflare Pages production build is the formal-domain release. Keep the
# existing human-QA gate: English is indexable while the other 23 locales stay
# available for review without being added to sitemap/hreflang yet.
# This script is the watched Cloudflare Pages production build entry point.
export FORMAL_DOMAIN_CONFIRMED="${FORMAL_DOMAIN_CONFIRMED:-pikobuyspreadsheet.cc}"
export SITE_INDEXABLE="${SITE_INDEXABLE:-true}"
export INDEXABLE_LOCALES="${INDEXABLE_LOCALES:-en}"
export QA_APPROVED_LOCALES="${QA_APPROVED_LOCALES:-en}"

bash scripts/build-verified.sh

pages_output="${project_root}/dist/pages"
expected_output="${project_root}/dist/pages"
if [[ "${pages_output}" != "${expected_output}" ]]; then
  echo "Refusing to clean an unexpected Pages output path: ${pages_output}" >&2
  exit 64
fi

rm -rf -- "${pages_output}"
mkdir -p "${pages_output}"
cp -R "${project_root}/dist/client/." "${pages_output}/"

"${project_root}/node_modules/.bin/esbuild" \
  "${project_root}/scripts/pages-worker-entry.js" \
  --bundle \
  --format=esm \
  --platform=neutral \
  --target=es2022 \
  --external:node:* \
  --outfile="${pages_output}/_worker.js"

node "${project_root}/scripts/generate-search-assets.mjs" "${pages_output}"
node "${project_root}/scripts/validate-pages-artifact.mjs" "${pages_output}"

rm -f "${project_root}/.wrangler/deploy/config.json"
echo "Prepared Cloudflare Pages Advanced Mode artifact in dist/pages."
