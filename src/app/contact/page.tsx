import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import {
  getMapsUrl,
  getTelUrl,
  getWhatsAppUrl,
  siteConfig,
} from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";
import { Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = createPageMetadata({
  title: "Get a Quote — Website, App or Marketing | Alitworld",
  description:
    "Enquire with Alitworld for website development, mobile apps, digital marketing, or SEO. Startups and growing brands — call, WhatsApp, or send a message (Jaipur, India).",
  path: "/contact",
});

const connectItems = [
  {
    icon: Phone,
    label: "Phone",
    href: getTelUrl(),
    value: siteConfig.phone,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: siteConfig.linkedinUrl,
    value: "in.linkedin.com/company/alitworld",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    href: getMapsUrl(),
    value: `${siteConfig.address.plot}, ${siteConfig.address.city}`,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Connect"
        title={
          <>
            Contact Alitworld for{" "}
            <span className="hero-gradient-text">Web &amp; SEO</span>
          </>
        }
        description="From idea to launch — we design websites and apps, and help with digital marketing and SEO that scale with your business."
      />

      <section className="section section-mesh -mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <h2 className="text-2xl font-bold text-brand sm:text-3xl">
                Contact Alitworld Technologies
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Reach out by phone, email, or the form — we typically respond within one
                business day.
              </p>

              <ul className="mt-8 space-y-4">
                {connectItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="card-hover group flex items-center gap-4 p-5"
                      >
                        <span className="icon-badge h-12 w-12 shrink-0">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-xs font-bold uppercase tracking-wider text-muted">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block break-words font-medium text-foreground">
                            {item.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 rounded-2xl border border-card-border bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-muted">
                  Follow us
                </p>
                <SocialLinks className="mt-4 justify-center lg:justify-start" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mx-auto mt-5 inline-flex lg:mx-0"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="card-hover order-1 p-5 sm:p-9 lg:order-2">
              <h2 className="text-xl font-bold text-brand sm:text-2xl">
                Send a project enquiry
              </h2>
              <p className="mt-2 text-sm text-muted">
                Our friendly team is ready to help — send us a message.
              </p>
              <Suspense fallback={<p className="mt-8 text-sm text-muted">Loading form…</p>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
