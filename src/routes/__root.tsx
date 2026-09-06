import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import appCss from "../styles.css?url";

const APP_NAME = "华旅纪 Sino Atlas";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "华旅纪 Sino Atlas — 可交互的中国旅游图幅。点选省份与目的地，把风景放进行程。",
      },
      { name: "theme-color", content: "#1a1612" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Noto+Sans+SC:wght@400;500;600&family=Noto+Serif+SC:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootDocument,
});

function NotFound() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="font-display text-3xl">这一页还没有被写下</p>
      <p className="mt-3 text-sm text-stone">也许路标被风吹走了。</p>
      <a href="/" className="mt-8 text-sm text-cinnabar">
        回到华旅纪
      </a>
    </div>
  );
}

function RootDocument() {
  return (
    <html lang="zh-CN" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
