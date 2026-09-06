import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ChinaMap,
  type ChinaMapHandle,
  type MapDots,
} from "@/components/china-map";
import { DashboardPanel } from "@/components/dashboard-panel";
import { destGeo } from "@/data/dest-geo";
import { loadMapDots } from "@/lib/map-dots";
import { usePlanner, usePlannerHydration } from "@/lib/planner-store";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        href: "/data/map-dots.json",
        as: "fetch",
        crossOrigin: "anonymous",
      },
    ],
  }),
  component: Home,
});

if (typeof window !== "undefined") void loadMapDots();

function Home() {
  const [data, setData] = useState<MapDots | null>(null);
  const [mapError, setMapError] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const mapRef = useRef<ChinaMapHandle>(null);
  const saved = usePlanner((s) => s.saved);
  const ready = usePlannerHydration();

  useEffect(() => {
    let alive = true;
    loadMapDots()
      .then((json) => {
        if (alive) {
          setMapError(false);
          setData(json);
        }
      })
      .catch(() => {
        if (alive) setMapError(true);
      });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!data || !selectedSlug) return;
    const g = destGeo[selectedSlug];
    if (!g) return;
    const pidx = data.provinces.findIndex((p) => p.id === g.provinceId);
    if (pidx >= 0) {
      setSelectedIndex((curr) => (curr === pidx ? curr : pidx));
    }
  }, [data, selectedSlug]);

  const onSelectDest = (slug: string | null) => {
    setSelectedSlug(slug);
    if (!slug || !data) return;
    const g = destGeo[slug];
    if (!g) return;
    const pidx = data.provinces.findIndex((p) => p.id === g.provinceId);
    setSelectedIndex(pidx >= 0 ? pidx : null);
  };

  const onSelectProvince = (index: number | null) => {
    setSelectedIndex(index);
    if (index == null || !data) return;
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
          {data ? (
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
          ) : (
            <div className="flex h-full min-h-[52svh] flex-col items-center justify-center gap-3 bg-ink">
              <p className="text-sm tracking-[0.28em] text-paper/45">
                {mapError ? "图幅未能载入" : "图幅载入中"}
              </p>
              {mapError ? (
                <button
                  type="button"
                  className="min-h-11 px-3 text-sm text-cinnabar"
                  onClick={() => {
                    setMapError(false);
                    void loadMapDots(true)
                      .then(setData)
                      .catch(() => setMapError(true));
                  }}
                >
                  重试
                </button>
              ) : null}
            </div>
          )}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink/40 to-transparent" />
        </div>

        {data ? (
          <DashboardPanel
            data={data}
            hoverIndex={hoverIndex}
            selectedIndex={selectedIndex}
            selectedSlug={selectedSlug}
            onSelectProvince={onSelectProvince}
            onSelectDest={onSelectDest}
            className="z-10 h-[min(42svh,24rem)] shrink-0 border-t border-paper/10 lg:h-full lg:w-80 lg:border-t-0 lg:border-l lg:border-paper/10 xl:w-96"
          />
        ) : (
          <div className="z-10 h-[min(42svh,24rem)] shrink-0 border-t border-paper/10 lg:h-full lg:w-80 lg:border-t-0 lg:border-l lg:border-paper/10 xl:w-96" />
        )}
      </div>
    </div>
  );
}
