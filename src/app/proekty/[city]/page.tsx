import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MainTemplate from "@/components/common/main-template/main-template";
import Breadcrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Navbar from "@/components/layout/home/navbar/navbar";
import { trailProjectCity } from "@/lib/breadcrumb-trails";
import { buildArticleSchema, buildProjectStoryMetadata } from "@/lib/seo";
import {
  BUSINESS_INFO,
  CITY_ITEMS,
  getCityBySlug,
  getCityProjectStory,
  SITE_BASE_URL,
  type CitySlug,
} from "@/lib/seo-data";
import styles from "./project-story.module.css";

interface PageProps {
  params: Promise<{ city: CitySlug }>;
}

export function generateStaticParams() {
  return CITY_ITEMS.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city } = await params;
  const story = getCityProjectStory(city);
  if (!story) {
    return {};
  }
  return buildProjectStoryMetadata(story, city);
}

export default async function CityProjectStoryPage({ params }: PageProps) {
  const { city } = await params;
  const cityItem = getCityBySlug(city);
  const story = getCityProjectStory(city);

  if (!cityItem || !story) {
    notFound();
  }

  const pageUrl = `${SITE_BASE_URL}/proekty/${cityItem.slug}`;
  const articleSchema = buildArticleSchema({
    headline: story.cardTitle,
    description: story.metaDescription,
    imagePath: story.image,
    url: pageUrl,
  });

  return (
    <MainTemplate>
      <Navbar />
      <div className="container">
        <Breadcrumbs items={trailProjectCity(cityItem)} />
        <div className={styles.page}>
          <Link href="/#gallery" className={styles.back}>
            ← К реальным проектам
          </Link>
          <div className={styles.hero}>
            <Image
              src={story.image}
              alt={story.alt}
              fill
              className={styles.heroImage}
              sizes="100vw"
              priority
            />
            <div className={styles.heroOverlay} />
            <div className={styles.heroInner}>
              <p className={styles.heroEyebrow}>Кейс в {cityItem.name}</p>
              <h1 className={styles.heroTitle}>{story.cardTitle}</h1>
            </div>
          </div>

          <article className={styles.article}>
            <p className={styles.lead}>{story.intro}</p>
            {story.body.map((paragraph, index) => (
              <p key={`p-${index}`} className={styles.body}>
                {paragraph}
              </p>
            ))}

            <div className={styles.ctaBlock}>
              <p className={styles.ctaTitle}>
                Нужны дорожные работы в {cityItem.name}?
              </p>
              <div className={styles.ctaRow}>
                <Link
                  href={`tel:${BUSINESS_INFO.phoneHref}`}
                  className={styles.ctaPrimary}
                >
                  Позвонить: {BUSINESS_INFO.phone}
                </Link>
                <Link
                  href={`/geo/${cityItem.slug}/asfaltirovanie-dorog`}
                  className={styles.ctaSecondary}
                >
                  Услуги в {cityItem.name}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </MainTemplate>
  );
}
