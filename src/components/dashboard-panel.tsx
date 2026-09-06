import { Link } from "@tanstack/react-router";
import { ArrowRight, Bookmark, X } from "lucide-react";
import { SaveButton } from "@/components/save-button";
import { Button } from "@/components/ui/button";
import type { MapDots } from "@/components/china-map";
import { destsForProvince, destsForRegion, provinceMeta } from "@/data/provinces";
import { destinations, getDestination, regions } from "@/data/destinations";
import type { Destination } from "@/data/types";
import {
  composeItinerary,
  usePlanner,
  usePlannerHydration,
} from "@/lib/planner-store";
import { shortProvinceName } from "@/lib/geo";
import { cn } from "@/lib/utils";

const DAY_OPTIONS = [5, 7, 10, 14];
const NO_CITY_SPLIT = new Set(["11", "12", "31", "50", "81", "82"]);

type Props = {
  data: MapDots | null;
  hoverIndex: number | null;
  selectedIndex: number | null;
  selectedSlug: string | null;
  onSelectProvince: (index: number | null) => void;
  onSelectDest: (slug: string | null) => void;
  className?: string;
};

function DestRow({
  dest,
  index,
  active,
  saved,
  onSelect,
}: {
  dest: Destination;
  index: number;
  active: boolean;
  saved: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex min-h-12 w-full items-center gap-3 rounded-md p-1.5 text-left transition-[background-color,color] duration-150",
        active ? "bg-paper/10 text-paper" : "text-paper/85 hover:bg-paper/10",
      )}
    >
      <img
        src={dest.image}
        alt=""
        width={44}
        height={44}
        loading="lazy"
        decoding="async"
        className="size-11 shrink-0 rounded-sm object-cover"
      />
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline justify-between gap-2">
          <span className="font-display text-base leading-tight">
            {dest.nameZh}
          </span>
          <span className="text-latin text-[11px] tabular-nums tracking-widest text-stone-light">
            {String(index + 1).padStart(2, "0")}
          </span>
        </span>
        <span className="mt-0.5 block truncate text-xs text-stone-light">
          {dest.province} · {dest.days}
        </span>
      </span>
      {saved ? (
        <Bookmark
          className="size-3.5 shrink-0 text-cinnabar"
          strokeWidth={1.6}
          fill="currentColor"
        />
      ) : null}
    </button>
  );
}

