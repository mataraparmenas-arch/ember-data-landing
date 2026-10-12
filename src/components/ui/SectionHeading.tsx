import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent section header: mono eyebrow, display title, optional lede. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.85rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-paper">
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 text-[1.05rem] leading-relaxed text-mist">{lede}</p>
      ) : null}
    </header>
  );
}
