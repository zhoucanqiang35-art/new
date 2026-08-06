#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_root="$(cd "${script_dir}/.." && pwd)"

cd "${project_root}"

# Vinext emits a Cloudflare Worker in dist/server and browser assets in
# dist/client. Cloudflare Pages needs both under one output directory, with
# the Worker exposed through Advanced Mode as a root-level _worker.js module.
bash scripts/build-verified.sh

pages_output="${project_root}/dist/pages"
rm -rf "${pages_output}"
mkdir -p "${pages_output}"
cp -R "${project_root}/dist/client/." "${pages_output}/"

# Vinext does not currently emit Next.js metadata routes such as sitemap.xml
# for this Pages build. Generate the crawl files directly in the Pages static
# output so search engines receive stable XML/text responses from every host.
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
# Pages follows that redirect after the user build command and then rejects the
# Worker config because it contains `main`, `assets`, and `rules`. The Pages
# artifact above is self-contained, so remove only the generated redirect and
# let Pages continue with the repository's Pages configuration.
rm -f "${project_root}/.wrangler/deploy/config.json"

echo "Prepared Cloudflare Pages Advanced Mode artifact in dist/pages."
