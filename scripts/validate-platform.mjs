import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";

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

const headerSource = await readFile("src/components/shell/site-header.tsx", "utf8");
for (const route of ["/about", "/programs", "/leadership", "/business", "/impact", "/media", "/join"]) {
  if (!headerSource.includes(route)) {
    throw new Error(`Global navigation is missing route: ${route}`);
  }
}

console.log(`platform integrity ok: ${requiredFiles.length} files, ${programSlugs.length} flagship programs, ${requiredPhotoNames.length} canonical photo checks`);
