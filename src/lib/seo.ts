import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const productionUrl = "https://profil.hipmiptuinalazhaar.workers.dev";
const localUrl = "http://localhost:3000";

export function getBaseUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (configuredUrl) return new URL(configuredUrl);
  return new URL(process.env.NODE_ENV === "production" ? productionUrl : localUrl);
}

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const canonical = new URL(path, getBaseUrl());
  const resolvedTitle = title ? `${title} | ${siteConfig.shortName}` : `${siteConfig.name} | Digital Headquarters`;
  const socialImage = new URL("/assets/documentation/pelantikan-2026/hero-pelantikan-2026.webp", getBaseUrl());

  return {
    title: resolvedTitle,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description,
      locale: "id_ID",
      images: [{ url: socialImage, width: 1536, height: 1024, alt: "HIPMI PT UIN Al Azhaar Lubuklinggau pada Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026" }],
    },
    twitter: { card: "summary_large_image", title: resolvedTitle, description, images: [socialImage] },
  };
}
