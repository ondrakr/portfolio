import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        modra: "#000319",
        fialova: "#CBACF9",
      },
      borderColor: {
        '03': 'rgba(255, 255, 255, 0.03)',
        '10': 'rgba(255, 255, 255, 0.10)',
      },
      backgroundImage: {
        'linear': 'linear-gradient(90deg, #04071D 0%, #0C0E23 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
