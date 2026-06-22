import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- "Forged Graphite + Molten Copper" --------------------------
        // Token names kept (navy/orange/steel) for backward-compat across the
        // codebase. `navy`  = warm graphite/charcoal base (NOT blue).
        //                     `orange` = refined copper/amber accent.
        navy: {
          DEFAULT: "#1A1815", // warm graphite base
          50: "#F5F3F0",
          100: "#E4E0DA",
          200: "#BDB6AC",
          300: "#8A8278",
          400: "#514B43",
          500: "#36312B",
          600: "#26221D",
          700: "#1F1B17",
          800: "#181410",
          900: "#110E0B",
          950: "#0A0806",
        },
        orange: {
          DEFAULT: "#C9743A", // copper / molten amber accent
          50: "#FBF1E9",
          100: "#F3D9C4",
          200: "#E6B791",
          300: "#D9955E",
          400: "#D0823F",
          500: "#C9743A",
          600: "#A85827",
          700: "#82431D",
        },
        steel: {
          DEFAULT: "#9C958A", // warm grey secondary text
          light: "#F6F4F1", // warm off-white section background
          mid: "#E8E3DC",
          dark: "#5C554B",
        },
        copper: {
          DEFAULT: "#C9743A",
          light: "#E0A05A",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "navy-gradient":
          "linear-gradient(160deg, #1A1815 0%, #262017 55%, #0C0907 100%)",
        "orange-gradient":
          "linear-gradient(135deg, #D9955E 0%, #C9743A 50%, #A85827 100%)",
        "metal-texture":
          "radial-gradient(circle at 82% 0%, rgba(201,116,58,0.13), transparent 42%), radial-gradient(circle at 0% 100%, rgba(156,149,138,0.08), transparent 40%)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 18px 40px -26px rgba(8,5,3,0.55)",
        cardHover: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 30px 60px -28px rgba(8,5,3,0.65)",
        glow: "0 10px 30px -10px rgba(201,116,58,0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin-slow 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
