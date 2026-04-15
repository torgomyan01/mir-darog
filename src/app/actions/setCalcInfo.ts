"use server";

import { sendLeadToTelegram } from "@/lib/telegram-notify";

export async function SaveCalcInfo(data: ICalcForm) {
  const tg = await sendLeadToTelegram({
    name: data.name,
    phone: data.phone,
    message: `Площадь: ${data.count} м², высота/слой: ${data.height}`,
    heading: "Заявка с калькулятора (mir-darog.ru)",
  });

  if (!tg.ok) {
    console.warn("[SaveCalcInfo] Telegram:", tg.error);
    return {
      status: 0,
      message: "Telegram error",
      error: tg.error,
    };
  }

  return { status: 1 };
}
