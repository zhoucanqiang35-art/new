import { McpServer } from "@modelcontextprotocol/server";
import { createMcpHandler } from "agents/mcp/server";
import { z } from "zod";
import { PROPERTY, SITEMAP_URL } from "./constants";
import {
  type Env,
  getSitemapStatus,
  inspectUrl,
  querySearchAnalytics,
  submitSitemap
} from "./google";
import { assertCanonicalUrl, authorized } from "./security";

function text(value: unknown) {
  return {
    content: [{ type: "text" as const, text: JSON.stringify(value, null, 2) }]
  };
}

function createServer(env: Env) {
  const server = new McpServer({
    name: "PikoBuy Spreadsheet Search Console",
    version: "1.0.0"
  });

  server.registerTool(
    "get_sitemap_status",
    {
      annotations: {
        openWorldHint: true,
        readOnlyHint: true
      },
      description:
        "Read Google Search Console's current status for the fixed sitemap https://pikobuyspreadsheet.cc/sitemap.xml.",
      inputSchema: {}
    },
    async () => text(await getSitemapStatus(env.GOOGLE_SERVICE_ACCOUNT_JSON))
  );

  server.registerTool(
    "inspect_url",
    {
      annotations: {
        openWorldHint: true,
        readOnlyHint: true
      },
      description:
        "Inspect Google index status for one canonical URL on https://pikobuyspreadsheet.cc only. This does not request indexing.",
      inputSchema: {
        url: z.string().url()
      }
    },
    async ({ url }) => {
      const canonicalUrl = assertCanonicalUrl(url);
      return text(await inspectUrl(env.GOOGLE_SERVICE_ACCOUNT_JSON, canonicalUrl));
    }
  );

  server.registerTool(
    "query_search_analytics",
    {
      annotations: {
        openWorldHint: true,
        readOnlyHint: true
      },
      description:
        "Read final Google Search Console query and page performance for sc-domain:pikobuyspreadsheet.cc.",
      inputSchema: {
        end_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/u),
        row_limit: z.number().int().min(1).max(100).default(25),
        start_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/u)
      }
    },
    async ({ end_date, row_limit, start_date }) => {
      if (start_date > end_date) {
        throw new Error("start_date must not be after end_date");
      }
      return text(
        await querySearchAnalytics(
          env.GOOGLE_SERVICE_ACCOUNT_JSON,
          start_date,
          end_date,
          row_limit
        )
      );
    }
  );

  server.registerTool(
    "submit_sitemap",
    {
      annotations: {
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
        readOnlyHint: false
      },
      description:
        "Submit only the fixed sitemap https://pikobuyspreadsheet.cc/sitemap.xml to the fixed Search Console property. This cannot submit any other domain or file.",
      inputSchema: {
        confirm: z.literal(true).describe("Must be true to confirm the write action")
      }
    },
    async () => {
      await submitSitemap(env.GOOGLE_SERVICE_ACCOUNT_JSON);
      return text({
        property: PROPERTY,
        sitemap: SITEMAP_URL,
        submitted: true
      });
    }
  );

  return server;
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/health" && request.method === "GET") {
      return Response.json({
        property: PROPERTY,
        service: "pikobuyspreadsheet-cc-gsc-mcp",
        status: "ok"
      });
    }

    if (url.pathname !== "/mcp") {
      return new Response("Not found", { status: 404 });
    }

    if (!env.MCP_AUTH_TOKEN || !authorized(request, env.MCP_AUTH_TOKEN)) {
      return new Response("Unauthorized", {
        headers: { "www-authenticate": "Bearer" },
        status: 401
      });
    }

    return createMcpHandler(() => createServer(env))(request, env, ctx);
  }
} satisfies ExportedHandler<Env>;

