import type { Destination, Experience, JournalArticle } from "@/data/types";
import { destEn } from "@/data/i18n/destinations-en";
import {
  experienceEn,
  journalEn,
  regionBlurbEn,
  seasonEn,
} from "@/data/i18n/content-en";
import { placeNameEn, provinceBlurbEn, provinceLockup } from "@/data/i18n/places";
import { stayLabel, type CustomDestination } from "@/lib/dest-cache";
import type { Locale } from "@/lib/locale";

function stayOf(d: Destination) {
  const rec = d as Destination & Partial<CustomDestination>;
  return rec.stay;
}

export function locDest(d: Destination, locale: Locale): Destination {
  const stay = stayOf(d);
  const days =
    stay != null ? stayLabel(stay, locale) : locale === "en" ? d.days.replace("日", " days") : d.days;
  if (locale !== "en") return stay != null ? { ...d, days } : d;
  const en = destEn[d.slug];
  if (!en) {
    return {
      ...d,
      days,
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

export function locProvinceLockup(id: string, zhName: string, locale: Locale) {
  return provinceLockup(id, zhName, locale);
}

export function locProvinceName(id: string, zhName: string, locale: Locale) {
  return provinceLockup(id, zhName, locale).hyphen;
}

export function locProvinceFull(id: string, zhName: string, locale: Locale) {
  return provinceLockup(id, zhName, locale).full;
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

function headlineOf(d: Destination) {
  return (d as Destination & Partial<CustomDestination>).headline?.trim();
}

export function destDisplayName(d: Destination, locale: Locale) {
  const headline = headlineOf(d);
  if (headline) return headline;
  return locale === "en" ? d.nameEn : d.nameZh;
}

export function destKicker(d: Destination, locale: Locale) {
  if (headlineOf(d)) {
    return locale === "en" ? d.nameEn : d.nameZh;
  }
  return locale === "en" ? d.nameZh : d.nameEn;
}
