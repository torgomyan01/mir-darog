"use client";

import { RandomKey } from "@/utils/helpers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const AllImages = [
  "images/slider1.png",
  "images/slider2.jpg",
  "images/slider3.jpg",
  "images/slider4.png",
  "images/slider5.png",
  "images/slider6.png",
  "images/slider7.jpg",
  "images/slider8.png",
  "images/slider10.png",
  "images/slider11.png",
  "images/slider12.png",
  "images/slider13.jpg",
  "images/slider14.jpg",
  "images/slider16.png",
  "images/slider17.png",
  "images/slider18.png",
  "images/slider19.png",
  "images/slider20.png",
  "images/slider22.png",
  "images/slider23.png",
  "images/slider24.png",
  "images/slider25.png",
  "images/slider26.png",
  "images/slider27.png",
  "images/slider30.png",
  "images/slider29.jpg",
];

const types = [
  "Все",
  "Укладка асфальта",
  "Укладка асфальта Дороги с нуля",
  "Асфальтирование малых площадей",
  "Асфальтная крошка",
  "Ямочный ремонт дорог",
];

function Gallery() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setImages(AllImages);
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="gallery"
      className="ls s-py-xl-150 s-py-lg-130 s-py-md-90 s-py-60"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="special-heading with-decoration text-center">
              <span className="text-capitalize">Что мы делаем</span>
            </p>
            <h3 className="special-heading text-center">
              <span className="text-capitalize text-[50px]">
                Недавние Проекты
              </span>
            </h3>
            <div className="fw-divider-space  divider-30"></div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="flex-jc-c gap-2 flex-wrap w-full max-w-[600px] m-auto pb-6">
                  {types.map((type) => (
                    <span
                      key={RandomKey()}
                      className="px-4 py-2 bg-white text-black text-center w-full sm:w-auto border rounded-[8px] cursor-default transition shadow hover:bg-orange hover:text-white"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="row isotope-wrapper masonry-layout gallery-shortcode c-gutter-30 c-mb-30">
              {images.length ? (
                images.map((image) => (
                  <div key={RandomKey()} className="col-lg-4 col-md-6 walkways">
                    <div className="vertical-item item-gallery only-img ds">
                      <div className="item-media">
                        <Image
                          src={`/${image}`}
                          alt="Выполненный дорожный проект"
                          width={1140}
                          height={583}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="media-links">
                          <div className="links-wrap">
                            <span className="link-zoom photoswipe-link cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex-jc-c py-6 w-full">
                  <CircularProgress />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
