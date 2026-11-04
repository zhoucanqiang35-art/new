// Consolidate the public host without changing preview or unrelated domains.
export const onRequest = ({ request, next }) => {
  const url = new URL(request.url);
  if (url.hostname.toLowerCase() === 'www.sheet-litbuy.com') {
    url.hostname = 'sheet-litbuy.com';
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  return next();
};
