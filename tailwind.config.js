/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#171717",
        lightText: "#666666",
        disabled: "#737373",
        abstract: "#F7F7F7",
        navBorder: "#EAEAEA",
        articlesDesc: "#A7A7A7",
      },
    },
  },
  plugins: [],
};
