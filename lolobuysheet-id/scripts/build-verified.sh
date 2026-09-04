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

# Cloudflare Pages serves the directory chosen as the build output. Vinext
# produces the public assets in dist/client and the request handler in
# dist/server, so expose the handler using Pages' advanced _worker.js format.
client_dir="${SITES_PROJECT_ROOT}/dist/client"
server_dir="${SITES_PROJECT_ROOT}/dist/server"
cp "${server_dir}/index.js" "${client_dir}/_worker.js"
cp "${server_dir}/__vite_rsc_assets_manifest.js" "${client_dir}/__vite_rsc_assets_manifest.js"
rm -rf "${client_dir}/ssr"
cp -R "${server_dir}/ssr" "${client_dir}/ssr"

# Pages is configured in the dashboard. Do not leave any Wrangler deployment
# configuration in the build workspace: Vinext generates a Worker config under
# dist/server, which makes Pages redirect its configuration lookup and fail.
rm -f "${SITES_PROJECT_ROOT}/wrangler.json" "${SITES_PROJECT_ROOT}/wrangler.toml"
find "${SITES_PROJECT_ROOT}/dist" -type f \
  \( -name "wrangler.json" -o -name "wrangler.toml" -o -name "wrangler.config.json" \) \
  -delete
find "${SITES_PROJECT_ROOT}/dist" -type d -name ".wrangler" -prune -exec rm -rf {} +
