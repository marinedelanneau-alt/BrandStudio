type TextareaBlockProps = {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export function TextareaBlock({
  id,
  label,
  value,
  onChange,
  placeholder,
}: TextareaBlockProps) {
  return (
    <label className="block space-y-3">
      <span className="text-sm font-medium text-stone-700">{label}</span>
      <textarea
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="min-h-[160px] w-full rounded-2xl border border-stone-200 bg-[#f7f2ea] px-5 py-4 text-base leading-7 text-stone-900 outline-none placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:ring-4 focus:ring-[#efe5d8]"
      />
    </label>
  );
}
