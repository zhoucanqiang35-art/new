import assert from "node:assert/strict";
import test from "node:test";

const reviewNoindexMeta =
  /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex[^"']*["'])[^>]*>/i;

test("renders review noindex metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), reviewNoindexMeta);
});

test("desktop content is not hidden inside closed native details elements", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("desktop-fold", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  const html = await response.text();
  assert.doesNotMatch(html, /<details class="mobile-fold"/);
  assert.match(html, /class="mobile-fold-body"/);
  assert.match(html, />241</);
});

test("FAQ, long-form articles and discovered internal pages render without third-party outbound links", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("crawl", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const queue = ["/", "/faq", "/seo-articles/how-pikobuy-works", "/seo-articles/pikobuy-shipping-cost-guide", "/seo-articles/pikobuy-qc-photo-checklist", "/de-DE/faq"];
  const seen = new Set();

  while (queue.length && seen.size < 80) {
    const path = queue.shift();
    if (seen.has(path)) continue;
    seen.add(path);
    const response = await worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), env, ctx);
    assert.equal(response.status, 200, `Expected ${path} to render`);
    const html = await response.text();
    for (const match of html.matchAll(/href=["']([^"']+)["']/g)) {
      const href = match[1];
      if (href.startsWith("http")) {
        assert.equal(new URL(href).origin, "https://findspreadsheet.com", `Unexpected outbound link: ${href}`);
      } else if (href.startsWith("/") && !href.startsWith("/assets/") && !href.startsWith("/_next/") && !href.includes("#") && !href.includes("?")) {
        queue.push(href);
      }
    }
  }

  assert.ok(seen.has("/faq"));
  assert.ok(seen.has("/products"));
  assert.ok(seen.has("/categories"));
});

