export const animationParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.0125,
      delayChildren: 0.125,
    },
  },
};

export const animationChildren = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
