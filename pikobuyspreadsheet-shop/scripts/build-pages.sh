#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_root="$(cd "${script_dir}/.." && pwd)"

cd "${project_root}"

# Vinext emits the application Worker in dist/server and browser assets in
# dist/client. Cloudflare Pages Advanced Mode requires a single output root
# containing both the static files and a root-level _worker.js entry module.
bash scripts/build-verified.sh

pages_output="${project_root}/dist/pages"
rm -rf "${pages_output}"
mkdir -p "${pages_output}"
cp -R "${project_root}/dist/client/." "${pages_output}/"

# Generate stable crawl files for the canonical public domain. Vinext does not
# emit these metadata routes into the Pages artifact for this application.
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
compgen -G "${pages_output}/assets/*.css" >/dev/null || {
  echo "Missing Pages client assets after packaging." >&2
  exit 66
}

# Vinext writes a Worker-only Wrangler redirect during its build. Cloudflare
# Pages follows that redirect after the user build command and rejects the
# Worker configuration because it contains Worker-only fields. The Pages
# artifact is self-contained, so remove only that generated redirect.
rm -f "${project_root}/.wrangler/deploy/config.json"

echo "Prepared Cloudflare Pages Advanced Mode artifact in dist/pages."
