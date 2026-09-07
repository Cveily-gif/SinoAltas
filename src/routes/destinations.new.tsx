import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { z } from "zod";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";
import { NO_CITY_SPLIT } from "@/data/city-rank";
import { destinations, regions, seasons } from "@/data/destinations";
import { locPlace, locProvinceLockup } from "@/data/i18n/localize";
import { cityEn } from "@/data/i18n/places";
import { provinceMeta } from "@/data/provinces";
import {
  blankDraft,
  destCacheBackend,
  draftFromDest,
  draftToRecord,
  indexToStay,
  itineraryDayLabel,
  slugFromNames,
  stayLabel,
  stayToIndex,
  useDestCache,
  useDestCacheHydration,
  type DestDraft,
} from "@/lib/dest-cache";
import { shortProvinceName } from "@/lib/geo";
import { useCopy, useLocale } from "@/lib/locale";
import { loadMapDots } from "@/lib/map-dots";
import { cn } from "@/lib/utils";

const searchSchema = z.object({
  edit: z.string().optional(),
});

export const Route = createFileRoute("/destinations/new")({
  validateSearch: searchSchema,
  component: ComposeDestination,
});

const COVERS = [
  ...new Set([
    ...destinations.map((d) => d.image),
    "/images/huangshan.jpg",
    "/images/tea.jpg",
    "/images/calligraphy.jpg",
    "/images/jiuzhaigou.jpg",
  ]),
];

const field =
  "h-12 w-full rounded-lg border border-ink/12 bg-paper px-4 text-sm text-ink placeholder:text-stone focus:outline-2 focus:outline-offset-2 focus:outline-cinnabar";
const area =
  "w-full rounded-lg border border-ink/12 bg-paper px-4 py-3 text-sm leading-relaxed text-ink placeholder:text-stone focus:outline-2 focus:outline-offset-2 focus:outline-cinnabar";

type CityOpt = { name: string; cp: [number, number] };

