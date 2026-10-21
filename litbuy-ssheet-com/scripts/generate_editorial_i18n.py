"""Build static editorial language editions with locally installed Argos models.

This runs only while preparing the site.  The published site receives a static
JavaScript data file and never calls a translation service at runtime.
"""
from __future__ import annotations

import html
import json
import re
from pathlib import Path

import argostranslate.translate


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
OUTPUT = ROOT / "src" / "data" / "editorial-editions.json"
LOCALES = ("de", "fr", "es", "it", "pt", "nl", "pl")


def clean(value: str) -> str:
    value = re.sub(r"<[^>]+>", "", value)
    return html.unescape(re.sub(r"\s+", " ", value)).strip()


def article(path: Path) -> dict:
    source = path.read_text(encoding="utf-8")
    header = re.search(r'<article class="long-article">.*?<header>(.*?)</header>', source, re.S)
    if not header:
        raise RuntimeError(f"Could not read {path}")
    title = clean(re.search(r"<h1>(.*?)</h1>", header.group(1), re.S).group(1))
    description = clean(re.findall(r"<p[^>]*>(.*?)</p>", header.group(1), re.S)[-1])
    sections = []
    # Each article section contains its own nested div, so searching for the
    # outer closing div would stop at the first section.  The page contains no
    # other section elements, allowing a direct one-to-one section scan.
    for raw_section in re.findall(r"<section[^>]*>(.*?)</section>", source, re.S):
        heading = clean(re.search(r"<h2[^>]*>(.*?)</h2>", raw_section, re.S).group(1))
        paragraphs = [clean(item) for item in re.findall(r"<p[^>]*>(.*?)</p>", raw_section, re.S)]
        sections.append({"heading": heading, "paragraphs": paragraphs})
    return {"title": title, "description": description, "sections": sections}


def faq() -> list[dict]:
    source = (DIST / "faq" / "index.html").read_text(encoding="utf-8")
    return [
        {"question": clean(summary), "answer": clean(answer)}
        for summary, answer in re.findall(r"<details[^>]*>\s*<summary>(.*?)</summary>\s*<p>(.*?)</p>\s*</details>", source, re.S)
    ]


def translate(value: str, language: str) -> str:
    return argostranslate.translate.translate(value, "en", language)


def translate_article(item: dict, language: str) -> dict:
    return {
        "title": translate(item["title"], language),
        "description": translate(item["description"], language),
        "sections": [
            {
                "heading": translate(section["heading"], language),
                "paragraphs": [translate(paragraph, language) for paragraph in section["paragraphs"]],
            }
            for section in item["sections"]
        ],
    }


def main() -> None:
    source_articles = {}
    for page in sorted((DIST / "seo-articles").glob("*/index.html")):
        source_articles[page.parent.name] = article(page)
    source_faq = faq()
    editions = {}
    for language in LOCALES:
        editions[language] = {
            "articles": {slug: translate_article(item, language) for slug, item in source_articles.items()},
            "faq": [
                {"question": translate(item["question"], language), "answer": translate(item["answer"], language)}
                for item in source_faq
            ],
        }
    OUTPUT.write_text(json.dumps(editions, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
