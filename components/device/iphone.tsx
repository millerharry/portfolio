import Image from "next/image";
import { cn } from "@/lib/utils";

/** Realistic iPhone frame wrapping a portrait screenshot (9:19.5). */
export function IPhoneFrame({
  src,
  alt,
  priority,
  className,
  sizes = "(max-width: 768px) 55vw, 260px",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-full rounded-[2.6rem] border border-line bg-[#0b0b0d] p-[6px] shadow-device",
        "ring-1 ring-white/[0.06]",
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-black">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
        {/* dynamic island */}
        <div className="absolute left-1/2 top-2 z-10 h-[18px] w-[78px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/5" />
      </div>
    </div>
  );
}
