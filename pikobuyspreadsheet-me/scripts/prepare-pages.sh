#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${project_root}"

rm -rf dist/pages
mkdir -p dist/pages/_worker.js
cp -R dist/client/. dist/pages/
cp -R dist/server/. dist/pages/_worker.js/

test -f dist/pages/_worker.js/index.js
test -f dist/pages/_worker.js/__vite_rsc_assets_manifest.js
test -d dist/pages/assets

echo "Cloudflare Pages output prepared in dist/pages."
