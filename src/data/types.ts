export type RegionId =
  | "north"
  | "jiangnan"
  | "southwest"
  | "northwest"
  | "plateau";

export type SeasonId = "spring" | "summer" | "autumn" | "winter";

export type Intensity = "轻" | "中" | "深";

export type Destination = {
  slug: string;
  nameZh: string;
  nameEn: string;
  province: string;
  region: RegionId;
  seasons: SeasonId[];
  days: string;
  intensity: Intensity;
  tagline: string;
  excerpt: string;
  body: string;
  image: string;
  featured?: boolean;
  highlights: { title: string; text: string }[];
  itinerary: { day: string; title: string; text: string }[];
  practical: { label: string; value: string }[];
};

export type Experience = {
  slug: string;
  nameZh: string;
  nameEn: string;
  image: string;
  related: string[];
  excerpt: string;
  body: string;
};

export type JournalArticle = {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  read: string;
  image: string;
  destination?: string;
  excerpt: string;
  paragraphs: string[];
};
