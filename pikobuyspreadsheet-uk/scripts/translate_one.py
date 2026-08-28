#!/usr/bin/env python3
import json
import sys
from pathlib import Path

import argostranslate.translate


def translate_tree(value, target, cache):
    if isinstance(value, str):
        if not value or value.startswith("http"):
            return value
        if value not in cache:
            cache[value] = argostranslate.translate.translate(value, "en", target)
        return cache[value]
    if isinstance(value, list):
        return [translate_tree(item, target, cache) for item in value]
    if isinstance(value, dict):
        return {key: translate_tree(item, target, cache) for key, item in value.items()}
    return value


target = sys.argv[1]
source = json.loads(Path("/tmp/piko-source.json").read_text())
cache = {}
copy = translate_tree(source["copy"], target, cache)
articles = translate_tree(source["articles"], target, cache)
for translated, original in zip(articles, source["articles"]):
    translated["slug"] = original["slug"]
Path(f"/tmp/locale-{target}.json").write_text(
    json.dumps({"copy": copy, "articles": articles}, ensure_ascii=False, separators=(",", ":"))
)
print(f"completed {target}: {len(cache)} fields", flush=True)
