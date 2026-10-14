#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

command -v timeout >/dev/null || {
  echo "build-verified.sh requires GNU timeout." >&2
  exit 69
}

vinext="${SITES_PROJECT_ROOT}/node_modules/.bin/vinext"
if [[ ! -x "${vinext}" ]]; then
  echo "vinext is unavailable. Run npm run install:ci and wait for it to finish before building." >&2
  exit 69
fi

echo "Generating and auditing 24 localized static pages..."
node "${SITES_PROJECT_ROOT}/public/generate-locales.mjs"
node "${SITES_PROJECT_ROOT}/scripts/update-official-guides.mjs"
node "${SITES_PROJECT_ROOT}/scripts/repair-static-site.mjs"
node --test "${SITES_PROJECT_ROOT}/tests/localized-pages.test.mjs"
node --test "${SITES_PROJECT_ROOT}/tests/site-integrity.test.mjs"

echo "Running bounded vinext build..."
timeout \
  --signal=TERM \
  --kill-after="${SITES_BUILD_KILL_AFTER:-10s}" \
  "${SITES_BUILD_TIMEOUT:-3m}" \
  "${vinext}" build

"${script_dir}/validate-artifact.sh"
