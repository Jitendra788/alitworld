import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";

const brands = [
  "TechFlow",
  "ScaleUp",
  "NovaLabs",
  "CloudNine",
  "DataPulse",
  "BuildPro",
];

const stats = [
  { value: "130K+", label: "Community" },
  { value: "100+", label: "Projects" },
  { value: "50K", label: "Prebuilt from" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8">
        <div className="w-full max-w-2xl animate-fade-up text-center lg:text-left">
          <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur-md sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-cyan sm:h-4 sm:w-4" />
            Trusted by 1.3L+ Audience
          </p>

          <h1 className="text-[1.75rem] font-bold leading-[1.12] tracking-tight min-[400px]:text-[2rem] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            <span className="hero-gradient-text">Turning Visions</span>
            <br />
            <span className="text-white">Into Digital Reality</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base sm:leading-relaxed lg:text-lg lg:mx-0">
            Custom development and production-ready SaaS solutions — web,
            mobile, and enterprise technology built for businesses across India.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
            <Link href="/contact" className="btn-hero-primary w-full sm:min-w-[180px] sm:w-auto">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/customized" className="btn-hero-secondary w-full sm:min-w-[180px] sm:w-auto">
              Explore Solutions
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl sm:mt-14 sm:rounded-2xl lg:mx-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-none border-0 px-2 py-4 text-center first:rounded-l-xl last:rounded-r-xl sm:px-4 sm:py-6 sm:first:rounded-l-2xl sm:last:rounded-r-2xl"
            >
              <p className="text-lg font-bold tabular-nums text-white sm:text-2xl md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-white/50 sm:mt-1 sm:text-xs sm:tracking-wider md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="marquee-mask relative mt-8 w-full sm:mt-12">
          <div className="flex animate-marquee gap-10 whitespace-nowrap py-2 sm:gap-14">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 sm:text-xs sm:tracking-[0.25em] md:text-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 sm:h-32" />

      <a
        href="#features"
        className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-white/40 transition-colors hover:text-white/70 sm:bottom-8"
        aria-label="Scroll to features"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
