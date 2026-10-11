export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#202020",
      "primary-dark": "#292929",
      "primary-medium": "#3A3A3A",
      "primary-soft": "#737373",
      accent: "#FFC83D",
      "accent-hover": "#EAB52D",
      paper: "#F8F8FC",
      card: "#FFFFFF",
      line: "#E8E8EC",
      cream: "#F8F8FC",
      ink: "#202020",
      muted: "#737373",
    },
    fontFamily: {
      sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      display: ["Cormorant Garamond", "Georgia", "serif"],
    },
    maxWidth: {
      page: "78rem",
      prose: "42rem",
    },
  },
};
export const plugins = [];