"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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

  const navLinks = (
    <>
      {nav.map((item) => {
        const active = item.exact
          ? pathname === item.href
          : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`rounded-md px-3 py-2.5 text-sm transition ${
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
        className="rounded-md px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
      >
        View site
      </a>
    </>
  );

  return (
    <div className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-zinc-100 md:flex-row">
      {/* Mobile top bar */}
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 md:hidden">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
            Alitworld
          </p>
          <p className="text-base font-semibold text-[#c8f031]">Admin</p>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-100"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile overlay */}
      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      {/* Sidebar — drawer on mobile, fixed on desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(18rem,85vw)] flex-col bg-zinc-950 text-zinc-100 transition-transform duration-200 md:static md:z-auto md:w-56 md:shrink-0 md:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="hidden border-b border-zinc-800 px-5 py-5 md:block">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Alitworld
          </p>
          <p className="mt-1 text-lg font-semibold text-[#c8f031]">Admin</p>
        </div>
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 md:hidden">
          <p className="text-sm font-semibold text-[#c8f031]">Menu</p>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-300"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
          {navLinks}
        </nav>
        <div className="border-t border-zinc-800 p-3">
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full rounded-md px-3 py-2.5 text-left text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white disabled:opacity-50"
          >
            {loggingOut ? "Logging out…" : "Logout"}
          </button>
        </div>
      </aside>

      <main className="min-h-0 min-w-0 flex-1 overflow-auto overscroll-contain">
        {children}
      </main>
    </div>
  );
}
