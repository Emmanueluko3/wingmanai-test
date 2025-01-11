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
        primary: "var(--primary)",
        primaryLight: "#667085",
        primaryDark: "#134E48",
        primarySolid: "#212636",
        lightColor: "#CCFBEF",
        chartYellow: "#FFF3C6",
      },
    },
  },
  plugins: [],
} satisfies Config;
