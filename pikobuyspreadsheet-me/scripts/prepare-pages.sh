#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${project_root}"

rm -rf dist/pages
mkdir -p dist/pages/_worker.js
cp -R dist/client/. dist/pages/
cp -R dist/server/. dist/pages/_worker.js/

# Vinext does not always copy Next public metadata files into dist/client.
# Copy the SEO crawl files into the exact Cloudflare Pages output root so
# /sitemap.xml and /robots.txt are served as static assets before the SSR app.
cp public/sitemap.xml dist/pages/sitemap.xml
cp public/robots.txt dist/pages/robots.txt

# Pages advanced mode gives _worker.js control of every request. Keep the
# generated application Worker as app.js and use a small entry Worker that
# serves CSS, JavaScript, images, and other static assets before SSR routes.
mv dist/pages/_worker.js/index.js dist/pages/_worker.js/app.js
cp cloudflare-pages-worker.js dist/pages/_worker.js/index.js

test -f dist/pages/_worker.js/index.js
test -f dist/pages/_worker.js/app.js
test -f dist/pages/_worker.js/__vite_rsc_assets_manifest.js
test -d dist/pages/assets
test -s dist/pages/sitemap.xml
test -s dist/pages/robots.txt
grep -q 'https://pikobuyspreadsheet.me/' dist/pages/sitemap.xml
grep -q 'Sitemap: https://pikobuyspreadsheet.me/sitemap.xml' dist/pages/robots.txt

# Force browsers to request the corrected asset route instead of reusing a
# cached response from the first broken deployment.
asset_version="20260827-2"
sed -i -E "s#(/assets/[^\"?]+\.(css|js))#\1?v=${asset_version}#g" \
  dist/pages/_worker.js/__vite_rsc_assets_manifest.js

# The Vite Cloudflare plugin emits a temporary Worker deployment redirect.
# Pages must use the root wrangler.jsonc instead, which defines
# pages_build_output_dir without Worker-only main/assets fields.
rm -rf .wrangler/deploy

echo "Cloudflare Pages output prepared in dist/pages."
echo "Verified: dist/pages/sitemap.xml and dist/pages/robots.txt"
