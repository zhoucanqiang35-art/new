#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_root="$(cd "${script_dir}/.." && pwd)"

# Cloudflare Pages reads the root Wrangler file before this command starts.
# Vinext also auto-discovers that file while producing its Worker bundle. If it
# sees the Pages-only `pages_build_output_dir`, Vinext merges it into the
# generated Worker config, leaving both `main` and `pages_build_output_dir` and
# causing Wrangler's Pages validation to fail. Hide the Pages config only for
# the Vinext build, then restore it before preparing the Pages output.
pages_config="${project_root}/wrangler.jsonc"
hidden_pages_config="${project_root}/.wrangler-pages-build.jsonc"

restore_pages_config() {
  if [[ -f "${hidden_pages_config}" ]]; then
    mv "${hidden_pages_config}" "${pages_config}"
  fi
}

trap restore_pages_config EXIT INT TERM

if [[ -f "${pages_config}" ]]; then
  mv "${pages_config}" "${hidden_pages_config}"
fi

bash "${script_dir}/build-verified.sh"

restore_pages_config
trap - EXIT INT TERM

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
