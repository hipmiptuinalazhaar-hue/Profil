import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

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
];

function assertAvif(buffer, label) {
  const signature = buffer.subarray(4, 12).toString("ascii");
  if (!signature.startsWith("ftypavif")) {
    throw new Error(`${label}: reconstructed file is not a valid AVIF container`);
  }
}

function assertJpeg(buffer, label) {
  const startsWithSoi = buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8;
  const endsWithEoi = buffer.length >= 4 && buffer.at(-2) === 0xff && buffer.at(-1) === 0xd9;
  if (!startsWithSoi || !endsWithEoi) {
    throw new Error(`${label}: reconstructed file is not a valid JPEG`);
  }
}

for (const asset of assets) {
  const encodedParts = await Promise.all(
    asset.parts.map((part) =>
      readFile(resolve(root, "assets-src/phase-3", part), "utf8"),
    ),
  );

  const encoded = encodedParts.join("").replace(/\s+/g, "");
  const buffer = Buffer.from(encoded, "base64");

  if (buffer.length < asset.minBytes) {
    throw new Error(
      `${asset.label}: reconstructed asset is unexpectedly small (${buffer.length} bytes)`,
    );
  }

  assertAvif(buffer, asset.label);

  const outputPath = resolve(root, asset.output);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buffer);
  console.log(`materialized ${asset.label}: ${asset.output} (${buffer.length} bytes)`);
}

const photoSourceDir = resolve(root, "assets-src/photos");
const encodedPhotoPack = (await readFile(resolve(photoSourceDir, "photos.pack.b64"), "utf8")).replace(/\s+/g, "");
const photoPack = Buffer.from(encodedPhotoPack, "base64");
const photoManifest = JSON.parse(await readFile(resolve(photoSourceDir, "photos-manifest.json"), "utf8"));

if (!Array.isArray(photoManifest) || photoManifest.length !== 24) {
  throw new Error(`official photos: expected 24 manifest entries, found ${Array.isArray(photoManifest) ? photoManifest.length : "invalid manifest"}`);
}

const seenFilenames = new Set();
let highestByte = 0;
for (const photo of photoManifest) {
  const { filename, offset, length, sha256 } = photo;

  if (typeof filename !== "string" || !/^[a-z0-9-]+\.jpg$/.test(filename)) {
    throw new Error(`official photos: unsafe or invalid filename ${String(filename)}`);
  }
  if (seenFilenames.has(filename)) {
    throw new Error(`official photos: duplicate filename ${filename}`);
  }
  seenFilenames.add(filename);

  if (!Number.isInteger(offset) || !Number.isInteger(length) || offset < 0 || length <= 0 || offset + length > photoPack.length) {
    throw new Error(`official photos: invalid byte range for ${filename}`);
  }

  const buffer = photoPack.subarray(offset, offset + length);
  assertJpeg(buffer, filename);

  const digest = createHash("sha256").update(buffer).digest("hex");
  if (digest !== sha256) {
    throw new Error(`official photos: integrity check failed for ${filename}`);
  }

  const outputPath = resolve(root, "public/photos", filename);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buffer);
  highestByte = Math.max(highestByte, offset + length);
}

if (highestByte !== photoPack.length) {
  throw new Error(`official photos: photo pack length mismatch (${highestByte} mapped of ${photoPack.length} bytes)`);
}

console.log(`materialized ${photoManifest.length} official HIPMI photos into public/photos (${photoPack.length} packed bytes)`);
