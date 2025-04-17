"use client";

import React, { useEffect, useState } from "react";
import { generateAdminPassword } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { SITE_URL } from "@/utils/consts";
import { getAdminData } from "@/app/actions/getAdminInfo";

interface IAdminInfo {
  calcRegister:
    | {
        count: string;
        height: string;
        id: string;
        name: string;
        phone: string;
      }[]
    | null;
  callback:
    | {
        id: string;
        message: string;
        name: string;
        phone: string;
      }[]
    | null;
}

function Page() {
  const router = useRouter();
  const [adminSuccess, setAdminSuccess] = useState<boolean>(false);
  const [adminInfo, setAdminInfo] = useState<IAdminInfo | null>(null);

  useEffect(() => {
    const getPass = prompt("Enter Password");

    if (getPass === generateAdminPassword()) {
      setAdminSuccess(true);

      getAdminData().then((res: any) => {
        if (res.status === 1) {
          setAdminInfo(res.data);
        }
      });
    } else {
      router.push(SITE_URL.HOME);
    }
  }, []);

  return (
    <>
      {adminSuccess ? (
        <div className="pt-10">
          <div className="container">
            <h1 className="font-bold text-[20px] mb-4">Заказать звонок</h1>

            <table>
              <tbody>
                <tr>
                  <th className="font-bold">name</th>
                  <th className="font-bold">Phone</th>
                  <th className="font-bold">Message</th>
                </tr>
                {adminInfo?.callback?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h1 className="font-bold text-[20px] mb-4 mt-[100px]">
              Расчёт калькулятора
            </h1>

            <table>
              <tbody>
                <tr>
                  <th className="font-bold">Name</th>
                  <th className="font-bold">Phone</th>
                  <th className="font-bold">Width</th>
                  <th className="font-bold">Height</th>
                </tr>
                {adminInfo?.calcRegister?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.count}</td>
                    <td>{item.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}

export default Page;
