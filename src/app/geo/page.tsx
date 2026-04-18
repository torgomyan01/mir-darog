import Link from "next/link";
import MainTemplate from "@/components/common/main-template/main-template";
import Breadcrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Navbar from "@/components/layout/home/navbar/navbar";
import { trailGeoHub } from "@/lib/breadcrumb-trails";
import { buildGeoHubMetadata } from "@/lib/seo";
import { CITY_ITEMS, SERVICE_ITEMS } from "@/lib/seo-data";
import styles from "@/components/landing/hub.module.css";

export const metadata = buildGeoHubMetadata();

export default function GeoHubPage() {
  const priorityService = SERVICE_ITEMS[0];

  return (
    <MainTemplate>
      <Navbar />
      <section className={styles.section}>
        <div className="container">
          <Breadcrumbs items={trailGeoHub()} />
          <article className={styles.hero}>
            <h1 className={styles.title}>Города обслуживания</h1>
            <p className={styles.lead}>
              Работаем в Коломне, Ступино, Воскресенске, Раменском, Жуковском,
              Бронницах и других городах Московской области.
            </p>
          </article>
          <div className={styles.grid}>
            {CITY_ITEMS.map((city) => (
              <article key={city.slug} className={styles.card}>
                <h2 className={styles.cardTitle}>
                  Дорожная компания {city.name}
                </h2>
                <p className={styles.cardText}>
                  Выполняем {priorityService.shortTitle.toLowerCase()} и смежные
                  услуги в {city.name}.
                </p>
                <Link href={`/geo/${city.slug}/${priorityService.slug}`}>
                  Перейти к странице города →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainTemplate>
  );
}
