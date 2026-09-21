import { guidePartOne } from "./guides-part-one";
import { guidePartTwo } from "./guides-part-two";
import { guidePartThree } from "./guides-part-three";
import { guidePartFour } from "./guides-part-four";
import { guidePartFive } from "./guides-part-five";
import { guidePartSix } from "./guides-part-six";
import { guidePartSeven } from "./guides-part-seven";
import { guidePartEight } from "./guides-part-eight";
import { guidePartNine } from "./guides-part-nine";
import { guidePartTen } from "./guides-part-ten";
import { guidePartEleven } from "./guides-part-eleven";
import { guidePartTwelve } from "./guides-part-twelve";
import { guidePartThirteen } from "./guides-part-thirteen";
import { guidePartFourteen } from "./guides-part-fourteen";
import { guidePartFifteen } from "./guides-part-fifteen";
import { guidePartSixteen } from "./guides-part-sixteen";

export const guideOrder = ["how-lolobuy-works", "qc-photos", "warehouse-parcel", "shipping-costs", "tracking-status", "safety-checklist", "lolobuy-germany-guide", "lolobuy-uk-guide", "lolobuy-canada-guide", "lolobuy-usa-guide", "lolobuy-france-guide", "lolobuy-reviews", "lolobuy-vs-superbuy", "lolobuy-update-september-2026", "lolobuy-italy-guide", "lolobuy-netherlands-guide", "lolobuy-spain-guide", "lolobuy-sweden-guide", "lolobuy-poland-guide", "lolobuy-portugal-guide"] as const;
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

export const guideData: Record<GuideSlug, Guide> = { ...guidePartOne, ...guidePartTwo, ...guidePartThree, ...guidePartFour, ...guidePartFive, ...guidePartSix, ...guidePartSeven, ...guidePartEight, ...guidePartNine, ...guidePartTen, ...guidePartEleven, ...guidePartTwelve, ...guidePartThirteen, ...guidePartFourteen, ...guidePartFifteen, ...guidePartSixteen };
