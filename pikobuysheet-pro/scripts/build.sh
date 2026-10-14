#!/usr/bin/env bash
set -euo pipefail

project_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
dist_root="$project_root/dist"

rm -rf "$dist_root"
mkdir -p "$dist_root"

# Generate a standard Cloudflare Pages Functions entrypoint for every route.
node "$project_root/scripts/build.mjs" "$project_root" "$dist_root"

echo "Built $dist_root"
