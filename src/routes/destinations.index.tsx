import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";
import { DestinationCard } from "@/components/destination-card";
import { SectionKicker } from "@/components/section-kicker";
import { destinations, regions, seasons } from "@/data/destinations";
import type { RegionId, SeasonId } from "@/data/types";
import { locDest } from "@/data/i18n/localize";
import { allDestinations, isMine } from "@/lib/dest-catalog";
import { useDestCache, useDestCacheHydration } from "@/lib/dest-cache";
import { useCopy, useLocale } from "@/lib/locale";
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
  const t = useCopy();
  const { locale } = useLocale();
  const mineReady = useDestCacheHydration();
  const mine = useDestCache((s) => s.items);
  const catalog = mineReady ? allDestinations(mine) : destinations;

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return catalog.filter((raw) => {
      const d = locDest(raw, locale);
      if (region && raw.region !== region) return false;
      if (season && !raw.seasons.includes(season)) return false;
      if (!query) return true;
      return (
        raw.nameZh.includes(query) ||
        raw.nameEn.toLowerCase().includes(query) ||
        d.province.toLowerCase().includes(query) ||
        d.tagline.toLowerCase().includes(query) ||
        raw.province.includes(query)
      );
    });
  }, [q, region, season, locale, catalog]);

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
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">{t.destTitle}</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-light">
            {t.destLead}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <label className="relative block w-full max-w-md">
            <span className="sr-only">{t.destSearch}</span>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-stone"
              strokeWidth={1.6}
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.destSearchPh}
              className="h-12 w-full rounded-lg border border-ink/12 bg-paper pl-10 pr-4 text-sm text-ink placeholder:text-stone focus:outline-2 focus:outline-offset-2 focus:outline-cinnabar"
            />
          </label>
          <p className="text-sm text-stone">
            {t.destCount(list.length)}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <FilterChip
            active={!region}
            onClick={() => setRegion(undefined)}
            label={t.destAllBelts}
          />
          {regions.map((r) => (
            <FilterChip
              key={r.id}
              active={region === r.id}
              onClick={() => setRegion(r.id)}
              label={locale === "en" ? r.nameEn : r.nameZh}
            />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <FilterChip
            active={!season}
            onClick={() => setSeason(undefined)}
            label={t.destAllSeasons}
          />
          {seasons.map((s) => (
            <FilterChip
              key={s.id}
              active={season === s.id}
              onClick={() => setSeason(s.id)}
              label={locale === "en" ? s.nameEn : s.nameZh}
            />
          ))}
        </div>

        <Link
          to="/destinations/new"
          className="mt-8 flex flex-col gap-3 rounded-lg bg-ink px-5 py-6 text-paper sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-latin text-[11px] tracking-[0.28em] uppercase text-paper/55">
              {t.mineKicker}
            </p>
            <p className="mt-2 font-display text-2xl">{t.mineCta}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/70">
              {t.mineLead}
            </p>
          </div>
          <span className="inline-flex min-h-11 items-center gap-2 text-sm text-paper">
            {t.mineSubmit}
            <ArrowRight className="size-4" strokeWidth={1.6} />
          </span>
        </Link>

        {list.length === 0 ? (
          <p className="py-24 text-center text-stone">
            {t.destEmpty}{" "}
            <button
              type="button"
              className="mx-1 text-cinnabar underline-offset-4 hover:underline"
              onClick={() => {
                setQ("");
                void navigate({ search: {}, replace: true });
              }}
            >
              {t.destClear}
            </button>
            {locale === "en" ? "." : "。"}
          </p>
        ) : (
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((d, i) => (
              <DestinationCard
                key={d.slug}
                dest={d}
                index={String(i + 1).padStart(2, "0")}
                mine={isMine(d.slug, mine)}
              />
            ))}
          </div>
        )}

        <p className="mt-12 text-center text-sm text-stone">
          {t.destWantRoad}
          <Link to="/planner" className="ml-1 text-cinnabar">
            {t.destGoTrip}
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
