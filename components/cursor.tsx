"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A soft accent spotlight that trails the pointer (lerped, so it reads as an
 * intentional comet rather than a second cursor). Expands over interactive
 * elements. Fine-pointer + motion-allowed only; otherwise nothing renders.
 */
export function Cursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // 1) Decide whether to render the cursor at all (fine pointer, motion ok,
  //    and a viewport wide enough that the glow is actually shown).
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time feature detection, must run post-mount to avoid hydration mismatch
    if (fine && wide && !reduced) setEnabled(true);
  }, []);

  // 2) Once the glow element is mounted, drive it.
  useEffect(() => {
    if (!enabled) return;
    const glow = glowRef.current;
    if (!glow) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let gx = mx;
    let gy = my;
    let hovering = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const target = e.target as HTMLElement | null;
      hovering = !!target?.closest(
        "a, button, [data-cursor], input, textarea, [role='button']",
      );
    };

    const render = () => {
      gx += (mx - gx) * 0.18;
      gy += (my - gy) * 0.18;
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%) scale(${hovering ? 1.9 : 1})`;
      glow.style.opacity = hovering ? "0.95" : "0.6";
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      <div
        ref={glowRef}
        className="fixed left-0 top-0 h-9 w-9 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.6) 0%, rgba(34,211,238,0.18) 45%, transparent 70%)",
          filter: "blur(5px)",
          transition: "opacity 0.25s ease",
          willChange: "transform",
        }}
      />
    </div>
  );
}
