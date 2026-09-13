import type { MetadataRoute } from "next";
import { flagshipPrograms } from "@/content/programs";
import { getBaseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl();
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: new URL("/", base).toString(), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: new URL("/about", base).toString(), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: new URL("/programs", base).toString(), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const programRoutes: MetadataRoute.Sitemap = flagshipPrograms.map((program) => ({
    url: new URL(`/programs/${program.slug}`, base).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.72,
  }));

  return [...staticRoutes, ...programRoutes];
}
