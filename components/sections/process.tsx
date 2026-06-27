import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <Section id="process" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="How I work"
        title={
          <>
            I build like it&apos;s production —{" "}
            <span className="text-fg-muted">because it is.</span>
          </>
        }
        intro="Plan first, AI as a force multiplier, and a senior-level bar on types, tests and accessibility. It's how one person ships products this complete, this fast."
      />

      <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <CommandPalette />
          <BuildBadge />
        </Reveal>

        <Stagger className="lg:col-span-7">
          <div className="divide-y divide-line border-y border-line">
            {process.map((step) => (
              <StaggerItem key={step.no}>
                <div className="group flex gap-5 py-6 transition-colors sm:gap-7">
                  <span className="font-display text-xl font-semibold text-fg-faint transition-colors group-hover:text-accent-400">
                    {step.no}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-fg">{step.title}</h3>
                    <p className="mt-1.5 text-base leading-relaxed text-fg-muted">
                      {step.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </Section>
  );
}

function BuildBadge() {
  return (
    <div className="mt-4 flex items-center gap-3 rounded-2xl border border-line bg-ink-900/40 p-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-lb/15 text-brand-lb">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium text-fg">CI green · all checks passing</p>
        <p className="truncate font-mono text-xs text-fg-muted">
          types · lint · unit · e2e · a11y
        </p>
      </div>
      <span className="ml-auto font-mono text-xs text-accent-400">211 ✓</span>
    </div>
  );
}

function CommandPalette() {
  const planSteps = [
    "idempotent transfers + webhook dedupe",
    "dual-gated release (buyer-confirm / 7-day)",
    "RLS + Zod at every boundary",
    "Playwright E2E: happy + dispute paths",
  ];
  return (
    <div className="glass-strong rounded-2xl p-2 shadow-card">
      <div className="flex items-center gap-2.5 border-b border-line px-3 py-2.5">
        <span className="font-mono text-xs text-fg-muted">⌘K</span>
        <span className="text-sm text-fg-muted">Ask the agent…</span>
        <span className="ml-auto rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-fg-faint">
          esc
        </span>
      </div>
      <div className="space-y-2.5 p-4 font-mono text-[13px] leading-relaxed">
        <p className="text-fg">
          <span className="text-accent-400">›</span> Ship Stripe Connect payouts
          for The Card Exchange
        </p>
        <p className="pl-3 text-fg-muted">Planning 4 steps before code…</p>
        {planSteps.map((s) => (
          <p key={s} className="flex items-start gap-2 pl-3 text-fg-muted">
            <span className="text-accent-400">▸</span>
            <span>{s}</span>
          </p>
        ))}
        <p className="flex items-center gap-1.5 pl-3 pt-1 text-fg">
          <span className="text-brand-lb">✓</span> shipped — 211 tests green
          <span className="ml-1 inline-block h-4 w-[7px] animate-pulse bg-accent-400" />
        </p>
      </div>
    </div>
  );
}
