import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionKicker } from "@/components/section-kicker";
import { journal } from "@/data/journal";

export const Route = createFileRoute("/journal/")({
  component: JournalPage,
});

function JournalPage() {
  const [lead, ...rest] = journal;

  return (
    <div className="pt-16 sm:pt-[4.5rem]">
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <SectionKicker index="05" label="Journal" />
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">手记</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">
            比攻略更慢的写法。关于云海、一碗面、一条江，和风把时间吹薄的西部。
          </p>
        </div>
      </section>

      {lead ? (
        <Link
          to="/journal/$slug"
          params={{ slug: lead.slug }}
          className="group grid border-b border-ink/8 md:grid-cols-12"
        >
          <div className="relative min-h-[18rem] overflow-hidden md:col-span-7">
            <img
              src={lead.image}
              alt={lead.title}
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-10 sm:px-8 md:col-span-5">
            <p className="text-xs tracking-[0.22em] uppercase text-stone">
              {lead.kicker} · {lead.read}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-snug group-hover:text-cinnabar">
              {lead.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              {lead.excerpt}
            </p>
          </div>
        </Link>
      ) : null}

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        {rest.map((article) => (
          <Link
            key={article.slug}
            to="/journal/$slug"
            params={{ slug: article.slug }}
            className="group"
          >
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-4 text-xs tracking-[0.22em] uppercase text-stone">
              {article.kicker} · {article.date} · {article.read}
            </p>
            <h2 className="mt-2 font-display text-2xl leading-snug group-hover:text-cinnabar">
              {article.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
