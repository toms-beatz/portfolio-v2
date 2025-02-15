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
        primary: "#78735d",
        border: "#383838",
        dark : {
          1 : "#121212",
          2 : "#1e1e1f",
          3 : "#373737",
          4 : "#2b2b2c",
          5 : "#2b2b2cbf",
        },
        lightgrey : "#d6d6d6b3",
      },
    },
  },
  plugins: [],
} satisfies Config;
