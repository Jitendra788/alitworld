import { ServicesGrid } from "@/components/sections/ServicesGrid";

export function Services() {
  return (
    <section id="services" className="services-section-classic section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServicesGrid />
      </div>
    </section>
  );
}
