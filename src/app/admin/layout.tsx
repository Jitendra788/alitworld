"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/admin", label: "Dashboard", exact: true },
  { href: "/admin/blogs", label: "Blogs" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/faqs", label: "FAQs" },
  { href: "/admin/messages", label: "Messages" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/admin/login";
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });
      router.push("/admin/login");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  }

  if (isLogin) {
    return (
      <div className="fixed inset-0 z-[100] overflow-auto bg-zinc-950">
        {children}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex overflow-hidden bg-zinc-100">
      <aside className="flex w-56 shrink-0 flex-col bg-zinc-950 text-zinc-100">
        <div className="border-b border-zinc-800 px-5 py-5">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Alitworld
          </p>
          <p className="mt-1 text-lg font-semibold text-[#c8f031]">Admin</p>
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-3">
          {nav.map((item) => {
            const active = item.exact
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  active
                    ? "bg-[#0f3d2e] text-[#c8f031]"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
          >
            View site
          </a>
        </nav>
        <div className="border-t border-zinc-800 p-3">
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full rounded-md px-3 py-2 text-left text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white disabled:opacity-50"
          >
            {loggingOut ? "Logging out…" : "Logout"}
          </button>
        </div>
      </aside>
      <main className="min-w-0 flex-1 overflow-auto">{children}</main>
    </div>
  );
}
