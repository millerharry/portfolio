import type { ReactNode } from "react";
import { ArrowUpRight, Phone, Check } from "lucide-react";
import Image from "next/image";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { IPhoneFrame } from "@/components/device/iphone";
import { BrowserFrame } from "@/components/device/browser";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/lib/content";

export function Work() {
  return (
    <Section id="work" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Three products,{" "}
            <span className="text-fg-muted">built end-to-end.</span>
          </>
        }
        intro="Not class projects — real products with payments, real-time data, accessibility and tests. Design, frontend, backend and the polish, all mine."
      />
      <div className="mt-8">
        {projects.map((p, i) => (
          <CaseStudy key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function CaseStudy({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  const a = project.accentHex;
  return (
    <article
      id={project.slug}
      className="relative scroll-mt-24 border-t border-line py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(55% 38% at ${reverse ? "82%" : "18%"} 4%, ${a}14, transparent 62%)`,
        }}
      />
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        {/* On mobile the screenshots lead; on desktop they sit beside the copy. */}
        <div
          className={cn(
            "order-1 lg:col-span-6",
            reverse ? "lg:order-1" : "lg:order-2",
          )}
        >
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <CaseMedia project={project} />
            </Reveal>
          </div>
        </div>
        <div
          className={cn(
            "order-2 lg:col-span-6",
            reverse ? "lg:order-2" : "lg:order-1",
          )}
        >
          <Narrative project={project} index={index} />
        </div>
      </div>
    </article>
  );
}

function Narrative({ project, index }: { project: Project; index: number }) {
  const a = project.accentHex;
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm" style={{ color: a }}>
          0{index + 1}
        </span>
        <span className="h-px flex-1 bg-line" />
        <Eyebrow accent={a}>{project.kicker}</Eyebrow>
      </div>

      <h3 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-fg sm:text-4xl">
        {project.name}
      </h3>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
        <span
          className="rounded-full border px-2.5 py-1 font-medium"
          style={{ color: a, borderColor: `${a}55`, background: `${a}12` }}
        >
          {project.status}
        </span>
        <span className="text-fg-muted">{project.role}</span>
      </div>

      <p className="mt-6 text-pretty text-lg leading-relaxed text-fg">
        {project.summary}
      </p>

      <Field label="The problem">{project.problem}</Field>
      <Field label="What I built">{project.build}</Field>

      <Field label="Engineering highlights">
        <ul className="mt-1 space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: a, boxShadow: `0 0 10px ${a}` }}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </Field>

      <div className="mt-7 flex flex-wrap gap-7">
        {project.metrics.map((m) => (
          <div key={m.label}>
            <div
              className="font-display text-2xl font-semibold"
              style={{ color: a }}
            >
              {m.value}
            </div>
            <div className="mt-0.5 max-w-[18ch] text-xs leading-snug text-fg-muted">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-fg-muted"
          >
            {s}
          </span>
        ))}
      </div>

      {(project.links.length > 0 || project.phone) && (
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-line px-4 text-sm text-fg transition-colors hover:border-line-strong hover:bg-ink-700/50"
            >
              {l.label}
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 text-fg-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ))}
          {project.phone && (
            <a
              href={`tel:${project.phone.replace(/\s/g, "")}`}
              data-cursor
              className="group inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium"
              style={{ color: a, border: `1px solid ${a}55`, background: `${a}12` }}
            >
              <Phone aria-hidden className="h-4 w-4" />
              Call it live · {project.phone}
            </a>
          )}
        </div>
      )}
    </Reveal>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
        {label}
      </p>
      <div className="mt-2.5 text-base leading-relaxed text-fg-muted">
        {children}
      </div>
    </div>
  );
}

/* ---------------- media compositions per device type ---------------- */

function CaseMedia({ project }: { project: Project }) {
  if (project.device === "iphone") return <PhoneCluster project={project} />;
  if (project.device === "brand") return <CallCard project={project} />;
  return <BrowserDeck project={project} />;
}

