import { cn } from "@/lib/utils";

/** Ambient hero backdrop: soft accent bloom + fading grid. Purely decorative. */
export function Backdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute left-1/2 top-[-18%] h-[55vh] w-[85vw] max-w-5xl -translate-x-1/2 rounded-full bg-radial-accent blur-2xl" />
      <div className="absolute right-[-10%] top-[20%] h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.10),transparent_70%)] blur-2xl" />
      <div className="absolute inset-0 bg-grid-fade opacity-50 [background-size:64px_64px] [mask-image:radial-gradient(75%_55%_at_50%_0%,#000,transparent)]" />
    </div>
  );
}
