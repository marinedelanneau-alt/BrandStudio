import { FieldBlock } from "./FieldBlock";
import { tokens } from "../../lib/design-tokens";

export function ColorGeneratorField({ label, colors }: { label: string; colors: string[] }) {
  return (
    <FieldBlock label={label}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            style={{
              width: 40,
              height: 40,
              borderRadius: tokens.radius.pill,
              border: `1px solid ${tokens.colors.border}`,
              background: color,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </FieldBlock>
  );
}
