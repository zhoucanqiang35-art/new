#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_root="$(cd "${script_dir}/.." && pwd)"

"${script_dir}/build-verified.sh"

pages_dir="${project_root}/dist/pages"
client_dir="${project_root}/dist/client"
server_dir="${project_root}/dist/server"

rm -rf "${pages_dir}"
mkdir -p "${pages_dir}/_server"
cp -R "${client_dir}/." "${pages_dir}/"
cp -R "${server_dir}/." "${pages_dir}/_server/"
cp "${script_dir}/pages-worker.js" "${pages_dir}/_worker.js"

test -f "${pages_dir}/_worker.js"
test -f "${pages_dir}/_server/index.js"
echo "Cloudflare Pages output prepared at dist/pages"
