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

        // Exact Framer color tokens
        ally: {
          // Primary colors
          purple: "#7734b3",
          pink: "#fec9ff",

          // Backgrounds
          black: "#0f0f0f",
          charcoal: "#191919",
          "near-black": "#111111",

          // Dark tones
          "purple-dark": "#1b0c21",
          "purple-deep": "#2e0d17",

          // Grays (exact Framer values)
          gray: {
            darker: "#212121",
            dark: "#424242",
          },

          // Overlays
          "pink-overlay": "rgba(239, 201, 255, 0.25)",

          // Text
          white: "#ffffff",

          // Legacy support
          green: "#d3ffca",
        },
      },

      fontFamily: {
        // Primary fonts matching Framer exactly
        inter: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
        "inter-tight": ["var(--font-inter-tight)", "Inter Tight", "Arial", "sans-serif"],
        "inter-display": ["var(--font-inter-display)", "Inter Display", "Arial", "sans-serif"],
        editorial: ["var(--font-editorial)", "PP Editorial New", "Georgia", "serif"],
      },

      fontSize: {
        // Framer uses 12px as base, scaling from there
        "xs": "0.75rem",    // 9px
        "sm": "0.875rem",   // 10.5px
        "base": "1rem",     // 12px (Framer base)
        "lg": "1.125rem",   // 13.5px
        "xl": "1.25rem",    // 15px
        "2xl": "1.5rem",    // 18px
        "3xl": "1.875rem",  // 22.5px
        "4xl": "2.25rem",   // 27px
        "5xl": "3rem",      // 36px
        "6xl": "3.75rem",   // 45px
        "7xl": "4.5rem",    // 54px
        "8xl": "6rem",      // 72px
      },

      lineHeight: {
        tight: "1.2",
        normal: "1.3",
        relaxed: "1.5",
      },

      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
      },

      screens: {
        // Exact Framer breakpoints
        'mobile': { 'max': '809px' },
        'tablet': { 'min': '810px', 'max': '1199px' },
        'desktop': { 'min': '1200px', 'max': '1439px' },
        'desktop-lg': { 'min': '1440px' },
      },

      spacing: {
        // Additional spacing for Framer-like layouts
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },

      borderRadius: {
        // Framer-style radius
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },

      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'xl': '0 12px 48px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
