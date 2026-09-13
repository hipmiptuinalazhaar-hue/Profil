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
  const resolvedTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : `${siteConfig.name} | Digital Headquarters`;

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
    },
    twitter: {
      card: "summary",
      title: resolvedTitle,
      description,
    },
  };
}
