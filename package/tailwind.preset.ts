import type { Config } from "tailwindcss";

/**
 * @zaad/design-system — Tailwind Preset
 * المصدر: tokens.json (نظام الزاد الموحّد)
 */
const zaadPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f1f3",
          100: "#f0e0e5",
          200: "#edb5c6",
          300: "#e184a0",
          400: "#d5537a",
          500: "#bc2e58",
          600: "#9c2649",
          700: "#7b1e3a",
          800: "#60162c",
          900: "#3e0e1c",
          DEFAULT: "#7b1e3a",
          dark: "#60162c",
          light: "#bc2e58",
        },
        secondary: {
          50: "#f9f7f1",
          100: "#f1ecdf",
          200: "#f2e0b1",
          300: "#e9cc7c",
          400: "#e0b748",
          500: "#c99c22",
          600: "#a6811c",
          700: "#836616",
          800: "#664f0f",
          900: "#43330a",
          DEFAULT: "#e0b748",
          dark: "#a6811c",
          light: "#e9cc7c",
        },
        brand: {
          gray: "#777375",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f5f5f5",
          border: "#d2d0d1",
        },
      },
      fontFamily: {
        sans: ["Tajawal", "Segoe UI", "Tahoma", "Arial", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
      },
    },
  },
};

export default zaadPreset;
