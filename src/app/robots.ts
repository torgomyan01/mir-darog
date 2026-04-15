import type { MetadataRoute } from "next";
import { SITE_BASE_URL } from "@/lib/seo-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/admin"],
    },
    sitemap: `${SITE_BASE_URL}/sitemap.xml`,
  };
}
