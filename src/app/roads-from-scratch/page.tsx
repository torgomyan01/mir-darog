"use server";

import React from "react";
import RoadsFromScratchContent from "@/app/roads-from-scratch/roads-from-scratch-content";

export async function generateMetadata() {
  return {
    title:
      "Дорога с нуля «под ключ» в Москве и Московской области – качественно и выгодно",
    description:
      "Асфальтирование и укладка брусчатки в Воскресенском: профессиональные дорожные работы по выгодной цене за м2 асфальта.",
    keywords:
      "асфальтирование, м2, цена +за м2, асфальт, брусчатка тротуарная, город дорог, Воскресенске, Дорожные работы, Ступинский район, Коломна район, Санкт-Петербург",
  };
}

function Page() {
  return <RoadsFromScratchContent />;
}

export default Page;
