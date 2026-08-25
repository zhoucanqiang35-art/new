# LoloBuySheet CC deployment

Cloudflare Pages production settings:

- Root directory: `lolobuysheet-cc`
- Production branch: `main`
- Build command: `npm run build:pages`
- Build output directory: `dist`
- Node.js: 22.13.0 or newer

The Pages build bundles the Vinext server into a single `dist/_worker.js` Module Worker, copies all client assets into `dist/`, and enables the `nodejs_compat` compatibility flag through `wrangler.jsonc`.

Deployment trigger: 2026-08-22 after restoring the Sites plugin, hosting metadata, and Worker entry. The verified local Cloudflare Pages build completed successfully.

SEO deployment trigger: 2026-08-24 after validating 492 sitemap URLs, canonical URLs, hreflang alternates, robots discovery, redirects, and the production build.
