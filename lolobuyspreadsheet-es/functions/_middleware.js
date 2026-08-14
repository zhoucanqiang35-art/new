const canonicalHostname = "lolobuyspreadsheet.es";
const wwwHostname = `www.${canonicalHostname}`;

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === wwwHostname) {
    url.protocol = "https:";
    url.hostname = canonicalHostname;
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
