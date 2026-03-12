import type { ColorRow } from "../../types/brand";
import { FieldBlock } from "./FieldBlock";

export function ColorRowField({ label, rows }: { label: string; rows: ColorRow[] }) {
  return (
    <FieldBlock label={label}>
      <div style={{ display: "grid", gap: 12 }}>
        {rows.map((row) => (
          <div key={row.key} style={{ display: "grid", gridTemplateColumns: "160px 120px 1fr", gap: 12 }}>
            <span>{row.name}</span>
            <span>{row.hex || "—"}</span>
            <span>{row.usage || "—"}</span>
          </div>
        ))}
      </div>
    </FieldBlock>
  );
}
