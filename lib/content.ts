/**
 * Single source of truth for all portfolio copy + data.
 * Every claim here is grounded in Harry's real CV and the real project repos.
 * Keep it honest: graduate-level framing, AI-native as a strength, no invented
 * metrics or seniority.
 *
 * NOTE: a few links need Harry to confirm — marked with `// CONFIRM`.
 */

export const site = {
  name: "Harry Miller",
  role: "Full-stack Product Engineer",
  // Hero headline + supporting line
  headline: "I design and ship production-grade products end-to-end.",
  headlineAccent: "web, mobile & AI",
  intro:
    "Computer Science graduate and AI-native builder. I take products from an empty repo to the App Store and the marketplace — interface, backend, payments, and the last 10% of polish that makes software feel premium.",
  location: "Melbourne, Australia",
  availability: "Available July 2026",
  workRights: "Full Australian work rights",
  relocationNote: "On the ground in Melbourne from 20 July 2026.",
  email: "harrymiller17067@gmail.com",
  phone: "+64 27 310 2782",
  links: {
    github: "https://github.com/millerharry",
    linkedin: "https://linkedin.com/in/harrymiller17067",
    resume: "/Harry-Miller-CV.pdf",
    email: "mailto:harrymiller17067@gmail.com",
  },
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "3", label: "products designed & built 0→1" },
  { value: "2", label: "platforms shipped — web & iOS" },
  { value: "1", label: "live AI business in production" },
  { value: "AA", label: "WCAG 2.1 accessibility, end-to-end" },
] as const;

export const marquee = [
  "Next.js",
  "TypeScript",
  "React",
  "SwiftUI",
  "Swift",
  "Firebase",
  "Supabase",
  "PostgreSQL",
  "Stripe",
  "Tailwind CSS",
  "Node.js",
  "AWS",
  "Figma",
  "GSAP",
  "Framer Motion",
  "Playwright",
  "Zod",
  "Vercel",
] as const;

export type ProjectAccent = "cx" | "lb" | "sb";
export type DeviceType = "browser" | "iphone" | "brand";

export type Metric = { value: string; label: string };
export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  tier: "primary" | "secondary";
  accent: ProjectAccent;
  accentHex: string;
  device: DeviceType;
  year: string;
  role: string;
  status: string;
  summary: string;
  problem: string;
  build: string;
  stack: string[];
  highlights: string[];
  metrics: Metric[];
  images: ProjectImage[];
  hero: ProjectImage; // lead image used in the 3D gallery
  links: { label: string; href: string }[];
  phone?: string;
};

