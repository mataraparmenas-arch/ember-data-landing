import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "md" | "sm";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Render a plain anchor (external destinations). */
  external?: boolean;
}

/**
 * Site-wide button. Internal destinations use next/link; external
 * destinations render a plain anchor with safe rel attributes.
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "btn",
    variant === "primary" ? "btn-primary" : "btn-ghost",
    size === "sm" && "btn-sm",
    className,
  );

  if (external || href.startsWith("https://") || href.startsWith("http://")) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
