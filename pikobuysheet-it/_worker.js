const ORIGINAL = "https://pikobuysheet-it-preview.canqiangzhou32.chatgpt.site";

export default {
  async fetch(request) {
    const incoming = new URL(request.url);
    const upstream = new URL(incoming.pathname + incoming.search, ORIGINAL);
    return fetch(new Request(upstream, request), { redirect: "manual" });
  },
};
