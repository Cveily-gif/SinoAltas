import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ChinaMap,
  type ChinaMapHandle,
  type MapDots,
} from "@/components/china-map";
import { DashboardPanel } from "@/components/dashboard-panel";
import { destGeo } from "@/data/dest-geo";
import { usePlanner, usePlannerHydration } from "@/lib/planner-store";
import mapDotsJson from "@/data/map-dots.json";

export const Route = createFileRoute("/")({ component: Home });

const mapDots = mapDotsJson as unknown as MapDots;

function Home() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const mapRef = useRef<ChinaMapHandle>(null);
  const saved = usePlanner((s) => s.saved);
  const ready = usePlannerHydration();
  const data = mapDots;

  useEffect(() => {
    if (!selectedSlug) return;
    const g = destGeo[selectedSlug];
    if (!g) return;
    const pidx = data.provinces.findIndex((p) => p.id === g.provinceId);
    if (pidx >= 0) {
      setSelectedIndex((curr) => (curr === pidx ? curr : pidx));
    }
  }, [data.provinces, selectedSlug]);

  const onSelectDest = (slug: string | null) => {
    setSelectedSlug(slug);
    if (!slug) return;
    const g = destGeo[slug];
    if (!g) return;
    const pidx = data.provinces.findIndex((p) => p.id === g.provinceId);
    setSelectedIndex(pidx >= 0 ? pidx : null);
  };

  const onSelectProvince = (index: number | null) => {
    setSelectedIndex(index);
    if (index == null) return;
    setSelectedSlug((slug) => {
      if (!slug) return slug;
      const pid = data.provinces[index]?.id;
      const g = destGeo[slug];
      if (g && g.provinceId !== pid) return null;
      return slug;
    });
  };

  const onHoverProvince = (index: number | null) => {
    setHoverIndex((prev) => (prev === index ? prev : index));
  };

  return (
    <div className="scheme-ink flex h-svh flex-col bg-ink pt-16 text-paper sm:pt-[4.5rem]">
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <div className="relative min-h-[52svh] min-w-0 flex-1 lg:min-h-0">
          <ChinaMap
            ref={mapRef}
            data={data}
            hoverIndex={hoverIndex}
            selectedIndex={selectedIndex}
            selectedSlug={selectedSlug}
            saved={ready ? saved : []}
            onHoverProvince={onHoverProvince}
            onSelectProvince={onSelectProvince}
            onSelectDest={onSelectDest}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink/40 to-transparent" />
          <div className="pointer-events-none absolute bottom-5 left-5 hidden text-[11px] tracking-[0.2em] uppercase text-paper/45 sm:block">
            <p>浅线 · 邻邦</p>
            <p className="mt-1">点阵 · 中国</p>
            <p className="mt-1">岸点 · 海岸</p>
            <p className="mt-1">朱砂 · 目的地</p>
          </div>
        </div>

        <DashboardPanel
          data={data}
          hoverIndex={hoverIndex}
          selectedIndex={selectedIndex}
          selectedSlug={selectedSlug}
          onSelectProvince={onSelectProvince}
          onSelectDest={onSelectDest}
          className="z-10 h-[min(42svh,24rem)] shrink-0 border-t border-paper/10 lg:h-full lg:w-80 lg:border-t-0 lg:border-l lg:border-paper/10 xl:w-96"
        />
      </div>
    </div>
  );
}
