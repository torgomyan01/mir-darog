import React from "react";
import HeaderSlider from "@/components/layout/home/header/header-slider";
import { useDispatch } from "react-redux";
import { setModalCalc } from "@/redux/modals";

interface IProps {
  title: React.ReactNode | string;
}

function Header({ title }: IProps) {
  const dispatch = useDispatch();

  const openModalCalc = () => dispatch(setModalCalc(true));

  return (
    <section className="ls container-px-0 c-gutter-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page_slider">
              <div className="flexslider slider-1 top-space">
                <ul className="slides">
                  <li
                    className="ds ms slide-1 cover-image s-overlay header-bg text-left flex-active-slide w-full opacity-100 bg-red-600 h-[1000px]"
                    style={{
                      backgroundImage: "url(/img/header-image.webp)",
                    }}
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-12">
                          <div className="intro_layers_wrapper">
                            <div className="intro_layers">
                              <div className="intro_layer main-title animated fadeInLeft">
                                <h2 className="!text-white font-bold text-[30px] sm:text-[45px] lg:text-[65px]">
                                  {title}
                                </h2>
                              </div>
                              <div className="intro_layer text animated fadeInLeft">
                                <h2 className="fs-16 fw-300 !text-white math-auto">
                                  Асфальтирование дорог в Коломне, Ступино,
                                  Воскресенске, Раменском, Жуковском, Бронницах
                                  и по Московской области. Комплексное решение
                                  с нашими профессионалами.
                                </h2>
                              </div>
                              <div
                                className="intro_layer slider-button animated fadeInLeft"
                                data-animation="fadeInLeft"
                                data-delay="150"
                              >
                                <button
                                  className="btn medium-btn btn-maincolor"
                                  onClick={openModalCalc}
                                >
                                  калькулятор
                                </button>
                              </div>
                              <div
                                className="intro_layer slider-social animated fadeInLeft"
                                data-animation="fadeInLeft"
                                data-delay="150"
                              >
                                <div className="social-icons">
                                  <a
                                    href="https://t.me/+79850090660"
                                    className="fa fa-telegram "
                                    target="_blank"
                                    rel="noreferrer"
                                  ></a>
                                  <a
                                    href="https://wa.me/+79850090660?text=здравствуйте"
                                    className="fa fa-whatsapp "
                                    target="_blank"
                                    rel="noreferrer"
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="social-icons">
                      <a
                        href="https://t.me/+79850090660"
                        className="fa fa-telegram "
                        target="_blank"
                        rel="noreferrer"
                      />
                      <a
                        href="https://wa.me/+79850090660?text=здравствуйте"
                        className="fa fa-whatsapp "
                        target="_blank"
                        rel="noreferrer"
                      />
                    </div>
                  </li>
                </ul>
                <ol className="flex-control-nav flex-control-paging"></ol>
              </div>
            </div>
          </div>
          <HeaderSlider />
        </div>
      </div>
    </section>
  );
}

export default Header;
