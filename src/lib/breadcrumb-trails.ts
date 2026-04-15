import { SERVICE_ITEMS, type CityItem, type ServiceItem } from "@/lib/seo-data";

export type BreadcrumbTrailItem = { label: string; href: string };

const HOME: BreadcrumbTrailItem = { label: "Главная", href: "/" };

export function cityLandingPath(citySlug: string): string {
  return `/geo/${citySlug}/${SERVICE_ITEMS[0].slug}`;
}

/** Услуги — /uslugi */
export function trailUslugiHub(): BreadcrumbTrailItem[] {
  return [HOME, { label: "Услуги", href: "/uslugi" }];
}

/** Главная / Услуги / {услуга} — currentPath = /uslugi/slug или /asphalt-laying */
export function trailServicePage(
  service: ServiceItem,
  currentPath: string,
): BreadcrumbTrailItem[] {
  return [
    HOME,
    { label: "Услуги", href: "/uslugi" },
    { label: service.shortTitle, href: currentPath },
  ];
}

/** Города — /geo */
export function trailGeoHub(): BreadcrumbTrailItem[] {
  return [HOME, { label: "Города", href: "/geo" }];
}

/** Главная / Города / {город} / {услуга} */
export function trailGeoService(
  city: CityItem,
  service: ServiceItem,
): BreadcrumbTrailItem[] {
  return [
    HOME,
    { label: "Города", href: "/geo" },
    { label: city.name, href: cityLandingPath(city.slug) },
    {
      label: service.shortTitle,
      href: `/geo/${city.slug}/${service.slug}`,
    },
  ];
}

/** Кейс города — /proekty/[city] */
export function trailProjectCity(city: CityItem): BreadcrumbTrailItem[] {
  return [
    HOME,
    { label: "Проекты и кейсы", href: "/#gallery" },
    { label: `Кейс: ${city.name}`, href: `/proekty/${city.slug}` },
  ];
}

/** Политика */
export function trailPrivacy(): BreadcrumbTrailItem[] {
  return [
    HOME,
    {
      label: "Политика конфиденциальности",
      href: "/privacy-policy",
    },
  ];
}
