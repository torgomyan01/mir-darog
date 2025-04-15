import React from "react";

function Step() {
  return (
    <section
      id="steps"
      className="ls ms s-py-xl-150 s-py-lg-130 s-py-md-90 s-py-60"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="special-heading with-decoration">
              <span className="text-capitalize">Простые шаги</span>
            </p>
            <h3 className="special-heading ">
              <span className="text-capitalize text-[30px] sm:text-[50px]">
                Простых шагов мы можем получить <br /> отличных результатов
              </span>
            </h3>
            <div className="fw-divider-space divider-25 divider-lg-45"></div>
            <div className="row steps-number-line c-gutter-0 c-mb-40">
              <div className="col-lg-3 step">
                <h3 className="step-number"></h3>
                <p className="step-title">Подготовка поверхности</p>
                <span className="step-dote">
                  <span></span>
                </span>
                <ul>
                  <li>
                    Очистка участка от растительности, мусора и других
                    препятствий.
                  </li>
                  <li>Удаление старого асфальта, если необходимо.</li>
                  <li>Выравнивание и компактирование грунта.</li>
                  <li>При необходимости, установка бордюров и обочин.</li>
                </ul>
              </div>
              <div className="col-lg-3 step">
                <h3 className="step-number"></h3>
                <p className="step-title">Укладка основания:</p>
                <span className="step-dote">
                  <span></span>
                </span>
                <ul>
                  <li>
                    Нанесение и укатка щебня или другого заполнителя для
                    создания прочной основы.
                  </li>
                  <li>
                    Выравнивание и компактирование основания для обеспечения
                    стабильности и долговечности покрытия.
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 step">
                <h3 className="step-number"></h3>
                <p className="step-title">Асфальтового покрытия:</p>
                <span className="step-dote">
                  <span></span>
                </span>
                <ul>
                  <li>Подготовка асфальтной смеси.</li>
                  <li>
                    Распределение смеси на поверхности с помощью
                    специализированной техники (например, асфальтоукладчика).
                  </li>
                  <li>
                    Уплотнение и выравнивание асфальтового покрытия с помощью
                    вибрационных и гладильных машин.
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 step">
                <h3 className="step-number"></h3>
                <p className="step-title">Финишные шаги:</p>
                <span className="step-dote">
                  <span></span>
                </span>
                <ul>
                  <li>
                    Разметка дорожной разметки и обозначение дорожных знаков
                    (если необходимо).
                  </li>
                  <li>Проверка качества укладки и исправление дефектов.</li>
                  <li>Очистка рабочей зоны и уборка строительного мусора.</li>
                  <li>
                    Посадка растительности на обочинах или укрепление краев
                    дорожного полотна.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt--40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Step;
