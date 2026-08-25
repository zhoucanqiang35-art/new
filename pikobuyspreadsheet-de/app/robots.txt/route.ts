export async function GET() {
  return new Response("User-agent: *\nAllow: /\nSitemap: https://pikobuyspreadsheet.de/sitemap.xml\n", {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
  });
}
