import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

type PageCtaProps = {
  badge?: string;
  title: ReactNode;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageCta({
  badge = "Let's build together",
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Get Free Consultation",
  secondaryHref,
  secondaryLabel,
}: PageCtaProps) {
  return (
    <section className="section pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand via-brand-light to-accent px-5 py-10 text-center shadow-2xl shadow-brand/25 sm:rounded-3xl sm:px-14 sm:py-20">
          <div
            className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            aria-hidden
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white/90">
              <Sparkles className="h-3.5 w-3.5" />
              {badge}
            </p>
            <h2 className="text-xl font-bold text-white sm:text-2xl md:text-4xl">{title}</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/80 sm:mt-4 sm:text-base">
              {description}
            </p>
            <div className="mx-auto mt-7 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <Link
                href={primaryHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand shadow-xl transition-transform hover:scale-105 sm:w-auto sm:px-8"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              {secondaryHref && secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-8"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
