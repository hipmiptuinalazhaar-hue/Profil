import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = process.cwd();

const assets = [
  {
    label: "HIPMI PT shell mark",
    parts: ["logo.part01.b64", "logo.part02.b64"],
    output: "public/assets/brand/hipmi-pt-uin-alazhaar.avif",
    minBytes: 20_000,
  },
  {
    label: "Pelantikan Akbar 2026 flagship hero",
    parts: ["hero.part01.b64", "hero.part02.b64", "hero.part03.b64"],
    output: "public/assets/documentation/pelantikan-2026/hero-pelantikan-2026.avif",
    minBytes: 60_000,
  },
];

function assertAvif(buffer, label) {
  const signature = buffer.subarray(4, 12).toString("ascii");
  if (!signature.startsWith("ftypavif")) {
    throw new Error(`${label}: reconstructed file is not a valid AVIF container`);
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
