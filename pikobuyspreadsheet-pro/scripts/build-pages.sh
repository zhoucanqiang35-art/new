#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_root="$(cd "${script_dir}/.." && pwd)"
pages_dir="${project_root}/dist/pages"

"${script_dir}/build-verified.sh"

rm -rf "${pages_dir}"
mkdir -p "${pages_dir}"
cp -R "${project_root}/dist/client/." "${pages_dir}/"

# Pages advanced mode requires a single module Worker named _worker.js in the
# output directory. Bundle Vinext's emitted server graph while leaving the
# Cloudflare-provided Node compatibility modules external.
"${project_root}/node_modules/esbuild/bin/esbuild" \
  "${project_root}/worker/pages-entry.mjs" \
  --bundle \
  --format=esm \
  --platform=neutral \
  --target=es2022 \
  --external:node:* \
  --outfile="${pages_dir}/_worker.js"

test -s "${pages_dir}/_worker.js"
test -d "${pages_dir}/assets"

echo "Prepared Cloudflare Pages artifact in dist/pages."
