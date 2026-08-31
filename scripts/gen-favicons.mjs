// Regenerate every raster icon from public/favicon.svg.
// Run: node scripts/gen-favicons.mjs
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const pub = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../public");
const svg = await readFile(path.join(pub, "favicon.svg"));

// Tab/bookmark icons keep their transparent rounded corners; installed-app
// icons (Apple, Android) are flattened so iOS/Android don't fill the corners.
const png = (size, { flatten = false } = {}) => {
  let pipe = sharp(svg, { density: 384 }).resize(size, size);
  if (flatten) pipe = pipe.flatten({ background: "#ffffff" });
  return pipe.png({ compressionLevel: 9 }).toBuffer();
};

const pngTargets = [
  ["favicon-16x16.png", 16, {}],
  ["favicon-32x32.png", 32, {}],
  ["apple-touch-icon.png", 180, { flatten: true }],
  ["android-chrome-192x192.png", 192, { flatten: true }],
  ["android-chrome-512x512.png", 512, { flatten: true }],
];

for (const [name, size, opts] of pngTargets) {
  await writeFile(path.join(pub, name), await png(size, opts));
  console.log("wrote", name);
}

// favicon.ico: a PNG-compressed ICO holding 16/32/48 frames (all modern browsers read this).
const icoSizes = [16, 32, 48];
const frames = await Promise.all(icoSizes.map(png));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);

let offset = 6 + frames.length * 16;
const dir = Buffer.concat(
  frames.map((buf, i) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(icoSizes[i] === 256 ? 0 : icoSizes[i], 0);
    e.writeUInt8(icoSizes[i] === 256 ? 0 : icoSizes[i], 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(buf.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += buf.length;
    return e;
  }),
);

await writeFile(path.join(pub, "favicon.ico"), Buffer.concat([header, dir, ...frames]));
console.log("wrote favicon.ico");
