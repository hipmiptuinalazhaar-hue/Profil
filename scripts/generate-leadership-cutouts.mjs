import { access, mkdir } from "node:fs/promises";
import { constants } from "node:fs";
import { basename, resolve } from "node:path";
import { rmbg } from "rmbg";
import { createModnetModel } from "rmbg/models";

const root = process.cwd();
const sourceDir = resolve(root, "public/photos");
const outputDir = resolve(sourceDir, "cutouts");

const portraits = [
  "leadership-capryan-agusto.jpg",
  "leadership-robi-apri-yansah.jpg",
  "leadership-dhea-mahyang-sari.jpg",
  "leadership-suci-maharani.jpg",
  "leadership-marisha-aresta.jpg",
  "leadership-muhammad-jumadi.jpg",
  "leadership-yosi-anita.jpg",
  "leadership-khusnul-khoiri.jpg",
  "leadership-ricky-reynaldo.jpg",
];

await mkdir(outputDir, { recursive: true });

const model = createModnetModel();

for (const filename of portraits) {
  const input = resolve(sourceDir, filename);
  await access(input, constants.R_OK);

  const outputName = `${basename(filename, ".jpg")}-cutout.png`;
  const output = resolve(outputDir, outputName);

  console.log(`matting leadership portrait: ${filename}`);
  await rmbg(input, {
    model,
    maxResolution: 2048,
    output,
  });

  await access(output, constants.R_OK);
  console.log(`generated transparent cutout: public/photos/cutouts/${outputName}`);
}

console.log(`leadership cutouts ready: ${portraits.length} portraits`);
