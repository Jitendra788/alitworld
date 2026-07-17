"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import type { FaqItem } from "@/data/site";

export default function AdminFaqsPage() {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/faqs", { credentials: "include" });
      if (!res.ok) throw new Error("Failed");
      setFaqs(await res.json());
    } catch {
      setError("Failed to load FAQs");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function persist(next: FaqItem[], successMsg = "Saved") {
    setSaving(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch("/api/admin/faqs", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(next),
      });
      if (!res.ok) throw new Error("Failed");
      setFaqs(next);
      setMessage(successMsg);
    } catch {
      setError("Failed to save FAQs");
    } finally {
      setSaving(false);
    }
  }

  function updateFaq(index: number, patch: Partial<FaqItem>) {
    setFaqs((prev) =>
      prev.map((faq, i) => (i === index ? { ...faq, ...patch } : faq)),
    );
  }

  function addFaq() {
    setFaqs((prev) => [...prev, { question: "", answer: "" }]);
  }

  async function removeFaq(index: number) {
    if (!confirm("Delete this FAQ?")) return;
    const next = faqs.filter((_, i) => i !== index);
    await persist(next, "FAQ deleted");
  }

  async function onSaveAll(e: FormEvent) {
    e.preventDefault();
    const cleaned = faqs
      .map((f) => ({
        question: f.question.trim(),
        answer: f.answer.trim(),
      }))
      .filter((f) => f.question && f.answer);
    await persist(cleaned, "FAQs saved");
  }

  return (
    <div className="p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">FAQs</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Add, edit, or remove frequently asked questions.
          </p>
        </div>
        <button
          type="button"
          onClick={addFaq}
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800"
        >
          Add FAQ
        </button>
      </div>

      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
      {message ? <p className="mt-4 text-sm text-green-700">{message}</p> : null}

      {loading ? (
        <p className="mt-8 text-sm text-zinc-500">Loading…</p>
      ) : (
        <form onSubmit={onSaveAll} className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-zinc-200 bg-white p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-zinc-500">
                  FAQ #{index + 1}
                </p>
                <button
                  type="button"
                  onClick={() => removeFaq(index)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  value={faq.question}
                  onChange={(e) =>
                    updateFaq(index, { question: e.target.value })
                  }
                  placeholder="Question"
                  className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-[#0f3d2e]"
                  required
                />
                <textarea
                  value={faq.answer}
                  onChange={(e) => updateFaq(index, { answer: e.target.value })}
                  placeholder="Answer"
                  rows={4}
                  className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-[#0f3d2e]"
                  required
                />
              </div>
            </div>
          ))}

          {faqs.length === 0 ? (
            <p className="text-sm text-zinc-500">No FAQs yet. Add one above.</p>
          ) : null}

          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-[#0f3d2e] px-4 py-2.5 text-sm font-medium text-[#c8f031] disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save all FAQs"}
          </button>
        </form>
      )}
    </div>
  );
}
