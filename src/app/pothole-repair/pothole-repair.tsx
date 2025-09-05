"use client";

import MainTemplate from "@/components/common/main-template/main-template";
import Navbar from "@/components/layout/home/navbar/navbar";
import Header from "@/components/layout/home/header/header";
import React from "react";
import Image from "next/image";
import Contact from "@/components/layout/home/contact/contact";
import OurCompany from "@/components/layout/home/our-company/our-company";

function PotholeRepair() {
  return (
    <MainTemplate>
      <Navbar />

      <Header
        title={
          <React.Fragment>
            <span className="d-block text-white">Ямочный ремонт</span>
          </React.Fragment>
        }
      />

      <div className="container py-10 mb-[100px] relative z-20">
        <div className="sm:flex-js-s relative">
          <Image
            src="/images/pothole-repair.png"
            alt="Асфальтовая крошка"
            width={800}
            height={500}
            className="min-w-full min-[940px]:min-w-[800px] sm:absolute left-0 top-0 h-[500px] object-cover object-bottom"
          />

          <section className="mb-5 max-w-full min-[940px]:max-w-[900px] bg-white p-6 py-8 relative min-[940px]:left-[10%] sm:top-[100px] shadow-2xl mt-6 sm:mt-[300px] ">
            <h1 className="mb-6 font-bold text-[30px]">
              <span className="text-orange">Ямочный ремонт</span> — эффективное
              устранение выбоин и трещин
            </h1>
            <p className="text-gray-700 mb-4">
              Ямочный ремонт — это быстрый и экономичный способ восстановить
              дорожное покрытие. Мы используем горячие и холодные смеси, выбирая
              оптимальный вариант в зависимости от температуры и размера
              повреждения, что позволяет устранять дефекты без капитального
              ремонта и закрытия движения.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Что включает ямочный ремонт:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Диагностика и выбор технологии.</strong> Определяем
                состояние покрытия, выбираем горячий или холодный способ,
                подбираем фракцию смеси.
              </li>
              <li>
                <strong>Подготовка повреждённого участка.</strong> Вырезаем
                повреждение, подрезаем края, очищаем полость, сушим и
                обрабатываем битумной эмульсией.
              </li>
              <li>
                <strong>Заполнение и уплотнение.</strong> Укладываем
                асфальтобетонную смесь и уплотняем виброплитой или катком;
                холодный метод позволяет работать зимой, горячий обеспечивает
                надежное основание.
              </li>
              <li>
                <strong>Контроль качества.</strong> Соблюдаем ГОСТ и СНиП,
                проверяем ровность и плотность, предоставляем гарантию на
                работы.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Преимущества ямочного ремонта:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                Экономия и мобильность: минимум техники и быстрота выполнения
                работ.
              </li>
              <li>
                Продление срока службы дороги: правильная подготовка и
                качественные материалы.
              </li>
              <li>
                Возможность работать в любое время года: холодный и горячий
                методы.
              </li>
              <li>Соответствие стандартам качества: контроль по ГОСТ.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Почему выбирают «Максстрой»:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Опыт и профессионализм.</strong> Работаем с 2005 года,
                имеем собственную технику и обученные бригады.
              </li>
              <li>
                <strong>Комплексный подход.</strong> Диагностика, подбор
                технологий, качественная подготовка и контроль результата.
              </li>
              <li>
                <strong>Гарантия и прозрачная цена.</strong> Официальные сметы,
                гарантия на работы, без скрытых затрат.
              </li>
            </ul>

            <p className="mt-8 text-lg font-medium text-gray-900">
              Нужен надёжный ямочный ремонт? Обратитесь в «Максстрой» — мы
              быстро устраним дефекты и продлим срок службы вашей дороги.
            </p>
          </section>
        </div>
      </div>

      <Contact />

      <OurCompany />
    </MainTemplate>
  );
}

export default PotholeRepair;
