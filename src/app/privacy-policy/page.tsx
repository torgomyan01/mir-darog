import PrivacyPolicy from "@/app/privacy-policy/privacy-policy";

export async function generateMetadata() {
  return {
    title: "Политика конфиденциальности Мир Дарог",
    description:
      "Асфальтирование и укладка брусчатки в Воскресенском: профессиональные дорожные работы по выгодной цене за м2 асфальта.",
    keywords:
      "асфальтирование, м2, цена +за м2, асфальт, брусчатка тротуарная, город дорог, Воскресенске, Дорожные работы, Ступинский район, Коломна район, Санкт-Петербург",
  };
}

function Page() {
  return <PrivacyPolicy />;
}

export default Page;
