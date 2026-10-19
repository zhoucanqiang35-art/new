import { spawnSync } from "node:child_process";

const marker = [
  process.env.CF_PAGES_URL,
  process.env.CF_PAGES_PROJECT_NAME,
  process.env.CF_PAGES_PROJECT,
].filter(Boolean).join(" ").toLowerCase();

const target = marker.includes("lolobuysheet-fr")
  ? "lolobuysheet-fr"
  : marker.includes("lolobuysheet-pl")
    ? "lolobuysheet-pl"
    : "lolobuy-fr";

const command = target === "lolobuysheet-pl"
  ? "npx --yes pnpm@11.25.0 --dir lolobuysheet-pl install --no-lockfile --ignore-scripts && npx --yes pnpm@11.25.0 --dir lolobuysheet-pl run build"
  : `npm ci --prefix ${target} --ignore-scripts && npm run build --prefix ${target}`;

console.log(`Cloudflare Pages target: ${target}`);
const result = spawnSync(command, { shell: true, stdio: "inherit" });
process.exit(result.status ?? 1);
