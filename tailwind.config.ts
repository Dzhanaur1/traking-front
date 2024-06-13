import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg_gray: "#3A4750",
        dark_gray: "#303841",
        white: "#EEEEEE",
        text: "#303841",
        red: "#D72323",
      },
      container: {
        center: true,
        padding: "15px",
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1300px",

        "2xl": "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
