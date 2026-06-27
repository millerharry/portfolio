"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Counts a numeric value up when it scrolls into view. Non-numeric values
 * (e.g. "AA") render statically. Respects reduced motion. `display` is seeded
 * with the final value (correct for SSR / no-JS); the count animates only
 * inside the rAF callback once the element is in view.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const match = value.match(/^([\d.]+)(.*)$/);

  useEffect(() => {
    if (!inView || reduce || !match) return;
    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isInt = Number.isInteger(target);
    const duration = 1100;
    let raf = 0;
    let startedAt = 0;

    const tick = (t: number) => {
      if (!startedAt) startedAt = t;
      const p = Math.min(1, (t - startedAt) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      setDisplay((isInt ? Math.round(current) : current.toFixed(1)) + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
