import Image from "next/image";
import Link from "next/link";
import styles from "@/components/landing/sales-landing.module.css";
import { BUSINESS_INFO, type ServiceItem } from "@/lib/seo-data";

interface SalesLandingProps {
  service: ServiceItem;
  cityName?: string;
}

function SalesLanding({ service, cityName }: SalesLandingProps) {
  const targetCity = cityName ?? "Москва";
  const heading = `${service.shortTitle} в ${targetCity}`;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.kicker}>Дорожная компания в Москве и области</p>
          <h1 className={styles.title}>{heading}</h1>
          <p className={styles.lead}>{service.leadText}</p>
          <div className={styles.ctaRow}>
            <Link
              href={`tel:${BUSINESS_INFO.phoneHref}`}
              className={styles.ctaPrimary}
            >
              Позвонить: {BUSINESS_INFO.phone}
            </Link>
            <Link href="/#contact" className={styles.ctaSecondary}>
              Получить смету за 1 день
            </Link>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Цена и сроки</h2>
            <p className={styles.cardText}>
              {service.priceHint}. Перед стартом фиксируем смету, сроки и этапы
              работ в договоре.
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Собственная техника</h2>
            <p className={styles.cardText}>
              Работаем без посредников и контролируем качество на каждом этапе:
              от подготовки основания до финальной укатки.
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>Гарантия результата</h2>
            <p className={styles.cardText}>
              Даем официальную гарантию и соблюдаем технологические требования
              для долговечного покрытия.
            </p>
          </article>
        </div>

        <div className={styles.photosGrid}>
          {service.salesGallery.map((shot) => (
            <figure key={shot.src} className={styles.photoCard}>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={600}
                height={360}
                className={styles.photoImage}
                sizes="(max-width: 767px) 100vw, 33vw"
              />
              <figcaption className={styles.photoCaption}>
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.faq}>
          {service.faq.map((faqItem) => (
            <details key={faqItem.question}>
              <summary>{faqItem.question}</summary>
              <p className={styles.faqAnswer}>{faqItem.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SalesLanding;
