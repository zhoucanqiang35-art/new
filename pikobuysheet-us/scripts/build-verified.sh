#!/usr/bin/env bash
set -euo pipefail

# Cloudflare Pages starts this command in the configured root directory.
./node_modules/.bin/vinext build
