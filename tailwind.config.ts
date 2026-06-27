import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          base: "#0A0A0B",
          950: "#0C0C0E",
          900: "#0F0F12",
          800: "#141418",
          700: "#1B1B20",
          600: "#26262C",
          500: "#33333A",
        },
        fg: {
          DEFAULT: "#F4F4F5",
          muted: "#A1A1AA",
          faint: "#71717A",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)",
        },
        accent: {
          DEFAULT: "#7C5CFF",
          400: "#9A80FF",
          600: "#6B4DF0",
          cyan: "#22D3EE",
        },
        // Per-project brand tints
        brand: {
          lb: "#00D07C", // Logbook viridian
          cx: "#FF6B35", // The Card Exchange signal orange
          sb: "#38BDF8", // Switchboard electric blue (voice/AI)
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(124,92,255,0.45)",
        "glow-sm": "0 0 40px -16px rgba(124,92,255,0.4)",
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 24px 60px -32px rgba(0,0,0,0.8)",
        device: "0 40px 120px -40px rgba(0,0,0,0.85)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
