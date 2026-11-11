import type { MetadataRoute } from "next";
import { SITE_URL, localePath, type Lang } from "./site";
import { works } from "./works";

const LANGS: Lang[] = ["th", "en"];

// Every page in both languages, each pointing at its translation.
// Mockup demo apps (/mockups) are noindex and left out on purpose.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { path: "/", changeFrequency: "monthly" as const, priority: 1 },
    ...works.map((work) => ({
      path: `/work/${work.slug}`,
      changeFrequency: "yearly" as const,
      priority: work.mockup ? 0.5 : 0.8
    }))
  ];
  const url = (lang: Lang, path: string) => `${SITE_URL}${localePath(lang, path)}`;

  return pages.flatMap((page) =>
    LANGS.map((lang) => ({
      url: url(lang, page.path),
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages: { th: url("th", page.path), en: url("en", page.path) } }
    }))
  );
}
