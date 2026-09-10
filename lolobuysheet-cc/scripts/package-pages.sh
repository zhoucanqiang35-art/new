#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec bash "${script_dir}/sites-env.sh" -- bash "$0" "$@"
fi

client_dir="${SITES_PROJECT_ROOT}/dist/client"
server_dir="${SITES_PROJECT_ROOT}/dist/server"
pages_dir="${SITES_PROJECT_ROOT}/dist"
staging_dir="$(mktemp -d "${SITES_PROJECT_ROOT}/.dist-pages.XXXXXX")"
esbuild="${SITES_PROJECT_ROOT}/node_modules/.bin/esbuild"
deploy_redirect="${SITES_PROJECT_ROOT}/.wrangler/deploy/config.json"

cleanup() {
  if [[ -d "${staging_dir}" ]]; then
    mv "${staging_dir}" "/tmp/lolobuysheet-cc-pages-staging-${$}" 2>/dev/null || true
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
[[ -x "${esbuild}" ]] || {
  echo "Missing esbuild bundler required for the Pages single-file Worker." >&2
  exit 69
}

mkdir -p "${staging_dir}/_worker.js"
cp -a "${client_dir}/." "${staging_dir}/"
cp -a "${server_dir}/." "${staging_dir}/_worker.js/"

if [[ -f "${staging_dir}/_worker.js/wrangler.json" ]]; then
  mv \
    "${staging_dir}/_worker.js/wrangler.json" \
    "/tmp/lolobuysheet-cc-generated-wrangler-${$}.json"
fi

"${esbuild}" \
  "${staging_dir}/_worker.js/index.js" \
  --bundle \
  --minify \
  --format=esm \
  --platform=neutral \
  --target=es2022 \
  --external:node:* \
  --outfile="${staging_dir}/_worker.bundle.js"

[[ -f "${staging_dir}/_worker.bundle.js" ]] || {
  echo "Failed to bundle the Cloudflare Pages Worker." >&2
  exit 66
}

mv \
  "${staging_dir}/_worker.js" \
  "/tmp/lolobuysheet-cc-worker-modules-${$}"
mv "${staging_dir}/_worker.bundle.js" "${staging_dir}/_worker.js"

if [[ -f "${deploy_redirect}" ]]; then
  mv \
    "${deploy_redirect}" \
    "/tmp/lolobuysheet-cc-wrangler-deploy-redirect-${$}.json"
fi

backup_dir="/tmp/lolobuysheet-cc-vinext-dist-${$}"
mv "${pages_dir}" "${backup_dir}"
mv "${staging_dir}" "${pages_dir}"
trap - EXIT

node --input-type=module - "${pages_dir}/_worker.js" <<'NODE'
import { pathToFileURL } from "node:url";

const workerUrl = pathToFileURL(process.argv[2]);
workerUrl.searchParams.set("pages-validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("dist/_worker.js must export a Module Worker");
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

echo "Packaged Cloudflare Pages artifact: dist/ with a single-file _worker.js Module Worker."
