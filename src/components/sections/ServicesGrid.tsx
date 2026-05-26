"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  ChevronRight,
  Database,
  LayoutTemplate,
  Megaphone,
  Monitor,
  PenTool,
  Puzzle,
  Smartphone,
  Sparkles,
  Video,
  Workflow,
} from "lucide-react";
import { ServicesClassicHeader } from "@/components/sections/ServicesClassicHeader";
import {
  gridServices,
  type GridService,
  type ServiceIcon,
} from "@/data/services";

const iconMap = {
  puzzle: Puzzle,
  devices: Smartphone,
  monitor: Monitor,
  brain: Brain,
  sparkles: Sparkles,
  video: Video,
  layout: LayoutTemplate,
  workflow: Workflow,
  megaphone: Megaphone,
  chart: BarChart3,
  database: Database,
  pen: PenTool,
} satisfies Record<ServiceIcon, typeof Puzzle>;

function ServicePill({
  service,
  isActive,
  onSelect,
}: {
  service: GridService;
  isActive: boolean;
  onSelect: (service: GridService) => void;
}) {
  const Icon = iconMap[service.icon];

  return (
    <button
      type="button"
      onClick={() => onSelect(service)}
      aria-pressed={isActive}
      className={`service-pill-classic group flex w-full items-center gap-2.5 sm:gap-3.5 ${
        isActive ? "is-active" : ""
      }`}
    >
      <span className="service-pill-icon">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1 text-left text-xs font-bold leading-snug text-foreground sm:text-sm">
        {service.title}
      </span>
      <span className="service-pill-arrow">
        <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
    </button>
  );
}

function ServiceDetailClassic({ service }: { service: GridService }) {
  const Icon = iconMap[service.icon];

  return (
    <article className="service-detail-classic">
      <div className="service-detail-accent" aria-hidden />
      <div className="service-detail-body p-5 sm:p-8">
        <div className="service-detail-header flex items-start gap-3 sm:items-center sm:gap-4">
          <span className="service-detail-icon-wrap h-12 w-12 shrink-0 sm:h-14 sm:w-14">
            <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
          </span>
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#f97316] sm:text-xs">
              Service {service.number}
            </span>
            <h3 className="mt-0.5 text-lg font-bold leading-tight text-brand sm:mt-1 sm:text-2xl">
              {service.title}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted sm:mt-5 sm:text-[0.95rem] lg:text-left">
          {service.description}
        </p>

        <div className="my-5 h-px bg-card-border sm:my-6" />

        <p className="text-xs font-bold uppercase tracking-wider text-brand">Key capabilities</p>
        <ul className="service-detail-list mt-3 space-y-2 sm:space-y-2.5">
          {service.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-foreground sm:gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#f97316]" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="btn-primary mx-auto mt-6 inline-flex w-full max-w-sm justify-center sm:mt-8 lg:mx-0 lg:w-auto"
        >
          Request a Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

type ServicesGridProps = {
  showHeader?: boolean;
};

export function ServicesGrid({ showHeader = true }: ServicesGridProps) {
  const [active, setActive] = useState<GridService>(gridServices[0]);

  const handleSelect = useCallback((service: GridService) => {
    setActive(service);
  }, []);

  return (
    <div className="services-classic-wrap">
      {showHeader && <ServicesClassicHeader />}

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_22rem] lg:gap-8 xl:grid-cols-[1fr_26rem] xl:gap-10">
        {/* Mobile: sticky detail stays visible while browsing services */}
        <div className="sticky top-[4.75rem] z-20 w-full lg:hidden">
          <ServiceDetailClassic service={active} />
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
          {gridServices.map((service) => (
            <li key={service.id}>
              <ServicePill
                service={service}
                isActive={active.id === service.id}
                onSelect={handleSelect}
              />
            </li>
          ))}
        </ul>

        {/* Desktop: sticky sidebar */}
        <div className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
          <ServiceDetailClassic service={active} />
        </div>
      </div>
    </div>
  );
}
