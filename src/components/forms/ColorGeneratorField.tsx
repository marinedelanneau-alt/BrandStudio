type PaletteValue = {
  seed: string;
  palette: string[];
};

type ColorGeneratorFieldProps = {
  id: string;
  label: string;
  value?: unknown;
  onChange: (value: PaletteValue) => void;
};

function clamp(value: number) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function parseHex(value: string) {
  const normalized = value.replace("#", "");
  const raw =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalized;

  const number = Number.parseInt(raw, 16);

  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255,
  };
}

function toHex(r: number, g: number, b: number) {
  return `#${[r, g, b]
    .map((channel) => clamp(channel).toString(16).padStart(2, "0"))
    .join("")}`;
}

function generatePalette(seed: string) {
  const { r, g, b } = parseHex(seed);

  return [
    toHex(r + 32, g + 32, b + 32),
    seed,
    toHex(r - 24, g - 24, b - 24),
    toHex(r * 0.82, g * 0.9, b * 1.08),
    toHex(r * 1.08, g * 1.02, b * 0.76),
  ];
}

function normalizeValue(value: unknown): PaletteValue {
  if (
    value &&
    typeof value === "object" &&
    "seed" in value &&
    typeof value.seed === "string" &&
    "palette" in value &&
    Array.isArray(value.palette)
  ) {
    return {
      seed: value.seed,
      palette: value.palette.filter(
        (color): color is string => typeof color === "string" && color.length > 0
      ),
    };
  }

  const seed = "#C96F2B";
  return {
    seed,
    palette: generatePalette(seed),
  };
}

export function ColorGeneratorField({
  id,
  label,
  value,
  onChange,
}: ColorGeneratorFieldProps) {
  const paletteValue = normalizeValue(value);

  return (
    <div className="grid gap-4 rounded-[22px] border-2 border-[#E7DDD2] bg-white px-5 py-5">
      <div className="grid gap-2">
        <p className="m-0 text-sm font-semibold text-[#3F3F49]">{label}</p>
        <p className="m-0 text-sm text-[#6A635B]">
          Choisis une couleur source puis genere automatiquement des nuances coherentes.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-[auto_1fr_auto]">
        <input
          id={id}
          type="color"
          value={paletteValue.seed}
          onChange={(event) => {
            const seed = event.target.value;
            onChange({ seed, palette: generatePalette(seed) });
          }}
          className="h-12 w-full cursor-pointer rounded-[18px] border border-[#E7DDD2] bg-white p-1 md:w-20"
        />
        <div className="flex items-center rounded-[18px] border border-[#E7DDD2] bg-[#F6F1E8] px-4 text-sm text-[#3F3F49]">
          {paletteValue.seed}
        </div>
        <button
          type="button"
          className="rounded-full border-2 border-[#3F3F49] bg-[#F0D64A] px-5 py-3 text-sm font-black text-[#3F3F49] transition hover:-translate-y-0.5"
          onClick={() =>
            onChange({
              seed: paletteValue.seed,
              palette: generatePalette(paletteValue.seed),
            })
          }
        >
          Generer
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {paletteValue.palette.map((color) => (
          <div
            key={color}
            className="overflow-hidden rounded-[18px] border border-[#E7DDD2]"
          >
            <div className="h-20" style={{ background: color }} />
            <div className="bg-white px-3 py-3 text-xs font-semibold text-[#3F3F49]">
              {color}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
