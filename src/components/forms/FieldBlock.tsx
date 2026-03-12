import type { BrandData, Field } from "../../types/brand";
import { ColorGeneratorField } from "./ColorGeneratorField";
import { ColorRowField } from "./ColorRowField";
import { ImageUploadField } from "./ImageUploadField";
import { Checkbox } from "../ui/Checkbox";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

type FieldBlockProps = {
  moduleId: string;
  field: Field;
  value: BrandData[string];
  onChange: (key: string, value: unknown) => void;
};

export function FieldBlock({ moduleId, field, value, onChange }: FieldBlockProps) {
  const inputId = `${moduleId}-${field.key}`;
  const showStandaloneLabel = field.type === "text" || field.type === "textarea";
  const stringValue = typeof value === "string" ? value : "";

  return (
    <div className="space-y-3">
      {showStandaloneLabel ? (
        <label htmlFor={inputId} className="block text-sm font-bold text-[#3F3F49]">
          {field.label}
        </label>
      ) : null}

      {field.type === "textarea" ? (
        <Textarea
          id={inputId}
          placeholder={field.placeholder}
          value={stringValue}
          onChange={(event) => onChange(field.key, event.target.value)}
        />
      ) : null}

      {field.type === "text" ? (
        <Input
          id={inputId}
          placeholder={field.placeholder}
          value={stringValue}
          onChange={(event) => onChange(field.key, event.target.value)}
        />
      ) : null}

      {field.type === "checkbox" ? (
        <Checkbox
          id={inputId}
          checked={Boolean(value)}
          label={field.label}
          onChange={(checked) => onChange(field.key, checked)}
        />
      ) : null}

      {field.type === "imageupload" ? (
        <ImageUploadField
          id={inputId}
          label={field.label}
          value={value}
          onChange={(nextValue) => onChange(field.key, nextValue)}
        />
      ) : null}

      {field.type === "colorrow" ? (
        <ColorRowField
          id={inputId}
          label={field.label}
          value={value}
          onChange={(nextValue) => onChange(field.key, nextValue)}
        />
      ) : null}

      {field.type === "colorgenerator" ? (
        <ColorGeneratorField
          id={inputId}
          label={field.label}
          value={value}
          onChange={(nextValue) => onChange(field.key, nextValue)}
        />
      ) : null}
    </div>
  );
}
