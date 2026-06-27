import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { CopyEmail } from "@/components/ui/copy-email";
import { Backdrop } from "@/components/ui/backdrop";
import { nav, site } from "@/lib/content";

export function Contact() {
  const year = "2026";
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden">
      <Backdrop />
      <Section className="py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-fg-muted">
            Contact
          </p>
          <h2 className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tighter text-fg sm:text-6xl lg:text-7xl">
            Let&apos;s build something{" "}
            <span className="text-gradient-accent">in Melbourne.</span>
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
            I&apos;m after a graduate or junior role where I can ship real
            product. If that sounds like your team, I&apos;d love to talk.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button href={site.links.email} variant="primary">
                <Mail aria-hidden className="h-4 w-4" />
                Email me
              </Button>
            </Magnetic>
            <CopyEmail email={site.email} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-7 flex flex-wrap gap-3">
            <SocialLink href={site.links.linkedin} icon={<LinkedinIcon className="h-4 w-4" />}>
              LinkedIn
            </SocialLink>
            <SocialLink href={site.links.github} icon={<GithubIcon className="h-4 w-4" />}>
              GitHub
            </SocialLink>
            <SocialLink
              href={site.links.resume}
              icon={<FileText aria-hidden className="h-4 w-4" />}
              download
            >
              Download CV
            </SocialLink>
          </div>
        </Reveal>

        {/* Footer bar */}
        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-fg">{site.name}</p>
            <p className="mt-1 text-sm text-fg-muted">
              Full-stack Product Engineer · {site.location}
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                data-cursor
                className="inline-flex min-h-[44px] items-center px-1 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-6 text-xs text-fg-muted">
          © {year} {site.name}. Built with Next.js, Tailwind &amp; Framer Motion.
        </p>
      </Section>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  children,
  download,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  download?: boolean;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      data-cursor
      {...(download ? { download: "" } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex h-11 items-center gap-2 rounded-full border border-line px-4 text-sm text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      {icon}
      {children}
      <ArrowUpRight aria-hidden className="h-3.5 w-3.5 opacity-50 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
