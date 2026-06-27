"use client";

import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";

function Monogram() {
  return (
    <span
      className="grid h-8 w-8 place-items-center rounded-[10px] bg-gradient-to-br from-accent-400 to-accent-600 font-display text-sm font-bold text-white shadow-glow-sm"
      aria-hidden
    >
      H
    </span>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));
  // Seed from the initial scroll position (deep links / scroll restoration).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- seed glass state from restored scroll position
    setScrolled(scrollY.get() > 20);
  }, [scrollY]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-content items-center justify-between px-4 transition-all duration-300 sm:px-6",
          scrolled ? "mt-3" : "mt-5",
        )}
      >
        <a
          href="#top"
          data-cursor
          aria-label={`${site.name} — home`}
          className={cn(
            "flex items-center gap-2.5 rounded-full p-1.5 pr-3.5 transition-all duration-300",
            scrolled && "glass-strong",
          )}
        >
          <Monogram />
          <span className="hidden text-sm font-medium text-fg sm:block">
            {site.name}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className={cn(
            "hidden items-center gap-0.5 rounded-full p-1.5 transition-all duration-300 md:flex",
            scrolled && "glass-strong",
          )}
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-cursor
              className="rounded-full px-4 py-2 text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Magnetic>
              <a
                href="#contact"
                data-cursor
                className="inline-flex h-11 items-center rounded-full bg-fg px-4 text-sm font-medium text-ink-base transition-colors duration-200 hover:bg-white"
              >
                Get in touch
              </a>
            </Magnetic>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full text-fg glass-strong md:hidden"
          >
            {open ? (
              <X aria-hidden className="h-5 w-5" />
            ) : (
              <Menu aria-hidden className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "mx-4 mt-2 overflow-hidden rounded-2xl transition-all duration-300 glass-strong md:hidden",
          open
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col p-2">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] items-center rounded-xl px-4 text-sm text-fg-muted transition-colors hover:bg-ink-700/50 hover:text-fg"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 flex min-h-[44px] items-center justify-center rounded-xl bg-fg px-4 text-sm font-medium text-ink-base"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
