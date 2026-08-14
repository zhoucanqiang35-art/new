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

previous_build_dir="$(mktemp -d "${SITES_PROJECT_ROOT}/.sites-runtime/tmp/pages-build-previous.XXXXXX")"
for build_path in out .next dist; do
  if [[ -e "${SITES_PROJECT_ROOT}/${build_path}" ]]; then
    mv "${SITES_PROJECT_ROOT}/${build_path}" "${previous_build_dir}/${build_path}"
  fi
done

echo "Building static Cloudflare Pages output..."
CLOUDFLARE_PAGES_EXPORT=1 "${next_bin}" build

node "${script_dir}/apply-self-canonicals.mjs"

# Next emits both /404.html and /404/index.html when trailingSlash is enabled.
# Cloudflare Pages uses the root 404.html fallback, so keep that canonical copy.
rm -f "${SITES_PROJECT_ROOT}/out/404/index.html"

mkdir -p "${SITES_PROJECT_ROOT}/dist/client" "${SITES_PROJECT_ROOT}/dist/pages"
cp -a "${SITES_PROJECT_ROOT}/out/." "${SITES_PROJECT_ROOT}/dist/"
cp -a "${SITES_PROJECT_ROOT}/out/." "${SITES_PROJECT_ROOT}/dist/client/"
cp -a "${SITES_PROJECT_ROOT}/out/." "${SITES_PROJECT_ROOT}/dist/pages/"

required_pages=(
  "out/index.html"
  "out/categories/index.html"
  "out/guides/index.html"
  "out/shipping/index.html"
  "out/seo-articles/index.html"
  "out/faq/index.html"
  "out/robots.txt"
  "out/sitemap.xml"
  "dist/index.html"
  "dist/client/index.html"
  "dist/client/sitemap.xml"
  "dist/pages/index.html"
  "dist/pages/sitemap.xml"
)

for page in "${required_pages[@]}"; do
  if [[ ! -f "${SITES_PROJECT_ROOT}/${page}" ]]; then
    echo "Missing Cloudflare Pages output: ${page}" >&2
    exit 66
  fi
done

expected_file_count=292
for output_dir in "dist/client" "dist/pages"; do
  actual_file_count="$(find "${SITES_PROJECT_ROOT}/${output_dir}" -type f | wc -l)"
  if [[ "${actual_file_count}" -ne "${expected_file_count}" ]]; then
    echo "Unexpected ${output_dir} file count: ${actual_file_count} (expected ${expected_file_count})." >&2
    exit 66
  fi
done

echo "Validated Cloudflare Pages static output."
