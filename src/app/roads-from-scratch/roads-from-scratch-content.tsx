"use client";

import MainTemplate from "@/components/common/main-template/main-template";
import Navbar from "@/components/layout/home/navbar/navbar";
import Header from "@/components/layout/home/header/header";
import React from "react";
import Image from "next/image";
import Contact from "@/components/layout/home/contact/contact";
import OurCompany from "@/components/layout/home/our-company/our-company";
import { SERVICE_AREA_CITIES_SHORT } from "@/lib/seo-data";

function RoadsFromScratchContent() {
  return (
    <MainTemplate>
      <Navbar />

      <Header
        title={
          <React.Fragment>
            <span className="d-block text-white">Дорога с нуля</span>
          </React.Fragment>
        }
      />

      <div className="container py-10 mb-[100px] relative z-20">
        <div className="sm:flex-js-s relative">
          <Image
            src="/images/roads-from-scratch.png"
            alt="Укладка асфальта mir darog"
            width={800}
            height={500}
            className="min-w-full min-[940px]:min-w-[800px] sm:absolute left-0 top-0"
          />

          <div className="mb-5 max-w-full min-[940px]:max-w-[900px] bg-white p-6 py-8 relative min-[940px]:left-[10%] sm:top-[100px] shadow-2xl mt-6 sm:mt-[200px] ">
            <h1 className="mb-6 font-bold text-[30px]">
              <span className="text-orange">Дорога с нуля</span> «под ключ» —
              надёжно, профессионально и по справедливой цене
            </h1>
            <p className="text-black mb-4">
              <b className="font-bold">Компания «Максстрой»</b> — это более 15
              лет безупречной работы в сфере дорожного строительства. Мы создаём{" "}
              <b className="font-bold">дороги с нуля,</b>
              обеспечивая полный цикл работ — от проектирования до финального
              асфальтирования. Наши специалисты работают по технологии{" "}
              <b className="font-bold">«под ключ»</b>, что означает: вы
              получаете готовую дорогу, полностью соответствующую требованиям
              ГОСТ и вашим ожиданиям.
            </p>
            <h2 className="mt-6 text-[25px] text-black font-bold mb-2">
              Что мы предлагаем:
            </h2>

            <ul className="list-disc pl-6 mb-6">
              <li className="text-black">
                <b>Дорога с нуля</b> — профессионально и точно по срокам.
              </li>
              <li className="text-black">
                <b>Полный комплекс</b> — дорожных и земляных работ.
              </li>
              <li className="text-black">
                <b>Современная техника</b> — проверенные материалы.
              </li>
              <li className="text-black">
                <b>Цена дороги под ключ</b> — честная, без скрытых затрат.
              </li>
              <li className="underline text-black">
                Гарантия на все виды работ.
              </li>
            </ul>

            <p className="text-black mb-4">
              <b className="font-bold">Мы знаем, что дорога</b> — это не просто
              асфальт. Это комфорт, безопасность и инвестиция в долгосрочную
              надёжность. Поэтому мы уделяем внимание каждой мелочи: от
              подготовки основания до финальной укатки асфальта. Используем
              европейскую спецтехнику, проверенные материалы и опыт, накопленный
              с 2005 года.
            </p>

            <h2 className="mt-6 text-[25px] text-black font-bold mb-2">
              Укладка асфальта и ямочный ремонт
            </h2>
            <p className="text-black mb-4">
              Выполняем качественную укладку асфальта в {SERVICE_AREA_CITIES_SHORT}{" "}
              и по Московской области. Соблюдаем все нормы и технологии. Также
              осуществляем ямочный
              ремонт с применением горячей или холодной смеси, в зависимости от
              сезона. В местах, где дорога частично повреждена, восстанавливаем
              только проблемные участки, что позволяет сэкономить и получить
              отличный результат.
            </p>

            <h2 className="mt-6 text-[25px] text-black font-bold mb-2">
              Дороги — это наша специализация
            </h2>
            <p className="text-black mb-4">
              Будь то новая дорога под ключ или восстановление старого полотна —
              мы подходим к каждому проекту индивидуально. В результате вы
              получаете надёжную, ровную и долговечную дорогу, которая прослужит
              не один год. И всё это — по цене, которая не дорого, а обоснованно
              разумна.
            </p>
          </div>
        </div>
      </div>

      <Contact />

      <OurCompany />
    </MainTemplate>
  );
}

export default RoadsFromScratchContent;
