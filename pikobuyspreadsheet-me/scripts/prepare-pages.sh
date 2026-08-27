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

# The Vite Cloudflare plugin emits a temporary Worker deployment redirect.
# Pages must use the root wrangler.jsonc instead, which defines
# pages_build_output_dir without Worker-only main/assets fields.
rm -rf .wrangler/deploy

echo "Cloudflare Pages output prepared in dist/pages."
