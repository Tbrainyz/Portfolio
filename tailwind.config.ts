import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        fg: "rgb(var(--color-fg) / <alpha-value>)",
        dim: "rgb(var(--color-dim) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        brand: {
          amber: "rgb(var(--color-amber) / <alpha-value>)",
          magenta: "rgb(var(--color-magenta) / <alpha-value>)",
          ember: "rgb(var(--color-ember) / <alpha-value>)",
          green: "rgb(var(--color-green) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        display: ['"Space Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float-1": {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(60px, 80px) scale(1.15)" },
        },
        "float-2": {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(-70px, 60px) scale(1.1)" },
        },
        "float-3": {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(40px, -50px) scale(1.2)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "float-1": "float-1 16s ease-in-out infinite alternate",
        "float-2": "float-2 19s ease-in-out infinite alternate",
        "float-3": "float-3 22s ease-in-out infinite alternate",
        "spin-slow": "spin 8s linear infinite",
        bob: "bob 4s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
