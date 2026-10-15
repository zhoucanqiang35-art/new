#!/usr/bin/env bash
set -euo pipefail

# Cloudflare Pages serves the static export.  Keep this build intentionally
# focused: the Vinext worker build is useful for a different runtime but is not
# part of this project's Pages output.
project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
next_bin="${project_root}/node_modules/.bin/next"

if [[ ! -x "${next_bin}" ]]; then
  echo "next is unavailable. Install project dependencies before building." >&2
  exit 69
fi

cd "${project_root}"
"${next_bin}" build
mkdir -p dist/client
cp -a out/. dist/client/
