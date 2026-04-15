import Image from "next/image";
import Link from "next/link";
import styles from "@/components/layout/home/home-redesign.module.css";
import LeadForm from "@/components/layout/home/lead-form";
import {
  BUSINESS_INFO,
  CITY_PROJECT_STORIES,
  PRIMARY_COMMERCIAL_KEYWORDS,
  SERVICE_ITEMS,
} from "@/lib/seo-data";

function HomeRedesign() {
  const topServices = SERVICE_ITEMS.slice(0, 6);
  const processSteps = [
    {
      text: "Осмотр объекта и бесплатная консультация",
      iconClass: "fa-solid fa-eye",
    },
    {
      text: "Подготовка сметы и согласование сроков",
      iconClass: "fa-solid fa-circle-dollar",
    },
    {
      text: "Выполнение работ с техконтролем",
      iconClass: "fa-solid fa-gear",
    },
    {
      text: "Сдача объекта и гарантийные обязательства",
      iconClass: "fa-solid fa-check",
    },
  ];

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroBgWrap} aria-hidden>
          <video
            className={styles.heroBgVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/images/hero-road-bg.png"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroBgOverlay} />
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroLayout}>
            <article className={`${styles.heroMain} ${styles.heroMainGlass}`}>
              <p className={styles.kicker}>
                Дорожная компания в Москве и области
              </p>
              <h1 className={styles.title}>
                Асфальтирование и дорожные работы для частных и коммерческих
                объектов
              </h1>
              <p className={styles.lead}>
                Делаем надежное покрытие под ключ: от подготовки основания до
                финальной сдачи. Работаем по договору, фиксируем смету и сроки.
              </p>
              <div className={styles.ctaRow}>
                <Link
                  href={`tel:${BUSINESS_INFO.phoneHref}`}
                  className={styles.primaryBtn}
                >
                  Позвонить: {BUSINESS_INFO.phone}
                </Link>
                <Link href="/uslugi" className={styles.secondaryBtn}>
                  Выбрать услугу
                </Link>
              </div>
              <div className={styles.keywords}>
                {PRIMARY_COMMERCIAL_KEYWORDS.slice(0, 6).map((keyword) => (
                  <span key={keyword} className={styles.keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
            </article>

            <aside className={styles.heroAside}>
              <h2 className={styles.asideTitle}>Почему выбирают нас</h2>
              <div className={styles.metricGrid}>
                <div className={styles.metricItem}>
                  <p className={styles.metricValue}>13+</p>
                  <p className={styles.metricText}>лет опыта</p>
                </div>
                <div className={styles.metricItem}>
                  <p className={styles.metricValue}>300k+</p>
                  <p className={styles.metricText}>м2 покрытий</p>
                </div>
                <div className={styles.metricItem}>
                  <p className={styles.metricValue}>24h</p>
                  <p className={styles.metricText}>смета за день</p>
                </div>
              </div>
              <div className={styles.keywords}>
                {PRIMARY_COMMERCIAL_KEYWORDS.slice(6, 10).map((keyword) => (
                  <span key={keyword} className={styles.keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="services" className={styles.sectionMuted}>
        <div className="container">
          <h2 className={styles.blockTitle}>Чем мы можем помочь</h2>
          <p className={styles.blockLead}>
            Берем на себя дорожные работы от первого осмотра до сдачи объекта.
            Вы выбираете задачу, а мы подбираем оптимальное решение по срокам и
            бюджету.
          </p>
          <div className={styles.servicesGrid}>
            {topServices.map((service) => (
              <article key={service.slug} className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{service.shortTitle}</h3>
                <p className={styles.serviceText}>{service.offer}</p>
                <Link
                  href={`/uslugi/${service.slug}`}
                  className={styles.serviceLink}
                >
                  Подробнее →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className={styles.section}>
        <div className="container">
          <div className={styles.galleryHead}>
            <div>
              <h2 className={styles.blockTitle}>Истории проектов по городам</h2>
              <p className={styles.blockLead}>
                Реальные кейсы: асфальтирование дорог, ремонт дорог, укладка
                асфальта и благоустройство — с задачами, которые решали на
                объекте. Фото с наших работ.
              </p>
            </div>
            <div className={styles.galleryActions}>
              <Link href="/geo" className={styles.galleryActionSecondary}>
                Города
              </Link>
              <Link href="/uslugi" className={styles.galleryAction}>
                Все услуги
              </Link>
            </div>
          </div>
          <div className={styles.photosGrid}>
            {CITY_PROJECT_STORIES.map((story, index) => (
              <Link
                key={story.citySlug}
                href={`/proekty/${story.citySlug}`}
                className={`${styles.photoCard} ${styles.photoCardLink}`}
              >
                <span className={styles.photoBadge}>{story.cardBadge}</span>
                <Image
                  src={story.image}
                  alt={story.alt}
                  width={640}
                  height={420}
                  className={styles.photoImage}
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className={styles.photoOverlay} />
                <div className={styles.photoMeta}>
                  <h3 className={styles.photoTitle}>{story.cardTitle}</h3>
                  <p className={styles.photoCaption}>{story.cardTeaser}</p>
                  <span className={styles.photoReadMore}>Читать историю →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className={styles.sectionMuted}>
        <div className="container">
          <h2 className={styles.blockTitle}>Как мы работаем</h2>
          <p className={styles.blockLead}>
            Четкий процесс позволяет держать качество и сроки под контролем.
          </p>
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <article key={step.text} className={styles.processItem}>
                <div className={styles.processHead}>
                  <span className={styles.processIndex}>{index + 1}</span>
                  <span className={styles.processIcon} aria-hidden>
                    <i className={step.iconClass} />
                  </span>
                </div>
                <p className={styles.processText}>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className="container">
          <div className={styles.split}>
            <article className={`${styles.card} ${styles.estimateCard}`}>
              <span className={styles.cardTag}>Быстрый старт проекта</span>
              <h2 className={styles.blockTitle}>Получите смету за 1 день</h2>
              <p className={styles.blockLead}>
                Оставьте заявку и получите расчет стоимости с учетом вашего
                объекта и сроков.
              </p>
              <div className={styles.formFeatures}>
                <span>Фиксация цены в договоре</span>
                <span>Выезд инженера бесплатно</span>
                <span>Гарантийные обязательства</span>
              </div>
              <LeadForm />
            </article>
            <article className={`${styles.card} ${styles.contactCard}`}>
              <h3 className={styles.contactTitle}>Контактная информация</h3>
              <div className={styles.contactRows}>
                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>Телефон</span>
                  <Link
                    href={`tel:${BUSINESS_INFO.phoneHref}`}
                    className={styles.contactValue}
                  >
                    {BUSINESS_INFO.phone}
                  </Link>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>Режим</span>
                  <span className={styles.contactValue}>
                    ежедневно, 08:00-21:00
                  </span>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>География</span>
                  <span className={styles.contactValue}>
                    Москва, Химки, Мытищи, Люберцы и рядом
                  </span>
                </div>
              </div>
              <div className={styles.contactActions}>
                <Link href="/geo" className={styles.contactButtonSecondary}>
                  Города обслуживания
                </Link>
                <Link
                  href={`tel:${BUSINESS_INFO.phoneHref}`}
                  className={styles.contactButtonPrimary}
                >
                  Позвонить сейчас
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeRedesign;
