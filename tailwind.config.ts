import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Ally brand colors (from website analysis)
        ally: {
          bg: "rgb(8, 8, 7)",
          "bg-dark": "#080807",
          black: "#0f0f0f",
          green: "#d3ffca",
          pink: "#fec9ff",
          white: "#ffffff",
          gray: {
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#424242",
            800: "#262626",
            900: "#171717",
          },
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        "inter-tight": ["var(--font-inter-tight)", "Inter Tight", "sans-serif"],
        "inter-display": ["var(--font-inter-display)", "Inter Display", "sans-serif"],
        editorial: ["var(--font-editorial)", "PP Editorial New", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
