# LoloBuySheet CC deployment

Cloudflare Pages production settings:

- Root directory: `lolobuysheet-cc`
- Production branch: `main`
- Build command: `npm run build:pages`
- Build output directory: `dist`
- Node.js: 22.13.0 or newer

The Pages build bundles the Vinext server into a single `dist/_worker.js` Module Worker, copies all client assets into `dist/`, and enables the `nodejs_compat` compatibility flag through `wrangler.jsonc`.

Deployment trigger: 2026-08-21 permission-safe build scripts.
