import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  safelist: [
    "border-r-primary",
    "border-r-light",
    "text-disabled",
    "bg-disabled",
    "text-dark",
    "bg-dark",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#64C5B4",
        hover: "#EDB013",
        dark: "#04263D",
        light: "#7E7E7E",
        disabled: "#AAAAAA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        h1: "45px",
        h2: "20px",
        h3: "16px",
        paragraph: "14px",
      },
    },
  },
  plugins: [],
};
export default config
