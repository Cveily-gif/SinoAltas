import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { isNationalCity } from "@/data/city-rank";
import { destinations } from "@/data/destinations";
import type { Destination, Intensity, RegionId, SeasonId } from "@/data/types";

export type StayChoice = "day" | "long" | number;

export type CustomDestination = Destination & {
  origin: "local";
  createdAt: number;
  updatedAt: number;
  provinceId: string;
  cityName: string;
  cityCp?: [number, number];
  national: boolean;
  stay: StayChoice;
  headline?: string;
  pace?: string;
  lon?: number;
  lat?: number;
};

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

export function stayToIndex(stay: StayChoice) {
  if (stay === "day") return 0;
  if (stay === "long") return 16;
  return Math.min(15, Math.max(1, Number(stay) || 1));
}

export function indexToStay(n: number): StayChoice {
  if (n <= 0) return "day";
  if (n >= 16) return "long";
  return n;
}

export function stayLabel(stay: StayChoice, locale: "zh" | "en") {
  if (stay === "day") return locale === "en" ? "Within a day" : "日内";
  if (stay === "long") return locale === "en" ? "A long stay" : "长期";
  const n = Number(stay);
  if (locale === "en") return n === 1 ? "1 day" : `${n} days`;
  return `${n} 日`;
}

export function parseStay(days: string | undefined, stay?: StayChoice): StayChoice {
  if (stay === "day" || stay === "long") return stay;
  if (typeof stay === "number" && stay >= 1 && stay <= 15) return stay;
  const raw = String(days ?? "");
  if (/长期|long stay|long-term/i.test(raw)) return "long";
  if (/日内|当日|within a day/i.test(raw)) return "day";
  const n = Number.parseInt(raw, 10);
  if (n >= 1 && n <= 15) return n;
  return 3;
}

export function emptyHighlights(): { title: string; text: string }[] {
  return [{ title: "", text: "" }];
}

export function emptyItinerary(
  locale: "zh" | "en",
): { day: string; title: string; text: string }[] {
  return [
    {
      day: locale === "en" ? "Day 1" : "第一日",
      title: "",
      text: "",
    },
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
        { label: "Atmosphere", value: "" },
      ]
    : [
        { label: "最佳季节", value: "" },
        { label: "如何抵达", value: "" },
        { label: "建议停留", value: "" },
        { label: "氛围", value: "" },
      ];
}

export type DestDraft = {
  headline: string;
  provinceId: string;
  cityName: string;
  cityCp: [number, number] | null;
  stay: StayChoice;
  seasons: SeasonId[];
  intensity: Intensity;
  pace: string;
  excerpt: string;
  body: string;
  image: string;
  highlights: { title: string; text: string }[];
  itinerary: { day: string; title: string; text: string }[];
  practical: { label: string; value: string }[];
};

function atLeastOne<T>(list: T[], blank: T): T[] {
  return list.length ? list : [blank];
}

export function draftFromDest(d: CustomDestination): DestDraft {
  return {
    headline: d.headline || d.tagline || "",
    provinceId: d.provinceId,
    cityName: d.cityName ?? "",
    cityCp: d.cityCp ?? null,
    stay: parseStay(d.days, d.stay),
    seasons: d.seasons,
    intensity: d.intensity,
    pace: d.pace || d.intensity,
    excerpt: d.excerpt,
    body: d.body,
    image: d.image,
    highlights: atLeastOne(d.highlights, { title: "", text: "" }),
    itinerary: atLeastOne(d.itinerary, { day: "", title: "", text: "" }),
    practical: pad4(d.practical),
  };
}

function pad4(list: { label: string; value: string }[]) {
  const next = list.slice(0, 4);
  while (next.length < 4) next.push({ label: "", value: "" });
  return next;
}

export function blankDraft(locale: "zh" | "en"): DestDraft {
  return {
    headline: "",
    provinceId: "",
    cityName: "",
    cityCp: null,
    stay: 3,
    seasons: [],
    intensity: "中",
    pace: "中",
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
    nameEn: string;
    createdAt: number;
    locale: "zh" | "en";
  },
): CustomDestination {
  const highlights = draft.highlights.filter((h) => h.title.trim() || h.text.trim());
  const itinerary = draft.itinerary.filter(
    (h) => h.title.trim() || h.text.trim() || h.day.trim(),
  );
  const cityName = draft.cityName.trim();
  const nameZh = cityName;
  const nameEn = opts.nameEn || cityName;
  const headline = draft.headline.trim();
  const days = stayLabel(draft.stay, opts.locale);
  const practical = draft.practical.map((p) => {
    if (/停留|Stay/i.test(p.label)) return { ...p, value: days };
    return p;
  });
  return {
    slug: opts.slug,
    nameZh,
    nameEn,
    province: opts.province,
    region: opts.region,
    seasons: draft.seasons.length ? draft.seasons : ["autumn"],
    days,
    intensity: draft.intensity,
    tagline: headline || nameZh,
    excerpt: draft.excerpt.trim() || headline || nameZh,
    body: draft.body.trim() || draft.excerpt.trim() || headline || nameZh,
    image: draft.image.trim() || "/images/hangzhou.jpg",
    highlights,
    itinerary,
    practical: practical.filter((p) => p.label.trim() || p.value.trim()),
    origin: "local",
    createdAt: opts.createdAt,
    updatedAt: Date.now(),
    provinceId: draft.provinceId,
    cityName,
    cityCp: draft.cityCp ?? undefined,
    national: isNationalCity(draft.provinceId, cityName),
    stay: draft.stay,
    headline,
    pace: draft.pace,
  };
}

export function itineraryDayLabel(index: number, locale: "zh" | "en") {
  const n = index + 1;
  if (locale === "en") return `Day ${n}`;
  const ordinal = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  if (n <= 10) return `第${ordinal[n - 1]}日`;
  return `第 ${n} 日`;
}
