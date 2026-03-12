export const colors = {
  background: "#F7F3EC",
  surface: "#FFFDF9",
  surfaceMuted: "#F4EFE7",
  border: "#E7DDD2",
  borderStrong: "#D7CABD",
  textPrimary: "#3F3F49",
  textSecondary: "#756F67",
  terracotta: "#C96F2B",
  terracottaDeep: "#AB5921",
  yellow: "#F0D64A",
  sage: "#9AA57B",
  lilac: "#B9B2D9",
  success: "#6A8A55",
  warning: "#B96A2B",
} as const;

export const spacing = {
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  12: 48,
  16: 64,
  20: 80,
} as const;

export const radius = {
  sm: 16,
  md: 24,
  lg: 32,
  pill: 999,
} as const;

export const shadows = {
  soft: "0 14px 34px rgba(79, 55, 35, 0.06)",
  card: "0 20px 54px rgba(65, 41, 22, 0.08)",
  float: "0 28px 70px rgba(44, 31, 22, 0.1)",
} as const;

export const typography = {
  fontBody: `"Aptos", "Trebuchet MS", "Segoe UI", sans-serif`,
  fontDisplay: `"Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif`,
  h1: { fontSize: "clamp(2.4rem, 3.7vw, 3.9rem)", lineHeight: 0.94, letterSpacing: "-0.04em" },
  h2: { fontSize: "clamp(1.9rem, 2.5vw, 2.6rem)", lineHeight: 1, letterSpacing: "-0.03em" },
  h3: { fontSize: "clamp(1.3rem, 1.7vw, 1.72rem)", lineHeight: 1.08, letterSpacing: "-0.02em" },
  bodyLarge: { fontSize: "1.08rem", lineHeight: 1.82 },
  body: { fontSize: "1rem", lineHeight: 1.72 },
  label: { fontSize: "0.95rem", lineHeight: 1.55 },
  caption: { fontSize: "0.78rem", lineHeight: 1.45 },
} as const;

export const breakpoints = {
  mobile: 768,
  tablet: 980,
  desktop: 1260,
} as const;

export const tokens = {
  colors,
  spacing,
  radius,
  shadows,
  typography,
  breakpoints,
} as const;

export type DesignTokens = typeof tokens;
