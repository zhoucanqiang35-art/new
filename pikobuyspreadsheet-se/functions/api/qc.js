const source = "https://findspreadsheet.com";

export async function onRequestGet({request, waitUntil}) {
  const url = new URL(request.url);
  const item = url.searchParams.get("item") ?? "";
  if (!/^\d{6,15}$/.test(item)) return Response.json({images: []}, {status: 400});

  url.search = new URLSearchParams({item}).toString();
  const cacheKey = new Request(url);
  const cache = caches.default;
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  try {
    const upstream = await fetch(`${source}/qcradar-qc.php?item=${item}`, {
      headers: {Accept: "application/json"},
      signal: AbortSignal.timeout(5000),
    });
    if (!upstream.ok) return Response.json({images: []}, {status: 503});
    const payload = await upstream.json();
    const images = [];
    if (payload.status === "ready" && Array.isArray(payload.images)) {
      for (const image of payload.images.slice(0, 24)) {
        if (image?.isVideo || image?.mimeType?.startsWith("video/") || typeof image?.display !== "string") continue;
        try {
          const photo = new URL(image.display, source);
          if (photo.protocol === "https:" && !photo.username && !photo.password) images.push(photo.href);
        } catch {
          // Ignore malformed images in the upstream gallery.
        }
      }
    }
    const ttl = images.length ? 86400 : 1200;
    const response = Response.json({images}, {headers: {"Cache-Control": `public, max-age=${ttl}`}});
    waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch {
    return Response.json({images: []}, {status: 503});
  }
}
