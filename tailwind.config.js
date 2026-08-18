export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#0F5550",
      "primary-dark": "#084641",
      "primary-medium": "#146A63",
      "primary-soft": "#3C8178",
      accent: "#F5A623",
      cream: "#F5F3EC",
      ink: "#17201F",
      muted: "#617572",
    },
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      display: ["Fraunces", "Georgia", "serif"],
    },
    maxWidth: {
      "page": "80rem",
      "prose": "42rem",
    },
  },
};
export const plugins = [];