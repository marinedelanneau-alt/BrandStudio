import type { InputHTMLAttributes } from "react";
import { tokens } from "../../lib/design-tokens";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        width: "100%",
        minHeight: 48,
        padding: "0 16px",
        borderRadius: tokens.radius.md,
        border: `1px solid ${tokens.colors.border}`,
        background: tokens.colors.surface,
        color: tokens.colors.textPrimary,
        ...props.style,
      }}
    />
  );
}
