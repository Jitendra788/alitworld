import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function Testimonials() {
  return (
    <section className="border-y border-card-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title={
            <>
              Happy Clients <span className="gradient-text">Testimonials</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="card-hover relative p-8">
              <Quote className="h-8 w-8 text-accent/30" />
              <p className="mt-4 leading-relaxed text-muted">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-card-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-brand">{item.name}</p>
                  <p className="text-sm text-muted">{item.company}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
