import { tokens } from "../../lib/design-tokens";

export function Divider() {
  return (
    <div
      style={{
        position: "relative",
        height: 28,
        margin: "28px 0",
        background: `linear-gradient(90deg, transparent, ${tokens.colors.border}, transparent)`,
      }}
    />
  );
}
