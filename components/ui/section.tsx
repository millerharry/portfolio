import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-content scroll-mt-24 px-5 sm:px-8",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  accent = "#7C5CFF",
}: {
  children: ReactNode;
  accent?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-fg-muted">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  accent,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  accent?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <div className="mb-5">
          <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2 className="text-balance text-[2rem] font-semibold leading-[1.04] text-fg sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
