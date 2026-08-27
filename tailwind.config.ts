import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08090b",      // primary background
        panel: "#111318",    // card / panel background
        line: "#22262c",     // borders / dividers
        amber: "#ffb454",    // primary accent (tungsten film light)
        teal: "#00d9c0",     // secondary accent (AI / signal)
        paper: "#f4f2ec",    // primary text
        muted: "#8b8f96",    // secondary text
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      keyframes: {
        "aperture-open": {
          "0%": { height: "46%" },
          "100%": { height: "0%" },
        },
        "scan": {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(110%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "aperture-open": "aperture-open 1.1s cubic-bezier(0.65,0,0.35,1) forwards",
        "scan": "scan 2.4s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
