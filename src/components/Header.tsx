"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const darkNav = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const barClass = darkNav ? "header-glass-dark" : "header-bar";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-6 sm:pt-3 lg:px-8">
      <div
        className={`${barClass} mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-2 rounded-2xl px-2.5 py-2 transition-all duration-300 sm:gap-4 sm:px-5 sm:py-2.5 lg:px-6`}
      >
        <Logo variant="header" theme={darkNav ? "light" : "dark"} className="min-w-0" />

        <nav className="hidden justify-center md:flex">
          <ul
            className={`flex items-center gap-0.5 rounded-full p-1 ${
              darkNav
                ? "bg-white/5"
                : "border border-card-border/80 bg-surface/80"
            }`}
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      active
                        ? darkNav
                          ? "bg-white/15 text-white"
                          : "bg-brand text-white shadow-md"
                        : darkNav
                          ? "text-white/75 hover:bg-white/10 hover:text-white"
                          : "text-muted hover:bg-brand-muted hover:text-brand"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <SocialLinks
            className={`hidden sm:flex ${darkNav ? "[&_a]:text-white/70 [&_a:hover]:bg-white/10 [&_a:hover]:text-white" : ""}`}
            iconClassName="h-[18px] w-[18px]"
          />
          <Link
            href="/contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all sm:inline-flex ${
              darkNav
                ? "bg-gradient-to-r from-cyan to-accent text-white shadow-lg shadow-accent/30 hover:opacity-95"
                : "bg-brand text-white shadow-md hover:bg-brand-light"
            }`}
          >
            Get in Touch
          </Link>
          <button
            type="button"
            className={`rounded-xl p-2.5 transition-colors md:hidden ${
              darkNav
                ? "text-white hover:bg-white/10"
                : "text-brand hover:bg-brand-muted"
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`${barClass} mx-auto mt-2 max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto rounded-2xl p-4 shadow-xl md:hidden`}>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  pathname === link.href
                    ? darkNav
                      ? "bg-white/15 text-white"
                      : "bg-brand text-white"
                    : darkNav
                      ? "text-white/80 hover:bg-white/10"
                      : "text-muted hover:bg-brand-muted hover:text-brand"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-3 justify-center"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
          <SocialLinks
            className={`mt-4 justify-center border-t pt-4 ${darkNav ? "border-white/10 [&_a]:text-white/70" : "border-card-border"}`}
          />
        </div>
      )}
    </header>
  );
}
