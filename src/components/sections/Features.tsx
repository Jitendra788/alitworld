import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicesClassicHeader } from "@/components/sections/ServicesClassicHeader";
import { features } from "@/data/site";

export function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesClassicHeader
          label="Solutions"
          title="What We Build"
          subtitle="Choose custom development for unique products, or launch faster with our prebuilt SaaS platforms."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {features.map((feature, i) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="card-hover group flex flex-col overflow-hidden"
            >
              <div className="relative overflow-hidden border-b border-card-border bg-[#fafbfc] px-6 pt-6 pb-0">
                <span className="absolute left-6 top-6 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#f97316] text-sm font-bold text-white shadow-md">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="relative z-0 w-full rounded-t-2xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="text-xl font-bold text-brand sm:text-2xl">{feature.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{feature.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f97316]">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
