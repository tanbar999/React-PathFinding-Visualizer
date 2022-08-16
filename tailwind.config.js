/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#e76f51",
        background: "#264653",
        boundaryColor: "#3d5a80",
        darkOrange: "#ee6c4d",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
    fontFamily: {
      pacifico: ["Pacifico", "cursive"],
    },
  },
  plugins: [],
};
