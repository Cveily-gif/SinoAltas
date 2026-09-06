import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { copy, type Copy } from "@/data/i18n/copy";

export type Locale = "zh" | "en";

type LocaleState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
};

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set, get) => ({
      locale: "zh",
      setLocale: (locale) => set({ locale }),
      toggle: () => set({ locale: get().locale === "zh" ? "en" : "zh" }),
    }),
    { name: "sino-atlas-locale", skipHydration: true },
  ),
);

export function useLocaleHydration() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    void Promise.resolve(useLocaleStore.persist.rehydrate()).then(() =>
      setReady(true),
    );
  }, []);
  return ready;
}

export function useLocale() {
  const locale = useLocaleStore((s) => s.locale);
  const setLocale = useLocaleStore((s) => s.setLocale);
  const toggle = useLocaleStore((s) => s.toggle);
  return { locale, setLocale, toggle, en: locale === "en" };
}

export function useCopy(): Copy {
  const locale = useLocaleStore((s) => s.locale);
  return copy[locale];
}

export function useLocaleSync() {
  const locale = useLocaleStore((s) => s.locale);
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
    document.title =
      locale === "en" ? "Sino Atlas · 华旅纪" : "华旅纪 Sino Atlas";
  }, [locale]);
}
