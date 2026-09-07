import { destinations, getDestination } from "@/data/destinations";
import { destsForProvince, destsForRegion } from "@/data/provinces";
import type { Destination, RegionId } from "@/data/types";
import type { CustomDestination } from "@/lib/dest-cache";

export function allDestinations(mine: CustomDestination[]): Destination[] {
  return [...destinations, ...mine];
}

export function findDest(
  slug: string,
  mine: CustomDestination[],
): Destination | undefined {
  return mine.find((d) => d.slug === slug) ?? getDestination(slug);
}

export function isMine(slug: string, mine: CustomDestination[]) {
  return mine.some((d) => d.slug === slug);
}

export function destsInProvince(provinceId: string, mine: CustomDestination[]) {
  const editorial = destsForProvince(provinceId);
  const extra = mine.filter((d) => d.provinceId === provinceId);
  const seen = new Set(editorial.map((d) => d.slug));
  return [...editorial, ...extra.filter((d) => !seen.has(d.slug))];
}

export function destsInRegion(region: RegionId, mine: CustomDestination[]) {
  const editorial = destsForRegion(region);
  const extra = mine.filter((d) => d.region === region);
  const seen = new Set(editorial.map((d) => d.slug));
  return [...editorial, ...extra.filter((d) => !seen.has(d.slug))];
}

export function relatedAround(
  slug: string,
  mine: CustomDestination[],
  n = 3,
): Destination[] {
  const catalog = allDestinations(mine);
  const current = catalog.find((d) => d.slug === slug);
  if (!current) return catalog.slice(0, n);
  const same = catalog.filter((d) => d.slug !== slug && d.region === current.region);
  const rest = catalog.filter((d) => d.slug !== slug && d.region !== current.region);
  return [...same, ...rest].slice(0, n);
}
