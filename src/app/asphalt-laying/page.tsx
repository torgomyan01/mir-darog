"use server";

import React from "react";
import AsphaltLaying from "@/app/asphalt-laying/asphalt-laying";

export async function generateMetadata() {
  return {
    title:
      "Укладка асфальта  в Москве и Московской области – качественно и выгодно",
    description:
      "Асфальтирование и укладка брусчатки в Воскресенском: профессиональные дорожные работы по выгодной цене за м2 асфальта.",
    keywords:
      "асфальтирование, м2, цена +за м2, асфальт, брусчатка тротуарная, город дорог, Воскресенске, Дорожные работы, Ступинский район, Коломна район, Санкт-Петербург",
    alternates: {
      canonical: "https://www.mir-darog.ru/asphalt-laying",
    },
  };
}

function Page() {
  return <AsphaltLaying />;
}

export default Page;