export function DashboardPanel({
  data,
  hoverIndex,
  selectedIndex,
  selectedSlug,
  onSelectProvince,
  onSelectDest,
  className,
}: Props) {
  const saved = usePlanner((s) => s.saved);
  const days = usePlanner((s) => s.days);
  const toggle = usePlanner((s) => s.toggle);
  const setDays = usePlanner((s) => s.setDays);
  const clear = usePlanner((s) => s.clear);
  const ready = usePlannerHydration();
  const savedSlugs = ready ? saved : [];
  const plan = composeItinerary(savedSlugs, days);

  const dest = selectedSlug ? getDestination(selectedSlug) : undefined;
  const province =
    selectedIndex != null ? data?.provinces[selectedIndex] : undefined;
  const hoverProv =
    hoverIndex != null ? data?.provinces[hoverIndex] : undefined;
  const meta = province ? provinceMeta[province.id] : undefined;
  const provinceDests = province ? destsForProvince(province.id) : [];
  const regionDests = meta ? destsForRegion(meta.region) : [];
  const region = meta
    ? regions.find((r) => r.id === meta.region)
    : undefined;

  return (
    <aside
      className={cn(
        "flex min-h-0 flex-col overflow-hidden bg-ink-soft text-paper",
        className,
      )}
    >
      <div className="dash-scroll min-h-0 flex-1 overflow-y-auto p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-latin text-[11px] tracking-[0.32em] uppercase text-stone-light">
              Atlas
            </p>
            <h2 className="mt-1 font-display text-2xl tracking-wide">图幅</h2>
          </div>
          {selectedIndex != null || selectedSlug ? (
            <button
              type="button"
              aria-label="返回总览"
              onClick={() => {
                onSelectDest(null);
                onSelectProvince(null);
              }}
              className="inline-flex size-11 items-center justify-center rounded-md text-paper/80 hover:bg-paper/8"
            >
              <X className="size-4" strokeWidth={1.6} />
            </button>
          ) : null}
        </div>

        {dest ? (
          <div key={dest.slug} className="rise-in mt-5">
            <div className="overflow-hidden rounded-lg">
              <img
                src={dest.image}
                alt={dest.nameZh}
                width={640}
                height={400}
                decoding="async"
                className="aspect-16/10 w-full object-cover"
              />
            </div>
            <p className="text-latin mt-4 text-xs tracking-[0.24em] uppercase text-stone-light">
              {dest.nameEn}
            </p>
            <h3 className="mt-1 font-display text-3xl">{dest.nameZh}</h3>
            <p className="mt-1 text-sm text-stone-light">
              {dest.province} · {dest.days} · 强度{dest.intensity}
            </p>
            <p className="mt-4 font-display text-lg leading-snug">
              {dest.tagline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-paper/80">
              {dest.excerpt}
            </p>
            <dl className="mt-4 space-y-2 border-t border-paper/10 pt-4">
              {dest.practical.slice(0, 3).map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-2 text-sm">
                  <dt className="text-stone-light">{row.label}</dt>
                  <dd className="col-span-2 text-paper/90">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              <SaveButton slug={dest.slug} tone="dark" />
              <Button asChild variant="ghost" size="sm">
                <Link
                  to="/destinations/$slug"
                  params={{ slug: dest.slug }}
                >
                  阅读全文
                  <ArrowRight className="size-4" strokeWidth={1.6} />
                </Link>
              </Button>
            </div>
          </div>
        ) : province ? (
          <div key={province.id} className="rise-in mt-5">
            <p className="text-latin text-xs tracking-[0.24em] uppercase text-stone-light">
              {region?.nameEn ?? "Province"}
            </p>
            <h3 className="mt-1 font-display text-3xl">
              {shortProvinceName(province.name)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">
              {meta?.blurb}
            </p>
            {province.cities &&
            province.cities.length > 0 &&
            !NO_CITY_SPLIT.has(province.id) ? (
              <>
                <p className="mt-6 text-xs tracking-[0.2em] uppercase text-stone-light">
                  地级市 · 州
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {province.cities.map((c) => (
                    <li
                      key={c.name}
                      className="rounded-sm border border-paper/12 px-2 py-1 text-xs text-paper/80"
                    >
                      {c.name}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <p className="mt-6 text-xs tracking-[0.2em] uppercase text-stone-light">
              {provinceDests.length > 0 ? "本省目的地" : "同带可走"}
            </p>
            <ul className="mt-2 space-y-1">
              {(provinceDests.length > 0 ? provinceDests : regionDests).map(
                (d) => (
                  <li key={d.slug}>
                    <DestRow
                      dest={d}
                      index={destinations.findIndex((x) => x.slug === d.slug)}
                      active={false}
                      saved={savedSlugs.includes(d.slug)}
                      onSelect={() => onSelectDest(d.slug)}
                    />
                  </li>
                ),
              )}
            </ul>
            {provinceDests.length === 0 ? (
              <p className="mt-3 text-xs leading-relaxed text-stone-light">
                本省尚未单独收录。可从同带目的地开始，或继续点选地图上的朱砂圆点。
              </p>
            ) : null}
          </div>
        ) : (
          <div className="rise-in mt-5">
            <p className="font-display text-lg leading-snug text-paper">
              点一省，入其境。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/75">
              朱砂是城。滚轮可近观。若要回来，点向海面即可。
            </p>
            {hoverProv ? (
              <p className="mt-4 text-sm text-stone-light">
                {shortProvinceName(hoverProv.name)}
              </p>
            ) : null}
            <div className="mt-5 grid grid-cols-3 gap-3 border-y border-paper/10 py-4">
              {[
                { n: "34", l: "省区" },
                { n: "22", l: "城市" },
                { n: "5", l: "地理带" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-latin text-2xl tabular-nums text-cinnabar">
                    {s.n}
                  </p>
                  <p className="mt-1 text-xs text-stone-light">{s.l}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs tracking-[0.2em] uppercase text-stone-light">
              地理带
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {regions.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    const first = destsForRegion(r.id)[0];
                    if (first) onSelectDest(first.slug);
                  }}
                  className="inline-flex h-10 items-center rounded-full border border-paper/15 px-3.5 text-sm text-paper/85 hover:border-cinnabar hover:text-paper"
                >
                  {r.nameZh}
                </button>
              ))}
            </div>
            <p className="mt-6 text-xs tracking-[0.2em] uppercase text-stone-light">
              二十二座
            </p>
            <ul className="mt-2 space-y-1">
              {destinations.map((d, i) => (
                <li key={d.slug}>
                  <DestRow
                    dest={d}
                    index={i}
                    active={false}
                    saved={savedSlugs.includes(d.slug)}
                    onSelect={() => onSelectDest(d.slug)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        <section className="mt-8 border-t border-paper/10 pt-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-xl">行程</h3>
            {savedSlugs.length > 0 ? (
              <button
                type="button"
                onClick={clear}
                className="text-xs tracking-wide text-stone-light hover:text-paper"
              >
                清空
              </button>
            ) : null}
          </div>
          <p className="mt-1 text-xs text-stone-light">
            已选 {savedSlugs.length} 处 · 虚线按加入顺序连起
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {DAY_OPTIONS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setDays(n)}
                className={cn(
                  "inline-flex h-10 min-w-11 items-center justify-center rounded-full px-3.5 text-sm tabular-nums",
                  days === n
                    ? "bg-cinnabar text-paper"
                    : "border border-paper/15 text-paper/80 hover:border-paper/40",
                )}
              >
                {n} 日
              </button>
            ))}
          </div>
          {savedSlugs.length === 0 ? (
            <p className="mt-4 text-sm leading-relaxed text-stone-light">
              点选朱砂圆点或下方目的地，加入行程。地图会用虚线把它们连起来。
            </p>
          ) : (
            <>
              <ul className="mt-4 space-y-2">
                {savedSlugs.map((slug) => {
                  const d = getDestination(slug);
                  if (!d) return null;
                  return (
                    <li
                      key={slug}
                      className="flex items-center justify-between gap-2"
                    >
                      <button
                        type="button"
                        onClick={() => onSelectDest(slug)}
                        className="min-w-0 flex-1 truncate text-left text-sm hover:text-cinnabar"
                      >
                        {d.nameZh}
                        <span className="ml-2 text-xs text-stone-light">
                          {d.province}
                        </span>
                      </button>
                      <button
                        type="button"
                        aria-label={`移出 ${d.nameZh}`}
                        onClick={() => toggle(slug)}
                        className="inline-flex size-11 items-center justify-center text-stone-light hover:text-paper"
                      >
                        <X className="size-3.5" strokeWidth={1.6} />
                      </button>
                    </li>
                  );
                })}
              </ul>
              <ol className="mt-4 space-y-2 border-t border-paper/10 pt-4">
                {plan.slice(0, 6).map((p) => (
                  <li
                    key={`${p.day}-${p.slug}-${p.title}`}
                    className="grid grid-cols-[2.5rem_1fr] gap-2 text-sm"
                  >
                    <span className="text-latin tabular-nums text-cinnabar">
                      D{p.day}
                    </span>
                    <span className="leading-snug text-paper/90">{p.title}</span>
                  </li>
                ))}
              </ol>
              {plan.length > 6 ? (
                <p className="mt-2 text-xs text-stone-light">
                  另有 {plan.length - 6} 日写在完整行程里。
                </p>
              ) : null}
              <Button asChild variant="ghost" size="sm" className="mt-4">
                <Link to="/planner">
                  完整行程
                  <ArrowRight className="size-4" strokeWidth={1.6} />
                </Link>
              </Button>
            </>
          )}
        </section>
      </div>
    </aside>
  );
}
