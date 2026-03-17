export type BrandFieldType = "text" | "textarea" | "checkbox";

export type BrandField = {
  id: string;
  label: string;
  type: BrandFieldType;
  placeholder?: string;
  helper?: string;
  required?: boolean;
};

export type BrandSection = {
  id: string;
  title: string;
  intro: string;
  exercise: string;
  finalNote: string;
  fields: BrandField[];
};

export type BrandModuleContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  requiredFields: string[];
  sections: BrandSection[];
};
