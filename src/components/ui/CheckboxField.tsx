"use client";

type CheckboxFieldProps = {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  helper?: string;
};

export function CheckboxField({
  label,
  checked,
  onCheckedChange,
  helper,
}: CheckboxFieldProps) {
  return (
    <label className="flex gap-3 rounded-2xl border border-[#e7e3dc] bg-white p-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onCheckedChange(event.target.checked)}
        className="mt-1 h-4 w-4 rounded border-stone-300 text-[#8b5e34] focus:ring-[#8b5e34]/20"
      />
      <span className="space-y-1">
        <span className="block text-sm font-medium text-stone-900">{label}</span>
        {helper ? <span className="block text-xs text-stone-500">{helper}</span> : null}
      </span>
    </label>
  );
}
