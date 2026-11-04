export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname.toLowerCase() === 'www.hipobuyspreadsheett.com') {
    url.hostname = 'hipobuyspreadsheett.com';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
