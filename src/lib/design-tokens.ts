export const colors = {
  background: "#F7F3EC",
  surface: "#FFFDF9",
  surfaceMuted: "#F6F1E8",
  border: "#E7DDD2",
  textPrimary: "#3F3F49",
  textSecondary: "#756F67",
  terracotta: "#C96F2B",
  yellow: "#F0D64A",
  sage: "#9AA57B",
  lilac: "#B9B2D9",
  white: "#FFFFFF",
} as const;

export const spacing = {
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "5rem",
} as const;

export const radius = {
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
  "2xl": "2rem",
  pill: "999px",
} as const;

export const shadows = {
  soft: "0 10px 24px rgba(25,25,25,0.04)",
  medium: "0 18px 36px rgba(25,25,25,0.08)",
} as const;

export const typography = {
  display: "Georgia, 'Times New Roman', serif",
  body: "Inter, ui-sans-serif, system-ui, sans-serif",
} as const;

export const tokens = {
  colors,
  spacing,
  radius,
  shadows,
  typography,
} as const;

export type DesignTokens = typeof tokens;
