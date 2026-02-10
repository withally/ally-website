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
          purple: "#7734b3",
          black: "#0f0f0f",
          "black-light": "#212121",
          pink: "#fec9ff",
          white: "#ffffff",
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
