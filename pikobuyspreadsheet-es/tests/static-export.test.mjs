import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const page = (path) => new URL(`../out/${path}/index.html`, import.meta.url);

test("exports the English and representative localized routes", async () => {
  for (const path of [
    "shipping",
    "faq",
    "seo-articles/how-pikobuy-works",
    "seo-articles/pikobuy-return-policy-guide",
    "seo-articles/pikobuy-tracking-customs-guide",
    "seo-articles/pikobuy-restricted-items-guide",
    "seo-articles/pikobuy-spain-guide",
    "seo-articles/pikobuy-usa-guide",
    "seo-articles/pikobuy-uk-guide",
    "seo-articles/pikobuy-germany-guide",
    "de-DE/shipping",
    "fr-FR/faq",
    "es-ES/seo-articles/how-pikobuy-works",
  ]) await access(page(path));
});

test("exports indexable robots and the complete sitemap", async () => {
  const robots = await readFile(new URL("../out/robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8");
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/pikobuyspreadsheet\.es\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/pikobuyspreadsheet\.es\/de-DE\/shipping\//);
  assert.match(sitemap, /https:\/\/pikobuyspreadsheet\.es\/seo-articles\/how-pikobuy-works\//);
  assert.match(sitemap, /https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-return-policy-guide\//);
  assert.match(sitemap, /https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-tracking-customs-guide\//);
  assert.match(sitemap, /https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-restricted-items-guide\//);
  assert.match(sitemap, /https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-spain-guide\//);
  assert.match(sitemap, /https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-usa-guide\//);
  assert.match(sitemap, /https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-uk-guide\//);
  assert.match(sitemap, /https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-germany-guide\//);
});

test("keeps long articles, FAQ and shipping content in static HTML", async () => {
  const article = await readFile(page("de-DE/seo-articles/how-pikobuy-works"), "utf8");
  const faq = await readFile(page("fr-FR/faq"), "utf8");
  const shipping = await readFile(page("es-ES/shipping"), "utf8");
  assert.equal((article.match(/data-content-slot=/g) || []).length, 7);
  assert.equal((article.match(/data-paragraph-slot=/g) || []).length, 21);
  assert.equal((faq.match(/class="section-index"/g) || []).length >= 15, true);
  assert.match(shipping, /data-content-template="shipping-v1"/);
});

test("exports the complete English return-policy article with SEO metadata", async () => {
  const article = await readFile(page("seo-articles/pikobuy-return-policy-guide"), "utf8");
  assert.equal((article.match(/data-content-slot=/g) || []).length, 7);
  assert.equal((article.match(/data-paragraph-slot=/g) || []).length, 21);
  assert.match(article, /<link rel="canonical" href="https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-return-policy-guide\/"/);
  assert.match(article, /hrefLang="en-US"/);
  assert.match(article, /PikoBuy Return Policy: A Practical Warehouse Return Guide/);
  assert.doesNotMatch(article, /noindex/);
});

test("exports the complete English tracking article with SEO metadata", async () => {
  const article = await readFile(page("seo-articles/pikobuy-tracking-customs-guide"), "utf8");
  assert.equal((article.match(/data-content-slot=/g) || []).length, 7);
  assert.equal((article.match(/data-paragraph-slot=/g) || []).length, 21);
  assert.match(article, /<link rel="canonical" href="https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-tracking-customs-guide\/"/);
  assert.match(article, /hrefLang="en-US"/);
  assert.match(article, /PikoBuy Tracking Guide: Parcel Status, Customs and Carrier Handoffs/);
  assert.match(article, /<meta name="robots" content="index, follow"/);
  assert.doesNotMatch(article, /noindex/);
});

test("exports the complete restricted-items article with unique SEO metadata", async () => {
  const article = await readFile(page("seo-articles/pikobuy-restricted-items-guide"), "utf8");
  assert.equal((article.match(/data-content-slot=/g) || []).length, 7);
  assert.equal((article.match(/data-paragraph-slot=/g) || []).length, 21);
  assert.match(article, /<link rel="canonical" href="https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-restricted-items-guide\/"/);
  assert.match(article, /hrefLang="en-US"/);
  assert.match(article, /PikoBuy Restricted Items Guide: Batteries, Liquids and Route Eligibility/);
  assert.match(article, /<meta name="keywords" content="PikoBuy restricted items,PikoBuy sensitive goods,PikoBuy battery shipping,PikoBuy prohibited items,PikoBuy shipping restrictions"/);
  assert.match(article, /href="\/seo-articles\/pikobuy-shipping-cost-guide\/"/);
  assert.match(article, /<meta name="robots" content="index, follow"/);
  assert.doesNotMatch(article, /noindex/);
});

test("exports the complete Spain guide with country-specific SEO metadata", async () => {
  const article = await readFile(page("seo-articles/pikobuy-spain-guide"), "utf8");
  const countries = await readFile(page("countries"), "utf8");
  assert.equal((article.match(/data-content-slot=/g) || []).length, 7);
  assert.equal((article.match(/data-paragraph-slot=/g) || []).length, 21);
  assert.match(article, /<link rel="canonical" href="https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-spain-guide\/"/);
  assert.match(article, /hrefLang="en-US"/);
  assert.match(article, /PikoBuy Spain Guide: VAT, Customs and Parcel Planning/);
  assert.match(article, /<meta name="keywords" content="PikoBuy Spain,PikoBuy shipping to Spain,PikoBuy Spain customs,PikoBuy Spain VAT,how to use PikoBuy in Spain,PikoBuy España"/);
  assert.match(article, /href="\/countries\/"/);
  assert.match(article, /href="\/seo-articles\/pikobuy-shipping-cost-guide\/"/);
  assert.match(countries, /href="\/seo-articles\/pikobuy-spain-guide\/"/);
  assert.match(article, /<meta name="robots" content="index, follow"/);
  assert.doesNotMatch(article, /noindex/);
});

test("exports the complete USA guide with current customs SEO metadata", async () => {
  const article = await readFile(page("seo-articles/pikobuy-usa-guide"), "utf8");
  const countries = await readFile(page("countries"), "utf8");
  assert.equal((article.match(/data-content-slot=/g) || []).length, 7);
  assert.equal((article.match(/data-paragraph-slot=/g) || []).length, 21);
  assert.match(article, /<link rel="canonical" href="https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-usa-guide\/"/);
  assert.match(article, /hrefLang="en-US"/);
  assert.match(article, /PikoBuy USA Guide: Duties, Shipping and Warehouse Checks/);
  assert.match(article, /<meta name="keywords" content="PikoBuy USA,PikoBuy shipping to USA,PikoBuy US customs,PikoBuy USA shipping cost,how to use PikoBuy in USA,PikoBuy United States"/);
  assert.match(article, /href="\/countries\/"/);
  assert.match(article, /href="\/seo-articles\/pikobuy-shipping-cost-guide\/"/);
  assert.match(countries, /href="\/seo-articles\/pikobuy-usa-guide\/"/);
  assert.match(article, /<meta name="robots" content="index, follow"/);
  assert.doesNotMatch(article, /noindex/);
});

test("exports the complete UK guide with country-specific tax SEO metadata", async () => {
  const article = await readFile(page("seo-articles/pikobuy-uk-guide"), "utf8");
  const countries = await readFile(page("countries"), "utf8");
  assert.equal((article.match(/data-content-slot=/g) || []).length, 7);
  assert.equal((article.match(/data-paragraph-slot=/g) || []).length, 21);
  assert.match(article, /<link rel="canonical" href="https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-uk-guide\/"/);
  assert.match(article, /hrefLang="en-US"/);
  assert.match(article, /PikoBuy UK Guide: Shipping, VAT and the £135 Rule/);
  assert.match(article, /<meta name="keywords" content="PikoBuy UK,PikoBuy shipping to UK,PikoBuy UK customs,PikoBuy UK VAT,PikoBuy UK shipping cost,how to use PikoBuy in UK"/);
  assert.match(article, /href="\/countries\/"/);
  assert.match(article, /href="\/seo-articles\/pikobuy-shipping-cost-guide\/"/);
  assert.match(countries, /href="\/seo-articles\/pikobuy-uk-guide\/"/);
  assert.match(article, /<meta name="robots" content="index, follow"/);
  assert.doesNotMatch(article, /noindex/);
});

test("exports the complete Germany guide with current import-tax SEO metadata", async () => {
  const article = await readFile(page("seo-articles/pikobuy-germany-guide"), "utf8");
  const countries = await readFile(page("countries"), "utf8");
  assert.equal((article.match(/data-content-slot=/g) || []).length, 7);
  assert.equal((article.match(/data-paragraph-slot=/g) || []).length, 21);
  assert.match(article, /<link rel="canonical" href="https:\/\/pikobuyspreadsheet\.es\/seo-articles\/pikobuy-germany-guide\/"/);
  assert.match(article, /hrefLang="en-US"/);
  assert.match(article, /PikoBuy Germany Guide: VAT, the €3 Duty and Parcel Planning/);
  assert.match(article, /<meta name="keywords" content="PikoBuy Germany,PikoBuy shipping to Germany,PikoBuy Germany customs,PikoBuy Germany VAT,PikoBuy Germany shipping cost,how to use PikoBuy in Germany"/);
  assert.match(article, /href="\/countries\/"/);
  assert.match(article, /href="\/seo-articles\/pikobuy-shipping-cost-guide\/"/);
  assert.match(countries, /href="\/seo-articles\/pikobuy-germany-guide\/"/);
  assert.match(article, /<meta name="robots" content="index, follow"/);
  assert.doesNotMatch(article, /noindex/);
});
