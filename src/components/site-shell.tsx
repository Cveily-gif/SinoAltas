import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  return (
    <div
      className={cn(
        isHome
          ? "scheme-ink h-svh overflow-hidden overscroll-none bg-ink text-paper"
          : "min-h-svh bg-paper text-ink",
      )}
    >
      <SiteHeader />
      <main className={isHome ? "h-svh" : undefined}>{children}</main>
      {isHome ? null : <SiteFooter />}
    </div>
  );
}
