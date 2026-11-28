"""Import the shared q6-112 visual index for products present in the ES catalog."""
import argparse
import base64
import json
from pathlib import Path
import struct

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("source", type=Path, help="Directory containing the shared manifest and image shards")
args = parser.parse_args()
output = Path(__file__).resolve().parents[1] / "public/data/main-catalog"
catalog = json.loads((output / "index.json").read_text())
ids = {row[0]: int(row[0]) for row in catalog}
assert all(0 < item < 65536 for item in ids.values()), "Catalog IDs must fit in 16 bits"
manifest = json.loads((args.source / "image-index.json").read_text())
assert manifest["featureFormat"] == "q6-112"
features = bytearray()
indexed_ids = set()
source_count = 0
for shard in manifest["shards"]:
    rows = json.loads((args.source / Path(shard["url"]).name).read_text())
    source_count += len(rows)
    for items, encoded, _, kind in rows:
        if kind not in {"product", "qc"}:
            continue
        values = base64.b64decode(encoded, validate=True)
        assert len(values) == 84
        for item in set(items).intersection(ids):
            features.extend(struct.pack("<H", ids[item]))
            features.extend(values)
            indexed_ids.add(item)
assert source_count == manifest["indexedImages"]
assert {row[0] for row in catalog if row[4]} <= indexed_ids, "Catalog photos missing from shared index"
(output / "image-features.bin").write_bytes(features)
print(f"Imported {len(features)//86} image entries for {len(indexed_ids)} products.")
