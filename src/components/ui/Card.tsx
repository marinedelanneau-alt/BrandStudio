import type { CSSProperties, ReactNode } from "react";
import { tokens } from "../../lib/design-tokens";
import { cn } from "../../lib/helpers";

type CardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Card({ children, className, style }: CardProps) {
  return (
    <section
      className={cn("bs-card", className)}
      style={{
        background: tokens.colors.surface,
        border: `1px solid ${tokens.colors.border}`,
        borderRadius: tokens.radius.lg,
        boxShadow: tokens.shadows.soft,
        ...style,
      }}
    >
      {children}
    </section>
  );
}
