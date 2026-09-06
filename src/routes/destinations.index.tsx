import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";
import { DestinationCard } from "@/components/destination-card";
import { SectionKicker } from "@/components/section-kicker";
import { destinations, regions, seasons } from "@/data/destinations";
import type { RegionId, SeasonId } from "@/data/types";
import { cn } from "@/lib/utils";

const searchSchema = z.object({
  region: z
    .enum(["north", "jiangnan", "southwest", "northwest", "plateau"])
    .optional(),
  season: z.enum(["spring", "summer", "autumn", "winter"]).optional(),
});

export const Route = createFileRoute("/destinations/")({
  validateSearch: searchSchema,
  component: DestinationsPage,
});

function DestinationsPage() {
  const { region, season } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return destinations.filter((d) => {
      if (region && d.region !== region) return false;
      if (season && !d.seasons.includes(season)) return false;
      if (!query) return true;
      return (
        d.nameZh.includes(query) ||
        d.nameEn.toLowerCase().includes(query) ||
        d.province.includes(query) ||
        d.tagline.includes(query)
      );
    });
  }, [q, region, season]);

  function setRegion(id?: RegionId) {
    void navigate({
      search: (prev) => ({ ...prev, region: id }),
      replace: true,
    });
  }

  function setSeason(id?: SeasonId) {
    void navigate({
      search: (prev) => ({ ...prev, season: id }),
      replace: true,
    });
  }

  return (
    <div className="pt-16 sm:pt-[4.5rem]">
      <section className="border-b border-ink/8 bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <SectionKicker
            index="12"
            label="Destinations"
            className="text-stone-light"
          />
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">目的地</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-light">
            十二处被认真写下的风景。从华北的城墙到青藏的光，按地理、按季节，或按你此刻想起的那个字。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <label className="relative block w-full max-w-md">
            <span className="sr-only">搜索目的地</span>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-stone"
              strokeWidth={1.6}
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="搜索名字、省份或一句印象"
              className="h-12 w-full rounded-lg border border-ink/12 bg-paper pl-10 pr-4 text-sm text-ink placeholder:text-stone focus:outline-2 focus:outline-offset-2 focus:outline-cinnabar"
            />
          </label>
          <p className="text-sm text-stone">
            {list.length} 处风景
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <FilterChip
            active={!region}
            onClick={() => setRegion(undefined)}
            label="全部地带"
          />
          {regions.map((r) => (
            <FilterChip
              key={r.id}
              active={region === r.id}
              onClick={() => setRegion(r.id)}
              label={r.nameZh}
            />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <FilterChip
            active={!season}
            onClick={() => setSeason(undefined)}
            label="全部季节"
          />
          {seasons.map((s) => (
            <FilterChip
              key={s.id}
              active={season === s.id}
              onClick={() => setSeason(s.id)}
              label={s.nameZh}
            />
          ))}
        </div>

        {list.length === 0 ? (
          <p className="py-24 text-center text-stone">
            没有相符的目的地。换一个字，或
            <button
              type="button"
              className="mx-1 text-cinnabar underline-offset-4 hover:underline"
              onClick={() => {
                setQ("");
                void navigate({ search: {}, replace: true });
              }}
            >
              清除筛选
            </button>
            。
          </p>
        ) : (
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((d, i) => (
              <DestinationCard
                key={d.slug}
                dest={d}
                index={String(i + 1).padStart(2, "0")}
              />
            ))}
          </div>
        )}

        <p className="mt-12 text-center text-sm text-stone">
          想把它们排成一条路？
          <Link to="/planner" className="ml-1 text-cinnabar">
            去编排行程
          </Link>
        </p>
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-10 min-w-11 items-center rounded-full px-4 text-sm transition-colors duration-150",
        active
          ? "bg-ink text-paper"
          : "bg-paper-deep text-ink hover:bg-ink/8",
      )}
    >
      {label}
    </button>
  );
}
