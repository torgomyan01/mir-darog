import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/utils/consts";
import { useDispatch } from "react-redux";
import { setModalCalc } from "@/redux/modals";

function Footer() {
  const dispatch = useDispatch();

  const openModalCalc = () => dispatch(setModalCalc(true));
  return (
    <>
      <footer className="page_footer footer-1 text-center text-sm-left  ds s-pt-lg-100 s-pt-md-90 s-pt-60  s-pb-30 c-mb-30">
        <div className="container">
          <div className="row align-center ">
            <div className="col-lg-5 col-12 text-center text-lg-left">
              <div className="widget widget_nav_menu">
                <ul className="list-bordered">
                  <li onClick={openModalCalc}>
                    <span className="cursor-pointer">Калькулятор</span>
                  </li>

                  <li>
                    <Link href="#services">Услуги</Link>
                  </li>
                  <li>
                    <Link href="#contact">Контакты</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-12 text-center">
              <Link href={SITE_URL.HOME} className="logo">
                <Image
                  src="/img/logo-site.svg"
                  alt="logo site"
                  width="145"
                  height="31"
                />
              </Link>
            </div>
            <div className="col-lg-5 col-12 text-center text-lg-right">
              <div id="mwt_bloginfo-2" className="widget widget_bloginfo">
                <div className="social-icons">
                  <Link
                    href="https://t.me/+79850090660"
                    className="fa fa-telegram "
                    target="_blank"
                    rel="noreferrer"
                  />
                  <Link
                    href="https://wa.me/+79850090660?text=здравствуйте"
                    className="fa fa-whatsapp "
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="page_copyright copyright-1 ds s-pb-lg-55 s-pb-md-45 s-pb-15 c-mb-45">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 order-1 order-lg-0 text-center ">
              <p className="copyright-text">
                <span>© 2024 МирДарог.</span>
              </p>
            </div>
            <div className="col-lg-4">
              <div className="widget widget_mailchimp">
                <form
                  className="signup opacity-0"
                  action="https://formspree.io/f/mwpeojln"
                  method="post"
                >
                  <input
                    name="email"
                    type="email"
                    className="form-control mailchimp_email"
                    placeholder="Ваше Email"
                  />
                  <button type="submit" className="search-submit">
                    <span className="screen-reader-text">Подписаться</span>
                  </button>
                  <div className="response"></div>
                </form>
              </div>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
              <p>
                Мы никогда не разглашаем ваши данные.
                <br />
                Ознакомьтесь с нашей Политикой конфиденциальности.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
