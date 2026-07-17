import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { ServicesClassicHeader } from "@/components/sections/ServicesClassicHeader";
import type { PortfolioItem } from "@/data/site";
import { siteConfig } from "@/lib/config";

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

export function Portfolio({ projects }: { projects: PortfolioItem[] }) {
  return (
    <section id="portfolio" className="section services-section-classic">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesClassicHeader
          label="Portfolio"
          title="Website & App Development Projects"
          subtitle="Real ecommerce, luxury retail, and SaaS products built by Alitworld Technologies."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const href = project.url?.trim() || "/contact";
            const external = isExternalUrl(href);
            const ctaLabel = external
              ? "Visit site"
              : href.startsWith("/blogs/")
                ? "Read case study"
                : "Get similar bot";

            const cardInner = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden bg-brand/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/75 via-brand/20 to-transparent" />

                  <div className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 shadow-md ring-1 ring-black/10">
                    <Image
                      src="/logo.png"
                      alt={siteConfig.name}
                      width={20}
                      height={20}
                      className="h-5 w-5 rounded-full object-contain"
                      unoptimized
                    />
                    <span className="text-[10px] font-bold tracking-[0.12em] text-brand">
                      ALITWORLD
                    </span>
                  </div>

                  <span className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-lg transition-transform group-hover:scale-105">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center gap-2 bg-brand/90 px-3 py-2">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px] rounded-full bg-white object-contain p-0.5"
                      unoptimized
                      aria-hidden
                    />
                    <span className="truncate text-xs font-semibold text-white">
                      Built by {siteConfig.shortName}
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-brand">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-[#f97316] group-hover:underline sm:justify-start">
                    {ctaLabel}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </>
            );

            const className =
              "card-hover group block overflow-hidden bg-white no-underline";

            if (external) {
              return (
                <a
                  key={project.id ?? project.title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {cardInner}
                </a>
              );
            }

            return (
              <Link
                key={project.id ?? project.title}
                href={href}
                className={className}
              >
                {cardInner}
              </Link>
            );
          })}
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-sm flex-col items-center gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <Link href="/customized" className="btn-primary w-full sm:w-auto">
            View All Projects
          </Link>
          <Link href="/contact" className="btn-secondary w-full sm:w-auto">
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
