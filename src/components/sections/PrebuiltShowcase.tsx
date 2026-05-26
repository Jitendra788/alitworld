import Link from "next/link";
import { prebuiltShowcases } from "@/data/prebuilt";

type ShowcaseItem = (typeof prebuiltShowcases)[number];

function ShowcaseVisual({ item }: { item: ShowcaseItem }) {
  return (
    <div className="prebuilt-showcase-visual flex min-h-[280px] items-center justify-center rounded-3xl bg-[#eef0f2] p-6 sm:min-h-[320px] sm:p-10 md:p-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.title}
        className="pointer-events-none h-auto w-full max-w-md rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function ShowcaseContent({ item }: { item: ShowcaseItem }) {
  return (
    <div className="prebuilt-showcase-content">
      <h3 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl">
        {item.title}
      </h3>

      <ul className="mt-8 space-y-6 sm:mt-10">
        {item.points.map((text, index) => (
          <li key={text} className="flex gap-4 sm:gap-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eef0f2] text-sm font-bold text-[#0f172a] sm:h-11 sm:w-11">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="pt-1.5 text-sm leading-relaxed text-[#64748b] sm:text-base">{text}</p>
          </li>
        ))}
      </ul>

      <Link
        href={item.href}
        prefetch={!item.external}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className="btn-prebuilt-check mt-8 sm:mt-10"
        aria-label={`Check out ${item.title} demo`}
      >
        Check this out
      </Link>
    </div>
  );
}

export function PrebuiltShowcase() {
  return (
    <div className="relative z-10 space-y-16 sm:space-y-20 md:space-y-24">
      {prebuiltShowcases.map((item) => (
        <article
          key={item.id}
          className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20"
        >
          {item.reverse ? (
            <>
              <ShowcaseContent item={item} />
              <ShowcaseVisual item={item} />
            </>
          ) : (
            <>
              <ShowcaseVisual item={item} />
              <ShowcaseContent item={item} />
            </>
          )}
        </article>
      ))}
    </div>
  );
}
