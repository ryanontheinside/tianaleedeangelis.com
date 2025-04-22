import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#8B0000", // Deep burgundy
        secondary: "#1a1a1a", // Dark gray
        accent: "#D4AF37", // Classic gold
        muted: "#444444", // Muted gray for hover
        light: "#CCCCCC", // Light gray for nav
      },
      fontFamily: {
        gothic: ["var(--font-gothic)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
