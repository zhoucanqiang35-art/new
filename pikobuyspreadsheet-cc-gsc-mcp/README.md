# PikoBuy Spreadsheet Search Console MCP

Private Cloudflare Worker MCP server for exactly one Google Search Console property:

- Property: `sc-domain:pikobuyspreadsheet.cc`
- Sitemap: `https://pikobuyspreadsheet.cc/sitemap.xml`
- Canonical origin accepted by URL Inspection: `https://pikobuyspreadsheet.cc`

It is deliberately isolated from the existing Cloudflare Pages project and does not modify the website source, layout, content, DNS, or Pages configuration.

## Tools

- `get_sitemap_status` — read the submitted sitemap status.
- `inspect_url` — read Google's index status for a canonical site URL.
- `query_search_analytics` — read final query/page performance, capped at 100 rows.
- `submit_sitemap` — idempotently submit only the fixed sitemap; requires `confirm: true`.

Google Search Console does not provide a general API for requesting indexing of ordinary pages. `inspect_url` is read-only.

## Secrets

Never commit either secret. Store them only as Cloudflare Worker secrets:

```text
GOOGLE_SERVICE_ACCOUNT_JSON
MCP_AUTH_TOKEN
```

`GOOGLE_SERVICE_ACCOUNT_JSON` is the complete service-account JSON value. `MCP_AUTH_TOKEN` should be a cryptographically random value. The MCP client sends it as `Authorization: Bearer <token>`.

## Local checks

```bash
npm ci
npm test
npm run check
npm run deploy:dry-run
```

## Deployment

After authenticating Wrangler to the correct Cloudflare account:

```bash
npx wrangler secret put GOOGLE_SERVICE_ACCOUNT_JSON
npx wrangler secret put MCP_AUTH_TOKEN
npm run deploy
```

The remote endpoint is:

```text
https://pikobuyspreadsheet-cc-gsc-mcp.<account-subdomain>.workers.dev/mcp
```

For the OpenAI Responses API, pass the bearer value with the MCP tool's `headers` field and keep write tools approval-gated.
