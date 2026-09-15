import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "src/app/page.tsx",
  "src/app/about/page.tsx",
  "src/app/programs/page.tsx",
  "src/app/programs/[slug]/page.tsx",
  "src/app/leadership/page.tsx",
  "src/app/business/page.tsx",
  "src/app/impact/page.tsx",
  "src/app/events/page.tsx",
  "src/app/insights/page.tsx",
  "src/app/media/page.tsx",
  "src/app/join/page.tsx",
  "src/app/partnerships/page.tsx",
  "src/app/sitemap.ts",
  "src/app/robots.ts",
  "src/app/manifest.ts",
  "src/data/photo-manifest.ts",
  "src/lib/whatsapp.ts",
  "public/photos/README.md",
];

for (const path of requiredFiles) {
  await access(path, constants.R_OK);
}

const programsSource = await readFile("src/content/programs.ts", "utf8");
const programSlugs = [
  "business-academy",
  "pitching-access-to-capital",
  "networking-business-expo",
  "100-pengusaha-muda",
  "linggaupreneur-summit",
  "business-visit",
  "entrepreneur-talk",
  "business-incubator",
  "investment-club",
];

for (const slug of programSlugs) {
  if (!programsSource.includes(`slug: "${slug}"`)) {
    throw new Error(`Missing flagship program slug: ${slug}`);
  }
}

const photoManifest = await readFile("src/data/photo-manifest.ts", "utf8");
const requiredPhotoNames = [
  "leadership-capryan-agusto.jpg",
  "leadership-robi-apri-yansah.jpg",
  "leadership-dhea-mahyang-sari.jpg",
  "leadership-suci-maharani.jpg",
  "leadership-marisha-aresta.jpg",
  "leadership-muhammad-jumadi.jpg",
  "leadership-yosi-anita.jpg",
  "leadership-khusnul-khoiri.jpg",
  "leadership-ricky-reynaldo.jpg",
  "dokumentasi-pelantikan-2026-01.jpg",
];

for (const filename of requiredPhotoNames) {
  if (!photoManifest.includes(filename)) {
    throw new Error(`Missing canonical photo filename: ${filename}`);
  }
}

const requiredCutouts = [
  "leadership-capryan-agusto-cutout.png",
  "leadership-robi-apri-yansah-cutout.png",
  "leadership-dhea-mahyang-sari-cutout.png",
  "leadership-suci-maharani-cutout.png",
  "leadership-marisha-aresta-cutout.png",
  "leadership-muhammad-jumadi-cutout.png",
  "leadership-yosi-anita-cutout.png",
  "leadership-khusnul-khoiri-cutout.png",
  "leadership-ricky-reynaldo-cutout.png",
];

for (const filename of requiredCutouts) {
  const path = join("public/photos/cutouts", filename);
  await access(path, constants.R_OK);
  if (!photoManifest.includes(`cutouts/${filename}`)) {
    throw new Error(`Generated leadership cutout is not mapped in photo manifest: ${filename}`);
  }
}

const headerSource = await readFile("src/components/shell/site-header.tsx", "utf8");
for (const route of ["/about", "/programs", "/leadership", "/business", "/impact", "/media"]) {
  if (!headerSource.includes(route)) {
    throw new Error(`Global navigation is missing route: ${route}`);
  }
}

async function sourceFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await sourceFiles(path));
    else if (/\.(?:ts|tsx|js|jsx|mjs)$/.test(entry.name)) files.push(path);
  }
  return files;
}

const sourcePaths = await sourceFiles("src");
for (const path of sourcePaths) {
  const source = await readFile(path, "utf8");
  if (source.includes("mailto:")) {
    throw new Error(`Email action remains in public source: ${path}`);
  }
  if (source.includes("hipmitptuinalazhaar@gmail.com")) {
    throw new Error(`Legacy email address remains in public source: ${path}`);
  }
}

const siteConfigSource = await readFile("src/config/site.ts", "utf8");
if (!siteConfigSource.includes('whatsappNumber: "6285783198181"')) {
  throw new Error("Official WhatsApp number is missing or changed unexpectedly");
}

const whatsappSource = await readFile("src/lib/whatsapp.ts", "utf8");
if (!whatsappSource.includes("https://wa.me/")) {
  throw new Error("WhatsApp URL builder is missing the wa.me endpoint");
}

console.log(`platform integrity ok: ${requiredFiles.length} files, ${programSlugs.length} flagship programs, ${requiredPhotoNames.length} canonical photo checks, ${requiredCutouts.length} transparent leadership cutouts, ${sourcePaths.length} source files scanned for contact-channel integrity`);
