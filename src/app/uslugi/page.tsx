import Link from "next/link";
import Image from "next/image";
import MainTemplate from "@/components/common/main-template/main-template";
import Breadcrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Navbar from "@/components/layout/home/navbar/navbar";
import { trailUslugiHub } from "@/lib/breadcrumb-trails";
import { buildUslugiHubMetadata } from "@/lib/seo";
import { SERVICE_ITEMS } from "@/lib/seo-data";
import styles from "@/components/landing/hub.module.css";

export const metadata = buildUslugiHubMetadata();

export default function ServicesHubPage() {
  return (
    <MainTemplate>
      <Navbar />
      <section className={styles.section}>
        <div className="container">
          <Breadcrumbs items={trailUslugiHub()} />
          <article className={styles.hero}>
            <h1 className={styles.title}>Услуги компании Мир-Дорог</h1>
            <p className={styles.lead}>
              Выберите направление работ и получите точную смету по вашему
              объекту.
            </p>
          </article>
          <div className={styles.grid}>
            {SERVICE_ITEMS.map((service) => (
              <article key={service.slug} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={service.hubImage}
                    alt={service.shortTitle}
                    width={640}
                    height={360}
                    className={styles.image}
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  />
                </div>
                <h2 className={styles.cardTitle}>{service.shortTitle}</h2>
                <p className={styles.cardText}>{service.offer}</p>
                <p className={styles.salesText}>{service.hubSales}</p>
                <p className={styles.seoText}>{service.hubSeo}</p>
                <Link href={`/uslugi/${service.slug}`} className={styles.link}>
                  Подробнее →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainTemplate>
  );
}
