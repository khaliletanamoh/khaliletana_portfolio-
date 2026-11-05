import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = site.projects.map((project) => ({
    url: `${site.url}/projects/${slugify(project.title)}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: site.url,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projects,
  ];
}
