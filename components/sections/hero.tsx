"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { site } from "@/lib/content";
import { Backdrop } from "@/components/ui/backdrop";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { IPhoneFrame } from "@/components/device/iphone";
import { BrowserFrame } from "@/components/device/browser";

export function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const galleryY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const galleryScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.93]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 50]);
  const textFade = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-14 pt-28 sm:pt-32"
    >
      <Backdrop />
      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <motion.div style={{ y: textY, opacity: textFade }} className="lg:col-span-6">
          <HeroIntro />
        </motion.div>
        <motion.div
          style={{ y: galleryY, scale: galleryScale }}
          className="lg:col-span-6"
        >
          <ProductGallery reduce={!!reduce} />
        </motion.div>
      </div>
      <ScrollHint reduce={!!reduce} />
    </section>
  );
}

function HeroIntro() {
  return (
    <div>
      <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-900/60 px-3.5 py-1.5 text-xs">
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lb opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-lb" />
        </span>
        <span className="font-medium text-fg">{site.availability}</span>
        <span className="text-fg-muted" aria-hidden>
          ·
        </span>
        <span className="text-fg-muted">{site.location}</span>
      </div>

      <p className="mt-7 font-mono text-xs uppercase tracking-[0.22em] text-fg-muted">
        {site.name} — {site.role}
      </p>

      <h1 className="mt-4 text-balance text-[2.7rem] font-semibold leading-[1.05] tracking-tighter text-fg sm:text-6xl sm:leading-[1.0] lg:text-[4.2rem] lg:leading-[0.97]">
        I design &amp; ship{" "}
        <span className="text-gradient-accent">production-grade</span> products,
        end-to-end.
      </h1>

      <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
        {site.intro}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Magnetic>
          <Button href="#work" variant="primary">
            View my work
            <ArrowDownRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </Button>
        </Magnetic>
        <Button href={site.links.resume} variant="secondary" download>
          Download CV
          <Download aria-hidden className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function ProductGallery({ reduce }: { reduce: boolean }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rx = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), {
    stiffness: 120,
    damping: 20,
  });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), {
    stiffness: 120,
    damping: 20,
  });

  const browserX = useTransform(px, [-0.5, 0.5], [-12, 12]);
  const browserY = useTransform(py, [-0.5, 0.5], [-7, 7]);
  const phone1X = useTransform(px, [-0.5, 0.5], [-32, 32]);
  const phone1Y = useTransform(py, [-0.5, 0.5], [-19, 19]);
  const phone2X = useTransform(px, [-0.5, 0.5], [-24, 24]);
  const phone2Y = useTransform(py, [-0.5, 0.5], [-14, 14]);

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !stageRef.current) return;
    const r = stageRef.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      ref={stageRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto aspect-[5/4] w-full max-w-2xl [perspective:1600px]"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[58%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.24),transparent_70%)] blur-2xl"
      />

      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        style={{ rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry }}
      >
        {/* CardEx — browser, the clear hero object */}
        <motion.div
          style={{ x: reduce ? 0 : browserX, y: reduce ? 0 : browserY, z: 0 }}
          className="absolute left-[6%] top-[15%] w-[86%]"
        >
          <BrowserFrame
            src="/work/cardex/home.png"
            alt="The Card Exchange marketplace homepage"
            url="cardex.co.nz"
            priority
            sizes="(max-width: 1024px) 78vw, 540px"
          />
        </motion.div>

        {/* Logbook — front-left iPhone, supporting depth */}
        <motion.div
          style={{ x: reduce ? 0 : phone1X, y: reduce ? 0 : phone1Y, z: 95 }}
          className="absolute bottom-[2%] left-[-3%] w-[23%] sm:w-[21%]"
        >
          <IPhoneFrame
            src="/work/logbook/log.png"
            alt="Logbook iOS workout logging screen"
            priority
            sizes="(max-width: 1024px) 22vw, 150px"
          />
        </motion.div>

        {/* Logbook — right iPhone, further back */}
        <motion.div
          style={{ x: reduce ? 0 : phone2X, y: reduce ? 0 : phone2Y, z: 50 }}
          className="absolute right-[-2%] top-[2%] w-[19%] sm:w-[17%]"
        >
          <IPhoneFrame
            src="/work/logbook/active.png"
            alt="Logbook active workout with supersets"
            sizes="(max-width: 1024px) 18vw, 130px"
          />
        </motion.div>
      </motion.div>

      <GalleryTag className="left-[2%] top-[6%]" label="Next.js · Stripe" />
      <GalleryTag className="bottom-[5%] right-[2%]" label="SwiftUI · Firebase" />
    </div>
  );
}

function GalleryTag({ label, className }: { label: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-10 hidden rounded-full border border-line bg-ink-900/80 px-3 py-1 font-mono text-[11px] text-fg-muted backdrop-blur md:block ${className ?? ""}`}
    >
      {label}
    </div>
  );
}

function ScrollHint({ reduce }: { reduce: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted md:flex"
    >
      <span>Scroll</span>
      <motion.span
        animate={reduce ? undefined : { y: [0, 5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowUpRight className="h-3.5 w-3.5 rotate-90" />
      </motion.span>
    </div>
  );
}
