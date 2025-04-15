import React from "react";

function OurCompany() {
  return (
    <section className="ls container-px-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row steps-number c-gutter-110">
              <div
                className="col-lg-4 step ds cover-image s-overlay !py-[50px] py-xl-110 "
                style={{
                  backgroundImage:
                    "url('images/services/we-are-on-the-market.webp')",
                }}
              >
                <img
                  src="images/services/we-are-on-the-market.webp"
                  alt="Опыт работы более 13 лет в сфере дорожного строительства"
                  width="400"
                  height="533"
                />
                <h3 className="step-number">01</h3>
                <div className="step-content">
                  <h4 className="step-title text-[35px] lg:text-[16px]">
                    МЫ НА РЫНКЕ
                  </h4>
                  <p className="step-text">
                    Опыт работы более 13 лет в сфере дорожного строительства
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 step cs cover-image s-overlay !py-[50px] py-xl-110"
                style={{
                  backgroundImage: 'url("images/services/our-company.webp")',
                }}
              >
                <img
                  src="images/services/our-company.webp"
                  alt="Наша компания может похвастаться множеством завершенных проектов."
                  width="606"
                  height="733"
                />
                <h3 className="step-number">02</h3>
                <div className="step-content">
                  <h4 className="step-title text-[35px] lg:text-[16px]">
                    &gt; 300 000 м²
                  </h4>
                  <p className="step-text">
                    Наша компания может похвастаться множеством завершенных
                    проектов.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 step ls cover-image s-overlay !py-[50px] py-xl-110"
                style={{
                  backgroundImage:
                    'url("images/services/extended-warranty.webp")',
                }}
              >
                <img
                  src="images/services/extended-warranty.webp"
                  alt="step1"
                  width="602"
                  height="730"
                />
                <h3 className="step-number">03</h3>
                <div className="step-content">
                  <h4 className="step-title text-[35px] lg:text-[16px]">
                    3 года
                  </h4>
                  <p className="step-text">
                    Расширенная гарантия на 3 года на все виды услуг
                    асфальтирования
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCompany;
