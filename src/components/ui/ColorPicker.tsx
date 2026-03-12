import { tokens } from "../../lib/design-tokens";

type ColorPickerProps = {
  colors: string[];
  selected?: string;
  onSelect?: (value: string) => void;
};

export function ColorPicker({ colors, selected, onSelect }: ColorPickerProps) {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {colors.map((color) => (
        <button
          key={color}
          type="button"
          onClick={() => onSelect?.(color)}
          aria-pressed={selected === color}
          style={{
            width: 40,
            height: 40,
            borderRadius: tokens.radius.pill,
            border: selected === color ? `2px solid ${tokens.colors.textPrimary}` : `1px solid ${tokens.colors.border}`,
            background: color,
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
}
