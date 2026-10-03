/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        cyber: {
          dark: "#05070f",
          darker: "#030408",
          card: "rgba(13, 19, 36, 0.65)",
          border: "rgba(255, 255, 255, 0.08)",
          cyan: "#00f0ff",
          purple: "#9333ea",
          violet: "#a855f7",
          neonGreen: "#10b981",
          pink: "#ec4899",
        },
        primary: {
          light: "#d8b4fe",
          DEFAULT: "#8b5cf6",
          dark: "#5b21b6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "gradient-purple": "linear-gradient(to right, #7e22ce, #9333ea, #a855f7, #c084fc)",
      },
      boxShadow: {
        "glow-cyan": "0 0 30px -5px rgba(0, 240, 255, 0.35)",
        "glow-purple": "0 0 35px -5px rgba(168, 85, 247, 0.4)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-sm": "0 4px 16px 0 rgba(0, 0, 0, 0.25)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
}

