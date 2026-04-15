"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import React from "react";
import Footer from "@/components/layout/home/footer/footer";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/common/main-template/main-template.module.css";

interface IProps {
  children: React.ReactNode;
}

function MainTemplate({ children }: IProps) {
  return (
    <Provider store={store}>
      <div id="box_wrapper" className={styles.wrapper}>
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>

      <Link href="tel:+7(985)0090660" className={styles.fixedCall}>
        <Image
          src="/img/call-icon.svg"
          alt="call-icon"
          width={20}
          height={20}
        />
        <span>Позвонить</span>
      </Link>
    </Provider>
  );
}

export default MainTemplate;
