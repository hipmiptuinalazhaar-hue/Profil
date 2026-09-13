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

console.log("photo assets are user-managed under public/photos; no photo conversion runs during build");
