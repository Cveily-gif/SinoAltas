import type { Destination, Experience, JournalArticle } from "@/data/types";
import { destEn } from "@/data/i18n/destinations-en";
import {
  experienceEn,
  journalEn,
  regionBlurbEn,
  seasonEn,
} from "@/data/i18n/content-en";
import { placeNameEn, provinceBlurbEn, provinceEn } from "@/data/i18n/places";
import type { Locale } from "@/lib/locale";

export function locDest(d: Destination, locale: Locale): Destination {
  if (locale !== "en") return d;
  const en = destEn[d.slug];
  if (!en) {
    return {
      ...d,
      days: d.days.replace("日", " days"),
      province: placeNameEn(d.province),
    };
  }
  return {
    ...d,
    tagline: en.tagline,
    excerpt: en.excerpt,
    body: en.body,
    days: en.days,
    highlights: en.highlights,
    itinerary: en.itinerary,
    practical: en.practical,
    province: placeNameEn(d.province),
  };
}

export function locExperience(e: Experience, locale: Locale): Experience {
  if (locale !== "en") return e;
  const en = experienceEn[e.slug];
  if (!en) return e;
  return { ...e, excerpt: en.excerpt, body: en.body };
}

export function locJournal(a: JournalArticle, locale: Locale): JournalArticle {
  if (locale !== "en") return a;
  const en = journalEn[a.slug];
  if (!en) return a;
  return { ...a, ...en };
}

export function locProvinceName(id: string, zhName: string, locale: Locale) {
  if (locale !== "en") return zhName;
  return provinceEn[id] ?? placeNameEn(zhName);
}

export function locProvinceBlurb(id: string, zh: string | undefined, locale: Locale) {
  if (locale !== "en") return zh ?? "";
  return provinceBlurbEn[id] ?? zh ?? "";
}

export function locRegionBlurb(id: string, zh: string, locale: Locale) {
  if (locale !== "en") return zh;
  return regionBlurbEn[id] ?? zh;
}

export function locSeason(
  s: { id: string; months: string; blurb: string },
  locale: Locale,
) {
  if (locale !== "en") return s;
  const en = seasonEn[s.id];
  return en ? { ...s, ...en } : s;
}

export function locPlace(zh: string, locale: Locale) {
  return locale === "en" ? placeNameEn(zh) : zh;
}

export function destDisplayName(d: Destination, locale: Locale) {
  return locale === "en" ? d.nameEn : d.nameZh;
}

export function destKicker(d: Destination, locale: Locale) {
  return locale === "en" ? d.nameZh : d.nameEn;
}
