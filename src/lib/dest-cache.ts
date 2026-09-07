import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { destinations } from "@/data/destinations";
import type { Destination, Intensity, RegionId, SeasonId } from "@/data/types";

/**
 * A destination the reader wrote. Same article shape as the editorial atlas.
 * `origin` is always `"local"` until a personal server is wired.
 */
export type CustomDestination = Destination & {
  origin: "local";
  createdAt: number;
  updatedAt: number;
  provinceId: string;
  lon?: number;
  lat?: number;
};

/**
 * Persistence seam.
 *
 * Active backend is the browser cache (zustand persist → localStorage).
 * `createRemoteDestCache` keeps the signature for a future signed-in store.
 * Callers never talk to a server today.
 */
export type DestCacheBackend = {
  kind: "local" | "remote";
  pull(): Promise<CustomDestination[] | null>;
  push(items: CustomDestination[]): Promise<void>;
};

export const localDestCache: DestCacheBackend = {
  kind: "local",
  async pull() {
    return null;
  },
  async push() {},
};

/** Reserved. Not called. Swap `destCacheBackend` to this when a personal store exists. */
export function createRemoteDestCache(_opts: {
  endpoint: string;
  getToken?: () => Promise<string | null>;
}): DestCacheBackend {
  return {
    kind: "remote",
    async pull() {
      return null;
    },
    async push() {},
  };
}

export const destCacheBackend: DestCacheBackend = localDestCache;

type DestCacheState = {
  items: CustomDestination[];
  upsert: (item: CustomDestination) => void;
  remove: (slug: string) => void;
};

export const useDestCache = create<DestCacheState>()(
  persist(
    (set) => ({
      items: [],
      upsert: (item) =>
        set((s) => {
          const i = s.items.findIndex((d) => d.slug === item.slug);
          if (i < 0) return { items: [...s.items, item] };
          const next = s.items.slice();
          next[i] = item;
          return { items: next };
        }),
      remove: (slug) =>
        set((s) => ({ items: s.items.filter((d) => d.slug !== slug) })),
    }),
    { name: "sino-atlas-mine", skipHydration: true },
  ),
);

export function useDestCacheHydration() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    void Promise.resolve(useDestCache.persist.rehydrate()).then(() =>
      setReady(true),
    );
  }, []);
  return ready;
}

const RESERVED = new Set(["new", "add", ...destinations.map((d) => d.slug)]);

export function slugFromNames(nameEn: string, nameZh: string, taken: string[]) {
  const fromEn = nameEn
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  let base = fromEn ? `mine-${fromEn}` : `mine-${Date.now().toString(36)}`;
  const used = new Set([...RESERVED, ...taken]);
  if (!used.has(base)) return base;
  let n = 2;
  while (used.has(`${base}-${n}`)) n += 1;
  return `${base}-${n}`;
}

export function emptyHighlights(): { title: string; text: string }[] {
  return [
    { title: "", text: "" },
    { title: "", text: "" },
    { title: "", text: "" },
  ];
}

export function emptyItinerary(
  locale: "zh" | "en",
): { day: string; title: string; text: string }[] {
  return locale === "en"
    ? [
        { day: "Day 1", title: "", text: "" },
        { day: "Day 2", title: "", text: "" },
        { day: "Day 3", title: "", text: "" },
      ]
    : [
        { day: "第一日", title: "", text: "" },
        { day: "第二日", title: "", text: "" },
        { day: "第三日", title: "", text: "" },
      ];
}

export function emptyPractical(
  locale: "zh" | "en",
): { label: string; value: string }[] {
  return locale === "en"
    ? [
        { label: "Season", value: "" },
        { label: "Arrive", value: "" },
        { label: "Stay", value: "" },
        { label: "Pace", value: "" },
      ]
    : [
        { label: "最佳季节", value: "" },
        { label: "如何抵达", value: "" },
        { label: "建议停留", value: "" },
        { label: "节奏", value: "" },
      ];
}

export type DestDraft = {
  nameZh: string;
  nameEn: string;
  provinceId: string;
  seasons: SeasonId[];
  days: string;
  intensity: Intensity;
  tagline: string;
  excerpt: string;
  body: string;
  image: string;
  highlights: { title: string; text: string }[];
  itinerary: { day: string; title: string; text: string }[];
  practical: { label: string; value: string }[];
};

export function draftFromDest(d: CustomDestination): DestDraft {
  return {
    nameZh: d.nameZh,
    nameEn: d.nameEn,
    provinceId: d.provinceId,
    seasons: d.seasons,
    days: d.days,
    intensity: d.intensity,
    tagline: d.tagline,
    excerpt: d.excerpt,
    body: d.body,
    image: d.image,
    highlights: pad3(d.highlights, { title: "", text: "" }),
    itinerary: pad3(d.itinerary, { day: "", title: "", text: "" }),
    practical: pad4(d.practical),
  };
}

function pad3<T>(list: T[], blank: T): T[] {
  const next = list.slice(0, 3);
  while (next.length < 3) next.push(blank);
  return next;
}

function pad4(list: { label: string; value: string }[]) {
  const next = list.slice(0, 4);
  while (next.length < 4) next.push({ label: "", value: "" });
  return next;
}

export function blankDraft(locale: "zh" | "en"): DestDraft {
  return {
    nameZh: "",
    nameEn: "",
    provinceId: "",
    seasons: [],
    days: locale === "en" ? "3 days" : "3 日",
    intensity: "中",
    tagline: "",
    excerpt: "",
    body: "",
    image: "/images/hangzhou.jpg",
    highlights: emptyHighlights(),
    itinerary: emptyItinerary(locale),
    practical: emptyPractical(locale),
  };
}

export function draftToRecord(
  draft: DestDraft,
  opts: {
    slug: string;
    region: RegionId;
    province: string;
    createdAt: number;
  },
): CustomDestination {
  const highlights = draft.highlights.filter((h) => h.title.trim() || h.text.trim());
  const itinerary = draft.itinerary.filter(
    (h) => h.title.trim() || h.text.trim() || h.day.trim(),
  );
  const nameZh = draft.nameZh.trim();
  const nameEn = draft.nameEn.trim() || nameZh;
  return {
    slug: opts.slug,
    nameZh,
    nameEn,
    province: opts.province,
    region: opts.region,
    seasons: draft.seasons.length ? draft.seasons : ["autumn"],
    days: draft.days.trim() || "3 日",
    intensity: draft.intensity,
    tagline: draft.tagline.trim() || nameZh,
    excerpt: draft.excerpt.trim() || draft.tagline.trim() || nameZh,
    body: draft.body.trim() || draft.excerpt.trim() || draft.tagline.trim() || nameZh,
    image: draft.image.trim() || "/images/hangzhou.jpg",
    highlights,
    itinerary,
    practical: draft.practical.filter((p) => p.label.trim() || p.value.trim()),
    origin: "local",
    createdAt: opts.createdAt,
    updatedAt: Date.now(),
    provinceId: draft.provinceId,
  };
}
