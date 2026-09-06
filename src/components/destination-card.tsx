import { Link } from "@tanstack/react-router";
import type { Destination } from "@/data/types";
import { cn } from "@/lib/utils";

export function DestinationCard({
  dest,
  index,
  size = "regular",
}: {
  dest: Destination;
  index?: string;
  size?: "regular" | "feature" | "compact";
}) {
  const tall = size === "feature";

  return (
    <Link
      to="/destinations/$slug"
      params={{ slug: dest.slug }}
      className={cn(
        "group relative block overflow-hidden bg-ink text-paper",
        tall ? "min-h-[28rem] md:min-h-[36rem]" : "min-h-[22rem]",
        size === "compact" && "min-h-[18rem]",
      )}
    >
      <img
        src={dest.image}
        alt={`${dest.nameZh} ${dest.nameEn}`}
        width={1280}
        height={720}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 text-[11px] tracking-[0.22em] uppercase text-paper/70">
          <span className="text-latin">{dest.nameEn}</span>
          {index ? (
            <span className="text-latin tabular-nums">{index}</span>
          ) : null}
        </div>
        <h3
          className={cn(
            "font-display tracking-wide",
            tall ? "text-3xl sm:text-4xl" : "text-2xl",
          )}
        >
          {dest.nameZh}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-paper/80">
          {dest.tagline}
        </p>
      </div>
    </Link>
  );
}
