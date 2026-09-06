import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/lib/locale";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const t = useCopy();
  return (
    <div className="pt-16 sm:pt-[4.5rem]">
      <section className="relative isolate min-h-[50svh] overflow-hidden bg-ink text-paper">
        <img
          src="/images/calligraphy.jpg"
          alt={t.expTitle}
          width={1280}
          height={800}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex min-h-[50svh] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6">
          <SectionKicker
            index="00"
            label="About"
            className="text-stone-light"
          />
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">{t.aboutTitle}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <p className="font-display text-2xl leading-snug">
          {t.aboutLead}
        </p>
        <p className="mt-6 text-sm leading-relaxed text-stone">
          {t.aboutP1}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-stone">
          {t.aboutP2}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="ink">
            <Link to="/destinations">{t.aboutDest}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/journal">{t.aboutJournal}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
