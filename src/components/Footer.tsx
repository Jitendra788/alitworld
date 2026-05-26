import Link from "next/link";
import { footerLinks } from "@/data/site";
import { siteConfig } from "@/lib/config";
import { Logo } from "@/components/Logo";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-auto bg-brand text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="footer" theme="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Turning visions into digital reality — custom development and
              prebuilt SaaS solutions for modern businesses across India.
            </p>
            <SocialLinks className="mt-6 [&_a]:text-white/60 [&_a:hover]:bg-white/10 [&_a:hover]:text-white" />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-cyan">
                Quick Links
              </h4>
              <ul className="mt-5 space-y-3">
                {footerLinks.main.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-cyan">
                Resources
              </h4>
              <ul className="mt-5 space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {siteConfig.address.plot}
                <br />
                {siteConfig.address.city}
              </li>
            </ul>
            <NewsletterForm variant="dark" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-white/50">
          © {new Date().getFullYear()} Alitworld Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
