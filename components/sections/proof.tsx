import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { CountUp } from "@/components/ui/count-up";
import { marquee, stats } from "@/lib/content";

export function Proof() {
  return (
    <Section className="py-16 sm:py-20">
      <Reveal>
        <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-fg-muted">
          Built with a production toolchain
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <Marquee items={marquee} className="mt-7" />
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-line bg-ink-900/40 p-6 sm:p-7">
              <span className="mb-4 block h-0.5 w-8 rounded-full bg-gradient-to-r from-accent-400 to-accent-cyan" />
              <CountUp
                value={s.value}
                className="font-display text-3xl font-semibold text-fg sm:text-4xl"
              />
              <p className="mt-2 text-sm leading-snug text-fg-muted">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
