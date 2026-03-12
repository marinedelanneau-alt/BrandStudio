type ColorRowFieldProps = {
  id: string;
  label: string;
  value?: unknown;
  onChange: (value: string) => void;
};

function normalizeHex(value: unknown) {
  if (typeof value !== "string" || !value.trim()) {
    return "#C96F2B";
  }

  const normalized = value.trim();
  return /^#([0-9A-F]{3}){1,2}$/i.test(normalized) ? normalized : "#C96F2B";
}

export function ColorRowField({
  id,
  label,
  value,
  onChange,
}: ColorRowFieldProps) {
  const color = normalizeHex(value);

  return (
    <div className="grid gap-4 rounded-[22px] border-2 border-[#E7DDD2] bg-white px-5 py-4">
      <div className="flex items-center gap-3">
        <span
          className="h-12 w-12 rounded-full border border-[#E7DDD2]"
          style={{ background: color }}
        />
        <div className="min-w-0">
          <p className="m-0 text-sm font-semibold text-[#3F3F49]">{label}</p>
          <p className="m-0 text-sm text-[#6A635B]">
            Definis une couleur principale ou secondaire pour ta palette.
          </p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-[auto_1fr]">
        <input
          id={id}
          type="color"
          value={color}
          onChange={(event) => onChange(event.target.value)}
          className="h-12 w-full cursor-pointer rounded-[18px] border border-[#E7DDD2] bg-white p-1 md:w-20"
        />
        <input
          type="text"
          value={color}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-[18px] border border-[#E7DDD2] bg-[#F6F1E8] px-4 py-3 text-sm text-[#3F3F49] outline-none focus:border-[#C96F2B]"
        />
      </div>
    </div>
  );
}