function ComposeDestination() {
  const { edit } = Route.useSearch();
  const navigate = useNavigate();
  const t = useCopy();
  const { locale } = useLocale();
  const ready = useDestCacheHydration();
  const items = useDestCache((s) => s.items);
  const upsert = useDestCache((s) => s.upsert);
  const existing = edit ? items.find((d) => d.slug === edit) : undefined;
  const [draft, setDraft] = useState<DestDraft>(() => blankDraft(locale));
  const [cities, setCities] = useState<CityOpt[]>([]);
  const [error, setError] = useState("");
  const [booted, setBooted] = useState(!edit);

  useEffect(() => {
    if (!edit) {
      setBooted(true);
      return;
    }
    if (!ready) return;
    const found = useDestCache.getState().items.find((d) => d.slug === edit);
    if (found) setDraft(draftFromDest(found));
    setBooted(true);
  }, [edit, ready]);

  useEffect(() => {
    if (!draft.provinceId) {
      setCities([]);
      return;
    }
    let alive = true;
    void loadMapDots().then((data) => {
      if (!alive) return;
      const prov = data.provinces.find((p) => p.id === draft.provinceId);
      if (!prov) {
        setCities([]);
        return;
      }
      if (NO_CITY_SPLIT.has(prov.id) || !prov.cities?.length) {
        const name = shortProvinceName(prov.name);
        setCities([{ name, cp: prov.cp }]);
        setDraft((d) =>
          d.provinceId === prov.id && !d.cityName
            ? { ...d, cityName: name, cityCp: prov.cp }
            : d,
        );
        return;
      }
      setCities(prov.cities.map((c) => ({ name: c.name, cp: c.cp })));
    });
    return () => {
      alive = false;
    };
  }, [draft.provinceId]);

  const provinces = useMemo(
    () =>
      Object.entries(provinceMeta).map(([id, meta]) => ({
        id,
        ...meta,
        label: locProvinceLockup(id, meta.short, locale).hyphen,
      })),
    [locale],
  );

  function patch(partial: Partial<DestDraft>) {
    setDraft((d) => ({ ...d, ...partial }));
    setError("");
  }

  function chooseProvince(id: string) {
    patch({
      provinceId: id,
      cityName: "",
      cityCp: null,
    });
  }

  function chooseCity(name: string) {
    const city = cities.find((c) => c.name === name);
    patch({
      cityName: name,
      cityCp: city?.cp ?? null,
    });
  }

  function setStay(stay: typeof draft.stay) {
    patch({ stay });
  }

  function onSave() {
    if (!draft.provinceId || !provinceMeta[draft.provinceId]) {
      setError(t.mineNeedProvince);
      return;
    }
    if (!draft.cityName.trim()) {
      setError(t.mineNeedCity);
      return;
    }
    const meta = provinceMeta[draft.provinceId];
    const city = draft.cityName.trim();
    const slug = existing
      ? existing.slug
      : slugFromNames(cityEn[city] || "", city, items.map((d) => d.slug));
    const record = draftToRecord(draft, {
      slug,
      region: meta.region,
      province: meta.short,
      nameEn: cityEn[city] || city,
      createdAt: existing?.createdAt ?? Date.now(),
      locale,
    });
    upsert(record);
    void destCacheBackend.push(useDestCache.getState().items);
    void navigate({ to: "/destinations/$slug", params: { slug } });
  }

  if (edit && ready && !existing && booted) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center px-6 pt-16 text-center">
        <p className="font-display text-2xl">{t.destMissing}</p>
        <Button asChild className="mt-6" variant="ink">
          <Link to="/destinations">{t.destBack}</Link>
        </Button>
      </div>
    );
  }

  if (!booted) {
    return (
      <div className="flex min-h-[70svh] items-center justify-center pt-16 text-sm text-stone">
        {t.mineLoading}
      </div>
    );
  }

  const lockedCity = cities.length === 1 && NO_CITY_SPLIT.has(draft.provinceId);

  return (
    <div className="pt-16 sm:pt-[4.5rem]">
      <section className="border-b border-ink/8 bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <SectionKicker index="—" label={t.mineKicker} className="text-stone-light" />
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">{t.mineTitle}</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-light">
            {t.mineLead}
          </p>
          <Link
            to="/destinations"
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-paper/70 hover:text-paper"
          >
            <ArrowLeft className="size-4" strokeWidth={1.6} />
            {t.destBack}
          </Link>
        </div>
      </section>

      <form
        className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
          onSave();
        }}
      >
        <div className="space-y-10 md:col-span-7">
          <fieldset className="grid gap-4 sm:grid-cols-2">
            <Field label={t.mineProvince}>
              <select
                className={field}
                value={draft.provinceId}
                onChange={(e) => chooseProvince(e.target.value)}
              >
                <option value="">{t.mineProvince}</option>
                {provinces.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={t.mineCity}>
              <select
                className={field}
                value={draft.cityName}
                disabled={!draft.provinceId || lockedCity}
                onChange={(e) => chooseCity(e.target.value)}
              >
                <option value="">{t.mineCity}</option>
                {cities.map((c, i) => (
                  <option key={`${c.name}-${i}`} value={c.name}>
                    {locPlace(c.name, locale)}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={t.mineHeadline} className="sm:col-span-2">
              <input
                className={field}
                value={draft.headline}
                onChange={(e) => patch({ headline: e.target.value })}
                placeholder={draft.cityName ? locPlace(draft.cityName, locale) : t.mineHeadline}
              />
            </Field>
          </fieldset>

          <fieldset>
            <p className="text-xs tracking-[0.2em] uppercase text-stone">
              {t.mineDays}
            </p>
            <div className="mt-3 flex items-center gap-4">
              <div className="min-w-0 flex-1">
                <input
                  type="range"
                  min={0}
                  max={16}
                  step={1}
                  value={stayToIndex(draft.stay)}
                  onChange={(e) => setStay(indexToStay(Number(e.target.value)))}
                  className="stay-range w-full"
                  aria-label={t.mineDays}
                />
                <div className="mt-1 flex justify-between text-xs text-stone">
                  <span>{t.mineStayDay}</span>
                  <span>{stayLabel(draft.stay, locale)}</span>
                  <span>{t.mineStayLong}</span>
                </div>
              </div>
              <label className="flex h-12 shrink-0 items-center gap-2 rounded-lg border border-ink/12 bg-paper px-3">
                <input
                  type="number"
                  min={1}
                  max={15}
                  inputMode="numeric"
                  className="w-12 bg-transparent text-center text-sm tabular-nums text-ink focus:outline-none"
                  value={typeof draft.stay === "number" ? draft.stay : ""}
                  placeholder="—"
                  onChange={(e) => {
                    const raw = e.target.value;
                    if (raw === "") {
                      setStay("day");
                      return;
                    }
                    const n = Number(raw);
                    if (!Number.isFinite(n)) return;
                    if (n <= 0) setStay("day");
                    else if (n >= 16) setStay("long");
                    else setStay(Math.round(n));
                  }}
                />
                <span className="text-sm text-stone">{t.mineStayUnit}</span>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <p className="text-xs tracking-[0.2em] uppercase text-stone">
              {t.mineSeasons}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {seasons.map((s) => {
                const on = draft.seasons.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() =>
                      patch({
                        seasons: on
                          ? draft.seasons.filter((id) => id !== s.id)
                          : [...draft.seasons, s.id],
                      })
                    }
                    className={cn(
                      "inline-flex h-10 min-w-11 items-center rounded-full px-4 text-sm",
                      on ? "bg-ink text-paper" : "bg-paper-deep text-ink hover:bg-ink/8",
                    )}
                  >
                    {locale === "en" ? s.nameEn : s.nameZh}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <Field label={t.mineExcerpt}>
            <textarea
              className={cn(area, "min-h-24")}
              value={draft.excerpt}
              onChange={(e) => patch({ excerpt: e.target.value })}
            />
          </Field>
          <Field label={t.mineBody}>
            <textarea
              className={cn(area, "min-h-40")}
              value={draft.body}
              onChange={(e) => patch({ body: e.target.value })}
            />
          </Field>

          <section>
            <div className="flex items-end justify-between gap-3">
              <div>
                <SectionKicker index="02" label="Highlights" />
                <h2 className="mt-3 font-display text-2xl">{t.highlights}</h2>
              </div>
              <button
                type="button"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm text-cinnabar"
                onClick={() =>
                  patch({
                    highlights: [...draft.highlights, { title: "", text: "" }],
                  })
                }
              >
                <Plus className="size-4" strokeWidth={1.6} />
                {t.mineAddHl}
              </button>
            </div>
            <div className="mt-6 space-y-6">
              {draft.highlights.map((h, i) => (
                <div key={i} className="grid gap-3 sm:grid-cols-12">
                  <p className="text-latin text-xs tabular-nums text-cinnabar sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="grid gap-3 sm:col-span-11">
                    <div className="flex gap-2">
                      <input
                        className={field}
                        placeholder={t.mineHlTitle}
                        value={h.title}
                        onChange={(e) => {
                          const highlights = draft.highlights.slice();
                          highlights[i] = { ...h, title: e.target.value };
                          patch({ highlights });
                        }}
                      />
                      {draft.highlights.length > 1 ? (
                        <button
                          type="button"
                          className="inline-flex size-12 shrink-0 items-center justify-center text-stone hover:text-cinnabar"
                          onClick={() =>
                            patch({
                              highlights: draft.highlights.filter((_, j) => j !== i),
                            })
                          }
                          aria-label={t.mineRemoveRow}
                        >
                          <Trash2 className="size-4" strokeWidth={1.6} />
                        </button>
                      ) : null}
                    </div>
                    <textarea
                      className={cn(area, "min-h-20")}
                      placeholder={t.mineHlText}
                      value={h.text}
                      onChange={(e) => {
                        const highlights = draft.highlights.slice();
                        highlights[i] = { ...h, text: e.target.value };
                        patch({ highlights });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-end justify-between gap-3">
              <div>
                <SectionKicker index="03" label="Itinerary" />
                <h2 className="mt-3 font-display text-2xl">{t.skeleton}</h2>
              </div>
              <button
                type="button"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm text-cinnabar"
                onClick={() =>
                  patch({
                    itinerary: [
                      ...draft.itinerary,
                      {
                        day: itineraryDayLabel(draft.itinerary.length, locale),
                        title: "",
                        text: "",
                      },
                    ],
                  })
                }
              >
                <Plus className="size-4" strokeWidth={1.6} />
                {t.mineAddItin}
              </button>
            </div>
            <ol className="mt-6 space-y-6">
              {draft.itinerary.map((item, i) => (
                <li key={i} className="grid gap-3 border-t border-ink/10 pt-5">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <input
                      className={field}
                      placeholder={t.mineItinDay}
                      value={item.day}
                      onChange={(e) => {
                        const itinerary = draft.itinerary.slice();
                        itinerary[i] = { ...item, day: e.target.value };
                        patch({ itinerary });
                      }}
                    />
                    <div className="flex gap-2 sm:col-span-2">
                      <input
                        className={field}
                        placeholder={t.mineItinTitle}
                        value={item.title}
                        onChange={(e) => {
                          const itinerary = draft.itinerary.slice();
                          itinerary[i] = { ...item, title: e.target.value };
                          patch({ itinerary });
                        }}
                      />
                      {draft.itinerary.length > 1 ? (
                        <button
                          type="button"
                          className="inline-flex size-12 shrink-0 items-center justify-center text-stone hover:text-cinnabar"
                          onClick={() =>
                            patch({
                              itinerary: draft.itinerary.filter((_, j) => j !== i),
                            })
                          }
                          aria-label={t.mineRemoveRow}
                        >
                          <Trash2 className="size-4" strokeWidth={1.6} />
                        </button>
                      ) : null}
                    </div>
                  </div>
                  <textarea
                    className={cn(area, "min-h-20")}
                    placeholder={t.mineItinText}
                    value={item.text}
                    onChange={(e) => {
                      const itinerary = draft.itinerary.slice();
                      itinerary[i] = { ...item, text: e.target.value };
                      patch({ itinerary });
                    }}
                  />
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <p className="text-xs tracking-[0.2em] uppercase text-stone">
            {draft.provinceId
              ? regions.find((r) => r.id === provinceMeta[draft.provinceId]?.region)?.[
                  locale === "en" ? "nameEn" : "nameZh"
                ]
              : t.belt}
          </p>
          <h2 className="mt-2 font-display text-2xl">
            {draft.headline || draft.cityName || t.mineTitle}
          </h2>
          {draft.cityName ? (
            <p className="text-latin mt-1 text-sm tracking-[0.16em] uppercase text-stone">
              {locPlace(draft.cityName, locale)}
            </p>
          ) : null}

          <p className="mt-8 text-xs tracking-[0.2em] uppercase text-stone">
            {t.mineCover}
          </p>
          <p className="mt-2 text-xs text-stone">{t.destCoverPick}</p>
          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {COVERS.map((src) => (
              <button
                key={src}
                type="button"
                onClick={() => patch({ image: src })}
                className={cn(
                  "aspect-4/3 overflow-hidden rounded-sm",
                  draft.image === src
                    ? "ring-2 ring-cinnabar ring-offset-2"
                    : "opacity-80 hover:opacity-100",
                )}
              >
                <img src={src} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
          <input
            className={cn(field, "mt-3")}
            placeholder={t.mineCoverUrl}
            value={COVERS.includes(draft.image) ? "" : draft.image}
            onChange={(e) => patch({ image: e.target.value || COVERS[0] || "" })}
          />
          {draft.image ? (
            <img
              src={draft.image}
              alt=""
              className="mt-4 aspect-16/10 w-full rounded-lg object-cover"
            />
          ) : null}

          <dl className="mt-10 space-y-5 border-t border-ink/10 pt-6">
            {draft.practical.map((p, i) => {
              const isStay = /停留|Stay/i.test(p.label);
              return (
                <div key={i}>
                  <dt className="text-xs tracking-[0.2em] uppercase text-stone">
                    {p.label || t.practical}
                  </dt>
                  <dd className="mt-2">
                    <input
                      className={field}
                      placeholder={t.minePracValue}
                      value={isStay ? stayLabel(draft.stay, locale) : p.value}
                      readOnly={isStay}
                      onChange={(e) => {
                        if (isStay) return;
                        const practical = draft.practical.slice();
                        practical[i] = { ...p, value: e.target.value };
                        patch({ practical });
                      }}
                    />
                  </dd>
                </div>
              );
            })}
          </dl>

          {error ? <p className="mt-6 text-sm text-cinnabar">{error}</p> : null}

          <Button type="submit" variant="ink" className="mt-8 w-full">
            {t.mineSubmit}
          </Button>
          <p className="mt-4 text-xs leading-relaxed text-stone">{t.mineHint}</p>
        </aside>
      </form>
    </div>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="text-xs tracking-[0.2em] uppercase text-stone">{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
