import { createFileRoute, Link } from "@tanstack/react-router";
import { DestinationCard } from "@/components/destination-card";
import { SectionKicker } from "@/components/section-kicker";
import { destinationsBySeason, seasons } from "@/data/destinations";
import { locSeason } from "@/data/i18n/localize";
import { useCopy, useLocale } from "@/lib/locale";

export const Route = createFileRoute("/seasons")({
  component: SeasonsPage,
});

function SeasonsPage() {
  const t = useCopy();
  const { locale } = useLocale();
  return (
    <div className="pt-16 sm:pt-[4.5rem]">
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <SectionKicker index="04" label="Seasons" />
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">{t.seasonTitle}</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">
            {t.seasonLead}
          </p>
        </div>
      </section>

      {seasons.map((raw, i) => {
        const s = locSeason(raw, locale);
        const list = destinationsBySeason(s.id as typeof raw.id);
        return (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-20 border-b border-ink/8 last:border-b-0"
          >
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20">
              <div className="md:col-span-4">
                <p className="text-latin text-xs tracking-[0.28em] uppercase text-stone">
                  {String(i + 1).padStart(2, "0")} / {raw.nameEn}
                </p>
                <h2 className="mt-3 font-display text-5xl">
                  {locale === "en" ? raw.nameEn : raw.nameZh}
                </h2>
                <p className="mt-2 text-sm text-cinnabar">{s.months}</p>
                <p className="mt-5 text-sm leading-relaxed text-stone">
                  {s.blurb}
                </p>
                <Link
                  to="/destinations"
                  search={{ season: raw.id }}
                  className="mt-6 inline-flex min-h-11 items-center text-sm text-cinnabar"
                >
                  {t.seasonOnly}
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 md:col-span-8">
                {list.slice(0, 4).map((d) => (
                  <DestinationCard key={d.slug} dest={d} size="compact" />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
