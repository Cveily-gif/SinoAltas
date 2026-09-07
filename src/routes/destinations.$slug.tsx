import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { DestinationCard } from "@/components/destination-card";
import { SaveButton } from "@/components/save-button";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";
import { getDestination, regions } from "@/data/destinations";
import { journal } from "@/data/journal";
import { destDisplayName, destKicker, locDest, locJournal } from "@/data/i18n/localize";
import { destCacheBackend, useDestCache, useDestCacheHydration } from "@/lib/dest-cache";
import { isMine, relatedAround } from "@/lib/dest-catalog";
import { useCopy, useLocale } from "@/lib/locale";
import { usePlanner } from "@/lib/planner-store";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    return { editorial: getDestination(params.slug) ?? null, slug: params.slug };
  },
  component: DestinationPage,
  notFoundComponent: DestinationMissing,
});

function DestinationMissing() {
  const t = useCopy();
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="font-display text-2xl">{t.destMissing}</p>
      <Button asChild className="mt-6" variant="ink">
        <Link to="/destinations">{t.destBack}</Link>
      </Button>
    </div>
  );
}

function DestinationPage() {
  const { editorial, slug } = Route.useLoaderData();
  const t = useCopy();
  const { locale } = useLocale();
  const navigate = useNavigate();
  const ready = useDestCacheHydration();
  const mine = useDestCache((s) => s.items);
  const remove = useDestCache((s) => s.remove);
  const saved = usePlanner((s) => s.saved);
  const toggle = usePlanner((s) => s.toggle);
  const [confirm, setConfirm] = useState(false);
  const raw = editorial ?? mine.find((d) => d.slug === slug);

  if (!editorial && !ready) {
    return (
      <div className="flex min-h-[70svh] items-center justify-center pt-16 text-sm text-stone">
        {t.mineLoading}
      </div>
    );
  }
  if (!raw) return <DestinationMissing />;

  const dest = locDest(raw, locale);
  const mineOwned = isMine(raw.slug, mine);
  const region = regions.find((r) => r.id === dest.region);
  const related = relatedAround(dest.slug, mine, 3);
  const articleRaw = journal.find((a) => a.destination === dest.slug);
  const article = articleRaw ? locJournal(articleRaw, locale) : undefined;

  function erase() {
    if (!mineOwned) return;
    if (saved.includes(slug)) toggle(slug);
    remove(slug);
    void destCacheBackend.push(useDestCache.getState().items);
    void navigate({ to: "/destinations" });
  }

  return (
    <article className="bg-paper">
      <section className="relative isolate min-h-[70svh] overflow-hidden bg-ink text-paper">
        <img
          src={dest.image}
          alt={`${dest.nameZh} ${dest.nameEn}`}
          width={1280}
          height={720}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6">
          <Link
            to="/destinations"
            className="mb-8 inline-flex min-h-11 w-fit items-center gap-2 text-sm text-paper/75 hover:text-paper"
          >
            <ArrowLeft className="size-4" strokeWidth={1.6} />
            {t.destBack}
          </Link>
          <p className="text-latin text-xs tracking-[0.32em] uppercase text-paper/70">
            {mineOwned ? `${t.mineBadge} · ` : ""}
            {destKicker(raw, locale)} · {dest.province}
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl md:text-7xl">
            {destDisplayName(raw, locale)}
          </h1>
          <p className="mt-4 max-w-xl font-display text-xl text-paper/90 sm:text-2xl">
            {dest.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <SaveButton slug={dest.slug} tone="dark" />
            <span className="text-sm text-paper/70">
              {dest.days} · {t.intensityVal[raw.intensity] ?? dest.intensity}
            </span>
            {mineOwned ? (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/destinations/new" search={{ edit: slug }}>
                    {t.mineEdit}
                  </Link>
                </Button>
                {confirm ? (
                  <>
                    <button
                      type="button"
                      className="min-h-11 px-3 text-sm text-cinnabar"
                      onClick={erase}
                    >
                      {t.mineConfirm}
                    </button>
                    <button
                      type="button"
                      className="min-h-11 px-3 text-sm text-paper/70"
                      onClick={() => setConfirm(false)}
                    >
                      {t.mineCancel}
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="min-h-11 px-3 text-sm text-paper/70 hover:text-paper"
                    onClick={() => setConfirm(true)}
                  >
                    {t.mineRemove}
                  </button>
                )}
              </>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <SectionKicker index="01" label="Read" />
          <p className="mt-6 text-lg leading-relaxed text-ink/90">{dest.body}</p>
          {article ? (
            <p className="mt-8 text-sm text-stone">
              {t.destFurther}
              <Link
                to="/journal/$slug"
                params={{ slug: article.slug }}
                className="ml-1 text-cinnabar"
              >
                {article.title}
              </Link>
            </p>
          ) : mineOwned ? (
            <p className="mt-8 text-xs leading-relaxed text-stone">{t.mineHint}</p>
          ) : null}
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <dl className="space-y-5 border-t border-ink/10 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            {dest.practical.map((p) => (
              <div key={p.label}>
                <dt className="text-xs tracking-[0.2em] uppercase text-stone">
                  {p.label}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed">{p.value}</dd>
              </div>
            ))}
            {region ? (
              <div>
                <dt className="text-xs tracking-[0.2em] uppercase text-stone">
                  {t.destBelt}
                </dt>
                <dd className="mt-1 text-sm">
                  <Link
                    to="/destinations"
                    search={{ region: dest.region }}
                    className="text-cinnabar"
                  >
                    {locale === "en" ? region.nameEn : region.nameZh}
                  </Link>
                </dd>
              </div>
            ) : null}
          </dl>
        </aside>
      </section>

      {dest.highlights.length > 0 ? (
        <section className="border-y border-ink/8 bg-paper-deep/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <SectionKicker index="02" label="Highlights" />
            <h2 className="mt-3 font-display text-3xl">{t.highlights}</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {dest.highlights.map((h, i) => (
                <div key={`${h.title}-${i}`} className="border-t border-ink/10 pt-5">
                  <p className="text-latin text-xs tabular-nums text-cinnabar">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {dest.itinerary.length > 0 ? (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionKicker index="03" label="Itinerary" />
          <h2 className="mt-3 font-display text-3xl">{t.skeleton}</h2>
          <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {dest.itinerary.map((item, i) => (
              <li
                key={`${item.day}-${i}`}
                className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline"
              >
                <p className="text-sm tracking-wide text-cinnabar md:col-span-2">
                  {item.day}
                </p>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3">
            <SaveButton slug={dest.slug} />
            <Button asChild variant="ink">
              <Link to="/planner">
                {t.destGoTrip}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap gap-3">
            <SaveButton slug={dest.slug} />
            <Button asChild variant="ink">
              <Link to="/planner">
                {t.destGoTrip}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      )}

      <section className="bg-ink py-16 text-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-2xl">{t.related}</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {related.map((d) => (
              <DestinationCard
                key={d.slug}
                dest={d}
                size="compact"
                mine={isMine(d.slug, mine)}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
