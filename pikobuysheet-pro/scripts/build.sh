#!/usr/bin/env bash
set -euo pipefail

project_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
dist_root="$project_root/dist"

rm -rf "$dist_root"
mkdir -p "$dist_root"

# Cloudflare Pages Advanced Mode runs this Module Worker for every route.
cat "$project_root/worker/catalog-data.js" "$project_root/worker/index.js" > "$dist_root/_worker.js"

echo "Built $dist_root"
