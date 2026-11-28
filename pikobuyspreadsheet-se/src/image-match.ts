import type { CatalogRow } from "./main-catalog";

const size = 8;
const recordSize = 86;

function imageVector(image: HTMLImageElement) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const context = canvas.getContext("2d")!;
  context.fillStyle = "#fff";
  context.fillRect(0, 0, 64, 64);
  const ratio = 64 / Math.max(image.naturalWidth, image.naturalHeight);
  const width = image.naturalWidth * ratio, height = image.naturalHeight * ratio;
  context.drawImage(image, (64 - width) / 2, (64 - height) / 2, width, height);
  const tiny = document.createElement("canvas");
  const pixels = (side: number) => {
    tiny.width = tiny.height = side;
    const drawing = tiny.getContext("2d", { willReadFrequently: true })!;
    drawing.drawImage(canvas, 0, 0, side, side);
    return drawing.getImageData(0, 0, side, side).data;
  };
  const vector = new Uint8Array(112);
  const gray = pixels(size);
  for (let i = 0; i < 64; i++) {
    const j = i * 4;
    vector[i] = Math.round(.299 * gray[j] + .587 * gray[j + 1] + .114 * gray[j + 2]);
  }
  const rgb = pixels(4);
  for (let i = 0; i < 48; i++) vector[64 + i] = rgb[Math.floor(i / 3) * 4 + i % 3];
  return vector;
}

let inputs: Promise<[CatalogRow[], Uint8Array]> | undefined;

function loadInputs() {
  inputs ??= Promise.all([
    fetch("/data/main-catalog/index.json").then(response => {
      if (!response.ok) throw new Error("Catalog unavailable");
      return response.json() as Promise<CatalogRow[]>;
    }),
    fetch("/data/main-catalog/image-features.bin").then(async response => {
      if (!response.ok) throw new Error("Image index unavailable");
      const index = new Uint8Array(await response.arrayBuffer());
      if (!index.length || index.length % recordSize !== 0) throw new Error("Invalid image index");
      return index;
    }),
  ]).catch(error => { inputs = undefined; throw error; });
  return inputs;
}

export async function searchImage(image: HTMLImageElement) {
  const query = imageVector(image);
  const [rows, index] = await loadInputs();
  const positions = new Map(rows.map((row, index) => [Number(row[0]), index]));
  const scores = new Float32Array(rows.length).fill(Infinity);

  for (let start = 0; start < index.length; start += recordSize) {
    const id = index[start] | (index[start + 1] << 8);
    const row = positions.get(id);
    if (row === undefined) continue;
    let gray = 0, color = 0, available = 0, bits = 0;
    // The shared catalog stores 112 values at six bits per value, in 84 bytes.
    for (let i = 0, next = start + 2; i < query.length; i++) {
      if (bits < 6) {
        available = (available << 8) | index[next++];
        bits += 8;
      }
      bits -= 6;
      const value = ((available >> bits) & 63) * 4 + 2;
      const delta = Math.abs(query[i] - value);
      if (i < 64) gray += delta;
      else color += delta;
    }
    const score = gray / 64 * .55 + color / 48 * .45;
    if (score < scores[row]) scores[row] = score;
  }

  const matches = Array.from(scores, (score, row) => ({ score, row }))
    .filter(({ score }) => Number.isFinite(score))
    .sort((first, second) => first.score - second.score)
    .slice(0, 24)
    .map(({ row }) => rows[row]);
  return { matches, compared: index.length / recordSize };
}
