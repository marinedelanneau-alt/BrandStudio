type ColorGeneratorFieldProps = {
  label: string;
  value?: unknown;
};

const previewColors = ["#C96F2B", "#F0D64A", "#9AA57B", "#B9B2D9", "#3F3F49"];

export function ColorGeneratorField({
  label,
  value,
}: ColorGeneratorFieldProps) {
  return (
    <div className="grid gap-4 rounded-[22px] border-2 border-[#E7DDD2] bg-white px-5 py-5">
      <div className="flex flex-wrap gap-3">
        {previewColors.map((color) => (
          <button
            key={color}
            type="button"
            aria-label={`${label} ${color}`}
            className="h-10 w-10 rounded-full border border-[#E7DDD2] transition hover:-translate-y-0.5"
            style={{ background: color }}
          />
        ))}
      </div>
      <p className="m-0 text-sm text-[#6A635B]">
        {typeof value === "string" && value.trim()
          ? value
          : "Utilise ce bloc pour explorer une palette coherente avec ta direction artistique."}
      </p>
    </div>
  );
}
