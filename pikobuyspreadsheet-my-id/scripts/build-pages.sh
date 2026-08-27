#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${project_root}"

vinext="${project_root}/node_modules/.bin/vinext"
esbuild="${project_root}/node_modules/.bin/esbuild"

if [[ ! -x "${vinext}" || ! -x "${esbuild}" ]]; then
  echo "Missing build dependencies. Run npm ci before building." >&2
  exit 69
fi

echo "Building the Vinext application for Cloudflare Pages..."
"${vinext}" build

echo "Packaging the server renderer as a Pages advanced-mode Worker..."
"${esbuild}" \
  "${project_root}/dist/server/index.js" \
  --bundle \
  --format=esm \
  --platform=browser \
  --target=es2022 \
  --external:node:* \
  --outfile="${project_root}/dist/client/_worker.js"

test -s "${project_root}/dist/client/_worker.js"
echo "Cloudflare Pages output ready in dist/client."
