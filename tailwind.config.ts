import type { Config } from "tailwindcss";

const config: Config = {
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
        "fero-primary": "var(--fero-primary)",
        "fero-secondary": "var(--fero-secondary)",
        danger: "var(--danger)",
      },
      fontFamily:{
        merriweather: ["var(--font-merriweather)"],
      }
    },
  },
  plugins: [],
};
export default config;
