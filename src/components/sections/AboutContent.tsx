import Link from "next/link";
import {
  ArrowRight,
  Cog,
  Eye,
  Globe,
  Handshake,
  Layers,
  MapPin,
  Smartphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { aboutPageContent, aboutStats } from "@/data/about";
import { getFullAddress, siteConfig } from "@/lib/config";

const diffIcons = {
  users: Users,
  sparkles: Sparkles,
  handshake: Handshake,
} as const;

const serviceIcons = {
  globe: Globe,
  smartphone: Smartphone,
  layers: Layers,
  cog: Cog,
} as const;

export function AboutContent() {
  const content = aboutPageContent;

  return (
    <>
      <PageHero
        label="About Us"
        title={
          <>
            About Alitworld —{" "}
            <span className="hero-gradient-text">IT Company in Jaipur</span>
          </>
        }
        description={content.tagline}
      >
        <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4 border-y border-white/15 py-8 sm:gap-8">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="glass-card px-3 py-4 sm:px-4">
              <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-white/60 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section section-mesh">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <SectionHeader
                align="left"
                label="Who We Are"
                title={
                  <>
                    About{" "}
                    <span className="gradient-text">{content.companyName}</span>
                  </>
                }
                description={content.intro}
              />
              <ul className="mt-8 space-y-3">
                {content.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted sm:text-base"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/customized" className="btn-primary">
                  View Our Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>

            <aside className="card-hover group lg:col-span-2 p-8">
              <div className="icon-badge h-12 w-12">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand">Our Location</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {getFullAddress()}
              </p>
              <p className="mt-4 text-sm text-muted">
                <span className="font-semibold text-foreground">Email:</span>{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="font-semibold text-foreground">Phone:</span>{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-accent hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card-hover group p-8 sm:p-10">
              <div className="icon-badge h-14 w-14">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-brand">{content.vision.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{content.vision.body}</p>
            </article>
            <article className="card-hover group p-8 sm:p-10">
              <div className="icon-badge h-14 w-14">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-brand">{content.mission.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{content.mission.body}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-mesh">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why Alitworld"
            title={
              <>
                What Sets <span className="gradient-text">Us Apart</span>
              </>
            }
            description={content.differentiators.subtitle}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.differentiators.items.map((item, i) => {
              const Icon = diffIcons[item.icon];
              return (
                <article key={item.title} className="card-hover group p-8">
                  <div className="flex items-start justify-between">
                    <div className="icon-badge h-12 w-12">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-bold text-card-border group-hover:text-accent/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Capabilities"
            title={
              <>
                Our <span className="gradient-text">Services</span>
              </>
            }
            description={content.services.subtitle}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {content.services.items.map((item, i) => {
              const Icon = serviceIcons[item.icon];
              return (
                <article key={item.title} className="card-hover group flex gap-6 p-8">
                  <div className="icon-badge h-14 w-14 shrink-0">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      0{i + 1}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-brand">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <PageCta
        badge="Work with us"
        title={content.closing.title}
        description={content.closing.body}
        primaryLabel="Get in Touch"
        secondaryHref="/prebuilt"
        secondaryLabel="Explore Prebuilt"
      />
    </>
  );
}
