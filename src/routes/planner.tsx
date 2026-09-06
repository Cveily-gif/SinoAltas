import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, Trash2 } from "lucide-react";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";
import { destinations, getDestination } from "@/data/destinations";
import { destDisplayName, locDest } from "@/data/i18n/localize";
import { useCopy, useLocale } from "@/lib/locale";
import { composeItinerary, usePlanner, usePlannerHydration } from "@/lib/planner-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/planner")({
  component: PlannerPage,
});

const DAY_OPTIONS = [5, 7, 10, 14];

function PlannerPage() {
  const saved = usePlanner((s) => s.saved);
  const days = usePlanner((s) => s.days);
  const notes = usePlanner((s) => s.notes);
  const toggle = usePlanner((s) => s.toggle);
  const setDays = usePlanner((s) => s.setDays);
  const setNotes = usePlanner((s) => s.setNotes);
  const clear = usePlanner((s) => s.clear);
  const ready = usePlannerHydration();
  const t = useCopy();
  const { locale } = useLocale();

  const picked = (ready ? saved : [])
    .map((slug) => getDestination(slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));
  const plan = composeItinerary(ready ? saved : [], days, locale);

  return (
    <div className="pt-16 sm:pt-[4.5rem]">
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <SectionKicker index="07" label="Trip" />
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">{t.plannerTitle}</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">
            {t.plannerLead}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-12">
        <section className="lg:col-span-7">
          <h2 className="font-display text-2xl">{t.plannerPick}</h2>
          <p className="mt-2 text-sm text-stone">{t.plannerPicked(picked.length)}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {destinations.map((raw) => {
              const d = locDest(raw, locale);
              const on = ready && saved.includes(raw.slug);
              return (
                <li key={raw.slug}>
                  <button
                    type="button"
                    onClick={() => toggle(raw.slug)}
                    aria-pressed={on}
                    className={cn(
                      "flex min-h-16 w-full items-center gap-3 rounded-lg p-2 text-left transition-colors duration-150",
                      on ? "bg-ink text-paper" : "bg-paper-deep hover:bg-ink/5",
                    )}
                  >
                    <img
                      src={raw.image}
                      alt=""
                      width={56}
                      height={56}
                      loading="lazy"
                      decoding="async"
                      className="size-14 shrink-0 rounded-md object-cover"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg leading-tight">
                        {destDisplayName(raw, locale)}
                      </span>
                      <span
                        className={cn(
                          "block text-xs",
                          on ? "text-paper/70" : "text-stone",
                        )}
                      >
                        {d.province} · {d.days}
                      </span>
                    </span>
                    <Bookmark
                      className="mr-2 size-4 shrink-0"
                      strokeWidth={1.6}
                      fill={on ? "currentColor" : "none"}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <aside className="lg:col-span-5">
          <div className="rounded-xl bg-paper-deep p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-2xl">{t.trip}</h2>
              {saved.length > 0 ? (
                <Button type="button" variant="quiet" size="sm" onClick={clear}>
                  <Trash2 className="size-4" strokeWidth={1.6} />
                  {t.clear}
                </Button>
              ) : null}
            </div>

            <p className="mt-5 text-xs tracking-[0.2em] uppercase text-stone">
              {t.plannerDaysLabel}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {DAY_OPTIONS.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setDays(n)}
                  className={cn(
                    "inline-flex h-10 min-w-11 items-center justify-center rounded-full px-4 text-sm tabular-nums",
                    days === n
                      ? "bg-cinnabar text-paper"
                      : "bg-paper text-ink hover:bg-ink/5",
                  )}
                >
                  {t.days(n)}
                </button>
              ))}
            </div>

            {plan.length === 0 ? (
              <p className="mt-8 text-sm leading-relaxed text-stone">
                {t.plannerEmpty}{" "}
                <Link to="/destinations" className="mx-1 text-cinnabar">
                  {t.plannerGoDest}
                </Link>
                {t.plannerEmptyAfter}
              </p>
            ) : (
              <ol className="mt-8 space-y-4">
                {plan.map((p) => (
                  <li
                    key={`${p.day}-${p.slug}-${p.title}`}
                    className="grid grid-cols-[3rem_1fr] gap-3"
                  >
                    <span className="text-latin text-sm tabular-nums text-cinnabar">
                      D{p.day}
                    </span>
                    <div>
                      <p className="font-display text-lg leading-tight">
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs text-stone">
                        {p.transit ? t.plannerTransitLabel : p.name}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/80">
                        {p.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )}

            <label className="mt-8 block">
              <span className="text-xs tracking-[0.2em] uppercase text-stone">
                {t.plannerNotes}
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder={t.plannerNotesPh}
                className="mt-2 w-full rounded-lg border border-ink/10 bg-paper p-3 text-sm leading-relaxed placeholder:text-stone focus:outline-2 focus:outline-offset-2 focus:outline-cinnabar"
              />
            </label>
          </div>
        </aside>
      </div>
    </div>
  );
}