export const projects: Project[] = [
  {
    slug: "the-card-exchange",
    name: "The Card Exchange",
    kicker: "Full-stack marketplace",
    tier: "primary",
    accent: "cx",
    accentHex: "#FF6B35",
    device: "browser",
    year: "2026",
    role: "Solo full-stack — product, design, frontend, backend & payments",
    status: "Production-ready · launching 2026",
    summary:
      "A card-native marketplace for New Zealand collectors — built to beat Trade Me and eBay at the one thing they handle badly: trading cards.",
    problem:
      "Trade Me and eBay dominate NZ resale but treat trading cards like generic clutter — no grading metadata, no condition-grade photos, no price comps, clumsy disputes. Collectors deserve a platform built for them.",
    build:
      "I built the whole thing solo: a multi-seller marketplace with Stripe Connect payouts, structured card grading, PSA certificate lookups, best-offer negotiation, saved-search alerts, dispute resolution, and a full operator console — on a server-component-first Next.js architecture over a row-level-security-locked Postgres backend.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Supabase / Postgres",
      "Stripe Connect",
      "Cloudinary",
      "Tailwind CSS",
      "Zod",
      "Playwright",
      "Vercel",
    ],
    highlights: [
      "Idempotent Stripe Connect payouts — dual-gated release (buyer confirms, or 7-day auto), frozen on dispute, and safe against webhook & cron replays.",
      "Row-Level Security on every table, default-deny — no seller can ever read another seller's data.",
      "Zod validation at every boundary: environment, API inputs, and Stripe webhooks are all type-checked before they touch business logic.",
      "211 test files — unit, integration, five full Playwright E2E flows, plus an axe-core accessibility suite passing 9/9.",
      "Money handled as integer cents end-to-end, with platform commission locked to a single source of truth.",
      "WCAG 2.1 AA, JSON-LD product schema, Sentry + PostHog, and Upstash rate limiting on every mutating route.",
    ],
    metrics: [
      { value: "~37K", label: "lines of TypeScript" },
      { value: "56", label: "routes" },
      { value: "211", label: "test files" },
      { value: "AA", label: "accessibility" },
    ],
    hero: { src: "/work/cardex/home.png", alt: "The Card Exchange marketplace homepage" },
    images: [
      { src: "/work/cardex/home.png", alt: "The Card Exchange homepage with featured listings" },
      { src: "/work/cardex/shop.png", alt: "The Card Exchange shop with faceted filters" },
      { src: "/work/cardex/listing.png", alt: "A card listing detail page with grading and Q&A" },
      { src: "/work/cardex/sell.png", alt: "The seller dashboard with sales and payouts" },
      { src: "/work/cardex/analytics.png", alt: "Seller analytics view" },
      { src: "/work/cardex/mobile-listing.png", alt: "The Card Exchange listing on mobile" },
    ],
    links: [{ label: "Live staging", href: "https://cardex-nz.vercel.app" }],
  },
  {
    slug: "logbook",
    name: "Logbook",
    kicker: "iOS social fitness app",
    tier: "primary",
    accent: "lb",
    accentHex: "#00D07C",
    device: "iphone",
    year: "2026",
    role: "Founder · product & iOS engineering",
    status: "Pre-launch · App Store submission imminent",
    summary:
      "Strava for the gym — a premium iOS strength-training journal with a social layer and a coach mode that turns a solo app into a team.",
    problem:
      "Hevy and Strong are solo logging apps. TeamBuildr and the coaching tools are ugly B2B desktop software. Nobody owns the middle: a consumer-grade workout logger with a real coaching layer on top.",
    build:
      "A SwiftUI app on Firebase with real-time club chat and DMs, an activity feed, streak and PR tracking, and a full Team Mode — coach roles, assigned workouts, recurring scheduled trainings and pinned announcements — backed by Cloud Functions and a strict tokenised design system.",
    stack: [
      "SwiftUI",
      "iOS 26",
      "Firebase",
      "Cloud Functions",
      "Firestore",
      "Figma",
    ],
    highlights: [
      "Real-time messaging: club chat and 1:1 DMs with typing indicators, read receipts, block/mute and an Active-Now presence layer.",
      "Team Mode: coach role, coach-assigned workouts, weekly recurring scheduled trainings, and pinned announcements.",
      "A strict design-token system — colour, spacing, type and radius — so every screen feels engineered, not assembled.",
      "Premium dark, athletic UI built to stand next to Strava in polish.",
    ],
    metrics: [
      { value: "iOS 26", label: "SwiftUI + Liquid Glass" },
      { value: "Real-time", label: "chat & activity feed" },
      { value: "Team Mode", label: "coach layer" },
    ],
    hero: { src: "/work/logbook/log.png", alt: "Logbook workout logging screen" },
    images: [
      { src: "/work/logbook/log.png", alt: "Logbook workout logging screen" },
      { src: "/work/logbook/home.png", alt: "Logbook home activity feed" },
      { src: "/work/logbook/circles.png", alt: "Logbook social Circles" },
      { src: "/work/logbook/active.png", alt: "Active workout with supersets" },
      { src: "/work/logbook/completion.png", alt: "Workout completion summary" },
      { src: "/work/logbook/profile.png", alt: "Logbook athlete profile" },
    ],
    links: [],
  },
  {
    slug: "switchboard",
    name: "Switchboard",
    kicker: "AI voice agent · live business",
    tier: "secondary",
    accent: "sb",
    accentHex: "#38BDF8",
    device: "brand",
    year: "2026",
    role: "Founder & full-stack",
    status: "Live · Wellington",
    summary:
      "An AI receptionist that answers the phone, holds a real conversation, books the job into your calendar, and texts you the summary — so small businesses stop missing calls.",
    problem:
      "Service businesses miss a large share of inbound calls, and most callers never ring back. Every missed call is a lost job.",
    build:
      "An Astro marketing site and client dashboard wired to a Retell AI voice agent over Twilio, with live Cal.com booking, Stripe billing, Clerk auth, and Make.com automations that email call summaries. It is a real, registered NZ company — and you can call it right now.",
    stack: [
      "Astro",
      "TypeScript",
      "Retell AI",
      "Twilio",
      "Cal.com",
      "Clerk",
      "Stripe",
      "GSAP",
    ],
    highlights: [
      "Call it live — a real Wellington number answered by the AI, with no “watch a demo” deflection.",
      "Books appointments on the call against live calendar availability, then sends SMS + email summaries via webhook automation.",
      "A registered NZ company with billing, onboarding and a client dashboard built in.",
    ],
    metrics: [
      { value: "Live", label: "in production" },
      { value: "24/7", label: "AI answering" },
      { value: "Astro", label: "+ GSAP motion" },
    ],
    hero: { src: "/work/switchboard/og.png", alt: "Switchboard AI receptionist" },
    images: [{ src: "/work/switchboard/og.png", alt: "Switchboard AI receptionist" }],
    links: [{ label: "switchboard.net.nz", href: "https://switchboard.net.nz" }],
    phone: "+64 4 885 0285",
  },
];

