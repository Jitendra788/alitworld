import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

type LogoVariant = "header" | "footer" | "default";
type LogoTheme = "light" | "dark";

type LogoProps = {
  variant?: LogoVariant;
  theme?: LogoTheme;
  className?: string;
};

const variants = {
  header: {
    image: "h-11 w-11 shrink-0 sm:h-12 sm:w-12",
    showLabel: true,
    priority: true,
  },
  footer: {
    image: "h-12 w-12 shrink-0 sm:h-14 sm:w-14",
    showLabel: true,
    priority: false,
  },
  default: {
    image: "h-11 w-11 shrink-0",
    showLabel: false,
    priority: false,
  },
} as const;

export function Logo({
  variant = "default",
  theme = "dark",
  className = "",
}: LogoProps) {
  const { image, showLabel, priority } = variants[variant];
  const isLight = theme === "light";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      className={`group inline-flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90 sm:gap-3 ${className}`}
    >
      <span className="relative flex shrink-0 items-center justify-center rounded-full bg-white/95 p-0.5 shadow-md ring-1 ring-black/5">
        <Image
          src="/logo.png"
          alt={showLabel ? "" : siteConfig.name}
          width={500}
          height={500}
          priority={priority}
          unoptimized
          sizes="(max-width: 640px) 44px, 48px"
          className={`${image} rounded-full object-contain`}
          aria-hidden={showLabel}
        />
      </span>

      {showLabel && (
        <span
          className={`flex min-w-0 flex-col leading-none ${
            variant === "header" ? "hidden min-[420px]:flex" : ""
          }`}
        >
          <span
            className={`text-sm font-bold tracking-[0.12em] sm:text-[15px] ${
              isLight ? "text-white" : "text-brand"
            }`}
          >
            ALITWORLD
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-[11px]">
            Technologies
          </span>
        </span>
      )}

      {showLabel && <span className="sr-only">{siteConfig.name}</span>}
    </Link>
  );
}
