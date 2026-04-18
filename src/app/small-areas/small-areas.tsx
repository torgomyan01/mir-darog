"use client";

import MainTemplate from "@/components/common/main-template/main-template";
import Navbar from "@/components/layout/home/navbar/navbar";
import Header from "@/components/layout/home/header/header";
import React from "react";
import Image from "next/image";
import Contact from "@/components/layout/home/contact/contact";
import OurCompany from "@/components/layout/home/our-company/our-company";

function SmallAreas() {
  return (
    <MainTemplate>
      <Navbar />

      <Header
        title={
          <React.Fragment>
            <span className="d-block text-white">Малых площадей</span>
          </React.Fragment>
        }
      />

      <div className="container py-10 mb-[100px] relative z-20">
        <div className="sm:flex-js-s relative">
          <Image
            src="/images/asfalt-small-area.png"
            alt="Укладка асфальта mir darog"
            width={800}
            height={500}
            className="min-w-full min-[940px]:min-w-[800px] sm:absolute left-0 top-0"
          />

          <section className="mb-5 max-w-full min-[940px]:max-w-[900px] bg-white p-6 py-8 relative min-[940px]:left-[10%] sm:top-[100px] shadow-2xl mt-6 sm:mt-[200px] ">
            <h1 className="mb-6 font-bold text-[30px]">
              <span className="text-orange">
                Асфальтирование малых площадей
              </span>{" "}
              — быстро, качественно и по разумной цене
            </h1>
            <p className="text-gray-700 mb-4">
              Компания «Максстрой» предлагает профессиональное асфальтирование
              малых площадей в Коломне, Раменском, Воскресенске, Ступино,
              Жуковском, Бронницах и по Московской области. Малые площади — это
              небольшие участки, часто расположенные в ограниченных или
              труднодоступных местах, где важно уложить надежное асфальтовое
              покрытие.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Что входит в услугу:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Укладка асфальта на любой небольшой территории.</strong>{" "}
                Мы беремся за работу даже там, где другие отказываются из-за
                маленького объема. Используем мини-катки, виброплиты и
                специнструменты.
              </li>
              <li>
                <strong>Полный цикл работ.</strong> Подготавливаем снимаем
                грунт, устраиваем щебеночное основание и при необходимости
                демонтируем старое покрытие.
              </li>
              <li>
                <strong>Ремонт и восстановление.</strong> Асфальтируем ямы и
                просадки, заделываем траншеи и восстанавливаем покрытие после
                ремонта коммуникаций.
              </li>
              <li>
                <strong>Минимальные сроки — честная цена.</strong> Стоимость
                укладки начинается от 800 ₽ за м² и рассчитывается
                индивидуально. Выезд специалиста и замеры — бесплатно.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Почему выбирают «Максстрой»:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Опыт более 15 лет.</strong> Работаем с 2005 года,
                включая малые площади.
              </li>
              <li>
                <strong>Собственная спецтехника и материалы.</strong> Это
                позволяет держать цены доступными и сроки — минимальными.
              </li>
              <li>
                <strong>Профессиональная бригада.</strong> Мастера с опытом
                асфальтирования малых площадей.
              </li>
              <li>
                <strong>Индивидуальный подход и гарантия.</strong> Работаем
                частными лицами и организациями, даём гарантию на все виды
                работ.
              </li>
            </ul>

            <p className="mt-8 text-lg font-medium text-gray-900">
              Нужна укладка асфальта на небольшой площади? Обращайтесь в
              «Максстрой» — мы проконсультируем, подготовим смету и быстро
              выполним асфальтирование.
            </p>
          </section>
        </div>
      </div>

      <Contact />

      <OurCompany />
    </MainTemplate>
  );
}

export default SmallAreas;
