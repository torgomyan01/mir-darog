"use server";

import React from "react";
import PotholeRepair from "@/app/pothole-repair/pothole-repair";

export async function generateMetadata() {
  return {
    title: "Ямочный ремонт — эффективное устранение выбоин и трещин",
    description:
      "Ямочный ремонт дорог в Москве и Подмосковье. Компания «Максстрой» выполняет ямочный ремонт асфальта горячим и холодным способом: вырезание повреждения, обработка битумом, укладка смеси и уплотнение. Быстро, качественно и с гарантией по честной цене.",
    keywords:
      "ямочный ремонт, ямочный ремонт асфальта, ремонт выбоин, ямочный ремонт дорог, ямочный ремонт Москва, устранение ям, холодный асфальт, горячий асфальт, ямочный ремонт цена, ямочный ремонт с гарантией",
    alternates: {
      canonical: "https://www.mir-darog.ru/pothole-repair",
    },
  };
}

function Page() {
  return <PotholeRepair />;
}

export default Page;
