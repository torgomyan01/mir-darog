"use client";

import { Dialog, DialogContent } from "@mui/material";
import { Button } from "@mui/base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RandomKey } from "@/utils/helpers";
import { setModalCalc } from "@/redux/modals";
import { SaveCalcInfo } from "@/app/actions/setCalcInfo";

function ModalCalc() {
  const dispatch = useDispatch();
  const modal = useSelector((state: IStoreModals) => state.modals.modalCalc);

  const closeModalCalc = () => dispatch(setModalCalc(false));

  function Submit(e: any) {
    e.preventDefault();
    const count = e.target.count.value;
    const height = e.target.height.value;

    const calcPrice = count * (280 * height);
    alert(
      `Плата будет зависеть от вашего вклада около ${calcPrice} рублей, мы передадим ваш номер телефона нашему специалисту, он свяжется с вами, а также вам будут предоставлены скидки за обратную связь.`,
    );

    SaveCalcInfo({
      id: RandomKey(),
      name: e.target.name.value,
      phone: e.target.phone.value,
      count: e.target.count.value,
      height: e.target.height.value,
    });
  }

  return (
    <Dialog
      open={modal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <form
          action="#"
          method="post"
          onSubmit={Submit}
          className="header-calc mt-10 mb-0 px-0 sm:px-10"
        >
          <h4 className="text-[25px] sm:text-[30px] w-full text-center !px-0">
            Калькулятор
          </h4>
          <input type="hidden" name="type" value="Калькулятор" />
          <div className="row">
            <div className="col-12 px-0">
              <label className="input-box">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  name="name"
                  required
                />
              </label>
            </div>
            <div className="col-12 px-0">
              <label className="input-box">
                <input
                  type="text"
                  name="phone"
                  className="def-mask-input"
                  required
                  placeholder="Ваше телефон *"
                />
              </label>
            </div>
            <div className="col-12 px-0">
              <label className="input-box">
                <input
                  type="text"
                  placeholder="Введите площадь (м2) *"
                  className="def-input-number"
                  min="1"
                  max="1000000"
                  required
                  name="count"
                />
              </label>
            </div>
            <div className="col-12 px-0">
              <label className="input-box">
                <input
                  type="text"
                  placeholder="Толщина (см) *"
                  className="def-input-number"
                  required
                  min="3"
                  max="12"
                  name="height"
                />
              </label>
            </div>
            <div className="col-12 px-0 text-center">
              <button
                className="btn btn-secondary px-4 w-full sm:w-auto"
                type="submit"
              >
                рассчитывать
              </button>
              <Button
                autoFocus
                className="btn btn-secondary px-4 sm:ml-2 w-full sm:w-auto"
                onClick={closeModalCalc}
              >
                Закрыть
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCalc;
