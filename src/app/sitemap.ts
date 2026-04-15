import type { MetadataRoute } from "next";
import { CITY_ITEMS, SERVICE_ITEMS, SITE_BASE_URL } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/privacy-policy", "/uslugi", "/geo"];

  const servicePages = SERVICE_ITEMS.map((item) => `/uslugi/${item.slug}`);
  const geoPages = CITY_ITEMS.flatMap((city) =>
    SERVICE_ITEMS.map((service) => `/geo/${city.slug}/${service.slug}`),
  );
  const projectStories = CITY_ITEMS.map((city) => `/proekty/${city.slug}`);

  return [...staticPages, ...servicePages, ...geoPages, ...projectStories].map(
    (path) => ({
      url: `${SITE_BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "/" ? 1 : path.startsWith("/proekty/") ? 0.75 : 0.8,
    }),
  );
}
