import type { TextareaHTMLAttributes } from "react";
import { tokens } from "../../lib/design-tokens";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      style={{
        width: "100%",
        minHeight: 152,
        padding: 18,
        borderRadius: tokens.radius.md,
        border: `1px solid ${tokens.colors.border}`,
        background: tokens.colors.surface,
        color: tokens.colors.textPrimary,
        resize: "vertical",
        ...props.style,
      }}
    />
  );
}
