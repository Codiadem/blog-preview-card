/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "375px" },
      // => @media (max-width: 375px) { ... }

      md: { max: "480px" },
      // => @media (max-width: 480px) { ... }

      lg: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      xl: { max: "916px" },
      // => @media (max-width: 916px) { ... }

      xxl: { max: "1440px" },
      // => @media (max-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
