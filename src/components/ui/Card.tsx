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
        background: "rgba(255, 253, 249, 0.86)",
        border: `1px solid ${tokens.colors.border}`,
        borderRadius: "1.6rem",
        boxShadow: "0 14px 34px rgba(44, 39, 31, 0.055)",
        position: "relative",
        ...style,
      }}
    >
      {children}
    </section>
  );
}
