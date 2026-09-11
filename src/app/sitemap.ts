import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: getBaseUrl().toString(), lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
