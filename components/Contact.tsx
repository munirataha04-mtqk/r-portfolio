"use client";

import { useState } from "react";
import { SITE } from "./siteData";

type Errors = Partial<
  Record<"name" | "email" | "subject" | "message", string>
>;

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{
    type: "ok" | "error";
    text: string;
  } | null>(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const v = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      subject: String(data.get("subject") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    const found: Errors = {};

    if (!v.name) found.name = "Please enter your name.";

    if (!v.email) {
      found.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
      found.email = "Please enter a valid email address.";
    }

    if (!v.subject) found.subject = "Please enter a subject.";
    if (!v.message) found.message = "Please write a message.";

    setErrors(found);
    setStatus(null);

    if (Object.keys(found).length) return;

    if (SITE.formEndpoint) {
      setSending(true);

      try {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(v),
        });

        if (!res.ok) throw new Error("Request failed");

        setStatus({
          type: "ok",
          text: "Thank you! Your message was sent.",
        });

        form.reset();
      } catch {
        setStatus({
          type: "error",
          text: "Sorry, your message could not be sent. Please try again or email me directly.",
        });
      } finally {
        setSending(false);
      }
    } else {
      const body = `${v.message}\n\nFrom: ${v.name} (${v.email})`;

      window.location.href =
        `mailto:${SITE.email}?subject=${encodeURIComponent(v.subject)}` +
        `&body=${encodeURIComponent(body)}`;

      setStatus({
        type: "ok",
        text: "Your email app should now open with your message ready. It is only sent once you press Send there.",
      });
    }
  }

  const field =
    "mt-2 w-full rounded-none border border-white/[0.16] bg-[#0B0C0C] px-4 py-3.5 text-[12px] leading-relaxed text-[#F0EEEC] placeholder:text-[#666] transition-colors duration-300 focus:border-white/60 focus:outline-none";

  const label =
    "text-[9px] font-medium tracking-[0.25em] text-[#B8B8B8]";

  return (
    <section
      id="contact"
      className="border-t border-white/[0.05] bg-[#0B0C0C] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[760px] px-6 sm:px-8">

        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-[9px] font-medium tracking-[0.35em] text-[#B8B8B8]">
            GET IN TOUCH
          </p>

          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-[28px] leading-tight tracking-[-0.02em] text-[#F0EEEC] sm:text-[34px]">
            Let&apos;s Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-[440px] text-[12px] leading-[1.9] text-[#AFAFAF] sm:text-[13px]">
            Have a photography project in mind? Let&apos;s discuss your ideas
            and create something memorable.
          </p>

          <div className="mx-auto mt-6 h-px w-12 bg-white/35" />
        </div>

        {/* Contact form */}
        <form onSubmit={onSubmit} noValidate className="space-y-6">

          {/* Name and email */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={label}>
                NAME
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className={field}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-err" : undefined}
              />

              {errors.name && (
                <p id="name-err" className="mt-2 text-[11px] text-[#D4B078]">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={label}>
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                className={field}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-err" : undefined}
              />

              {errors.email && (
                <p id="email-err" className="mt-2 text-[11px] text-[#D4B078]">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className={label}>
              SUBJECT
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What is your project about?"
              className={field}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-err" : undefined}
            />

            {errors.subject && (
              <p id="subject-err" className="mt-2 text-[11px] text-[#D4B078]">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={label}>
              YOUR MESSAGE
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me a little about your photography project..."
              className={`${field} resize-y`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-err" : undefined}
            />

            {errors.message && (
              <p id="message-err" className="mt-2 text-[11px] text-[#D4B078]">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex min-h-11 items-center justify-center gap-4 border border-white/60 px-7 py-3 text-[9px] font-medium tracking-[0.2em] text-[#F0EEEC] transition-all duration-300 hover:border-white hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? "SENDING..." : "SEND MESSAGE"}

              {!sending && (
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              )}
            </button>
          </div>

          {/* Submission feedback */}
          <div aria-live="polite">
            {status && (
              <p
                className={`border-l border-white/20 pl-4 text-[12px] leading-relaxed ${
                  status.type === "ok"
                    ? "text-[#B8B8B8]"
                    : "text-[#D4B078]"
                }`}
              >
                {status.text}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
