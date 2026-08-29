import app from "./server.js";

const localeCodes = ["de", "fr", "es", "it", "nl", "pl", "pt", "sv"];
const textSelectors = "title,h1,h2,h3,p,a,span,b,strong,small,label,button,option,summary,li,dt,dd,td,th";

function localeFromPath(pathname) {
  const candidate = pathname.split("/").filter(Boolean)[0];
  return localeCodes.includes(candidate) ? candidate : null;
}

function translateValue(value, dictionary) {
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const source = value.trim().replace(/\s+/g, " ");
  return source && dictionary[source] ? `${leading}${dictionary[source]}${trailing}` : value;
}

function localizedPath(pathname, locale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && localeCodes.includes(parts[0])) parts.shift();
  const base = parts.length ? `/${parts.join("/")}` : "/";
  return locale ? `/${locale}${base === "/" ? "" : base}` : base;
}

class TextTranslator {
  constructor(dictionary) { this.dictionary = dictionary; }
  text(chunk) {
    if (!chunk.text.trim()) return;
    const translated = translateValue(chunk.text, this.dictionary);
    if (translated !== chunk.text) chunk.replace(translated);
  }
}

class AttributeTranslator {
  constructor(dictionary) { this.dictionary = dictionary; }
  element(element) {
    for (const attribute of ["content", "placeholder", "title", "aria-label", "alt"]) {
      const value = element.getAttribute(attribute);
      if (!value) continue;
      const translated = translateValue(value, this.dictionary);
      if (translated !== value) element.setAttribute(attribute, translated);
    }
  }
}

class LinkLocalizer {
  constructor(locale, origin) { this.locale = locale; this.origin = origin; }
  element(element) {
    const raw = element.getAttribute("href");
    if (!raw || raw.startsWith("#") || raw.startsWith("mailto:") || raw.startsWith("tel:")) return;
    const destination = new URL(raw, this.origin);
    if (destination.origin !== this.origin || /\.(?:css|js|png|jpe?g|svg|webp|ico|json|xml)$/i.test(destination.pathname)) return;
    destination.pathname = localizedPath(destination.pathname, this.locale);
    element.setAttribute("href", `${destination.pathname}${destination.search}${destination.hash}`);
  }
}

class HtmlLanguage {
  constructor(locale) { this.locale = locale; }
  element(element) { element.setAttribute("lang", this.locale); }
}

class EnglishAlternates {
  constructor(pathname, origin) { this.pathname = pathname; this.origin = origin; }
  element(element) {
    const base = localizedPath(this.pathname, null);
    const links = [
      `<link rel="alternate" hreflang="en" href="${this.origin}${base}">`,
      `<link rel="alternate" hreflang="x-default" href="${this.origin}${base}">`,
      ...localeCodes.map((locale) => `<link rel="alternate" hreflang="${locale}" href="${this.origin}${localizedPath(base, locale)}">`),
    ].join("");
    element.append(links, { html: true });
  }
}

async function translateHtml(response, request, env, locale) {
  const translationUrl = new URL(`/i18n/translations/${locale}.json`, request.url);
  const translationResponse = await env.ASSETS.fetch(new Request(translationUrl));
  if (!translationResponse.ok) return response;
  const dictionary = await translationResponse.json();
  const origin = new URL(request.url).origin;
  return new HTMLRewriter()
    .on("html", new HtmlLanguage(locale))
    .on(textSelectors, new TextTranslator(dictionary))
    .on("meta,input,img,[title],[aria-label]", new AttributeTranslator(dictionary))
    .on("a[href]", new LinkLocalizer(locale, origin))
    .transform(response);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (
      url.pathname.startsWith("/assets/") ||
      url.pathname.startsWith("/i18n/") ||
      /\.(?:css|js|png|jpe?g|svg|webp|ico|json|woff2?)$/i.test(url.pathname)
    ) {
      return env.ASSETS.fetch(request);
    }

    let response = await app.fetch(request, env, ctx);
    const contentType = response.headers.get("content-type") || "";
    if (response.ok && contentType.includes("text/html")) {
      const locale = localeFromPath(url.pathname);
      if (locale) {
        response = await translateHtml(response, request, env, locale);
        const headers = new Headers(response.headers);
        headers.set("content-language", locale);
        response = new Response(response.body, { status: response.status, statusText: response.statusText, headers });
      } else {
        response = new HTMLRewriter().on("head", new EnglishAlternates(url.pathname, url.origin)).transform(response);
      }
    }
    return response;
  },
};
