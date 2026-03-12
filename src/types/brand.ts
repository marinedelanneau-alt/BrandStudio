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
