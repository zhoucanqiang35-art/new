#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${CF_PAGES:-}" == "1" ]]; then
  exec "${script_dir}/build-cloudflare-pages.sh" "$@"
fi

exec "${script_dir}/build-verified.sh" "$@"
