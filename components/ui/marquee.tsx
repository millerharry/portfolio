import { cn } from "@/lib/utils";

/** Seamless infinite marquee of tech (CSS-driven; pauses under reduced motion). */
export function Marquee({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn("mask-fade-x relative w-full overflow-hidden", className)}
      aria-hidden
    >
      <div className="flex w-max animate-marquee gap-3 will-change-transform">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap rounded-full border border-line bg-ink-900/60 px-4 py-2 font-mono text-sm text-fg-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
