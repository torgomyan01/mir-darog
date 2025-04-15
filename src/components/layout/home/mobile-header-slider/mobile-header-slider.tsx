"use client";

import { sliderItems } from "@/utils/consts";
import { RandomKey } from "@/utils/helpers";
import Slider from "react-slick";
import React from "react";

function MobileHeaderSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 mt-6 block min-[1559px]:hidden">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={RandomKey()} className="h-[1000px] sm:px-[15px]">
            <div className="item-media min-h-[500px]">
              <img
                src={item.image}
                alt={item.text}
                width="400"
                height="533"
                className="min-h-[500px] object-cover"
              />
            </div>
            <div className="item-content px-[50px] py-[60px] bg-[#f15201]">
              <h5 className="number-service !text-white mb-[30px] text-[30px]">
                0{index + 1}
              </h5>
              <h5 className="!text-white mb-2 text-[30px]">{item.title}</h5>
              <p className="mb-[100px]">{item.text}</p>
              <div className="btn-service">
                <span className="w-[70px] h-[2px] bg-white block"></span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MobileHeaderSlider;
