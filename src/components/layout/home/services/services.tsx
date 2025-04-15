import React from "react";
import { RandomKey } from "@/utils/helpers";
import Image from "next/image";
import { SITE_URL } from "@/utils/consts";
import Link from "next/link";

const services = [
  {
    name: "Укладка асфальта",
    image: "/images/services/laying-asphalt.webp",
    url: SITE_URL.ASPHALT_LAYING,
  },
  {
    name: "Дороги с нуля",
    image: "/images/services/roads-from-zero.webp",
    url: "#",
  },
  {
    name: "Малых площадей",
    image: "/images/services/small-squares.webp",
    url: "#",
  },
  {
    name: "Крошка",
    image: "/images/services/chit.webp",
    url: "#",
  },
  {
    name: "Ямочный ремонт",
    image: "/images/services/pothole-repair.webp",
    url: "#",
  },
  {
    name: "Бордюров",
    image: "/images/services/borders.webp",
    url: "#",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="ls s-py-xl-150 s-py-lg-130 s-py-md-90 s-py-60"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="special-heading with-decoration">
              <span className="text-capitalize ">Услуги</span>
            </p>
            <h3 className="special-heading text-[30px] sm:text-[50px]">
              Добро пожаловать в <br />
              ООО {`"МАКССТРОЙ"`}
            </h3>
          </div>
          <div className="col-lg-6">
            <div className="fw-divider-space divider-25 divider-lg-0"></div>
            <div className="text-block">
              <p>
                Наш коллектив, обладающий свыше 13 летним опытом, с гордостью
                представляет свою миссию – создавать надежные, безопасные и
                эстетичные покрытия для городских дорог и тротуаров в городе
                Воскресенске.
              </p>
            </div>
            <div className="fw-divider-space divider-30"></div>
          </div>
          <div className="col-12 services-section">
            <div className="fw-divider-space divider-30 divider-lg-55"></div>
            <div className="row ">
              {services.map((service) => (
                <div
                  key={RandomKey()}
                  className="col-12 col-sm-6 col-lg-4 mb-5 vertical-item text-center content-padding content-box-shadow content-up padding-small item-service layout-2"
                >
                  <Link href={service.url} className="modal-open-full">
                    <div className="item-media">
                      <Image
                        src={service.image}
                        alt={`${service.name} mir-darog`}
                        width="713"
                        height="658"
                      />
                    </div>
                    <div className="item-content ls">
                      <h5>
                        <span className="text-[20px]">{service.name}</span>
                      </h5>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
