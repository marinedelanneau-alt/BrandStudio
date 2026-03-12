import type { Field } from "./fields";

export type StepTone = "hero" | "insight" | "example" | "tip" | "exercise" | "checklist" | "summary";

export type Step = {
  id: string;
  title: string;
  description?: string;
  tone: StepTone;
  fields?: Field[];
};

export type Module = {
  id: string;
  slug: string;
  title: string;
  href: string;
  index: number;
  coverSrc?: string;
  steps: Step[];
};
