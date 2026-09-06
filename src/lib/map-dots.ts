import type { MapDots } from "@/components/china-map";

function mapUrl() {
  const base = import.meta.env.BASE_URL || "/";
  return new URL("data/map-dots.json", `${window.location.origin}${base}`).toString();
}

async function fetchMapDots(): Promise<MapDots> {
  const res = await fetch(mapUrl(), { cache: "force-cache" });
  if (!res.ok) throw new Error(`map ${res.status}`);
  const json = (await res.json()) as MapDots;
  if (!json?.provinces?.length) throw new Error("empty map");
  return json;
}

let pending: Promise<MapDots> | null = null;

export function loadMapDots(force = false): Promise<MapDots> {
  if (force) pending = null;
  if (!pending) {
    pending = fetchMapDots().catch((err) => {
      pending = null;
      throw err;
    });
  }
  return pending;
}

