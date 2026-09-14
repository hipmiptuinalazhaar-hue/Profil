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

const photoBundleParts = [
  "photos.part00.b64",
  "photos.part01.b64",
  "photos.part02.b64",
];
const photoBundleEncoded = (
  await Promise.all(
    photoBundleParts.map((part) =>
      readFile(resolve(root, "assets-src/photos-bundle", part), "utf8"),
    ),
  )
)
  .join("")
  .replace(/\s+/g, "");
const photoBundle = Buffer.from(photoBundleEncoded, "base64");
const photoMagic = Buffer.from("HIPMI_PHOTOS_V1\n", "ascii");

if (!photoBundle.subarray(0, photoMagic.length).equals(photoMagic)) {
  throw new Error("official photo bundle: invalid bundle signature");
}

const metadataLengthOffset = photoMagic.length;
const metadataLength = photoBundle.readUInt32BE(metadataLengthOffset);
const metadataStart = metadataLengthOffset + 4;
const metadataEnd = metadataStart + metadataLength;
const metadata = JSON.parse(photoBundle.subarray(metadataStart, metadataEnd).toString("utf8"));
const payload = photoBundle.subarray(metadataEnd);

if (!Array.isArray(metadata) || metadata.length !== 24) {
  throw new Error(`official photo bundle: expected 24 photos, received ${metadata?.length ?? 0}`);
}

const outputDir = resolve(root, "public/photos");
await mkdir(outputDir, { recursive: true });

for (const photo of metadata) {
  if (!photo?.name?.endsWith(".jpg") || photo.name.includes("/") || photo.name.includes("\\")) {
    throw new Error(`official photo bundle: unsafe filename ${String(photo?.name)}`);
  }
  const start = Number(photo.offset);
  const end = start + Number(photo.length);
  const buffer = payload.subarray(start, end);
  if (buffer.length !== Number(photo.length)) {
    throw new Error(`${photo.name}: truncated photo payload`);
  }
  if (buffer[0] !== 0xff || buffer[1] !== 0xd8 || buffer.at(-2) !== 0xff || buffer.at(-1) !== 0xd9) {
    throw new Error(`${photo.name}: reconstructed file is not a valid JPEG`);
  }
  const digest = createHash("sha256").update(buffer).digest("hex");
  if (digest !== photo.sha256) {
    throw new Error(`${photo.name}: SHA-256 integrity check failed`);
  }
  await writeFile(resolve(outputDir, photo.name), buffer);
}

console.log(`materialized official HIPMI PT photo set: ${metadata.length} verified JPEG files`);
