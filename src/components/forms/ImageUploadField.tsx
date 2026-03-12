import { FieldBlock } from "./FieldBlock";
import { tokens } from "../../lib/design-tokens";

type ImageUploadFieldProps = {
  label: string;
  hint: string;
};

export function ImageUploadField({ label, hint }: ImageUploadFieldProps) {
  return (
    <FieldBlock label={label}>
      <div
        style={{
          minHeight: 220,
          padding: 22,
          borderRadius: tokens.radius.xl,
          border: `1px dashed ${tokens.colors.terracotta}`,
          background: tokens.colors.surface,
          display: "grid",
          alignContent: "center",
          gap: 12,
        }}
      >
        <p style={{ margin: 0, color: tokens.colors.textSecondary }}>{hint}</p>
      </div>
    </FieldBlock>
  );
}
