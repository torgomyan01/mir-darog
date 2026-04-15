/**
 * Уведомления о заявках в Telegram.
 *
 * Получатели:
 * - TELEGRAM_CHAT_IDS / TELEGRAM_CHAT_ID в .env (через запятую)
 * - плюс chat id из getUpdates (последние до 100 апдейтов), чтобы не хранить БД:
 *   пользователь пишет боту /start — id попадает в очередь апдейтов.
 *
 * Если у бота настроен webhook, getUpdates пустой — уведомления уходят только на URL вебхука.
 *   Варианты: задать TELEGRAM_CHAT_IDS в .env ИЛИ один раз снять webhook:
 *   в браузере откройте https://api.telegram.org/bot<TOKEN>/deleteWebhook
 *   либо в .env: TELEGRAM_DELETE_WEBHOOK_FOR_POLLING=1 (сервер сам вызовет deleteWebhook перед getUpdates).
 * Отключить getUpdates: TELEGRAM_SKIP_GET_UPDATES=1
 */

function parseChatIds(): string[] {
  const raw =
    process.env.TELEGRAM_CHAT_IDS?.trim() ||
    process.env.TELEGRAM_CHAT_ID?.trim() ||
    "";
  if (!raw) {
    return [];
  }
  return [
    ...new Set(
      raw
        .split(/[,\s;]+/g)
        .map((id) => id.trim())
        .filter(Boolean),
    ),
  ];
}

function chatIdFromUpdate(u: Record<string, unknown>): string | null {
  const msg = u.message as { chat?: { id?: number } } | undefined;
  const em = u.edited_message as { chat?: { id?: number } } | undefined;
  const cq = u.callback_query as
    | { message?: { chat?: { id?: number } } }
    | undefined;
  const mcm = u.my_chat_member as { chat?: { id?: number } } | undefined;
  const cp = u.channel_post as { chat?: { id?: number } } | undefined;
  const cm = u.chat_member as { chat?: { id?: number } } | undefined;
  const ch =
    msg?.chat ??
    em?.chat ??
    cq?.message?.chat ??
    mcm?.chat ??
    cp?.chat ??
    cm?.chat;
  const id = ch?.id;
  if (id == null) return null;
  return String(id);
}

async function telegramApi<T>(
  token: string,
  method: string,
  params?: Record<string, string>,
): Promise<T | null> {
  const u = new URL(`https://api.telegram.org/bot${token}/${method}`);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      u.searchParams.set(k, v);
    }
  }
  try {
    const res = await fetch(u.toString(), {
      signal: AbortSignal.timeout(15_000),
    });
    return (await res.json()) as T;
  } catch (e) {
    console.warn(`[Telegram] ${method}:`, (e as Error).message);
    return null;
  }
}

/** Накопленные chat id из очереди апдейтов (без offset — неподтверждённые апдейты). */
async function getChatIdsFromGetUpdates(token: string): Promise<string[]> {
  const dropWebhook =
    process.env.TELEGRAM_DELETE_WEBHOOK_FOR_POLLING?.trim() === "1";

  if (dropWebhook) {
    const del = await telegramApi<Record<string, unknown>>(
      token,
      "deleteWebhook",
      { drop_pending_updates: "false" },
    );
    console.log(
      "[Telegram] deleteWebhook полный ответ:",
      JSON.stringify(del ?? null, null, 2),
    );
    if (del?.ok) {
      console.log(
        "[Telegram] deleteWebhook выполнен (TELEGRAM_DELETE_WEBHOOK_FOR_POLLING=1)",
      );
    } else {
      console.warn("[Telegram] deleteWebhook не удался (см. JSON выше)");
    }
  }

  const hook = await telegramApi<{
    ok?: boolean;
    result?: { url?: string };
  }>(token, "getWebhookInfo");
  const hookUrl = hook?.result?.url?.trim();
  if (hookUrl) {
    console.warn(
      "[Telegram] У бота включён webhook (%s) — getUpdates не получит апдейты. Задайте TELEGRAM_CHAT_IDS или снимите webhook (ссылка deleteWebhook в комментарии к telegram-notify.ts) либо TELEGRAM_DELETE_WEBHOOK_FOR_POLLING=1",
      hookUrl,
    );
  }

  const pending = await telegramApi<{
    ok?: boolean;
    result?: Record<string, unknown>[];
  }>(token, "getUpdates", { limit: "100" });
  if (!pending?.ok || !Array.isArray(pending.result)) {
    console.warn("[Telegram] getUpdates: ответ не ok или пустой result");
    return [];
  }
  const ids = new Set<string>();
  for (const u of pending.result) {
    const id = chatIdFromUpdate(u);
    if (id) ids.add(id);
  }
  const list = [...ids];
  console.log(
    "[Telegram] getUpdates: апдейтов в ответе=%d, уникальных chat ID=%d",
    pending.result.length,
    list.length,
  );
  console.log("[Telegram] getUpdates: chat ID:", list);
  return list;
}

