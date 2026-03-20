"use client";

type TextareaFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helper?: string;
};

export function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  helper,
}: TextareaFieldProps) {
  return (
    <label className="block space-y-2">
      <span className="bs-label">{label}</span>
      <textarea
        className="bs-textarea"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
      {helper ? <span className="text-xs text-stone-500">{helper}</span> : null}
    </label>
  );
}
