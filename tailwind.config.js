const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      buttercup: {
        50: "#fdf9e9",
        100: "#fcf2c5",
        200: "#fbe28d",
        300: "#f8ca4c",
        400: "#f4b324",
        500: "#e4980e",
        600: "#c4730a",
        700: "#9d510b",
        800: "#824011",
        900: "#6e3515",
        950: "#401a08",
      },
      albescentWhite: {
        50: "#fcf6f0",
        100: "#f6e7d8",
        200: "#eed2ba",
        300: "#e3b38e",
        400: "#d78e60",
        500: "#ce7141",
        600: "#c05b36",
        700: "#a0472e",
        800: "#813b2b",
        900: "#683226",
        950: "#381712",
      },
      mineShaft: {
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#818181",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#303030",
        950: "#1a1a1a",
      },
    },
    fontFamily: {
      title: ["Archivo Black", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
});
