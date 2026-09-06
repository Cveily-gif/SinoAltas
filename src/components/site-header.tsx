import { Link, useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePlanner, usePlannerHydration } from "@/lib/planner-store";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "图幅", en: "Atlas" },
  { to: "/destinations", label: "目的地", en: "Places" },
  { to: "/experiences", label: "体验", en: "Craft" },
  { to: "/seasons", label: "四季", en: "Seasons" },
  { to: "/journal", label: "手记", en: "Journal" },
  { to: "/planner", label: "行程", en: "Trip" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const savedCount = usePlanner((s) => s.saved.length);
  const hydrated = usePlannerHydration();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const dark = isHome;

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
        <Link
          to="/"
          className="flex min-h-11 items-center gap-2.5"
        >
          <span className="font-display text-lg tracking-wide">华旅纪</span>
          <span
            className={cn(
              "text-latin text-[11px] tracking-[0.22em] uppercase",
              dark ? "text-paper/60" : "text-stone",
            )}
          >
            Sino Atlas
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => {
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
                {item.label}
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

        <div className="flex items-center gap-2">
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center lg:hidden"
                aria-label="打开菜单"
              >
                <Menu className="size-5" strokeWidth={1.5} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/50" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-paper text-ink shadow-border">
                <div className="flex h-16 items-center justify-between px-4">
                  <Dialog.Title className="font-display text-lg">
                    华旅纪
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="inline-flex size-11 items-center justify-center"
                      aria-label="关闭菜单"
                    >
                      <X className="size-5" strokeWidth={1.5} />
                    </button>
                  </Dialog.Close>
                </div>
                <nav className="flex flex-1 flex-col gap-1 px-4 pt-4">
                  {NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex min-h-12 items-baseline justify-between border-b border-ink/8 py-3"
                    >
                      <span className="font-display text-xl">{item.label}</span>
                      <span className="flex items-center gap-2 text-latin text-xs tracking-[0.2em] uppercase text-stone">
                        {item.en}
                        {item.to === "/planner" && hydrated && savedCount > 0
                          ? ` · ${savedCount}`
                          : ""}
                      </span>
                    </Link>
                  ))}
                </nav>
                <p className="px-4 py-6 text-xs tracking-wide text-stone">
                  万里河山 · 一程烟火
                </p>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
