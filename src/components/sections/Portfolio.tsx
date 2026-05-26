import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { ServicesClassicHeader } from "@/components/sections/ServicesClassicHeader";
import { portfolio } from "@/data/site";

export function Portfolio() {
  return (
    <section id="portfolio" className="section services-section-classic">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesClassicHeader
          label="Portfolio"
          title="Our Projects"
          subtitle="Real solutions we've built for e-commerce, luxury retail, and SaaS brands."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project) => (
            <article key={project.title} className="card-hover group overflow-hidden bg-white">
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/70 to-transparent opacity-70" />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-lg transition-transform group-hover:scale-105"
                  aria-label={`Visit ${project.title}`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
              <div className="p-6 text-center sm:text-left">
                <h3 className="text-lg font-bold text-brand">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-[#f97316] hover:underline sm:justify-start"
                >
                  Visit site
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
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
