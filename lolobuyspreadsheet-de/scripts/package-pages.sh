#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

client_dir="${SITES_PROJECT_ROOT}/dist/client"
server_dir="${SITES_PROJECT_ROOT}/dist/server"
pages_dir="${SITES_PROJECT_ROOT}/dist"
staging_dir="$(mktemp -d "${SITES_PROJECT_ROOT}/.dist-pages.XXXXXX")"

cleanup() {
  if [[ -d "${staging_dir}" ]]; then
    mv "${staging_dir}" "/tmp/lolobuyspreadsheet-de-pages-staging-${$}" 2>/dev/null || true
  fi
}
trap cleanup EXIT

[[ -f "${server_dir}/index.js" ]] || {
  echo "Missing Vinext Worker entry: dist/server/index.js" >&2
  exit 66
}
[[ -d "${client_dir}" ]] || {
  echo "Missing Vinext client assets: dist/client" >&2
  exit 66
}

mkdir -p "${staging_dir}/_worker.js"
cp -a "${client_dir}/." "${staging_dir}/"
cp -a "${server_dir}/." "${staging_dir}/_worker.js/"

# Vinext's generated Worker config points back to dist/client and conflicts with
# Pages' repository-level wrangler.jsonc. Pages only needs the Worker modules.
if [[ -f "${staging_dir}/_worker.js/wrangler.json" ]]; then
  mv \
    "${staging_dir}/_worker.js/wrangler.json" \
    "/tmp/lolobuyspreadsheet-de-generated-wrangler-${$}.json"
fi

[[ -f "${staging_dir}/_worker.js/index.js" ]] || {
  echo "Failed to package Cloudflare Pages Worker." >&2
  exit 66
}

backup_dir="/tmp/lolobuyspreadsheet-de-vinext-dist-${$}"
mv "${pages_dir}" "${backup_dir}"
mv "${staging_dir}" "${pages_dir}"
trap - EXIT

node --input-type=module - "${pages_dir}/_worker.js/index.js" <<'NODE'
import { pathToFileURL } from "node:url";

const workerUrl = pathToFileURL(process.argv[2]);
workerUrl.searchParams.set("pages-validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("dist/_worker.js/index.js must export a Module Worker");
}

const response = await worker.default.fetch(
  new Request("https://example.com/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);
if (response.status !== 200) {
  throw new Error(`Pages Worker root route returned ${response.status}`);
}
NODE

echo "Packaged Cloudflare Pages artifact: dist/ with _worker.js advanced-mode Worker."