test("every non-English locale keeps the current route and renders localized page content", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("locales", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const locales = ["de-DE","fr-FR","es-ES","it-IT","nl-NL","pl-PL","pt-PT","pt-BR","sv-SE","da-DK","nb-NO","fi-FI","cs-CZ","ro-RO","hu-HU","el-GR","bg-BG","hr-HR","sk-SK","sl-SI","et-EE","lt-LT"];
  const routes = ["", "categories", "products", "product/nike-phantom-gx-elite-ag-pro", "guides", "shipping", "countries", "qc", "methodology", "faq", "seo-articles/how-pikobuy-works", "seo-articles/pikobuy-shipping-cost-guide", "seo-articles/pikobuy-qc-photo-checklist"];
  const englishFaqMarkers = ["What does PikoBuy do?", "Why are there two payments?", "Can warehouse photos prove authenticity", "How long is the warehouse return window?"];
  const englishArticleMarkers = ["Begin with a listing, not a promise", "Separate the item price from the landed budget", "Know what PikoBuy says the warehouse does", "14 min read", "15 min read"];

  for (const locale of locales) {
    for (const route of routes) {
      const path = `/${locale}${route ? `/${route}` : ""}`;
      const response = await worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), env, ctx);
      assert.equal(response.status, 200, `Expected localized route ${path} to render`);
      const html = await response.text();
      assert.doesNotMatch(html, />Research snapshot</, `${path} retained an English mobile label`);
      if (route === "faq") {
        for (const marker of englishFaqMarkers) assert.ok(!html.includes(marker), `${path} retained English FAQ text: ${marker}`);
        assert.match(html, new RegExp(`href=["']/${locale}/seo-articles["']`));
        const faqBody=html.match(/class="prose faq-page">([\s\S]*?)<div class="callout">/)?.[1]||"";
        assert.equal((faqBody.match(/<section/g)||[]).length,15,`${path} must retain all 15 FAQ sections`);
      }
      if (route.startsWith("seo-articles/")) {
        for (const marker of englishArticleMarkers) assert.ok(!html.includes(marker), `${path} retained English article text: ${marker}`);
        const articleSlug=route.split("/")[1];
        assert.match(html,new RegExp(`href=["']/seo-articles/${articleSlug}["']`),`${path} cannot switch to English without changing the article`);
        assert.match(html,new RegExp(`href=["']/fr-FR/seo-articles/${articleSlug}["']`),`${path} cannot switch to French without changing the article`);
        assert.match(html,new RegExp(`href=["']/de-DE/seo-articles/${articleSlug}["']`),`${path} cannot switch to German without changing the article`);
        const articleBody=html.match(/class="prose"[^>]*>([\s\S]*?)<div class="callout">/)?.[1]||"";
        assert.match(html,/data-article-template="seo-v3"/,`${path} did not use the common SEO article template`);
        assert.equal((articleBody.match(/<section/g)||[]).length,7,`${path} must retain all 7 article sections`);
        for(let position=1;position<=7;position+=1) {
          assert.match(articleBody,new RegExp(`data-content-slot=["']${articleSlug}:${position}["']`),`${path} is missing English-equivalent section ${position}`);
          for(let paragraph=1;paragraph<=3;paragraph+=1) assert.match(articleBody,new RegExp(`data-paragraph-slot=["']${articleSlug}:${position}:${paragraph}["']`),`${path} is missing paragraph ${paragraph} in section ${position}`);
        }
        assert.ok(articleBody.replace(/<[^>]+>/g,"").length>6000,`${path} SEO article content was reduced`);
      }
    }
  }

  const germanFaq = await worker.fetch(new Request("http://localhost/de-DE/faq", { headers: { accept: "text/html" } }), env, ctx);
  const germanHtml = await germanFaq.text();
  assert.match(germanHtml, /href=["']\/fr-FR\/faq["']/);
  assert.match(germanHtml, /href=["']\/faq["']/);
});

test("localized shipping retains every English shipping content structure", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("shipping-locales", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const locales = ["de-DE","fr-FR","es-ES","it-IT","nl-NL","pl-PL","pt-PT","pt-BR","sv-SE","da-DK","nb-NO","fi-FI","cs-CZ","ro-RO","hu-HU","el-GR","bg-BG","hr-HR","sk-SK","sl-SI","et-EE","lt-LT"];
  const englishMarkers=["The five inputs that change the answer","Use the warehouse measurements","A live-market sample, not a popularity ranking","Customs and delivery estimates remain external risks"];

  for (const locale of locales) {
    const path=`/${locale}/shipping`;
    const response=await worker.fetch(new Request(`http://localhost${path}`,{headers:{accept:"text/html"}}),env,ctx);
    assert.equal(response.status,200);
    const html=await response.text();
    const shippingBody=html.match(/class="prose shipping-prose"[^>]*>([\s\S]*?)<\/div><aside/)?.[1]||"";
    assert.match(html,/data-content-template="shipping-v1"/,`${path} did not use the English Shipping template`);
    assert.equal((shippingBody.match(/<h2/g)||[]).length,3,`${path} must retain all three shipping sections`);
    assert.equal((shippingBody.match(/<li/g)||[]).length,5,`${path} must retain all five estimator inputs`);
    assert.match(shippingBody,/class="table-wrap"/,`${path} must retain the country route table`);
    assert.ok(shippingBody.replace(/<[^>]+>/g,"").length>1500,`${path} shipping content was reduced`);
    for (const marker of englishMarkers) assert.ok(!html.includes(marker),`${path} retained English shipping text: ${marker}`);
    assert.ok(!/>\d+[–-]\d+ days</.test(html),`${path} retained an English day unit`);
  }
});

test("English and localized SEO articles share the same section and paragraph template", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("seo-template", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const slugs=["how-pikobuy-works","pikobuy-shipping-cost-guide","pikobuy-qc-photo-checklist"];
  for(const slug of slugs){
    for(const prefix of ["","/de-DE","/fr-FR","/es-ES"]){
      const path=`${prefix}/seo-articles/${slug}`;
      const response=await worker.fetch(new Request(`http://localhost${path}`,{headers:{accept:"text/html"}}),env,ctx);
      const html=await response.text();
      const articleBody=html.match(/class="prose"[^>]*>([\s\S]*?)<div class="callout">/)?.[1]||"";
      assert.equal((articleBody.match(/<section/g)||[]).length,7,`${path} must keep seven master sections`);
      assert.equal((articleBody.match(/data-paragraph-slot=/g)||[]).length,21,`${path} must keep three paragraphs in every section`);
    }
  }
});
