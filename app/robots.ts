
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://khaliletanamoh.com/sitemap.xml",
    host: "https://khaliletanamoh.com",
  };
}
