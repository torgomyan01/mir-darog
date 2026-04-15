import type { Metadata } from "next";
import MainTemplate from "@/components/common/main-template/main-template";
import Navbar from "@/components/layout/home/navbar/navbar";
import WorksGallery from "@/app/nashi-raboty/works-gallery";
import styles from "@/app/nashi-raboty/page.module.css";

const worksImages = Array.from({ length: 44 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/images/works/work-${num}.png`,
    alt: `Наши работы по асфальтированию и дорожным работам — фото ${i + 1}`,
  };
});

export const metadata: Metadata = {
  title: "Наши работы по асфальтированию дорог и площадок | Мир-Дорог",
  description:
    "Фото выполненных объектов: асфальтирование дорог, асфальтирование дворов, ремонт дорог и укладка асфальта на частных и коммерческих территориях.",
};

export default function OurWorksPage() {
  return (
    <MainTemplate>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <header className={styles.head}>
            <h1 className={styles.title}>Наши работы</h1>
            <p className={styles.subtitle}>
              Реальные фото с объектов компании: асфальтирование дорог,
              парковок, дворов и промышленных площадок. Показываем результат
              работ без ретуши и стоковых изображений.
            </p>
          </header>

          <WorksGallery images={worksImages} />
        </div>
      </main>
    </MainTemplate>
  );
}
