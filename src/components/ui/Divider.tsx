import { tokens } from "../../lib/design-tokens";

export function Divider() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        height: 1,
        margin: "32px 0",
        background: `linear-gradient(90deg, transparent, ${tokens.colors.border}, transparent)`,
      }}
    />
  );
}
