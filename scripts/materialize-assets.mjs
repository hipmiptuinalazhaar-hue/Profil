import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = process.cwd();

const assets = [
  {
    label: "HIPMI PT shell mark",
    type: "avif",
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
    label: "Pelantikan Akbar 2026 flagship hero JPEG",
    type: "jpeg",
    parts: [
      "hero-jpeg.part00.b64",
      "hero-jpeg.part01.b64",
      "hero-jpeg.part02.b64",
      "hero-jpeg.part03.b64",
    ],
    output: "public/assets/documentation/pelantikan-2026/hero-pelantikan-2026.jpg",
    minBytes: 80_000,
    sha256: "dd65e594735f4149de2d4190dfe0b64cae6122b8bed2f781d82e02f3c4e682d7",
  },
];

function assertAvif(buffer, label) {
  const signature = buffer.subarray(4, 12).toString("ascii");
  if (!signature.startsWith("ftypavif")) {
    throw new Error(`${label}: reconstructed file is not a valid AVIF container`);
  }
}

function assertJpeg(buffer, label) {
  if (
    buffer[0] !== 0xff ||
    buffer[1] !== 0xd8 ||
    buffer.at(-2) !== 0xff ||
    buffer.at(-1) !== 0xd9
  ) {
    throw new Error(`${label}: reconstructed file is not a valid JPEG container`);
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

  if (asset.type === "avif") {
    assertAvif(buffer, asset.label);
  } else if (asset.type === "jpeg") {
    assertJpeg(buffer, asset.label);
  } else {
    throw new Error(`${asset.label}: unsupported asset type ${asset.type}`);
  }

  if (asset.sha256) {
    const digest = createHash("sha256").update(buffer).digest("hex");
    if (digest !== asset.sha256) {
      throw new Error(
        `${asset.label}: SHA-256 integrity check failed (${digest})`,
      );
    }
  }

  const outputPath = resolve(root, asset.output);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buffer);
  console.log(
    `materialized ${asset.label}: ${asset.output} (${buffer.length} bytes)`,
  );
}
