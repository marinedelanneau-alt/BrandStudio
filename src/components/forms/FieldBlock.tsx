import type { BrandData, Field } from "../../types/brand";
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

  return (
    <div className="space-y-3">
      <label htmlFor={inputId} className="block text-sm font-bold text-[#3F3F49]">
        {field.label}
      </label>

      {field.type === "textarea" ? (
        <Textarea
          id={inputId}
          placeholder={field.placeholder}
          defaultValue={typeof value === "string" ? value : ""}
          onChange={(event) => onChange(field.key, event.target.value)}
        />
      ) : null}

      {field.type === "text" ? (
        <Input
          id={inputId}
          placeholder={field.placeholder}
          defaultValue={typeof value === "string" ? value : ""}
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

      {field.type === "imageupload" || field.type === "colorrow" || field.type === "colorgenerator" ? (
        <div className="rounded-[22px] border-2 border-dashed border-[#E7DDD2] bg-white px-5 py-4 text-sm text-[#6A635B]">
          {field.placeholder || field.label}
        </div>
      ) : null}
    </div>
  );
}
