const ORIGINAL = "https://pikobuysheet-uk-seo-preview.canqiangzhou32.chatgpt.site";

export default {
  async fetch(request) {
    const incoming = new URL(request.url);
    const upstream = new URL(incoming.pathname + incoming.search, ORIGINAL);
    const response = await fetch(new Request(upstream, request), { redirect: "manual" });
    const headers = new Headers(response.headers);
    headers.delete("content-security-policy");
    headers.set("x-pikobuysheet-uk-source", "approved-original-preview");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
