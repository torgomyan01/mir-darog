"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS_INFO } from "@/lib/seo-data";
import { SITE_URL } from "@/utils/consts";
import styles from "@/components/layout/home/navbar/navbar.module.css";

function linkIsActive(pathname: string, href: string): boolean {
  if (href.includes("#")) {
    return false;
  }
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: SITE_URL.HOME, label: "Главная" },
    { href: SITE_URL.SERVICES_HUB, label: "Услуги" },
    { href: SITE_URL.OUR_WORKS, label: "Наши работы" },
    { href: `${SITE_URL.HOME}#about`, label: "О нас" },
    { href: `${SITE_URL.HOME}#gallery`, label: "Проекты" },
    { href: `${SITE_URL.HOME}#contact`, label: "Контакты" },
    { href: SITE_URL.GEO_HUB, label: "Города" },
  ];

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={styles.wrap}>
        <div className="container">
          <div className={styles.inner}>
            <Link href={SITE_URL.HOME} className={styles.brand}>
              <Image
                src="/img/logo.svg"
                alt="Мир-Дорог"
                width={145}
                height={31}
                priority
              />
            </Link>
            <button
              type="button"
              className={`${styles.menuBtn} ${mobileOpen ? styles.menuBtnOpen : ""}`}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            >
              <span className={styles.burger} aria-hidden>
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
              </span>
            </button>
            <nav className={styles.desktopNav} aria-label="Основное меню">
              <div className={styles.desktopNavTrack}>
                {links.map((link) => {
                  const active = linkIsActive(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
            <Link
              href={`tel:${BUSINESS_INFO.phoneHref}`}
              className={styles.cta}
            >
              <span className={styles.ctaIcon} aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.5-.3 1.6.6 3.4.9 5.3.9.8 0 1.5.7 1.5 1.5V21c0 .8-.7 1.5-1.5 1.5C9.9 22.5 1.5 14.1 1.5 3.5 1.5 2.7 2.2 2 3 2h3.5c.8 0 1.5.7 1.5 1.5 0 1.9.3 3.7.9 5.3.2.5.1 1.1-.3 1.5l-2.5 2.5z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className={styles.ctaText}>
                <span className={styles.ctaLabel}>Позвонить</span>
                <span className={styles.ctaPhone}>{BUSINESS_INFO.phone}</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`${styles.backdrop} ${mobileOpen ? styles.backdropVisible : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      <nav
        className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}
        aria-label="Мобильное меню"
        aria-hidden={!mobileOpen}
        id="mobile-nav"
      >
        <div className={styles.drawerInner}>
          {links.map((link) => {
            const active = linkIsActive(pathname, link.href);
            return (
              <Link
                key={`drawer-${link.href}`}
                href={link.href}
                className={`${styles.drawerLink} ${active ? styles.drawerLinkActive : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={`tel:${BUSINESS_INFO.phoneHref}`}
            className={styles.drawerCta}
            onClick={() => setMobileOpen(false)}
          >
            <span className={styles.drawerCtaIcon} aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.5-.3 1.6.6 3.4.9 5.3.9.8 0 1.5.7 1.5 1.5V21c0 .8-.7 1.5-1.5 1.5C9.9 22.5 1.5 14.1 1.5 3.5 1.5 2.7 2.2 2 3 2h3.5c.8 0 1.5.7 1.5 1.5 0 1.9.3 3.7.9 5.3.2.5.1 1.1-.3 1.5l-2.5 2.5z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {BUSINESS_INFO.phone}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
