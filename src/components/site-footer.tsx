import { Link } from "@tanstack/react-router";
import { useCopy } from "@/lib/locale";

export function SiteFooter() {
  const t = useCopy();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-wide">{t.brand}</p>
          <p className="text-latin mt-2 text-sm tracking-[0.28em] uppercase text-stone-light">
            {t.brandEn}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone-light">
            {t.footerBlurb}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-stone-light">
              {t.footerWalk}
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/destinations" className="hover:text-paper">
                  {t.destTitle}
                </Link>
              </li>
              <li>
                <Link to="/seasons" className="hover:text-paper">
                  {t.seasonTitle}
                </Link>
              </li>
              <li>
                <Link to="/planner" className="hover:text-paper">
                  {t.trip}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-stone-light">
              {t.footerRead}
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/journal" className="hover:text-paper">
                  {t.journalTitle}
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-paper">
                  {t.expTitle}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-paper">
                  {t.footerAboutLink}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-xs tracking-[0.24em] uppercase text-stone-light">
              {t.footerNote}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-light">
              {t.footerAbout}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-stone-light sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>{t.footerColophon}</span>
          <span className="text-latin tracking-[0.18em] uppercase">
            Sino Atlas · China, still being written
          </span>
        </div>
      </div>
    </footer>
  );
}
