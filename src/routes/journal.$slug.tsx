import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SaveButton } from "@/components/save-button";
import { Button } from "@/components/ui/button";
import { getDestination } from "@/data/destinations";
import { getArticle, journal } from "@/data/journal";
import { destDisplayName, locJournal } from "@/data/i18n/localize";
import { useCopy, useLocale } from "@/lib/locale";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  component: ArticlePage,
  notFoundComponent: Missing,
});

function Missing() {
  const t = useCopy();
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="font-display text-2xl">{t.journalMissing}</p>
      <Button asChild className="mt-6" variant="ink">
        <Link to="/journal">{t.journalBack}</Link>
      </Button>
    </div>
  );
}

function ArticlePage() {
  const { article: raw } = Route.useLoaderData();
  const t = useCopy();
  const { locale } = useLocale();
  const article = locJournal(raw, locale);
  const dest = article.destination
    ? getDestination(article.destination)
    : undefined;
  const more = journal
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2)
    .map((a) => locJournal(a, locale));

  return (
    <article className="pt-16 sm:pt-[4.5rem]">
      <header className="mx-auto max-w-3xl px-4 pb-10 pt-12 sm:px-6">
        <Link
          to="/journal"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-stone hover:text-ink"
        >
          <ArrowLeft className="size-4" strokeWidth={1.6} />
          {t.journalBack}
        </Link>
        <p className="mt-8 text-xs tracking-[0.24em] uppercase text-stone">
          {article.kicker} · {article.date} · {article.read}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-snug sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-stone">
          {article.excerpt}
        </p>
      </header>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <img
          src={article.image}
          alt={article.title}
          width={1280}
          height={720}
          fetchPriority="high"
          decoding="async"
          className="aspect-16/9 w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        {article.paragraphs.map((p) => (
          <p key={p.slice(0, 12)} className="mb-6 text-base leading-[1.85]">
            {p}
          </p>
        ))}

        {dest ? (
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-stone">
                {t.journalPlace}
              </p>
              <Link
                to="/destinations/$slug"
                params={{ slug: dest.slug }}
                className="mt-1 inline-block font-display text-2xl hover:text-cinnabar"
              >
                {destDisplayName(dest, locale)}
              </Link>
            </div>
            <SaveButton slug={dest.slug} />
          </div>
        ) : null}
      </div>

      {more.length > 0 ? (
        <aside className="border-t border-ink/8 bg-paper-deep/40">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
            {more.map((a) => (
              <Link
                key={a.slug}
                to="/journal/$slug"
                params={{ slug: a.slug }}
                className="group"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-stone">
                  {t.journalContinue}
                </p>
                <h2 className="mt-2 font-display text-2xl group-hover:text-cinnabar">
                  {a.title}
                </h2>
                <p className="mt-2 text-sm text-stone">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </aside>
      ) : null}
    </article>
  );
}
