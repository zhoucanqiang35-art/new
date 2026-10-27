#!/usr/bin/env bash
set -euo pipefail

project_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
dist_root="$project_root/dist"

rm -rf "$dist_root"
mkdir -p "$dist_root/server"
cp "$project_root/worker/index.js" "$dist_root/server/index.js"
# Cloudflare Pages Advanced Mode discovers a module Worker only at the root
# of the output directory. Keep the server copy for the existing preview
# workflow and emit this second, identical entry for Git-connected Pages.
cp "$project_root/worker/index.js" "$dist_root/_worker.js"
if [[ -f "$project_root/.openai/hosting.json" ]]; then
  mkdir -p "$dist_root/.openai"
  cp "$project_root/.openai/hosting.json" "$dist_root/.openai/hosting.json"
fi

echo "Built $dist_root"
