"use server";

import React from "react";
import Borders from "@/app/borders/borders";

export async function generateMetadata() {
  return {
    title: "Установка бордюров — надёжно и профессионально",
    description:
      "Установка бордюров в Москве и Подмосковье. Компания «Максстрой» выполняет монтаж дорожных и тротуарных бордюров под ключ. Качественно, надёжно и по доступной цене.",
    keywords:
      "установка бордюров, монтаж бордюрного камня, установка дорожных бордюров Москва, тротуарные бордюры цена, бордюрные работы под ключ, укладка бордюров",
    alternates: {
      canonical: "https://www.mir-darog.ru/borders",
    },
  };
}

function Page() {
  return <Borders />;
}

export default Page;
