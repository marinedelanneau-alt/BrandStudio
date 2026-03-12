import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { tokens } from "../../lib/design-tokens";
import { cn } from "../../lib/helpers";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: { background: tokens.colors.textPrimary, color: "#fff", border: "1px solid transparent" },
  secondary: { background: tokens.colors.surface, color: tokens.colors.textPrimary, border: `1px solid ${tokens.colors.border}` },
  ghost: { background: "transparent", color: tokens.colors.textSecondary, border: "1px solid transparent" },
};

export function Button({ children, className, style, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn("bs-button", className)}
      style={{
        minHeight: 44,
        padding: "0 16px",
        borderRadius: tokens.radius.pill,
        fontWeight: 700,
        fontSize: 14,
        cursor: "pointer",
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
