#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${project_root}"

npm run build

rm -rf dist/pages
mkdir -p dist/pages/_worker.js
cp -R dist/client/. dist/pages/
cp -R dist/server/. dist/pages/_worker.js/

# Pages Advanced Mode gives the Worker full control of every request. Keep the
# framework server intact, but put a small Pages entry in front of it so built
# CSS and browser modules are served by Pages' static ASSETS binding.
mv dist/pages/_worker.js/index.js dist/pages/_worker.js/server.js
cp worker/pages-entry.js dist/pages/_worker.js/index.js

# vinext's Vite build emits a direct-Workers config and a Wrangler redirect.
# A Git-connected Pages build must validate the root Pages config instead.
# Advanced Mode only needs the Worker bundle inside _worker.js.
rm -f dist/pages/_worker.js/wrangler.json
rm -f dist/server/wrangler.json
rm -f .wrangler/deploy/config.json

test -f dist/pages/_worker.js/index.js
test -f dist/pages/_worker.js/server.js
test -f dist/pages/assets/index-BW_uc0sp.css || find dist/pages/assets -maxdepth 1 -name '*.css' -print -quit | grep -q .

echo "Cloudflare Pages bundle ready in dist/pages"
