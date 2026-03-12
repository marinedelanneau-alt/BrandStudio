import type { InputHTMLAttributes } from "react";
import { tokens } from "../../lib/design-tokens";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label style={{ display: "flex", gap: 12, alignItems: "flex-start", color: tokens.colors.textPrimary }}>
      <input type="checkbox" {...props} style={{ width: 18, height: 18, marginTop: 3 }} />
      <span>{label}</span>
    </label>
  );
}
