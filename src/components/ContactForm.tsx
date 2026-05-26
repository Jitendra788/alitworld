"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const defaultMessage = service
    ? `Hi, I'm interested in ${service}. Please share details and pricing.`
    : "";

  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? "Something went wrong");
      }

      setStatus("success");
      setFeedback(json.message ?? "Message sent successfully!");
      form.reset();
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Failed to send message");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-card-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/15 disabled:opacity-50";

  return (
    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Your name"
        required
        minLength={2}
        disabled={status === "loading"}
        className={inputClass}
      />
      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        disabled={status === "loading"}
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Tell us about your project..."
        rows={5}
        required
        minLength={10}
        disabled={status === "loading"}
        className={inputClass}
        defaultValue={defaultMessage}
      />

      {feedback && (
        <p
          className={`text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}
          role="alert"
        >
          {feedback}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
