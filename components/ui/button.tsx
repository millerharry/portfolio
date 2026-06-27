import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-base";

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-ink-base hover:bg-white hover:shadow-[0_8px_30px_-8px_rgba(255,255,255,0.4)]",
  secondary:
    "glass text-fg hover:border-line-strong hover:bg-ink-700/60",
  ghost: "px-3 text-fg-muted hover:text-fg",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  download,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  download?: boolean;
  ariaLabel?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      data-cursor
      className={cn(base, variants[variant], className)}
      {...(download ? { download: "" } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