function BrowserDeck({ project }: { project: Project }) {
  const [home, shop] = project.images;
  if (!home) return null;
  return (
    <div className="relative px-1 pt-10 sm:px-4">
      {shop && (
        <div className="absolute left-0 top-0 w-[74%] rotate-[-3deg] opacity-70">
          <BrowserFrame src={shop.src} alt={shop.alt} url="cardex.co.nz/shop" />
        </div>
      )}
      <div className="relative ml-auto w-[90%]">
        <BrowserFrame src={home.src} alt={home.alt} url="cardex.co.nz" />
      </div>
      <div className="absolute -bottom-6 right-3 w-[26%] sm:w-[24%]">
        <IPhoneFrame
          src="/work/cardex/mobile-listing.png"
          alt="The Card Exchange listing on mobile"
          sizes="160px"
        />
      </div>
    </div>
  );
}

function PhoneCluster({ project }: { project: Project }) {
  const [a, b, c] = project.images;
  if (!a || !b || !c) return null;
  return (
    <div className="relative mx-auto flex max-w-md items-end justify-center gap-2.5 px-2 sm:gap-3">
      <div className="w-[31%] translate-y-7 rotate-[-4deg]">
        <IPhoneFrame src={b.src} alt={b.alt} sizes="140px" />
      </div>
      <div className="z-10 w-[38%]">
        <IPhoneFrame src={a.src} alt={a.alt} sizes="180px" />
      </div>
      <div className="w-[31%] translate-y-5 rotate-[4deg]">
        <IPhoneFrame src={c.src} alt={c.alt} sizes="140px" />
      </div>
    </div>
  );
}

const WAVE = [4, 9, 6, 13, 8, 16, 11, 7, 14, 9, 5, 12, 8, 15, 6, 10, 4, 8];

function CallCard({ project }: { project: Project }) {
  const a = project.accentHex;
  const transcript = [
    { who: "AI", text: "Hi, you've reached Miller Plumbing — how can I help?" },
    { who: "Caller", text: "My kitchen sink's leaking, can someone come today?" },
    { who: "AI", text: "I can book you in for 2:30pm today. What's the address?" },
  ];
  return (
    <div
      className="relative overflow-hidden rounded-3xl border p-6 sm:p-8"
      style={{
        borderColor: `${a}40`,
        background: `linear-gradient(160deg, ${a}14, transparent 60%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
        style={{ background: `${a}33` }}
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/work/switchboard/icon-512.png"
              alt="Switchboard"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <div>
              <p className="text-sm font-medium text-fg">Switchboard AI</p>
              <p className="font-mono text-xs text-fg-muted">Live call · 0:42</p>
            </div>
          </div>
          {/* waveform */}
          <div aria-hidden className="flex h-6 items-center gap-[3px]">
            {WAVE.map((h, i) => (
              <span
                key={i}
                className="w-[3px] rounded-full"
                style={{ height: `${h}px`, background: a, opacity: 0.5 + (h % 5) / 10 }}
              />
            ))}
          </div>
        </div>

        {/* transcript */}
        <div className="mt-6 space-y-2.5">
          {transcript.map((t, i) => (
            <div
              key={i}
              className={cn("flex", t.who === "Caller" ? "justify-end" : "justify-start")}
            >
              <p
                className={cn(
                  "max-w-[82%] rounded-2xl px-3.5 py-2 text-sm leading-snug",
                  t.who === "Caller" ? "bg-ink-700/70 text-fg" : "text-fg",
                )}
                style={
                  t.who === "AI"
                    ? { background: `${a}1a`, border: `1px solid ${a}33` }
                    : undefined
                }
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* booked confirmation */}
        <div
          className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium"
          style={{ color: a, border: `1px solid ${a}55`, background: `${a}12` }}
        >
          <Check aria-hidden className="h-3.5 w-3.5" />
          Booked · Today 2:30pm · summary texted to owner
        </div>
      </div>
    </div>
  );
}
