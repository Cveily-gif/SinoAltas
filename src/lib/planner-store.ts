import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { destinations, getDestination } from "@/data/destinations";
import { copy } from "@/data/i18n/copy";
import { locDest } from "@/data/i18n/localize";
import { placeNameEn } from "@/data/i18n/places";
import type { Locale } from "@/lib/locale";
import type { Destination, RegionId } from "@/data/types";

const REGION_ORDER: RegionId[] = [
  "north",
  "jiangnan",
  "southwest",
  "northwest",
  "plateau",
];

export type DayPlan = {
  day: number;
  slug: string;
  nameZh: string;
  name: string;
  title: string;
  note: string;
  transit?: boolean;
};

type PlannerState = {
  saved: string[];
  days: number;
  notes: string;
  toggle: (slug: string) => void;
  setDays: (n: number) => void;
  setNotes: (s: string) => void;
  clear: () => void;
};

export const usePlanner = create<PlannerState>()(
  persist(
    (set, get) => ({
      saved: [],
      days: 7,
      notes: "",
      toggle: (slug) => {
        const saved = get().saved;
        set({
          saved: saved.includes(slug)
            ? saved.filter((x) => x !== slug)
            : [...saved, slug],
        });
      },
      setDays: (n) => set({ days: n }),
      setNotes: (notes) => set({ notes }),
      clear: () => set({ saved: [], notes: "" }),
    }),
    { name: "shanhe-planner", skipHydration: true },
  ),
);

export function usePlannerHydration() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    void Promise.resolve(usePlanner.persist.rehydrate()).then(() =>
      setReady(true),
    );
  }, []);
  return ready;
}

export function composeItinerary(
  slugs: string[],
  totalDays: number,
  locale: Locale = "zh",
  extras: Destination[] = [],
): DayPlan[] {
  const lookup = (slug: string) =>
    extras.find((d) => d.slug === slug) ?? getDestination(slug);
  const dests = slugs
    .map((slug) => lookup(slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))
    .sort(
      (a, b) =>
        REGION_ORDER.indexOf(a.region) - REGION_ORDER.indexOf(b.region) ||
        destinations.findIndex((d) => d.slug === a.slug) -
          destinations.findIndex((d) => d.slug === b.slug),
    );

  if (dests.length === 0) return [];

  let transits = 0;
  for (let i = 1; i < dests.length; i++) {
    if (dests[i]?.region !== dests[i - 1]?.region) transits += 1;
  }

  const stayBudget = Math.max(dests.length, totalDays - transits);
  const count = dests.length;
  const base = Math.max(1, Math.floor(stayBudget / count));
  let leftover = Math.max(0, stayBudget - base * count);
  const allotment = dests.map(() => base);
  for (let i = 0; i < leftover; i++) {
    const idx = i % count;
    allotment[idx] = (allotment[idx] ?? 1) + 1;
  }

  const plan: DayPlan[] = [];
  let day = 1;
  dests.forEach((dest, index) => {
    const view = locDest(dest, locale);
    const prev = dests[index - 1];
    if (index > 0 && prev && prev.region !== dest.region) {
      const t = copy[locale];
      const name = locale === "en" ? dest.nameEn : dest.nameZh;
      plan.push({
        day,
        slug: dest.slug,
        nameZh: dest.nameZh,
        name,
        title: t.plannerOnward(name),
        note: t.plannerTransit(
          locale === "en" ? prev.nameEn : prev.nameZh,
          locale === "en" ? dest.nameEn : dest.nameZh,
          locale === "en" ? placeNameEn(dest.province) : dest.province,
        ),
        transit: true,
      });
      day += 1;
    }
    const stay = allotment[index] ?? 1;
    for (let i = 0; i < stay; i++) {
      const piece = view.itinerary[i];
      const t = copy[locale];
      const name = locale === "en" ? dest.nameEn : dest.nameZh;
      plan.push({
        day,
        slug: dest.slug,
        nameZh: dest.nameZh,
        name,
        title: piece?.title ?? t.plannerSlow(name),
        note: piece?.text ?? t.plannerFallback(name),
      });
      day += 1;
    }
  });

  return plan.slice(0, totalDays);
}
