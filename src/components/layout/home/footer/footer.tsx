import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/utils/consts";
import styles from "@/components/layout/home/footer/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <Link href={SITE_URL.HOME}>
              <Image
                src="/img/logo.svg"
                alt="logo site"
                width={145}
                height={31}
              />
            </Link>
            <p className="mb-0">
              Профессиональные дорожные работы в Москве и Московской области.
            </p>
          </div>
          <div className={styles.menu}>
            <Link href={`${SITE_URL.HOME}#contact`}>Заявка</Link>
            <Link href={SITE_URL.SERVICES_HUB}>Услуги</Link>
            <Link href={`${SITE_URL.HOME}#contact`}>Контакты</Link>
            <Link href={SITE_URL.GEO_HUB}>Города</Link>
          </div>
          <div>
            <p className="mb-2">Связь: +7 (985) 009 06-60</p>
            <div className={styles.social}>
              <Link
                href="https://t.me/+79850090660"
                className="fa fa-telegram"
                target="_blank"
                rel="noreferrer"
              />
              <Link
                href="https://wa.me/+79850090660?text=здравствуйте"
                className="fa fa-whatsapp"
                target="_blank"
                rel="noreferrer"
              />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className="mb-0">© 2026 Мир-Дорог. Все права защищены.</p>
          <Link href={SITE_URL.PRIVACY_POLICY}>
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
