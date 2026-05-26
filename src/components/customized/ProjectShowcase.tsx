"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import {
  applicationProjects,
  type Project,
  type ProjectCategory,
  websiteProjects,
} from "@/data/projects";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

function ProjectRow({ project, reverse }: { project: Project; reverse: boolean }) {
  const cta = project.ctaLabel ?? "View Website";

  const imageBlock = (
    <div className="card-hover overflow-hidden p-5 sm:p-7">
      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-muted to-white p-4 sm:p-6">
        <ProjectImage src={project.image} alt={project.title} />
      </div>
      <p className="mt-4 text-center text-sm font-bold uppercase tracking-wider text-brand">
        {project.title}
      </p>
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center py-4">
      <h3 className="text-2xl font-bold text-brand sm:text-3xl">{project.title}</h3>
      <ul className="mt-8 space-y-5">
        {project.highlights.map((item, index) => (
          <li key={item} className="flex gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-muted to-accent-muted text-xs font-bold text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="pt-1.5 text-sm leading-relaxed text-muted sm:text-base">
              {item}
            </p>
          </li>
        ))}
      </ul>
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-8 w-fit"
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );

  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : ""}>{imageBlock}</div>
      <div className={reverse ? "lg:order-1" : ""}>{textBlock}</div>
    </article>
  );
}

export function ProjectShowcase() {
  const [tab, setTab] = useState<ProjectCategory>("website");
  const projects = tab === "website" ? websiteProjects : applicationProjects;

  return (
    <section className="section section-mesh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Portfolio"
          title={
            <>
              Our Top <span className="gradient-text">Projects</span>
            </>
          }
          description="Real websites and applications we've built for clients across industries."
        />

        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="inline-flex max-w-full overflow-x-auto rounded-full border border-card-border bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setTab("website")}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all sm:px-8 ${
                tab === "website"
                  ? "bg-gradient-to-r from-brand to-accent text-white shadow-md"
                  : "text-muted hover:text-brand"
              }`}
            >
              Websites
            </button>
            <button
              type="button"
              onClick={() => setTab("application")}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all sm:px-8 ${
                tab === "application"
                  ? "bg-gradient-to-r from-brand to-accent text-white shadow-md"
                  : "text-muted hover:text-brand"
              }`}
            >
              Applications
            </button>
          </div>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
