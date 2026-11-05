const editorialEase = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, delay, ease: editorialEase },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.55, delay, ease: editorialEase },
  }),
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -22 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.68, delay, ease: editorialEase },
  }),
};

export const slideInRight = {
  hidden: { opacity: 0, x: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.68, delay, ease: editorialEase },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const imageReveal = {
  hidden: { opacity: 1, y: 8, scale: 1.02, clipPath: "inset(0 0 0 0)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: editorialEase },
  },
};

export const textReveal = fadeUp;

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.72, ease: editorialEase },
  },
};
