type ServicesClassicHeaderProps = {
  label?: string;
  title?: string;
  subtitle?: string;
};

export function ServicesClassicHeader({
  label = "What We Offer",
  title = "IT, Website, App & Digital Marketing Services",
  subtitle = "Select a service to view complete details — web development, apps, marketing, and SEO.",
}: ServicesClassicHeaderProps) {
  return (
    <div className="services-classic-header mx-auto mb-8 max-w-2xl px-1 text-center sm:mb-12 md:mb-14">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f97316] sm:text-xs sm:tracking-[0.2em]">
        {label}
      </p>
      <h2 className="services-classic-title mt-2 text-2xl text-brand sm:mt-3 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <div className="services-classic-rule mx-auto" aria-hidden />
      {subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
