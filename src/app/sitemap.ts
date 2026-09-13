import type { MetadataRoute } from "next";
import { flagshipPrograms } from "@/content/programs";
import { getBaseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl();
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: new URL("/", base).toString(), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: new URL("/about", base).toString(), lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: new URL("/programs", base).toString(), lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: new URL("/leadership", base).toString(), lastModified: now, changeFrequency: "monthly", priority: 0.84 },
    { url: new URL("/business", base).toString(), lastModified: now, changeFrequency: "weekly", priority: 0.86 },
    { url: new URL("/impact", base).toString(), lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: new URL("/events", base).toString(), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: new URL("/insights", base).toString(), lastModified: now, changeFrequency: "weekly", priority: 0.78 },
    { url: new URL("/media", base).toString(), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: new URL("/join", base).toString(), lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: new URL("/partnerships", base).toString(), lastModified: now, changeFrequency: "monthly", priority: 0.82 },
  ];

  const programRoutes: MetadataRoute.Sitemap = flagshipPrograms.map((program) => ({
    url: new URL(`/programs/${program.slug}`, base).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.72,
  }));

  return [...staticRoutes, ...programRoutes];
}
