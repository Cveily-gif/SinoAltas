import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { destinations, getDestination } from "@/data/destinations";
import type { RegionId } from "@/data/types";

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

export function composeItinerary(slugs: string[], totalDays: number): DayPlan[] {
  const dests = slugs
    .map((slug) => getDestination(slug))
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
    const prev = dests[index - 1];
    if (index > 0 && prev && prev.region !== dest.region) {
      plan.push({
        day,
        slug: dest.slug,
        nameZh: dest.nameZh,
        title: `转赴 ${dest.nameZh}`,
        note: `从${prev.nameZh}前往${dest.province}。把这一日写松，把身体交给交通。`,
        transit: true,
      });
      day += 1;
    }
    const stay = allotment[index] ?? 1;
    for (let i = 0; i < stay; i++) {
      const piece = dest.itinerary[i];
      plan.push({
        day,
        slug: dest.slug,
        nameZh: dest.nameZh,
        title: piece?.title ?? `${dest.nameZh} · 慢走`,
        note:
          piece?.text ??
          `把这一日留给${dest.nameZh}没有写进攻略的角落，或补一场预约。`,
      });
      day += 1;
    }
  });

  return plan.slice(0, totalDays);
}
