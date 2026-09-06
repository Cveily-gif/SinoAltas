import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionKicker } from "@/components/section-kicker";
import { getDestination } from "@/data/destinations";
import { experiences } from "@/data/experiences";

export const Route = createFileRoute("/experiences")({
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <div className="pt-16 sm:pt-[4.5rem]">
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <SectionKicker index="06" label="Craft" />
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">体验</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">
            风景之外，中国还有可以被喝、被吃、被写、被走进去的部分。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {experiences.map((e, i) => (
          <article
            key={e.slug}
            id={e.slug}
            className="grid scroll-mt-24 items-center gap-8 border-b border-ink/8 py-14 md:grid-cols-12 md:gap-12"
          >
            <div
              className={
                i % 2 === 1
                  ? "md:col-span-6 md:order-2"
                  : "md:col-span-6"
              }
            >
              <img
                src={e.image}
                alt={e.nameZh}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div className="md:col-span-6">
              <p className="text-latin text-xs tracking-[0.28em] uppercase text-stone">
                {String(i + 1).padStart(2, "0")} / {e.nameEn}
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                {e.nameZh}
              </h2>
              <p className="mt-3 font-display text-lg text-ink/80">
                {e.excerpt}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-stone">
                {e.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {e.related.map((slug) => {
                  const d = getDestination(slug);
                  if (!d) return null;
                  return (
                    <Link
                      key={slug}
                      to="/destinations/$slug"
                      params={{ slug }}
                      className="inline-flex h-10 items-center rounded-full bg-paper-deep px-4 text-sm hover:bg-ink hover:text-paper"
                    >
                      {d.nameZh}
                    </Link>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
