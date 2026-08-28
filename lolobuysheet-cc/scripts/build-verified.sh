#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec bash "${script_dir}/sites-env.sh" -- bash "$0" "$@"
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

# Vinext does not remove public files that disappeared between builds. Start
# from an empty output directory so deleted SEO assets cannot be republished
# by a later direct Pages deployment.
build_output="${SITES_PROJECT_ROOT}/dist"
if [[ -d "${build_output}" ]]; then
  rm -rf -- "${build_output}"
fi

echo "Running bounded vinext build..."
timeout \
  --signal=TERM \
  --kill-after="${SITES_BUILD_KILL_AFTER:-10s}" \
  "${SITES_BUILD_TIMEOUT:-3m}" \
  "${vinext}" build

# Vite may restore a removed public asset from its persistent cache. Enforce
# removal of the abandoned text sitemap before any hosting package is created.
rm -f -- \
  "${SITES_PROJECT_ROOT}/dist/client/sitemap-google.txt" \
  "${SITES_PROJECT_ROOT}/dist/sitemap-google.txt"

if [[ "${CF_PAGES:-}" == "1" ]]; then
  bash "${script_dir}/package-pages.sh"
fi
