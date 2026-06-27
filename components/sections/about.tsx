import { MapPin, GraduationCap } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { about, skills, site } from "@/lib/content";

export function About() {
  return (
    <Section id="about" className="py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Bio */}
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-[2rem] font-semibold leading-[1.1] text-fg sm:text-4xl">
              {about.lead}
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
              {about.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          {/* Availability — the recruiter signal */}
          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-line bg-ink-900/40 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="relative mt-1.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lb opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-lb" />
                </span>
                <div>
                  <p className="font-medium text-fg">{site.availability}</p>
                  <p className="mt-0.5 text-sm text-fg-muted">
                    {site.relocationNote}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-sm text-fg">
                <MapPin aria-hidden className="h-4 w-4 text-fg-muted" />
                {site.workRights}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Education + experience */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="rounded-2xl border border-line bg-ink-900/40 p-6 sm:p-7">
              <div className="flex items-center gap-2.5 text-fg">
                <GraduationCap aria-hidden className="h-5 w-5 text-fg-muted" />
                <h3 className="text-sm font-medium">Education</h3>
              </div>
              <p className="mt-3 font-medium text-fg">{about.education.school}</p>
              <p className="text-sm text-fg-muted">
                {about.education.degree} · {about.education.year}
              </p>

              <div className="mt-7 border-t border-line pt-6">
                <h3 className="text-sm font-medium text-fg">Experience</h3>
                <div className="mt-4 space-y-6">
                  {about.experience.map((e) => (
                    <div
                      key={e.org}
                      className="border-l border-line pl-4"
                    >
                      <p className="font-medium text-fg">{e.role}</p>
                      <p className="mt-0.5 text-sm text-fg-muted">
                        {e.org}
                        {e.period ? ` · ${e.period}` : ""}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                        {e.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-14">
        <Reveal>
          <Eyebrow>Toolkit</Eyebrow>
        </Reveal>
        <Stagger className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <StaggerItem key={s.group}>
              <div className="h-full rounded-2xl border border-line bg-ink-900/40 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
                  {s.group}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
