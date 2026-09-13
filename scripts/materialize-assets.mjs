import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const root = process.cwd();

const assets = [
  {
    label: "HIPMI PT shell mark",
    parts: [
      "logo.part01.b64",
      "logo.part02.b64",
      "logo.part03.b64",
      "logo.part04.b64",
      "logo.part05.b64",
      "logo.part06.b64",
      "logo.part07.b64",
      "logo.part08.b64",
    ],
    output: "public/assets/brand/hipmi-pt-uin-alazhaar.avif",
    minBytes: 40_000,
  },
  {
    label: "Pelantikan Akbar 2026 flagship hero",
    parts: ["hero.part01.b64", "hero.part02.b64", "hero.part03.b64"],
    output: "public/assets/documentation/pelantikan-2026/hero-pelantikan-2026.avif",
    minBytes: 15_000,
  },
];

function assertAvif(buffer, label) {
  const signature = buffer.subarray(4, 12).toString("ascii");
  if (!signature.startsWith("ftypavif")) {
    throw new Error(`${label}: reconstructed file is not a valid AVIF container`);
  }
}

function assertJpeg(buffer, label) {
  if (buffer[0] !== 0xff || buffer[1] !== 0xd8 || buffer.at(-2) !== 0xff || buffer.at(-1) !== 0xd9) {
    throw new Error(`${label}: generated file is not a valid JPEG container`);
  }
}

for (const asset of assets) {
  const encodedParts = await Promise.all(
    asset.parts.map((part) => readFile(resolve(root, "assets-src/phase-3", part), "utf8")),
  );

  const encoded = encodedParts.join("").replace(/\s+/g, "");
  const buffer = Buffer.from(encoded, "base64");

  if (buffer.length < asset.minBytes) {
    throw new Error(`${asset.label}: reconstructed asset is unexpectedly small (${buffer.length} bytes)`);
  }

  assertAvif(buffer, asset.label);

  const outputPath = resolve(root, asset.output);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buffer);
  console.log(`materialized ${asset.label}: ${asset.output} (${buffer.length} bytes)`);
}

const heroAvifPath = resolve(
  root,
  "public/assets/documentation/pelantikan-2026/hero-pelantikan-2026.avif",
);
const heroJpegPath = resolve(
  root,
  "public/assets/documentation/pelantikan-2026/hero-pelantikan-2026.jpg",
);

const heroMetadata = await sharp(heroAvifPath).metadata();
if (!heroMetadata.width || !heroMetadata.height || heroMetadata.width < 800 || heroMetadata.height < 500) {
  throw new Error(
    `Pelantikan Akbar 2026 flagship hero: invalid decoded dimensions (${heroMetadata.width ?? "?"}x${heroMetadata.height ?? "?"})`,
  );
}

await sharp(heroAvifPath)
  .jpeg({ quality: 88, progressive: true, chromaSubsampling: "4:2:0" })
  .toFile(heroJpegPath);

const heroJpeg = await readFile(heroJpegPath);
if (heroJpeg.length < 50_000) {
  throw new Error(
    `Pelantikan Akbar 2026 flagship hero: generated JPEG is unexpectedly small (${heroJpeg.length} bytes)`,
  );
}
assertJpeg(heroJpeg, "Pelantikan Akbar 2026 flagship hero JPEG fallback");
console.log(
  `generated browser-safe hero JPEG: public/assets/documentation/pelantikan-2026/hero-pelantikan-2026.jpg (${heroJpeg.length} bytes, ${heroMetadata.width}x${heroMetadata.height})`,
);
