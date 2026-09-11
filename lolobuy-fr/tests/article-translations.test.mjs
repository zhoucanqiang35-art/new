import assert from "node:assert/strict";
import test from "node:test";
import translations from "../app/articles/article-translations.json" with { type: "json" };

const locales = ["en", "fr", "de", "es", "it", "pt", "nl", "pl", "sv"];
const slugs = Object.keys(translations.en.articles);

test("all article locales preserve the complete English structure", () => {
  assert.equal(slugs.length, 3);
  for (const locale of locales) {
    assert.ok(translations[locale], `missing locale ${locale}`);
    assert.deepEqual(Object.keys(translations[locale].articles), slugs);
    assert.deepEqual(Object.keys(translations[locale].chrome), Object.keys(translations.en.chrome));
    for (const slug of slugs) {
      const source = translations.en.articles[slug];
      const localized = translations[locale].articles[slug];
      assert.equal(localized.sections.length, source.sections.length);
      localized.sections.forEach((section, index) => {
        assert.equal(section.paragraphs.length, source.sections[index].paragraphs.length);
        assert.equal(section.checklist?.length ?? 0, source.sections[index].checklist?.length ?? 0);
      });
    }
  }
});

test("localized article pages contain localized titles", () => {
  for (const locale of locales.slice(1)) {
    for (const slug of slugs) {
      assert.notEqual(translations[locale].articles[slug].title, translations.en.articles[slug].title);
    }
  }
});
