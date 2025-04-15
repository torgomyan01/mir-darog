import React from "react";
import { RandomKey } from "@/utils/helpers";
import Slider from "react-slick";
import { sliderItems } from "@/utils/consts";

function HeaderSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="h-[1000px] w-[475px] absolute top-0 right-0 z-20 hidden min-[1559px]:block">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={RandomKey()} className="h-[1000px] bg-[#f15201]">
            <div className="item-media min-h-[500px]">
              <img
                src={item.image}
                alt={item.text}
                width="400"
                height="533"
                className="min-h-[500px] object-cover"
              />
            </div>
            <div className="item-content px-[50px] py-[60px]">
              <h5 className="number-service !text-white mb-[100px] text-[30px]">
                0{index + 1}
              </h5>
              <h5 className="!text-white mb-[30px] text-[50px]">
                {item.title}
              </h5>
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

export default HeaderSlider;
