import type { ReactNode } from "react";

type FieldBlockProps = {
  label: string;
  hint?: string;
  children: ReactNode;
};

export function FieldBlock({ label, hint, children }: FieldBlockProps) {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      <label style={{ fontWeight: 700 }}>{label}</label>
      {hint ? <p style={{ margin: 0 }}>{hint}</p> : null}
      {children}
    </div>
  );
}
