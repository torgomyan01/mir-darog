"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/nashi-raboty/page.module.css";

type WorkImage = {
  src: string;
  alt: string;
};

type Props = {
  images: WorkImage[];
};

export default function WorksGallery({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % images.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <section className={styles.grid} aria-label="Галерея выполненных работ">
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            className={styles.card}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Открыть фото объекта ${idx + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw"
              className={styles.image}
            />
            <span className={styles.overlay}>Объект #{idx + 1}</span>
          </button>
        ))}
      </section>

      {activeImage ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фото объекта"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className={styles.close}
            aria-label="Закрыть просмотр"
            onClick={() => setActiveIndex(null)}
          >
            ×
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navPrev}`}
            aria-label="Предыдущее фото"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) =>
                prev === null ? 0 : (prev - 1 + images.length) % images.length,
              );
            }}
          >
            ‹
          </button>
          <div
            className={styles.previewWrap}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={1400}
              height={1000}
              className={styles.preview}
              priority
            />
          </div>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navNext}`}
            aria-label="Следующее фото"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) =>
                prev === null ? 0 : (prev + 1) % images.length,
              );
            }}
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
