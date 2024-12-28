import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      padding: {
        default: "16px",
        vertical: "40px",
        horizontal: "8px",
      },
      spacing: {
        default: "16px",
        small: "8px",
        section: "40px",
      },
    },
  },
  plugins: [],
} satisfies Config;
