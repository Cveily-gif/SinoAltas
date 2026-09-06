import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionKicker } from "@/components/section-kicker";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-16 sm:pt-[4.5rem]">
      <section className="relative isolate min-h-[50svh] overflow-hidden bg-ink text-paper">
        <img
          src="/images/calligraphy.jpg"
          alt="笔墨"
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
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">关于华旅纪</h1>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <p className="font-display text-2xl leading-snug">
          华旅纪是一份独立编辑的中国旅行志。它不试图穷尽，只认真写下二十二座城市。
        </p>
        <p className="mt-6 text-sm leading-relaxed text-stone">
          我们相信旅行的密度来自限制：季节要对，地带要连得上，日程要留出迷路的余地。每一处目的地都附有可走的三日骨架、必看的三处，以及一句不愿被扩音器说完的印象。
        </p>
        <p className="mt-4 text-sm leading-relaxed text-stone">
          行程页会把你点选的地方，按华北、江南、西南、西北、青藏的顺序排开。数据存在这台设备上，不需要账号。
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="ink">
            <Link to="/destinations">去看目的地</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/journal">去读手记</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
