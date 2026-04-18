"use client";

import MainTemplate from "@/components/common/main-template/main-template";
import Navbar from "@/components/layout/home/navbar/navbar";
import Header from "@/components/layout/home/header/header";
import React from "react";
import Image from "next/image";
import Contact from "@/components/layout/home/contact/contact";
import OurCompany from "@/components/layout/home/our-company/our-company";

function Borders() {
  return (
    <MainTemplate>
      <Navbar />

      <Header
        title={
          <React.Fragment>
            <span className="d-block text-white">Установка бордюров</span>
          </React.Fragment>
        }
      />

      <div className="container py-10 mb-[100px] relative z-20">
        <div className="sm:flex-js-s relative">
          <Image
            src="/images/borders.png"
            alt="Асфальтовая крошка"
            width={800}
            height={500}
            className="min-w-full min-[940px]:min-w-[800px] sm:absolute left-0 top-0"
          />

          <section className="mb-5 max-w-full min-[940px]:max-w-[900px] bg-white p-6 py-8 relative min-[940px]:left-[10%] sm:top-[100px] shadow-2xl mt-6 sm:mt-[300px] ">
            <h1 className="mb-6 font-bold text-[30px]">
              <span className="text-orange"> Установка бордюров</span> —
              качественно и с гарантией
            </h1>
            <p className="text-gray-700 mb-4">
              Компания «Максстрой» выполняет профессиональный монтаж бордюров в
              Коломне, Ступино, Воскресенске, Раменском, Жуковском, Бронницах и
              по Московской области. Мы используем качественные бетонные и
              гранитные материалы, обеспечивая долговечность и аккуратный
              внешний вид покрытия.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Наши услуги:</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Установка дорожных и тротуарных бордюров;</li>
              <li>Монтаж бордюрного камня вдоль парковок и тротуаров;</li>
              <li>Работы «под ключ» с гарантией;</li>
              <li>Доступные цены и быстрые сроки выполнения.</li>
            </ul>
          </section>
        </div>
      </div>

      <Contact />

      <OurCompany />
    </MainTemplate>
  );
}

export default Borders;
