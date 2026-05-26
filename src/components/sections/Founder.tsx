import Image from "next/image";
import Link from "next/link";
import { Linkedin, Quote } from "lucide-react";
import { ServicesClassicHeader } from "@/components/sections/ServicesClassicHeader";
import { siteConfig } from "@/lib/config";

export function Founder() {
  const { founder } = siteConfig;

  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesClassicHeader
          label="Leadership"
          title="Meet Our Founder"
          subtitle=""
        />
        <div className="card-hover relative -mt-2 overflow-hidden p-5 sm:-mt-4 sm:p-8 md:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
            <div className="relative shrink-0">
              <div className="relative h-36 w-36 overflow-hidden rounded-2xl ring-4 ring-brand/10 sm:h-40 sm:w-40">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-lg">
                <Quote className="h-5 w-5" />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-bold text-brand sm:text-3xl">
                {founder.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-accent">
                {founder.title}
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                Leading Alitworld Technologies with a vision to deliver
                scalable digital products — from custom software to
                ready-to-launch SaaS for growing businesses.
              </p>
              <Link
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
