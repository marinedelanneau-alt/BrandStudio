import { FieldBlock } from "./FieldBlock";

type ColorRowItem = {
  key: string;
  name: string;
  hex?: string;
  usage?: string;
};

export function ColorRowField({ label, rows }: { label: string; rows: ColorRowItem[] }) {
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
