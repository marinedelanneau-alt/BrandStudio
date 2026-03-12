export type FieldType =
  | "text"
  | "textarea"
  | "checkbox"
  | "imageupload"
  | "colorrow"
  | "colorgenerator";

export type BaseField = {
  key: string;
  label: string;
  description?: string;
  placeholder?: string;
};

export type TextField = BaseField & {
  type: "text" | "textarea";
};

export type CheckboxField = BaseField & {
  type: "checkbox";
  options: string[];
};

export type ImageUploadField = BaseField & {
  type: "imageupload";
  accept?: string[];
};

export type ColorRow = {
  key: string;
  name: string;
  hex?: string;
  usage?: string;
};

export type ColorRowField = BaseField & {
  type: "colorrow";
  rows: ColorRow[];
};

export type ColorGeneratorField = BaseField & {
  type: "colorgenerator";
  seedColor?: string;
};

export type Field =
  | TextField
  | CheckboxField
  | ImageUploadField
  | ColorRowField
  | ColorGeneratorField;

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