export const process = [
  {
    no: "01",
    title: "Plan before code",
    body: "I scope every feature as a written plan and get the architecture right before a single line ships. Fewer rewrites, sharper outcomes.",
  },
  {
    no: "02",
    title: "AI as a force multiplier",
    body: "I drive AI coding agents with precise prompts, tight specs and rigorous review — producing senior-level output as a solo builder, fast.",
  },
  {
    no: "03",
    title: "Production bar, always",
    body: "Types, tests, accessibility and design tokens from day one. Idempotent payments, RLS, E2E flows — “works on my machine” isn’t done.",
  },
  {
    no: "04",
    title: "Design-led",
    body: "I sweat the interface. Motion, spacing, typography and the final 10% of polish are features, not afterthoughts.",
  },
] as const;

export const about = {
  lead: "I'm Harry — a Computer Science graduate relocating to Melbourne, and an engineer who builds the whole product.",
  body: [
    "I take ideas from empty repo to something real: I'll design the interface in Figma, write the SwiftUI or the Next.js, wire up Firebase or Postgres and Stripe, and obsess over the last 10% that makes software feel premium.",
    "I'm AI-native — I use modern AI tooling and disciplined prompting to ship at a level and pace that punches well above “graduate”. The proof is three products I've taken to production-grade quality on my own.",
  ],
  education: {
    school: "Victoria University of Wellington",
    degree: "BSc — Computer Science",
    year: "2026",
  },
  experience: [
    {
      role: "Data Collector — Robotics & Machine Learning",
      org: "Clutterbot",
      period: "Nov 2024 – Mar 2026",
      body: "Collected and organised real-world robot-interaction datasets through AWS workflows for a machine-learning robotics product, and fed edge-case and reliability feedback back into the model and the product.",
    },
    {
      role: "Customer-facing retail",
      org: "Calvin Klein · Woolworths NZ",
      period: "",
      body: "Communication, sales, POS and teamwork under pressure across premium retail and high-volume grocery.",
    },
  ],
};

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Swift", "Python", "Java", "C#", "C++"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "SwiftUI", "Tailwind CSS", "HTML / CSS", "Framer Motion"],
  },
  {
    group: "Backend & data",
    items: ["Node.js", "Firebase", "Supabase / Postgres", "Stripe", "AWS", "Cloud Functions"],
  },
  {
    group: "Tools & practice",
    items: ["Git / GitHub", "Figma", "Playwright", "Zod", "AI-assisted development", "Prompt engineering"],
  },
] as const;
