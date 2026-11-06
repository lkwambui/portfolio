export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      paper: "#FAFAF6",
      ivory: "#F3F4F1",
      ink: "#20231F",
      muted: "#6A716A",
      line: "#E8E9E4",
      accent: "#8A6500",
      "accent-bright": "#F4B400",
      "accent-soft": "#FFF6D9",
      "accent-hover": "#D6A62A",
      primary: "#254B35",
      "primary-dark": "#193B2A",
      "primary-medium": "#153323",
      "primary-soft": "#6A716A",
      forest: "#254B35",
      "forest-deep": "#193B2A",
      gold: "#F4B400",
      "gold-deep": "#D6A62A",
      card: "#FFFFFF",
      cream: "#F3F4F1",
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
      editorial: "9999px",
    },
    boxShadow: {
      soft: "0 8px 28px rgba(32, 35, 31, 0.05)",
      card: "0 18px 48px rgba(32, 35, 31, 0.07)",
      lift: "0 22px 55px rgba(25, 59, 42, 0.12)",
    },
    transitionTimingFunction: {
      editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
    keyframes: {
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-50%)" },
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-8px)" },
      },
    },
    animation: {
      marquee: "marquee 34s linear infinite",
      float: "float 7s ease-in-out infinite",
    },
  },
};
export const plugins = [];
