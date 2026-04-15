"use server";

/** Сайт без серверной БД: заявки только в Telegram. Админка — пустые таблицы. */
export async function getAdminData() {
  return {
    status: 1,
    data: {
      callback: [] as {
        id: string;
        message: string;
        name: string;
        phone: string;
      }[],
      calcRegister: [] as {
        count: string;
        height: string;
        id: string;
        name: string;
        phone: string;
      }[],
    },
  };
}
