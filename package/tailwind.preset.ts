import type { Config } from "tailwindcss";

/**
 * @zaad/design-system — Tailwind Preset
 * المصدر: tokens.json (نظام الزاد الموحّد)
 * ألوان الهوية المعتمدة: #951A41 · #938989 · #E7B121 · #E4DDD4
 */
const zaadPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf1f4",
          100: "#f3e0e6",
          200: "#e5b3c1",
          300: "#d07d95",
          400: "#b84d6e",
          500: "#a83255",
          600: "#951A41",
          700: "#7a1535",
          800: "#5f1029",
          900: "#3d0a1a",
          DEFAULT: "#951A41",
          dark: "#7a1535",
          light: "#a83255",
        },
        secondary: {
          50: "#fbf8ed",
          100: "#f5edd1",
          200: "#edd98a",
          300: "#e8c84e",
          400: "#E7B121",
          500: "#c9961c",
          600: "#a67b17",
          700: "#826012",
          800: "#644a0e",
          900: "#413009",
          DEFAULT: "#E7B121",
          dark: "#a67b17",
          light: "#e8c84e",
        },
        brand: {
          gray: "#938989",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#E4DDD4",
          border: "#c5bbb0",
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
