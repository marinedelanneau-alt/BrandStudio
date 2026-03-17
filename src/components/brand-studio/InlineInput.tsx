type InlineInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
};

export function InlineInput({
  value,
  onChange,
  placeholder,
  className,
}: InlineInputProps) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className={[
        "inline-flex min-w-[140px] rounded-2xl border border-stone-200 bg-[#f7f2ea] px-4 py-2 text-sm text-stone-900 outline-none placeholder:text-stone-400 focus:border-stone-400 focus:bg-white sm:text-base",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
