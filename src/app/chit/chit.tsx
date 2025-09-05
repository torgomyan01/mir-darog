"use client";

import MainTemplate from "@/components/common/main-template/main-template";
import Navbar from "@/components/layout/home/navbar/navbar";
import Header from "@/components/layout/home/header/header";
import React from "react";
import Image from "next/image";
import Contact from "@/components/layout/home/contact/contact";
import OurCompany from "@/components/layout/home/our-company/our-company";

function Chit() {
  return (
    <MainTemplate>
      <Navbar />

      <Header
        title={
          <React.Fragment>
            <span className="d-block text-white">Асфальтовая крошка</span>
          </React.Fragment>
        }
      />

      <div className="container py-10 mb-[100px] relative z-20">
        <div className="sm:flex-js-s relative">
          <Image
            src="/images/chit.png"
            alt="Асфальтовая крошка"
            width={800}
            height={500}
            className="min-w-full min-[940px]:min-w-[800px] sm:absolute left-0 top-0"
          />

          <section className="mb-5 max-w-full min-[940px]:max-w-[900px] bg-white p-6 py-8 relative min-[940px]:left-[10%] sm:top-[100px] shadow-2xl mt-6 sm:mt-[300px] ">
            <h1 className="mb-6 font-bold text-[30px]">
              <span className="text-orange">Асфальтовая крошка</span> —
              экономичное решение для надёжного покрытия
            </h1>
            <p className="text-gray-700 mb-4">
              Асфальтовая крошка — это вторичный материал, получаемый из
              переработанного асфальта. Он дешевле, но почти не уступает по
              прочности: битум в составе обеспечивает плотность и
              влагостойкость. Материал подходит для частных территорий,
              подъездных дорог, дворов, гаражей, парковок и других площадок с
              умеренной нагрузкой.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Что входит в услугу:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Поставка и доставка материала.</strong> Мы используем
                только качественную крошку, доставляя её на объект собственным
                транспортом.
              </li>
              <li>
                <strong>Полный цикл работ.</strong> Подготавливаем основание,
                снимаем старое покрытие, укладываем крошку и утрамбовываем
                виброкатками. При необходимости усиливаем битумом и делаем
                щебёночную подсыпку.
              </li>
              <li>
                <strong>Ремонт и укрепление.</strong> Укладываем крошку для
                укрепления уже существующих дорог и площадок, увеличивая их
                долговечность.
              </li>
              <li>
                <strong>Минимальные сроки — честная цена.</strong> Стоимость
                начинается от 140 ₽ за м². Выезд на замеры и составление сметы —
                бесплатно.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Преимущества асфальтовой крошки:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Экономия средств и высокое качество покрытия.</li>
              <li>
                Прочность и влагостойкость благодаря наличию битума в составе.
              </li>
              <li>
                Возможность укрепить существующие дороги и продлить их срок
                службы.
              </li>
              <li>
                Легкость укладки и возможность работы без асфальтоукладчика на
                небольших участках.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Почему выбирают «Максстрой»:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Опыт более 15 лет.</strong> Профессиональная команда
                дорожных строителей.
              </li>
              <li>
                <strong>Собственная спецтехника и материалы.</strong> Контроль
                качества на всех этапах.
              </li>
              <li>
                <strong>Профессиональная укладка.</strong> Равномерная укладка,
                уплотнение виброкатками, обработка битумом.
              </li>
              <li>
                <strong>Гарантия и индивидуальный подход.</strong> Работаем с
                частными лицами и организациями, предлагаем гибкие условия
                оплаты.
              </li>
            </ul>

            <p className="mt-8 text-lg font-medium text-gray-900">
              Хотите получить прочное и недорогое покрытие? Закажите укладку
              асфальтовой крошки в компании «Максстрой» — мы подготовим смету,
              доставим материал и выполним работу под ключ.
            </p>
          </section>
        </div>
      </div>

      <Contact />

      <OurCompany />
    </MainTemplate>
  );
}

export default Chit;
