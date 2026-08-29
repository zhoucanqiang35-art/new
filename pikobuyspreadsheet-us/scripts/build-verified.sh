#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

command -v timeout || {
  echo "build-verified.sh requires GNU timeout." >&2
  exit 69
}

vinext="${SITES_PROJECT_ROOT}/node_modules/.bin/vinext"
if [[ ! -x "${vinext}" ]]; then
  echo "vinext is unavailable. Run npm run install:ci and wait for it to finish before building." >&2
  exit 69
fi

echo "Running bounded vinext build..."
timeout \
  --signal=TERM \
  --kill-after="${SITES_BUILD_KILL_AFTER:-10s}" \
  "${SITES_BUILD_TIMEOUT:-3m}" \
  "${vinext}" build

# Cloudflare Pages advanced mode accepts a module Worker in
# dist/client/_worker.js. Vinext emits that Worker separately in dist/server,
# so place the complete server module graph beside the static assets.
pages_worker="${SITES_PROJECT_ROOT}/dist/client/_worker.js"
rm -rf "${pages_worker}"
mkdir -p "${pages_worker}"
cp -a "${SITES_PROJECT_ROOT}/dist/server/." "${pages_worker}/"

# Generate crawler files after the framework build so Pages serves them as
# real static files instead of routing these paths through the app shell.
(
  cd "${SITES_PROJECT_ROOT}"
  node scripts/generate-seo-files.mjs
)

# Pages Advanced Mode sends every request through `_worker.js` unless a
# `_routes.json` file excludes static files. The generated vinext Worker only
# renders application routes; without this exclusion, CSS/JS requests are
# rendered as HTML and the deployed site appears completely unstyled.
cat > "${SITES_PROJECT_ROOT}/dist/client/_routes.json" <<'EOF'
{
  "version": 1,
  "include": ["/*"],
  "exclude": [
    "/assets/*",
    "/favicon.svg",
    "/file.svg",
    "/globe.svg",
    "/window.svg",
    "/pikobuy-logo.png",
    "/pikobuy-spreadsheet-us-hero.png",
    "/robots.txt",
    "/sitemap.xml",
    "/sitemap-google.txt"
  ]
}
EOF

# Vinext redirects Wrangler to its Workers deployment configuration. Pages
# must instead read the repository's Pages configuration below.
rm -f "${SITES_PROJECT_ROOT}/.wrangler/deploy/config.json"
