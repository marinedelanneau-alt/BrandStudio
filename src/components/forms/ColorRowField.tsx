type ColorRowFieldProps = {
  label: string;
  value?: unknown;
  placeholder?: string;
};

export function ColorRowField({
  label,
  value,
  placeholder,
}: ColorRowFieldProps) {
  return (
    <div className="grid gap-3 rounded-[22px] border-2 border-[#E7DDD2] bg-white px-5 py-4">
      <div className="flex items-center gap-3">
        <span className="h-10 w-10 rounded-full border border-[#E7DDD2] bg-[#F6F1E8]" />
        <div className="min-w-0">
          <p className="m-0 text-sm font-semibold text-[#3F3F49]">{label}</p>
          <p className="m-0 text-sm text-[#6A635B]">
            {typeof value === "string" && value.trim()
              ? value
              : placeholder || "Precise ici la couleur, son code ou son usage."}
          </p>
        </div>
      </div>
    </div>
  );
}
