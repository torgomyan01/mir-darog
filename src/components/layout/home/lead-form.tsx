"use client";

import { FormEvent, useState } from "react";
import { IMaskInput } from "react-imask";
import { SetCallBack } from "@/app/actions/setCallBack";
import styles from "@/components/layout/home/lead-form.module.css";

function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [hasError, setHasError] = useState(false);
  const [preferredContact, setPreferredContact] = useState<
    "phone" | "whatsapp" | "telegram"
  >("phone");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatusText("");
    setHasError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const message = String(formData.get("message") ?? "").trim();

    const result = await SetCallBack({
      id: crypto.randomUUID(),
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message,
      preferredContact,
    });

    if (result.status) {
      setStatusText("Спасибо! Заявка отправлена, мы скоро свяжемся с вами.");
      form.reset();
    } else {
      setStatusText("Не удалось отправить заявку. Попробуйте еще раз.");
      setHasError(true);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>Онлайн заявка</p>
        <h3 className={styles.title}>Обсудим ваш объект за 10 минут</h3>
        <p className={styles.subtitle}>
          Оставьте контакты, и мы подготовим персональную смету с вариантами
          материалов и сроков.
        </p>
      </div>

      <div className={styles.row}>
        <label htmlFor="lead-name" className={styles.field}>
          <span className={styles.label}>Ваше имя</span>
          <input
            id="lead-name"
            type="text"
            name="name"
            required
            placeholder="Например, Андрей"
            className={styles.input}
          />
        </label>
        <label htmlFor="lead-phone" className={styles.field}>
          <span className={styles.label}>Телефон</span>
          <IMaskInput
            id="lead-phone"
            type="tel"
            name="phone"
            required
            mask="+{7} (000) 000-00-00"
            placeholder="+7 (___) ___-__-__"
            className={styles.input}
          />
        </label>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Удобный способ связи</span>
        <div className={styles.switcher}>
          <button
            type="button"
            className={`${styles.switcherButton} ${preferredContact === "phone" ? styles.switcherButtonActive : ""}`}
            onClick={() => setPreferredContact("phone")}
          >
            Телефон
          </button>
          <button
            type="button"
            className={`${styles.switcherButton} ${preferredContact === "whatsapp" ? styles.switcherButtonActive : ""}`}
            onClick={() => setPreferredContact("whatsapp")}
          >
            WhatsApp
          </button>
          <button
            type="button"
            className={`${styles.switcherButton} ${preferredContact === "telegram" ? styles.switcherButtonActive : ""}`}
            onClick={() => setPreferredContact("telegram")}
          >
            Telegram
          </button>
        </div>
      </div>

      <label htmlFor="lead-message" className={styles.field}>
        <span className={styles.label}>Кратко о задаче</span>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          placeholder="Площадь, тип объекта, желаемые сроки"
          className={styles.textarea}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className={styles.submit}
        aria-busy={loading}
      >
        {loading ? (
          <span className={styles.submitInner}>
            <span className={styles.submitSpinner} aria-hidden />
            <span className={styles.submitLabel}>Отправляем…</span>
          </span>
        ) : (
          <span className={styles.submitInner}>
            <span className={styles.submitLabel}>Получить смету</span>
          </span>
        )}
      </button>
      {statusText ? (
        <p className={`${styles.status} ${hasError ? styles.statusError : ""}`}>
          {statusText}
        </p>
      ) : null}
    </form>
  );
}

export default LeadForm;
