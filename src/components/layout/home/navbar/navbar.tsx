import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [navFixed, setNavFixed] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    });
  }, []);

  function OpenCloseMobileMenu() {
    if (mobileMenu) {
      setMobileMenu(false);
      document.body.classList.remove("active-side-header", "slide-right");
    } else {
      CloseMobileMenu();
    }
  }

  function CloseMobileMenu() {
    setMobileMenu(true);
    document.body.classList.add("active-side-header", "slide-right");
  }

  return (
    <div className="header_absolute ">
      <section className="page_toplogo toplogo-1 ds s-py-28 s-borderbottom d-none d-xl-block">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-2">
              <a href="./" className="logo">
                <Image
                  src="img/logo-site.svg"
                  alt="logo site"
                  width="145"
                  height="31"
                />
              </a>
            </div>
            <div className="col-md-8 text-center text-md-left">
              <div className="d-flex">
                <div className="media ">
                  <div className="icon-styled fs-30">
                    <i className="ico ico-location"></i>
                  </div>
                  <div className="media-body">
                    <h6 className="!text-white">Наш адрес</h6>
                    <p>Воскресенского район</p>
                  </div>
                </div>
                <div className="media ">
                  <div className="icon-styled fs-30">
                    <i className="ico ico-paper-plane"></i>
                  </div>
                  <div className="media-body">
                    <h6 className="!text-white">Email</h6>
                    <p>
                      <a href="mailto:maks.serobyan@mail.ru">
                        <span className="__cf_email__">
                          maks.serobyan@mail.ru
                        </span>
                      </a>
                    </p>
                  </div>
                </div>

                <div className="media ">
                  <div className="icon-styled fs-30">
                    <i className="ico ico-support"></i>
                  </div>
                  <div className="media-body">
                    <h6 className="!text-white">телефон</h6>
                    <p>
                      <a href="tel: +7 (985) 009 06-60">+7 (985) 009 06-60</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 text-center text-md-right"></div>
          </div>
        </div>
      </section>
      <header className="page_header_side header_push header_side_right ds d-xl-none">
        <span
          className={`toggle_menu toggle_menu_side ${mobileMenu ? "active" : ""}`}
          onClick={OpenCloseMobileMenu}
        >
          <span></span>
        </span>
        <div className="scroll-wrapper scrollbar-macosx">
          <div className="scrollbar-macosx scroll-content">
            <div className="side_header_inner">
              <div className="header-side-menu">
                <nav className="mainmenu_side_wrapper">
                  <ul className="nav menu-click">
                    <li className="active">
                      <a href="#">Главная</a>
                    </li>
                    <li className="">
                      <Link href="#services" className="">
                        Услуги
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#about" className="">
                        О Нас
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#gallery" className="">
                        Наши Работы
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#contact" className="">
                        Контакты
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="d-flex flex-column">
                <div className="media ">
                  <div className="icon-styled fs-30">
                    <i className="ico ico-location"></i>
                  </div>
                  <div className="media-body">
                    <h6>Наш Адрес</h6>
                    <p>Воскресенского район</p>
                  </div>
                </div>
                <div className="media ">
                  <div className="icon-styled fs-30">
                    <i className="ico ico-paper-plane"></i>
                  </div>
                  <div className="media-body">
                    <h6>Email</h6>
                    <p>
                      <a href="mailto: maks.serobyan@mail.ru">
                        <span className="__cf_email__">
                          maks.serobyan@mail.ru
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="media ">
                  <div className="icon-styled fs-30">
                    <i className="ico ico-support"></i>
                  </div>
                  <div className="media-body">
                    <h6>Телефон</h6>
                    <p>
                      <a href="tel: 569-251-1024">+7 (985) 009 06-60</a>
                    </p>
                  </div>
                </div>
              </div>
              <span className="appointment">
                <a href="tel: +7 (985) 009 06-60" className="btn btn-maincolor">
                  Связаться с нами
                </a>
              </span>
            </div>
          </div>
          <div className="scroll-element scroll-x">
            <div className="scroll-element_outer">
              <div className="scroll-element_size"></div>
              <div className="scroll-element_track"></div>
              <div className="scroll-bar"></div>
            </div>
          </div>
          <div className="scroll-element scroll-y">
            <div className="scroll-element_outer">
              <div className="scroll-element_size"></div>
              <div className="scroll-element_track"></div>
              <div className="scroll-bar"></div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`page_header_wrapper ds ${navFixed ? "affix-wrapper" : "affix-top-wrapper"} h-[60px]`}
      >
        <header
          className={`page_header ds header-1 s-py-5 ${navFixed ? "affix" : "affix-top"}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-10">
                <a href="./" className="logo">
                  <Image
                    src="img/logo-site.svg"
                    alt="logo site"
                    height="31"
                    width="145"
                  />
                </a>
              </div>
              <div className="col-xl-8 text-center text-md-left d-none d-xl-block">
                <div className="nav-wrap">
                  <nav className="top-nav justify-nav-center">
                    <ul className="nav sf-menu sf-js-enabled sf-arrows">
                      <li className="active">
                        <Link href="#">Главная</Link>
                      </li>
                      <li className="">
                        <Link href="#services"> Услуги</Link>
                      </li>
                      <li className="">
                        <Link href="#about">О Нас</Link>
                      </li>
                      <li className="">
                        <Link href="#gallery">Наши работы</Link>
                      </li>
                      <li className="">
                        <Link href="#contact"> Контакты</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-2 text-right d-none d-xl-block">
                <span className="appointment">
                  <Link href="#contact" className="btn btn-maincolor">
                    Связаться с нами
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
