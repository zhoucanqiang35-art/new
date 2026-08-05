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

"${project_root}/node_modules/.bin/esbuild" \
  "${project_root}/dist/server/index.js" \
  --bundle \
  --format=esm \
  --platform=neutral \
  --target=es2022 \
  --external:node:* \
  --outfile="${pages_output}/_worker.js"

test -s "${pages_output}/_worker.js"
compgen -G "${pages_output}/assets/*.css" >/dev/null || {
  echo "Missing Pages client assets after packaging." >&2
  exit 66
}

echo "Prepared Cloudflare Pages Advanced Mode artifact in dist/pages."
