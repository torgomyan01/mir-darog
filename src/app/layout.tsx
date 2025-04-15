import type { Metadata } from "next";
import "./bootstrap.min.css";
import "./globals.scss";
import "./icomoon.css";
import "../icons/icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title:
    "Асфальтирование Воскресенский, Ступинский, Коломна район: Аасфальтировать дорогу — работы по укладке АБС с материалом, ремонт покрытия, асфальтировка от компании Мир-Дорог",
  description:
    "Асфальтирование и укладка брусчатки в Воскресенском: профессиональные дорожные работы по выгодной цене за м2 асфальта.",
  keywords:
    "асфальтирование, м2, цена +за м2, асфальт, брусчатка тротуарная, город дорог, Воскресенске, Дорожные работы, Ступинский район, Коломна район, Санкт-Петербург",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning={true}>
      <body>
        <NextTopLoader />
        <div id="canvas">{children}</div>
      </body>
    </html>
  );
}
