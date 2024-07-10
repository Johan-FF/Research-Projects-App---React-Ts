/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#67e8f9",
          dark: "#0C1844",
        },
        secondary: {
          light: "#67e8f9",
          dark: "#C80036",
        },
        tertiary: {
          light: "#67e8f9",
          dark: "#FF6969",
        },
        quaternary: {
          light: "#67e8f9",
          dark: "#FFF5E1",
        },
      },
    },
  },
  plugins: [],
};
