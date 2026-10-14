#!/usr/bin/env bash
set -euo pipefail

project_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
dist_root="$project_root/dist"

rm -rf "$dist_root"
mkdir -p "$dist_root"

# Cloudflare Pages Advanced Mode runs this Module Worker for every route.
# Encode catalogue strings before combining the files. This prevents the Pages
# Functions compiler from misreading seller titles that contain quote marks.
node "$project_root/scripts/build.mjs" "$project_root" "$dist_root"

echo "Built $dist_root"

