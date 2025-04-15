"use client";

import React from "react";
import Navbar from "@/components/layout/home/navbar/navbar";
import Header from "@/components/layout/home/header/header";
import Services from "@/components/layout/home/services/services";
import Gallery from "@/components/layout/home/gallery/gallery";
import Welcome from "@/components/layout/home/we/we";
import { Step } from "@mui/material";
import Contact from "@/components/layout/home/contact/contact";
import OurCompany from "@/components/layout/home/our-company/our-company";
import MainTemplate from "@/components/common/main-template/main-template";
import MobileHeaderSlider from "@/components/layout/home/mobile-header-slider/mobile-header-slider";

export default function Home() {
  return (
    <MainTemplate>
      <Navbar />

      <Header
        title={
          <React.Fragment>
            <span className="d-block text-white">Асфальтирование</span>
            дорог <span className="color-main2">ОТ 320 ₽/М2</span>
          </React.Fragment>
        }
      />

      <MobileHeaderSlider />

      <Services />

      <Welcome />

      <Gallery />

      <Step />

      <Contact />

      <OurCompany />
    </MainTemplate>
  );
}
