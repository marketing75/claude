import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "24px",
      screens: {
        DEFAULT: "1240px",
      },
    },
    borderRadius: {
      none: "0",
      sm: "8px",
      DEFAULT: "14px",
      lg: "22px",
      xl: "32px",
      full: "9999px",
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#0099FF",
          dark: "#0077CC",
          deeper: "#005599",
        },
        navy: {
          DEFAULT: "#0D1117",
          mid: "#161B22",
          light: "#1C2333",
        },
        "off-white": "#F8FAFC",
        gray: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          400: "#94A3B8",
          600: "#475569",
          800: "#1E293B",
        },
        text: "#0F172A",
        success: "#10B981",
        warning: "#F59E0B",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0, 0, 0, 0.08)",
        md: "0 4px 12px rgba(0, 0, 0, 0.1)",
        lg: "0 12px 40px rgba(0, 0, 0, 0.15)",
        blue: "0 4px 24px rgba(0, 153, 255, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
