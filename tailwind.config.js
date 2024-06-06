/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-color": "#0b3631"
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "1050px",
          lg: "1100px",
          xxl: "1200px"
        },
      },
    },
  },
  plugins: [],
}

