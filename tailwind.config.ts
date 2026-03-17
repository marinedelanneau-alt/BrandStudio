import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f7f2ea",
          panel: "#fffdf9",
          line: "#e7e3dc",
          ink: "#1c1917",
          muted: "#57534e",
          accent: "#8b5e34",
        },
      },
      boxShadow: {
        soft: "0 18px 40px rgba(28, 25, 23, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