export async function sendLeadToTelegram(payload: {
  name: string;
  phone: string;
  message: string;
  /** По умолчанию — текст для обычной заявки */
  heading?: string;
}): Promise<{ ok: boolean; error?: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();

  if (!token) {
    console.warn("[Telegram] TELEGRAM_BOT_TOKEN пустой — отправка пропущена");
    return { ok: false, error: "TELEGRAM_BOT_TOKEN не задан" };
  }

  const fromEnv = parseChatIds();
  const skipPoll = process.env.TELEGRAM_SKIP_GET_UPDATES?.trim() === "1";
  const fromUpdates = skipPoll ? [] : await getChatIdsFromGetUpdates(token);
  const chatIds = [...new Set([...fromEnv, ...fromUpdates])];

  if (chatIds.length === 0) {
    console.warn(
      "[Telegram] Нет получателей: добавьте TELEGRAM_CHAT_IDS в .env; если был webhook — снимите (deleteWebhook) или TELEGRAM_DELETE_WEBHOOK_FOR_POLLING=1; после снятия вебхука пользователи должны написать боту /start.",
    );
    return {
      ok: false,
      error:
        "Нет chat ID: TELEGRAM_CHAT_IDS в .env и/или снимите webhook и напишите боту /start",
    };
  }

  console.log(
    "[Telegram] Получатели: из .env=%d, из getUpdates=%d, всего уникальных=%d",
    fromEnv.length,
    fromUpdates.length,
    chatIds.length,
  );
  console.log("[Telegram] Chat ID:", chatIds);

  const title = payload.heading ?? "Новая заявка с сайта mir-darog.ru";

  const text = [
    title,
    "",
    `Имя: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    "",
    "Сообщение:",
    payload.message,
  ].join("\n");

  const safeText = text.length > 4000 ? `${text.slice(0, 3990)}…` : text;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const errors: string[] = [];
  for (const chatId of chatIds) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: safeText,
          disable_web_page_preview: true,
        }),
        signal: AbortSignal.timeout(15_000),
      });
      if (!res.ok) {
        const body = await res.text();
        console.warn(
          "[Telegram] Ошибка chat_id=%s HTTP %s %s",
          chatId,
          res.status,
          body,
        );
        errors.push(`chat ${chatId}: ${res.status} ${body}`);
      } else {
        console.log("[Telegram] Ок chat_id=%s", chatId);
      }
    } catch (e) {
      const msg = (e as Error).message;
      console.warn("[Telegram] Исключение chat_id=%s: %s", chatId, msg);
      errors.push(`chat ${chatId}: ${msg}`);
    }
  }

  if (errors.length === chatIds.length) {
    console.warn(
      "[Telegram] Ни одному получателю не удалось отправить:",
      errors,
    );
    return { ok: false, error: errors.join("; ") };
  }
  if (errors.length > 0) {
    console.warn("[Telegram] Частичный успех. Ошибки:", errors);
  }
  return { ok: true };
}
