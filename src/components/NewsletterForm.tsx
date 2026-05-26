"use client";

import { FormEvent, useState } from "react";

type NewsletterFormProps = {
  variant?: "light" | "dark";
};

export function NewsletterForm({ variant = "light" }: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const isDark = variant === "dark";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const email = new FormData(e.currentTarget).get("email");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Subscribe failed");

      setStatus("success");
      setMessage(json.message ?? "Subscribed!");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Subscribe failed");
    }
  }

  return (
    <form className="mt-6 space-y-2" onSubmit={handleSubmit}>
      <p className={`text-xs font-medium ${isDark ? "text-white/50" : "text-muted"}`}>
        Subscribe for updates
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          disabled={status === "loading"}
          className={`flex-1 rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors disabled:opacity-50 ${
            isDark
              ? "border-white/15 bg-white/10 text-white placeholder:text-white/40 focus:border-cyan"
              : "border-card-border bg-white focus:border-accent"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors disabled:opacity-60 sm:shrink-0 ${
            isDark
              ? "bg-cyan hover:bg-cyan/90"
              : "bg-accent hover:bg-accent-hover"
          }`}
        >
          {status === "loading" ? "..." : "Join"}
        </button>
      </div>
      {message && (
        <p
          className={`text-xs ${status === "success" ? "text-emerald-400" : "text-red-400"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
