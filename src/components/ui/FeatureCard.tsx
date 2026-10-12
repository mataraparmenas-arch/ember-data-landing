import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  /** Icon or small custom geometric visual, rendered in a framed square. */
  visual: ReactNode;
  title: string;
  description: string;
  /** Optional mono micro-label pinned to the card footer (API-ish hint). */
  micro?: string;
  className?: string;
}

/** Balanced feature/benefit card with a restrained hover state. */
export function FeatureCard({
  visual,
  title,
  description,
  micro,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "card surface-glow p-6 transition-all duration-200 sm:p-7",
        "hover:-translate-y-0.5 hover:border-[rgba(255,107,74,0.42)]",
        className,
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-md border border-line-strong bg-surface-2 text-ember">
        {visual}
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-snug text-paper">
        {title}
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-mist">
        {description}
      </p>
      {micro ? (
        <p className="mt-4 border-t border-line pt-3 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-mist/70">
          {micro}
        </p>
      ) : null}
    </article>
  );
}
