import Link from "next/link";
import { ServicesClassicHeader } from "@/components/sections/ServicesClassicHeader";
import { features } from "@/data/site";

export function Features() {
  return (
    <section id="features" className="section relative z-10 bg-[#f4f5f7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesClassicHeader
          label="Solutions"
          title="Web Development & SaaS Solutions"
          subtitle="Custom websites and apps, or launch faster with Alitworld prebuilt SaaS — plus marketing and SEO support."
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              prefetch
              className="feature-card-fd group relative flex h-full cursor-pointer flex-col rounded-3xl border border-[#e5e8ef] bg-white p-6 shadow-[0_2px_20px_rgba(15,23,42,0.06)] sm:p-8"
            >
              <div className="feature-card-media overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  width={479}
                  height={347}
                  className="feature-card-media-img block w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-[#0f172a] sm:text-[1.35rem]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#64748b] sm:text-[0.95rem]">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
