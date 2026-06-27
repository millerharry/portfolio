"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyEmail({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      data-cursor
      aria-label={copied ? `Email address ${email} copied` : `Copy email address ${email}`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-900/50 px-4 py-2.5 font-mono text-sm text-fg-muted transition-colors hover:border-line-strong hover:text-fg",
        className,
      )}
    >
      {email}
      {copied ? (
        <Check aria-hidden className="h-4 w-4 text-brand-lb" />
      ) : (
        <Copy aria-hidden className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100" />
      )}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email copied to clipboard" : ""}
      </span>
    </button>
  );
}
