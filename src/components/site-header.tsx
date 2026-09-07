import { Link, useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCopy, useLocale } from "@/lib/locale";
import { usePlanner, usePlannerHydration } from "@/lib/planner-store";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const savedCount = usePlanner((s) => s.saved.length);
  const hydrated = usePlannerHydration();
  const t = useCopy();
  const { locale, setLocale } = useLocale();
  const dark = isHome;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const LangToggle = ({ tone }: { tone: "dark" | "light" }) => (
    <div
      role="group"
      aria-label={locale === "zh" ? "Switch to English" : "切换为中文"}
      className={cn(
        "inline-flex h-9 items-center rounded-md p-0.5",
        tone === "dark" ? "bg-paper/12" : "bg-ink/8",
      )}
    >
      {([
        { id: "zh" as const, label: "中" },
        { id: "en" as const, label: "EN" },
      ]).map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => setLocale(opt.id)}
          className={cn(
            "inline-flex h-8 min-w-8 items-center justify-center rounded-sm px-2.5 text-[11px] tracking-[0.16em]",
            opt.id === "en" && "text-latin",
            locale === opt.id
              ? tone === "dark"
                ? "bg-paper/18 text-paper"
                : "bg-ink text-paper"
              : tone === "dark"
                ? "text-paper/50 hover:text-paper"
                : "text-stone hover:text-ink",
          )}
          aria-pressed={locale === opt.id}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-300",
        dark
          ? "bg-ink/80 text-paper border-b border-paper/10 backdrop-blur-md"
          : "bg-paper/92 text-ink border-b border-ink/8 backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-16 items-center justify-between px-4 sm:h-[4.5rem] sm:px-6",
          isHome ? "max-w-none" : "max-w-7xl",
        )}
      >
        <Link to="/" className="flex min-h-11 items-center gap-2.5">
          <span className="font-display text-lg tracking-wide">{t.brand}</span>
          <span
            className={cn(
              "text-latin text-[11px] tracking-[0.22em] uppercase",
              dark ? "text-paper/60" : "text-stone",
            )}
          >
            {t.brandEn}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {t.nav.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative flex min-h-11 items-center gap-2 py-2 text-sm tracking-wide transition-colors duration-150",
                  active
                    ? dark
                      ? "text-paper"
                      : "text-ink"
                    : dark
                      ? "text-paper/65 hover:text-paper"
                      : "text-stone hover:text-ink",
                )}
              >
                {locale === "en" ? item.en : item.zh}
                {item.to === "/planner" && hydrated && savedCount > 0 ? (
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-cinnabar text-[10px] text-paper tabular-nums">
                    {savedCount}
                  </span>
                ) : null}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-cinnabar" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden lg:block">
            <LangToggle tone={dark ? "dark" : "light"} />
          </div>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center lg:hidden"
                aria-label={t.menuOpen}
              >
                <Menu className="size-5" strokeWidth={1.5} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/50" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-paper text-ink shadow-border">
                <div className="flex h-16 items-center justify-between px-4">
                  <Dialog.Title className="font-display text-lg">
                    {t.brand}
                  </Dialog.Title>
                  <div className="flex items-center">
                    <LangToggle tone="light" />
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="inline-flex size-11 items-center justify-center"
                        aria-label={t.menuClose}
                      >
                        <X className="size-5" strokeWidth={1.5} />
                      </button>
                    </Dialog.Close>
                  </div>
                </div>
                <nav className="flex flex-1 flex-col gap-1 px-4 pt-4">
                  {t.nav.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex min-h-12 items-baseline justify-between border-b border-ink/8 py-3"
                    >
                      <span className="font-display text-xl">
                        {locale === "en" ? item.en : item.zh}
                      </span>
                      <span className="flex items-center gap-2 text-latin text-xs tracking-[0.2em] uppercase text-stone">
                        {locale === "en" ? item.zh : item.en}
                        {item.to === "/planner" && hydrated && savedCount > 0
                          ? ` · ${savedCount}`
                          : ""}
                      </span>
                    </Link>
                  ))}
                </nav>
                <p className="px-4 py-6 text-xs tracking-wide text-stone">
                  {locale === "en" ? t.sloganEn : t.slogan}
                </p>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
