#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

next_bin="${SITES_PROJECT_ROOT}/node_modules/.bin/next"
if [[ ! -x "${next_bin}" ]]; then
  echo "Next.js is unavailable. Run npm ci before building." >&2
  exit 69
fi

rm -rf "${SITES_PROJECT_ROOT}/out" "${SITES_PROJECT_ROOT}/.next"

echo "Building static Cloudflare Pages output..."
CLOUDFLARE_PAGES_EXPORT=1 "${next_bin}" build

rm -rf "${SITES_PROJECT_ROOT}/dist"
mkdir -p "${SITES_PROJECT_ROOT}/dist/pages"
cp -a "${SITES_PROJECT_ROOT}/out/." "${SITES_PROJECT_ROOT}/dist/"
cp -a "${SITES_PROJECT_ROOT}/out/." "${SITES_PROJECT_ROOT}/dist/pages/"

required_pages=(
  "out/index.html"
  "out/categories/index.html"
  "out/guides/index.html"
  "out/shipping/index.html"
  "out/seo-articles/index.html"
  "out/faq/index.html"
  "out/robots.txt"
  "dist/index.html"
  "dist/pages/index.html"
)

for page in "${required_pages[@]}"; do
  if [[ ! -f "${SITES_PROJECT_ROOT}/${page}" ]]; then
    echo "Missing Cloudflare Pages output: ${page}" >&2
    exit 66
  fi
done

echo "Validated Cloudflare Pages static output."
