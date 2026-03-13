import type { ReactNode } from "react";
import { tokens } from "../../lib/design-tokens";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        minHeight: 28,
        padding: "0 10px",
        borderRadius: tokens.radius.pill,
        background: tokens.colors.surfaceMuted,
        color: tokens.colors.textSecondary,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}
