#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_root="$(cd "${script_dir}/.." && pwd)"

cd "${project_root}"
bash scripts/build-verified.sh

pages_output="${project_root}/dist/pages"
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

node "${project_root}/scripts/validate-pages-artifact.mjs" "${pages_output}"
rm -f "${project_root}/.wrangler/deploy/config.json"

echo "Prepared Cloudflare Pages artifact in dist/pages."
