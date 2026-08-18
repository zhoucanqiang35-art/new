import { guidePartOne } from "./guides-part-one";
import { guidePartTwo } from "./guides-part-two";

export const guideOrder = ["how-lolobuy-works", "qc-photos", "warehouse-parcel", "shipping-costs", "tracking-status", "safety-checklist"] as const;
export type GuideSlug = typeof guideOrder[number];

export type GuideSection = { heading: string; paragraphs: string[]; checklist?: string[] };
export type Guide = { title: string; deck: string; label: string; read: string; sections: GuideSection[] };

export const guideData: Record<GuideSlug, Guide> = { ...guidePartOne, ...guidePartTwo };
