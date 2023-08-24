/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        body: "Russo One",
        display: "Nunito",
        Monts: "Montserrat",
      },
    },
    container: {
      padding: "2rem",
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
