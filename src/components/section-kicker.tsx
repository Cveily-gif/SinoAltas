import { cn } from "@/lib/utils";

export function SectionKicker({
  index,
  label,
  className,
}: {
  index?: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-stone",
        className,
      )}
    >
      {index ? (
        <span className="text-latin tabular-nums text-cinnabar">{index}</span>
      ) : null}
      <span className="font-sans">{label}</span>
    </div>
  );
}
