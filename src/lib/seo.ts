import type { Metadata } from "next";
import {
  BUSINESS_INFO,
  SITE_BASE_URL,
  type CityItem,
  type CityProjectStory,
  type ServiceItem,
} from "@/lib/seo-data";

const defaultDescription =
  "Профессиональные дорожные работы в Москве и Московской области: асфальтирование, ремонт дорог, укладка плитки и благоустройство территорий.";

/** Дефолтное изображение для Open Graph / Twitter (рекомендуемый формат 1200×630) */
export const DEFAULT_OG_IMAGE = "/images/hero-road-bg.png";

const defaultOgImageBlock = [
  {
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: `${BUSINESS_INFO.brandName} — дорожные работы в Москве и области`,
  },
];

function twitterBlock(
  title: string,
  description: string,
  image: string | string[],
) {
  const images = Array.isArray(image) ? image : [image];
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images,
  };
}

export function buildBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_BASE_URL),
    title: {
      default: "Дорожная компания в Москве | Мир-Дорог",
      template: "%s | Мир-Дорог",
    },
    description: defaultDescription,
    openGraph: {
      type: "website",
      locale: "ru_RU",
      url: SITE_BASE_URL,
      title: "Дорожная компания в Москве | Мир-Дорог",
      description: defaultDescription,
      siteName: BUSINESS_INFO.brandName,
      images: defaultOgImageBlock,
    },
    twitter: twitterBlock(
      "Дорожная компания в Москве | Мир-Дорог",
      defaultDescription,
      DEFAULT_OG_IMAGE,
    ),
  };
}

/** Метаданные главной страницы (без дублирования template в title) */
export function buildHomeMetadata(): Metadata {
  return {
    title: {
      absolute: "Дорожная компания в Москве | Мир-Дорог",
    },
    description: defaultDescription,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      url: SITE_BASE_URL,
      title: "Дорожная компания в Москве | Мир-Дорог",
      description: defaultDescription,
      siteName: BUSINESS_INFO.brandName,
      images: defaultOgImageBlock,
    },
    twitter: twitterBlock(
      "Дорожная компания в Москве | Мир-Дорог",
      defaultDescription,
      DEFAULT_OG_IMAGE,
    ),
  };
}

export function buildUslugiHubMetadata(): Metadata {
  const title = "Услуги по асфальтированию и дорожным работам";
  const description =
    "Каталог услуг: асфальтирование дорог, ремонт, благоустройство и укладка тротуарной плитки в Москве и Московской области.";
  const path = "/uslugi";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_BASE_URL}${path}`,
      type: "website",
      locale: "ru_RU",
      siteName: BUSINESS_INFO.brandName,
      images: defaultOgImageBlock,
    },
    twitter: twitterBlock(title, description, DEFAULT_OG_IMAGE),
  };
}

export function buildGeoHubMetadata(): Metadata {
  const title = "Дорожные работы по городам";
  const description =
    "Асфальтирование и ремонт дорог в Москве и городах Московской области.";
  const path = "/geo";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_BASE_URL}${path}`,
      type: "website",
      locale: "ru_RU",
      siteName: BUSINESS_INFO.brandName,
      images: defaultOgImageBlock,
    },
    twitter: twitterBlock(title, description, DEFAULT_OG_IMAGE),
  };
}

export function buildPrivacyMetadata(): Metadata {
  const title = "Политика конфиденциальности";
  const description =
    "Как Оператор обрабатывает персональные данные посетителей сайта mir-darog.ru в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».";
  const path = "/privacy-policy";
  const url = `${SITE_BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${title} | ${BUSINESS_INFO.brandName}`,
      description,
      url,
      type: "website",
      locale: "ru_RU",
      siteName: BUSINESS_INFO.brandName,
      images: defaultOgImageBlock,
    },
    twitter: twitterBlock(
      `${title} | ${BUSINESS_INFO.brandName}`,
      description,
      DEFAULT_OG_IMAGE,
    ),
  };
}

