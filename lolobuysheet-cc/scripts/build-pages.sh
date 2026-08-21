#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_root="$(cd "${script_dir}/.." && pwd)"
pages_root="${project_root}/dist/pages"

npm run build

if [[ -e "${pages_root}" ]]; then
  rm -rf "${pages_root}"
fi

mkdir -p "${pages_root}/_worker.js"
cp -a "${project_root}/dist/client/." "${pages_root}/"
cp -a "${project_root}/dist/server/." "${pages_root}/_worker.js/"

echo "Prepared Cloudflare Pages output at ${pages_root}"
