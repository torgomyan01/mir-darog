"use server";

import { sendLeadToTelegram } from "@/lib/telegram-notify";

export async function SetCallBack(data: {
  id: string;
  name: string;
  phone: string;
  message: string;
  preferredContact?: "phone" | "whatsapp" | "telegram";
}) {
  const contactMap: Record<"phone" | "whatsapp" | "telegram", string> = {
    phone: "Телефон",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
  };
  const preferredContact =
    data.preferredContact && contactMap[data.preferredContact]
      ? contactMap[data.preferredContact]
      : "Телефон";

  const messageParts = [
    data.message?.trim() ? data.message.trim() : "Без комментария",
    "",
    `Предпочтительный способ связи: ${preferredContact}`,
  ];

  const tg = await sendLeadToTelegram({
    name: data.name,
    phone: data.phone,
    message: messageParts.join("\n"),
  });

  if (!tg.ok) {
    console.warn("[SetCallBack] Telegram:", tg.error);
    return {
      status: 0 as const,
      message: "Telegram failed",
      error: tg.error,
    };
  }

  return { status: 1 as const };
}
