import type { ReactNode } from "react";
import { tokens } from "../../lib/design-tokens";

type DropzoneProps = {
  hint: string;
  preview?: ReactNode;
};

export function Dropzone({ hint, preview }: DropzoneProps) {
  return (
    <div
      style={{
        minHeight: 220,
        padding: 22,
        borderRadius: tokens.radius.lg,
        border: `1px dashed ${tokens.colors.terracotta}`,
        background: tokens.colors.surface,
        display: "grid",
        alignContent: "center",
        gap: 12,
      }}
    >
      {preview}
      <p style={{ margin: 0, color: tokens.colors.textSecondary }}>{hint}</p>
    </div>
  );
}
