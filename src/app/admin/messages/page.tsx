"use client";

import { useCallback, useEffect, useState } from "react";

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/messages", {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed");
      setMessages(await res.json());
    } catch {
      setError("Failed to load messages");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function handleDelete(id: string) {
    if (!confirm("Delete this message?")) return;
    const res = await fetch(`/api/admin/messages?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) {
      alert("Delete failed");
      return;
    }
    setMessages((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-zinc-900">Messages</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Contact form submissions from the website.
      </p>

      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

      {loading ? (
        <p className="mt-8 text-sm text-zinc-500">Loading…</p>
      ) : messages.length === 0 ? (
        <p className="mt-8 text-sm text-zinc-500">No messages yet.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className="rounded-xl border border-zinc-200 bg-white p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-zinc-900">{msg.name}</p>
                  <a
                    href={`mailto:${msg.email}`}
                    className="text-sm text-[#0f3d2e] hover:underline"
                  >
                    {msg.email}
                  </a>
                  <p className="mt-1 text-xs text-zinc-400">
                    {new Date(msg.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(msg.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
              <p className="mt-4 whitespace-pre-wrap text-sm text-zinc-700">
                {msg.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
