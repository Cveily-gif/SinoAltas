import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-wide">华旅纪</p>
          <p className="text-latin mt-2 text-sm tracking-[0.28em] uppercase text-stone-light">
            Sino Atlas
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone-light">
            一份关于中国风景的编辑手记。不是清单，是四季更迭的气味，是石阶被脚步磨亮的声音。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-stone-light">
              走
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/destinations" className="hover:text-paper">
                  目的地
                </Link>
              </li>
              <li>
                <Link to="/seasons" className="hover:text-paper">
                  四季
                </Link>
              </li>
              <li>
                <Link to="/planner" className="hover:text-paper">
                  行程
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-stone-light">
              读
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/journal" className="hover:text-paper">
                  手记
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-paper">
                  体验
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-paper">
                  关于
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-xs tracking-[0.24em] uppercase text-stone-light">
              记
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-light">
              华旅纪是一份独立编辑的旅行志。收录十二处风景，四时，与可以放进行李的行程。
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-stone-light sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>华旅纪 · 中国风景编辑手记</span>
          <span className="text-latin tracking-[0.18em] uppercase">
            Sino Atlas · China, still being written
          </span>
        </div>
      </div>
    </footer>
  );
}
