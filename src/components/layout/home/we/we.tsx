import Image from "next/image";
import { useDispatch } from "react-redux";
import { setModalCalc } from "@/redux/modals";

function Welcome() {
  const dispatch = useDispatch();

  const openModalCalc = () => dispatch(setModalCalc(true));

  return (
    <section
      id="about"
      className="ls ms s-py-xl-150 s-py-lg-130 s-py-md-90 s-py-60"
    >
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6">
            <Image
              src="/images/work.webp"
              alt="Ремонт дорог, а также асфальтирование и строительство дорог наша компания Мир Дорог"
              width="536"
              height="714"
            />
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <div className="fw-divider-space divider-30 divider-lg-0"></div>
            <p className="special-heading with-decoration">
              <span className="text-capitalize ">О нас</span>
            </p>
            <h3 className="special-heading">
              <span className="text-capitalize text-[50px]">Кто мы</span>
            </h3>
            <div className="fw-divider-space divider-25 divider-lg-45"></div>
            <div className="text-block">
              <p>
                Ремонт дорог, а также асфальтирование и строительство дорог наша
                компания Мир Дорог профессионально осуществляет с 2011г. Мы
                выполняем работы любой сложности. Асфальтировка дорог
                производится с
              </p>
            </div>
            <div className="fw-divider-space divider-25 divider-lg-35"></div>
            <div className="fw-divider-line-styled ls ms left-line"></div>
            <div className="fw-divider-space divider-30 divider-lg-35"></div>
            <p className="special-heading">
              <span className="text-capitalize ">Позвоните нам сейчас</span>
            </p>
            <h3 className="special-heading color-main thin ">
              <span className="text-capitalize text-[30px] sm:text-[50px]">
                <a href="tel: +7 (985) 009 06-60">+7 (985) 009 06-60</a>
              </span>
            </h3>
            <div className="fw-divider-space divider-25 divider-lg-50"></div>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
