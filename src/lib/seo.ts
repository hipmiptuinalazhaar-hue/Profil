import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const productionUrl = "https://profil.hipmiptuinalazhaar.workers.dev";

export function getBaseUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || productionUrl;
  return new URL(raw);
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
  const socialImage = new URL("/assets/phase-1/hero-pelantikan.webp", getBaseUrl());

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
      images: [{ url: socialImage, width: 1000, height: 667, alt: "HIPMI PT UIN Al Azhaar Lubuklinggau" }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [socialImage],
    },
  };
}
