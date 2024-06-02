/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "80%",
          lg: "900px",
          xl: "1050px",
          xxl: "1100px",
        },
      },
    },
  },
  plugins: [],
}

