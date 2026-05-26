import type { ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <p className={`section-label ${align === "center" ? "mx-auto" : ""}`}>
        {label}
      </p>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand sm:text-4xl lg:text-[2.65rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
