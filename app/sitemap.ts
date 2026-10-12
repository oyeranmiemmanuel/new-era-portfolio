import type { MetadataRoute } from "next";
import { getProjects, hasProjects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const pagePaths = [
    "",
    "/portfolio",
    "/about",
    "/contact",
    // Only listed once you have added at least one project.
    ...(hasProjects ? ["/projects"] : []),
  ];

  return [
    ...pagePaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
    })),
    ...getProjects().map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: now,
    })),
  ];
}