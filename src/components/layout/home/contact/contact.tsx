import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SetCallBack } from "@/app/actions/setCallBack";
import { RandomKey } from "@/utils/helpers";

function Contact() {
  function Submit(e: any) {
    e.preventDefault();

    SetCallBack({
      id: RandomKey(),
      name: e.target.name.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    }).then((res) => {
      if (res.status) {
        alert("Спасибо Ваша заявка отправление");
      }
    });
  }

  return (
    <section
      id="contact"
      className="ls s-py-xl-150 s-py-lg-130 s-py-md-90 s-py-60"
    >
      <Image
        src="/images/contact-bg.webp"
        alt="свяжитесь с нами для любой информации"
        width={500}
        height={500}
        className="cover-image ds s-cover-right s-cover-small lg:absolute right-0 top-0 object-cover"
      />
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6">
            <p className="special-heading with-decoration">
              <span className="text-capitalize">Связаться с нами</span>
            </p>
            <h3 className="special-heading">
              <span className="text-[30px] sm:text-[50px]">
                Свяжитесь с нами для любой информации
              </span>
            </h3>
            <div className="fw-divider-space divider-25 divider-lg-35"></div>
            <div className="fw-divider-line-styled ls ms left-line"></div>
            <div className="fw-divider-space divider-30 divider-lg-35"></div>
            <p className="special-heading">
              <span className="text-capitalize ">Позвоните нам сейчас</span>
            </p>
            <h3 className="special-heading color-main thin ">
              <span className="text-capitalize text-[30px] sm:text-[50px]">
                <Link href="tel:+7 (985) 009 06-60">+7 (985) 009 06-60</Link>
              </span>
            </h3>
          </div>
          <div className="col-lg-6">
            <div className="fw-divider-space divider-30 divider-lg-0"></div>
            <div className="form-wrapper p-30 p-lg-60 p-xl-80 box-shadow ls">
              <form
                className="contact-form c-mb-30 c-gutter-10 form-sites"
                method="post"
                action="#"
                onSubmit={Submit}
              >
                <input type="hidden" name="type" value="Обратная связь" />
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group has-placeholder">
                      <label htmlFor="name333">
                        Ваше имя <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        id="name333"
                        className="form-control"
                        placeholder="Ваше имя *"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group has-placeholder">
                      <label htmlFor="email333">
                        Номер телефона<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="phone"
                        id="email333"
                        className="form-control def-mask-input"
                        placeholder="Номер телефона *"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 ">
                    <div className="form-group has-placeholder">
                      <label htmlFor="message333">Сообщение</label>
                      <textarea
                        style={{ resize: "none" }}
                        name="message"
                        required
                        id="message333"
                        rows={3}
                        cols={45}
                        className="form-control h-[120px]"
                        placeholder="Сообщение"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mt-10">
                    <div className="form-group">
                      <input
                        className="btn btn-maincolor"
                        type="submit"
                        value="Отправить заявку"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
