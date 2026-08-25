#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${project_root}"

npm run build

rm -rf dist/pages
mkdir -p dist/pages/_worker.js
cp -R dist/client/. dist/pages/
cp -R dist/server/. dist/pages/_worker.js/

test -f dist/pages/_worker.js/index.js
test -f dist/pages/assets/index-BW_uc0sp.css || find dist/pages/assets -maxdepth 1 -name '*.css' -print -quit | grep -q .

echo "Cloudflare Pages bundle ready in dist/pages"
