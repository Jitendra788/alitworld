import type { ReactNode } from "react";

type PageHeroProps = {
  label: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  align?: "center" | "left";
};

export function PageHero({
  label,
  title,
  description,
  children,
  align = "center",
}: PageHeroProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <section className="page-hero">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
        aria-hidden
      />
      <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${alignClass}`}>
        <p className={`section-label border-white/20 bg-white/10 text-cyan ${align === "center" ? "mx-auto" : ""}`}>
          {label}
        </p>
        <h1 className="mt-4 text-[1.65rem] font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p
            className={`mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-5 sm:text-base md:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
        {children && (
          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 [&_.btn-hero-primary]:w-full [&_.btn-hero-primary]:max-w-sm [&_.btn-hero-primary]:justify-center sm:[&_.btn-hero-primary]:w-auto">
            {children}
          </div>
        )}
      </div>
      <div className="hero-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 h-24" aria-hidden />
    </section>
  );
}
