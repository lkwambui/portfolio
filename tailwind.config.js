export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      paper: "#FAF9F6",
      ivory: "#F3EFE8",
      ink: "#171717",
      muted: "#6B6862",
      line: "#E5E0D7",
      accent: "#C2410C",
      "accent-bright": "#E8622A",
      "accent-soft": "#F4E7DF",
      "accent-hover": "#9A3309",
      primary: "#171717",
      "primary-dark": "#0F0F0E",
      "primary-medium": "#2A2A27",
      "primary-soft": "#6B6862",
      card: "#FFFFFF",
      cream: "#F3EFE8",
    },
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      display: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    maxWidth: {
      page: "82rem",
      prose: "44rem",
    },
    borderRadius: {
      editorial: "0.125rem",
    },
    transitionTimingFunction: {
      editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
  },
};
export const plugins = [];
