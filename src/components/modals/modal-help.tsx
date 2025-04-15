"use client";

import { Dialog, DialogContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RandomKey } from "@/utils/helpers";
import { SetCallBack } from "@/app/actions/setCallBack";

function ModalHelp() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 1000 * 30);
  }, []);

  function Submit(e: any) {
    e.preventDefault();

    SetCallBack({
      id: RandomKey(),
      name: e.target.name.value,
      phone: e.target.phone.value,
    }).then((res) => {
      if (res.status) {
        alert(
          "Спасибо ваши заявка отправлена мы попробуем скоро связаться с вами",
        );
        setModal(false);
      }
    });
  }

  return (
    <Dialog
      open={modal}
      onClose={() => setModal(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <div className="mt-4">
          <h4 className="font-bold text-center mb-4 text-[20px]">
            Вы ищете ответ на свой вопрос, но пока не нашли его?
          </h4>
          <p className="modal-form-title mb-5 d-none d-md-block">
            Не беспокойтесь! Мы готовы помочь. Просто оставьте свои контактные
            данные, и наши опытные специалисты свяжутся с вами в самое ближайшее
            время. Мы ценим ваше время и готовы предоставить вам подробную
            информацию и экспертное решение ваших вопросов. Не откладывайте -
            получите ответ прямо сейчас!
          </p>
          <div className="row ">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <form
                className="row justify-content-center align-items-center flex-column form-sites"
                action="#"
                method="post"
                onSubmit={Submit}
              >
                <div className="col-12">
                  <label className="input-box">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      name="name"
                      required
                    />
                  </label>
                </div>
                <div className="col-12 ">
                  <label className="input-box mb-0">
                    <input
                      type="text"
                      name="phone"
                      required
                      className="def-mask-input"
                      placeholder="Ваше телефон"
                    />
                  </label>
                </div>
                <div className="col-12 mt-30 d-flex justify-content-center">
                  <button
                    role="button"
                    type="submit"
                    className="btn-blue w-100"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="images/Quations.svg"
                  alt="Quations"
                  width="16"
                  height="16"
                  className="w-100 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ModalHelp;
