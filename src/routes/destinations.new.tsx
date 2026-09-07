import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { z } from "zod";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";
import { destinations, regions, seasons } from "@/data/destinations";
import { locProvinceLockup } from "@/data/i18n/localize";
import { provinceMeta } from "@/data/provinces";
import type { Intensity, SeasonId } from "@/data/types";
import {
  blankDraft,
  destCacheBackend,
  draftFromDest,
  draftToRecord,
  slugFromNames,
  useDestCache,
  useDestCacheHydration,
  type DestDraft,
} from "@/lib/dest-cache";
import { useCopy, useLocale } from "@/lib/locale";
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

const INTENSITY: Intensity[] = ["轻", "中", "深"];

const field =
  "h-12 w-full rounded-lg border border-ink/12 bg-paper px-4 text-sm text-ink placeholder:text-stone focus:outline-2 focus:outline-offset-2 focus:outline-cinnabar";
const area =
  "w-full rounded-lg border border-ink/12 bg-paper px-4 py-3 text-sm leading-relaxed text-ink placeholder:text-stone focus:outline-2 focus:outline-offset-2 focus:outline-cinnabar";

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

  function onSave() {
    if (!draft.nameZh.trim()) {
      setError(t.mineNeedName);
      return;
    }
    if (!draft.provinceId || !provinceMeta[draft.provinceId]) {
      setError(t.mineNeedProvince);
      return;
    }
    const meta = provinceMeta[draft.provinceId];
    const slug = existing
      ? existing.slug
      : slugFromNames(
          draft.nameEn,
          draft.nameZh,
          items.map((d) => d.slug),
        );
    const record = draftToRecord(draft, {
      slug,
      region: meta.region,
      province: meta.short,
      createdAt: existing?.createdAt ?? Date.now(),
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
            <Field label={t.mineNameZh}>
              <input
                className={field}
                value={draft.nameZh}
                onChange={(e) => patch({ nameZh: e.target.value })}
                required
              />
            </Field>
            <Field label={t.mineNameEn}>
              <input
                className={cn(field, "text-latin")}
                value={draft.nameEn}
                onChange={(e) => patch({ nameEn: e.target.value })}
              />
            </Field>
            <Field label={t.mineProvince}>
              <select
                className={field}
                value={draft.provinceId}
                onChange={(e) => patch({ provinceId: e.target.value })}
              >
                <option value="">{t.mineProvince}</option>
                {provinces.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={t.mineDays}>
              <input
                className={field}
                value={draft.days}
                onChange={(e) => patch({ days: e.target.value })}
              />
            </Field>
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

          <fieldset>
            <p className="text-xs tracking-[0.2em] uppercase text-stone">
              {t.mineIntensity}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {INTENSITY.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => patch({ intensity: id })}
                  className={cn(
                    "inline-flex h-10 min-w-11 items-center rounded-full px-4 text-sm",
                    draft.intensity === id
                      ? "bg-ink text-paper"
                      : "bg-paper-deep text-ink hover:bg-ink/8",
                  )}
                >
                  {t.intensityVal[id]}
                </button>
              ))}
            </div>
          </fieldset>

          <Field label={t.mineTagline}>
            <input
              className={field}
              value={draft.tagline}
              onChange={(e) => patch({ tagline: e.target.value })}
            />
          </Field>
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
            <SectionKicker index="02" label="Highlights" />
            <h2 className="mt-3 font-display text-2xl">{t.highlights}</h2>
            <div className="mt-6 space-y-6">
              {draft.highlights.map((h, i) => (
                <div key={i} className="grid gap-3 sm:grid-cols-12">
                  <p className="text-latin text-xs tabular-nums text-cinnabar sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="grid gap-3 sm:col-span-11">
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
            <SectionKicker index="03" label="Itinerary" />
            <h2 className="mt-3 font-display text-2xl">{t.skeleton}</h2>
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
                    <input
                      className={cn(field, "sm:col-span-2")}
                      placeholder={t.mineItinTitle}
                      value={item.title}
                      onChange={(e) => {
                        const itinerary = draft.itinerary.slice();
                        itinerary[i] = { ...item, title: e.target.value };
                        patch({ itinerary });
                      }}
                    />
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
            {draft.nameZh || t.mineTitle}
          </h2>
          {draft.nameEn ? (
            <p className="text-latin mt-1 text-sm tracking-[0.16em] uppercase text-stone">
              {draft.nameEn}
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
                  draft.image === src ? "ring-2 ring-cinnabar ring-offset-2" : "opacity-80 hover:opacity-100",
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
            {draft.practical.map((p, i) => (
              <div key={i}>
                <dt className="text-xs tracking-[0.2em] uppercase text-stone">
                  {p.label || t.practical}
                </dt>
                <dd className="mt-2">
                  <input
                    className={field}
                    placeholder={t.minePracValue}
                    value={p.value}
                    onChange={(e) => {
                      const practical = draft.practical.slice();
                      practical[i] = { ...p, value: e.target.value };
                      patch({ practical });
                    }}
                  />
                </dd>
              </div>
            ))}
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
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs tracking-[0.2em] uppercase text-stone">{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
