import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-about": "url('/images/about-us.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "blue-dark": "#003384",
        "yellow-title": "#FBC139",
        "gray-pattern": "#F6F7FC",
        light: "#FFFFFF",
        principal: "#0565FF",
        "principal-secondary": "#004AC0",
        "principal-dark": "#003384",
        highlight: "#FBC139",
        dark: {
          100: "#202020",
        },
        "light-gray": {
          100: "#F6F7FC",
          200: "#D9D9D9",
          300: "#C8C8C8",
          400: "#808080",
        },
      },
      dropShadow: {
        principal: "0 1px 10px rgba(0, 0, 0, 0.25)",
      },
      backgroundColor: {
        "bubble-yellow": "#FBC139",
        "line-blue": "#0565FF",
      },
      height: {
        "one-pixels": "1px",
        "two-pixels": "2px",
      },
      maxHeight: {
        principal_card_max: "440px",
      },
      width: {
        "search-vacances": "300px",
      },
      maxWidth: {
        page: "1140px",
      },
      fontSize: {
        xxs: "8px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
} satisfies Config;
