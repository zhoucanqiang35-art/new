#!/usr/bin/env python3
"""Build the checked-in multilingual copy bundle from the English source."""

import json
from pathlib import Path

import argostranslate.package
import argostranslate.translate


LANGS = ("fr", "de", "es", "it", "pt", "nl", "pl", "ro")
SOURCE = Path("/tmp/piko-source.json")
OUTPUT = Path("app/localized.generated.json")


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


def main():
    source = json.loads(SOURCE.read_text())
    argostranslate.package.update_package_index()
    available = argostranslate.package.get_available_packages()
    installed = {(p.from_code, p.to_code) for p in argostranslate.package.get_installed_packages()}
    output = {}

    for target in LANGS:
        if ("en", target) not in installed:
            package = next(p for p in available if p.from_code == "en" and p.to_code == target)
            print(f"Installing English → {target} model", flush=True)
            argostranslate.package.install_from_path(package.download())
            installed.add(("en", target))

        print(f"Translating complete site to {target}", flush=True)
        cache = {}
        copy = translate_tree(source["copy"], target, cache)
        articles = translate_tree(source["articles"], target, cache)
        for translated, original in zip(articles, source["articles"]):
            translated["slug"] = original["slug"]
        output[target] = {"copy": copy, "articles": articles}
        OUTPUT.write_text(json.dumps(output, ensure_ascii=False, separators=(",", ":")) + "\n")
        print(f"Completed {target}: {len(cache)} text fields", flush=True)


if __name__ == "__main__":
    main()
