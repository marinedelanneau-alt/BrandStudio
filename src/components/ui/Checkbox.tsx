"use client";

type Props = {
  id: string;
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

export function Checkbox({ id, checked, label, onChange }: Props) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-3 rounded-[18px] border border-[#E7DDD2] bg-white px-4 py-4"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5"
      />
      <span className="text-base font-medium text-[#3F3F49]">{label}</span>
    </label>
  );
}
