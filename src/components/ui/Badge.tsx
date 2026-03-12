import type { ReactNode } from "react";
import { tokens } from "../../lib/design-tokens";
import { cn } from "../../lib/helpers";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn("bs-badge", className)}
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
