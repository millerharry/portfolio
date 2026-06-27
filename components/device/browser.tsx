import Image from "next/image";
import { cn } from "@/lib/utils";

/** macOS-style browser window wrapping a viewport screenshot (16:10). */
export function BrowserFrame({
  src,
  alt,
  url = "cardex.co.nz",
  priority,
  className,
  sizes = "(max-width: 768px) 92vw, 900px",
}: {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-line bg-ink-800 shadow-device ring-1 ring-white/[0.05]",
        className,
      )}
    >
      <div className="flex h-9 items-center gap-3 border-b border-line bg-ink-900/80 px-3.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div
          aria-hidden
          className="mx-auto hidden h-5 max-w-[58%] flex-1 items-center justify-center truncate rounded-md bg-ink-700 px-3 font-mono text-[11px] text-fg-muted sm:flex"
        >
          {url}
        </div>
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
