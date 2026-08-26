import { guidePartOne } from "./guides-part-one";
import { guidePartTwo } from "./guides-part-two";
import { guidePartThree } from "./guides-part-three";
import { guidePartFour } from "./guides-part-four";
import { guidePartFive } from "./guides-part-five";

export const guideOrder = ["how-lolobuy-works", "qc-photos", "warehouse-parcel", "shipping-costs", "tracking-status", "safety-checklist", "lolobuy-germany-guide", "lolobuy-uk-guide", "lolobuy-canada-guide"] as const;
export type GuideSlug = typeof guideOrder[number];

export type GuideSection = { heading: string; paragraphs: string[]; checklist?: string[] };
export type Guide = {
  title: string;
  deck: string;
  label: string;
  read: string;
  sections: GuideSection[];
  published?: string;
  reviewed?: string;
  language?: string;
  keywords?: string[];
  sources?: string[];
  related?: { slug: string; label: string }[];
  cta?: { title: string; text: string; href: string; label: string };
};

export const guideData: Record<GuideSlug, Guide> = { ...guidePartOne, ...guidePartTwo, ...guidePartThree, ...guidePartFour, ...guidePartFive };
