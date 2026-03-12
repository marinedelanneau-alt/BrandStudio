export type FieldType =
  | "text"
  | "textarea"
  | "checkbox"
  | "imageupload"
  | "colorrow"
  | "colorgenerator";

export type Field = {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
};

export type Step = {
  id: string;
  title: string;
  description: string;
  note?: string;
  insightTitle?: string;
  insight?: string;
  exampleText?: string;
  checklist?: string[];
  audioTitle?: string;
  audioDescription?: string;
  summaryFields?: string[];
  fields: Field[];
};

export type Module = {
  id: string;
  kind: "dashboard" | "module" | "export";
  eyebrow: string;
  title: string;
  subtitle: string;
  accent: "yellow" | "terracotta" | "sage" | "lilac";
  quote?: string;
  introNote?: string;
  example?: string;
  banner?: string;
  sections?: Array<{ title: string; body: string }>;
  steps?: Step[];
};

export type BrandBookSection = {
  id: string;
  title: string;
  summary: string;
  moduleId: string;
};

export type QuickPreviewItem = {
  id: string;
  label: string;
  value: string;
};

export type ProgressSnapshot = {
  completedFields: number;
  totalFields: number;
  completedChecks: number;
  totalChecks: number;
  percent: number;
};

export type BrandData = Record<string, unknown>;
