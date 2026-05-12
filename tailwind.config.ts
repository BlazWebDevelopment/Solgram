import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Off-black / surface palette — modeled on solana.com
        ink: {
          950: "#000000",
          900: "#050505",
          800: "#0a0a0a",
          700: "#111111",
          600: "#1a1a1a",
          500: "#262626",
        },
        // Solana brand gradient stops
        sol: {
          teal: "#14F195",
          green: "#00FFA3",
          cyan: "#00D1FF",
          blue: "#6E7BFE",
          purple: "#9945FF",
          magenta: "#DC1FFF",
        },
        // Legacy plum scale — kept for backwards compatibility on a few
        // accents (live dots, hover glows). De-emphasized in the new design.
        plum: {
          50: "#f5e8ff",
          100: "#e9d2ff",
          200: "#d4a8ff",
          300: "#bf7eff",
          400: "#a855f7",
          500: "#9333ea",
          600: "#7e22ce",
          700: "#6b21a8",
          800: "#4c1d95",
          900: "#2e1065",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      backgroundImage: {
        "sol-gradient":
          "linear-gradient(90deg, #14F195 0%, #00D1FF 50%, #9945FF 100%)",
        "sol-gradient-diag":
          "linear-gradient(135deg, #14F195 0%, #00D1FF 45%, #9945FF 100%)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatHero: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scan: "scan 6s linear infinite",
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-hero": "floatHero 7s ease-in-out infinite",
        twinkle: "twinkle 2.6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
