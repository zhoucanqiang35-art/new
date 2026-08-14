# PikoBuy Spreadsheet Research Hub

Independent, source-led research site for `pikobuyspreadsheet.cc`. The public
review deployment stays `noindex`; the formal domain is the canonical origin.

## SEO launch gates

- `SITE_INDEXABLE=true` enables crawl access and `index,follow` on the formal deployment.
- `FORMAL_DOMAIN_CONFIRMED=pikobuyspreadsheet.cc` is a second required safety gate. `SITE_INDEXABLE=true` alone cannot open indexing.
- `INDEXABLE_LOCALES=en` lists the locales requested for indexing.
- `QA_APPROVED_LOCALES=en` is the independent human-translation QA gate. A locale must appear in both locale variables before it is emitted in the sitemap or hreflang set.
- Keep the review deployment without `SITE_INDEXABLE=true`.

Clean routes live at `/articles`, `/categories`, `/guides/{slug}`, `/faq`,
`/sources`, `/about` and `/updates`; localized routes prepend `/{locale}`.

Run `npm run refresh:products` before a content release to rebuild the eight-card
product snapshot from the current FindSpreadsheet “Latest Products” section.
The command fails instead of re-dating old data when it cannot retrieve eight valid records.

## Formal-domain release sequence

1. Run `npm run refresh:products`; a failed retrieval must stop the release instead of re-dating the saved snapshot.
2. Run `npm run preflight` on the review build. It checks 40 unique formal routes, 1,200–1,800-word English pages, realistic reading time, content overlap, the 15-question FAQ, eight current product records and English-only translation QA.
3. Run the launch simulation without changing DNS: `FORMAL_DOMAIN_CONFIRMED=pikobuyspreadsheet.cc SITE_INDEXABLE=true INDEXABLE_LOCALES=en QA_APPROVED_LOCALES=en npm run preflight:launch`.
4. Connect only `pikobuyspreadsheet.cc` and `www.pikobuyspreadsheet.cc` to the production project, confirm the TLS certificate, and choose one canonical host. Redirect the other host to `https://pikobuyspreadsheet.cc`.
5. Set the four launch variables from step 3 in the production environment only. Keep every public review or staging deployment without them.
6. Verify `/robots.txt`, `/sitemap.xml`, one canonical tag, English `hreflang` plus `x-default`, and a real 404 on the formal host before submitting the sitemap to Google Search Console.
7. Monitor Search Console coverage, server errors, redirects and Core Web Vitals after release. If canonical or crawl behavior is wrong, remove `SITE_INDEXABLE` first; the safety gate returns the site to `noindex` without changing page URLs.

Other languages remain available for layout review but are excluded from the sitemap and hreflang set until each locale passes human translation QA. Add a locale to both `INDEXABLE_LOCALES` and `QA_APPROVED_LOCALES` only after that review is documented.

## Cloudflare Pages

The repository keeps the original Sites build (`npm run build`) and adds a separate Cloudflare Pages Advanced Mode build:

- Root directory: `pikobuyspreadsheet-cc`
- Production branch: `main`
- Build command: `npm run build:pages`
- Build output directory: `dist/pages`
- Node.js: `22.13.0` or newer

`npm run build:pages` packages the existing Vinext server as `dist/pages/_worker.js`, copies every client and public asset, validates the Worker export, and enables indexing only for the English locale that has passed the existing QA gate. The other 23 locale routes remain available without being added to sitemap or hreflang until their review is approved.

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`
- Linux with `flock`, `curl`, and GNU `timeout`

## Sites Lifecycle

The Sites lifecycle CLI runs the locked dependency install before returning this checkout. Edit the source under `app/`, then checkpoint when a coherent milestone is ready to inspect or share. The remote Sites builder runs `npm run build` against the pushed commit. Do not repeat install or build as a normal pre-checkpoint step.

This starter does not use `wrangler.jsonc`.

`install:ci` is intentionally a single, non-retrying `npm ci`. It refuses a concurrent install for the same project, consumes a matching image-seeded npm cache with `--prefer-offline` while retaining registry fallback for a missing cache object, otherwise downloads and verifies the complete vinext tarball recorded in `package-lock.json`, limits npm to one socket, and terminates a stalled install. `build` applies a short timeout and then validates the Sites artifact. These helpers target Linux and use GNU `timeout`; they are not native macOS scripts.

Scripts that need writable project-scoped home, npm, XDG, and temporary paths use `scripts/sites-env.sh`. The `dev` and `start` scripts honor the caller's runtime environment and keep Wrangler logs inside the checkout. The generated `.sites-runtime/` directory is disposable and ignored by Git.

## Included Shape

- edit site code under `app/`
- `app/chatgpt-auth.ts` provides optional dispatch-owned ChatGPT sign-in helpers
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/index.ts` reads the D1 binding from the Cloudflare Worker environment
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Diagnostic Commands

- `npm run install:ci`: perform the one bounded lockfile install
- `npm run dev`: start the Vite/Vinext development server
- `npm run build`: build and validate the deployable Sites artifact
- `npm run start`: start the built Vinext application
- `npm test`: build, validate, and verify formal routes, canonical/hreflang, FAQ Schema, sitemap scope and removal of old preview routes
- `npm run validate:artifact`: recheck an existing artifact's manifest and ESM `default.fetch` export
- `npm run db:generate`: generate Drizzle migrations after schema changes

Use build and validation commands for targeted diagnosis after a remote failure, not as part of the normal checkpoint path.

The timeout defaults can be overridden for a controlled canary with `SITES_INSTALL_TIMEOUT`, `SITES_INSTALL_KILL_AFTER`, `SITES_BUILD_TIMEOUT`, and `SITES_BUILD_KILL_AFTER`. A timeout fails the command; the helpers never retry an unchanged install or build.

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
