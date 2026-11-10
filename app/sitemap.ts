import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";
import { works } from "./works";

// Mockup demo apps (/mockups) are noindex and left out on purpose
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...works.map((work) => ({
      url: `${SITE_URL}/work/${work.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: work.mockup ? 0.5 : 0.8
    }))
  ];
}
