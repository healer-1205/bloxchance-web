/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "288px auto", //for sidebar layout
        "sidebar-collapsed": "88px auto", //for collapsed sidebar layout
      },
      fontFamily: {
        body: "Russo One",
        display:'Nunito',
        Monts: 'Montserrat',
      },
      colors: {
        'sideBar': {
          DEFAULT: "#13152F",
          500: "#B2B2B2",
          line: "#B2B2B2",
          hover: "#00BE4C",
        },
        'bloxchanceBG': {
          DEFAULT:"#07091D",
        }
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
