import Image from "next/image";
import { siteConfig } from "@/lib/config";

type BlogCoverProps = {
  src: string;
  alt: string;
  category: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** Cover image with Alitworld logo baked into the visual (badge + branded bar). */
export function BlogCover({
  src,
  alt,
  category,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className = "",
}: BlogCoverProps) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden bg-brand/10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/25 to-black/10" />

      {/* Alitworld logo — top left */}
      <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full bg-white px-2.5 py-1.5 shadow-lg ring-1 ring-black/10">
        <Image
          src="/logo.png"
          alt={siteConfig.name}
          width={28}
          height={28}
          className="h-7 w-7 rounded-full object-contain"
          unoptimized
        />
        <span className="pr-1">
          <span className="block text-[11px] font-bold leading-none tracking-[0.14em] text-brand">
            ALITWORLD
          </span>
          <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.16em] text-gold">
            Technologies
          </span>
        </span>
      </div>

      {/* Category */}
      <span className="absolute bottom-12 left-3 z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand shadow-sm">
        {category}
      </span>

      {/* Branded bar with logo in the image */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-2 bg-brand/90 px-3 py-2 backdrop-blur-sm">
        <Image
          src="/logo.png"
          alt=""
          width={22}
          height={22}
          className="h-[22px] w-[22px] rounded-full bg-white object-contain p-0.5"
          unoptimized
          aria-hidden
        />
        <span className="text-xs font-semibold tracking-wide text-white">
          {siteConfig.shortName} · Web · App · Marketing · SEO
        </span>
      </div>
    </div>
  );
}