export function buildProjectStoryMetadata(
  story: CityProjectStory,
  citySlug: string,
): Metadata {
  const path = `/proekty/${citySlug}`;
  const url = `${SITE_BASE_URL}${path}`;
  const ogImage = [
    {
      url: story.image,
      width: 1200,
      height: 630,
      alt: story.alt,
    },
  ];
  return {
    title: story.metaTitle,
    description: story.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: story.metaTitle,
      description: story.metaDescription,
      url,
      type: "article",
      locale: "ru_RU",
      siteName: BUSINESS_INFO.brandName,
      images: ogImage,
    },
    twitter: twitterBlock(story.metaTitle, story.metaDescription, story.image),
  };
}

export function buildArticleSchema(params: {
  headline: string;
  description: string;
  imagePath: string;
  url: string;
}) {
  const imageUrl = params.imagePath.startsWith("http")
    ? params.imagePath
    : `${SITE_BASE_URL}${params.imagePath.startsWith("/") ? params.imagePath : `/${params.imagePath}`}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    image: imageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
    url: params.url,
    author: {
      "@type": "Organization",
      name: BUSINESS_INFO.brandName,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.brandName,
    },
  };
}

export function buildServiceMetadata(service: ServiceItem): Metadata {
  const title = `${service.shortTitle} в Москве и области`;
  const description = `${service.offer} ${service.leadText}`;
  const path = `/uslugi/${service.slug}`;
  const ogImages = [
    {
      url: service.hubImage,
      width: 1200,
      height: 630,
      alt: service.shortTitle,
    },
  ];

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_BASE_URL}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_BASE_URL}${path}`,
      type: "article",
      locale: "ru_RU",
      siteName: BUSINESS_INFO.brandName,
      images: ogImages,
    },
    twitter: twitterBlock(title, description, service.hubImage),
  };
}

export function buildGeoMetadata(
  city: CityItem,
  service: ServiceItem,
): Metadata {
  const title = `${service.shortTitle} в ${city.name} — цена за м2`;
  const description = `${service.shortTitle} в ${city.name}. ${service.offer} ${service.priceHint}.`;
  const path = `/geo/${city.slug}/${service.slug}`;
  const ogImages = [
    {
      url: service.hubImage,
      width: 1200,
      height: 630,
      alt: `${service.shortTitle} — ${city.name}`,
    },
  ];

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_BASE_URL}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_BASE_URL}${path}`,
      type: "article",
      locale: "ru_RU",
      siteName: BUSINESS_INFO.brandName,
      images: ogImages,
    },
    twitter: twitterBlock(title, description, service.hubImage),
  };
}

export function buildLocalBusinessSchema() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_INFO.brandName,
    image: [
      `${SITE_BASE_URL}${DEFAULT_OG_IMAGE}`,
      `${SITE_BASE_URL}/img/logo-site.svg`,
    ],
    areaServed: [BUSINESS_INFO.city, BUSINESS_INFO.region],
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_INFO.city,
      addressRegion: BUSINESS_INFO.region,
      addressCountry: BUSINESS_INFO.country,
      streetAddress: BUSINESS_INFO.address,
    },
    telephone: BUSINESS_INFO.phone,
    url: SITE_BASE_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
  };

  if (BUSINESS_INFO.sameAs.length > 0) {
    base.sameAs = BUSINESS_INFO.sameAs;
  }

  return base;
}

export function buildServiceSchema(service: ServiceItem, cityName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cityName
      ? `${service.shortTitle} в ${cityName}`
      : `${service.shortTitle} в Москве`,
    provider: {
      "@type": "Organization",
      name: BUSINESS_INFO.brandName,
      areaServed: [BUSINESS_INFO.city, BUSINESS_INFO.region],
    },
    serviceType: service.shortTitle,
    areaServed: cityName
      ? [cityName, BUSINESS_INFO.region]
      : [BUSINESS_INFO.city],
    description: service.leadText,
  };
}

export function buildFaqSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type BreadcrumbSegment = { name: string; path: string };

/** Полная цепочка для JSON-LD (path: `/uslugi` или `/#gallery`) */
export function buildBreadcrumbListSchema(segments: BreadcrumbSegment[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: segments.map((seg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: seg.name,
      item: toAbsoluteUrl(seg.path),
    })),
  };
}

function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_BASE_URL}${normalized}`;
}

/** @deprecated Используйте buildBreadcrumbListSchema + breadcrumb-trails */
export function buildBreadcrumbSchema(name: string, path: string) {
  return buildBreadcrumbListSchema([
    { name: "Главная", path: "/" },
    { name, path },
  ]);
}
