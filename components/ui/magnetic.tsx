"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

/** Subtly pulls its child toward the pointer. No-op on touch / reduced motion. */
export function Magnetic({
  children,
  strength = 0.3,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      className={className}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ display: "inline-flex" }}
    >
      <div
        ref={ref}
        style={{ transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)" }}
      >
        {children}
      </div>
    </div>
  );
}
