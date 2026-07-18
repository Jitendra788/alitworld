"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Counts = {
  blogs: number;
  projects: number;
  faqs: number;
  messages: number;
};

export default function AdminDashboardPage() {
  const [counts, setCounts] = useState<Counts | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const [blogsRes, projectsRes, faqsRes, messagesRes] = await Promise.all([
          fetch("/api/admin/blogs", { credentials: "include" }),
          fetch("/api/admin/projects", { credentials: "include" }),
          fetch("/api/admin/faqs", { credentials: "include" }),
          fetch("/api/admin/messages", { credentials: "include" }),
        ]);
        if (!blogsRes.ok || !projectsRes.ok || !faqsRes.ok || !messagesRes.ok) {
          setError("Failed to load dashboard data");
          return;
        }
        const [blogs, projects, faqs, messages] = await Promise.all([
          blogsRes.json(),
          projectsRes.json(),
          faqsRes.json(),
          messagesRes.json(),
        ]);
        setCounts({
          blogs: blogs.length,
          projects: projects.length,
          faqs: faqs.length,
          messages: messages.length,
        });
      } catch {
        setError("Failed to load dashboard data");
      }
    }
    load();
  }, []);

  const cards = [
    {
      label: "Blogs",
      value: counts?.blogs,
      href: "/admin/blogs",
      hint: "Manage posts",
    },
    {
      label: "Projects",
      value: counts?.projects,
      href: "/admin/projects",
      hint: "Our Projects",
    },
    {
      label: "FAQs",
      value: counts?.faqs,
      href: "/admin/faqs",
      hint: "Edit questions",
    },
    {
      label: "Messages",
      value: counts?.messages,
      href: "/admin/messages",
      hint: "Contact inbox",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-xl font-semibold text-zinc-900 sm:text-2xl">Dashboard</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Manage blogs, projects, FAQs, and contact messages.
      </p>

      {error ? <p className="mt-6 text-sm text-red-600">{error}</p> : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-[#0f3d2e]/40"
          >
            <p className="text-sm font-medium text-zinc-500">{card.label}</p>
            <p className="mt-2 text-3xl font-semibold text-zinc-900">
              {card.value ?? "—"}
            </p>
            <p className="mt-2 text-sm text-[#0f3d2e]">{card.hint} →</p>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Quick links
        </h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/admin/blogs/new"
            className="rounded-lg bg-[#0f3d2e] px-4 py-2 text-sm font-medium text-[#c8f031]"
          >
            New blog
          </Link>
          <Link
            href="/admin/projects"
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800"
          >
            Edit projects
          </Link>
          <Link
            href="/admin/faqs"
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800"
          >
            Edit FAQs
          </Link>
          <Link
            href="/admin/messages"
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800"
          >
            View messages
          </Link>
        </div>
      </div>
    </div>
  );
}
