import { Provider } from "react-redux";
import { store } from "@/store/store";
import React from "react";
import Footer from "@/components/layout/home/footer/footer";
import ModalCalc from "@/components/modals/modal-calc";
import Image from "next/image";
import Link from "next/link";
import ModalHelp from "@/components/modals/modal-help";

interface IProps {
  children: React.ReactNode;
}

function MainTemplate({ children }: IProps) {
  return (
    <Provider store={store}>
      <div id="box_wrapper">
        {children}

        <Footer />

        <ModalCalc />
        <ModalHelp />
      </div>

      <Link href="tel:+7(985)0090660" className="btn btn-fix-call active">
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
