/**************************/
/******* Animation ********/
/**************************/

export const ANIMATION_PARENT = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.0125,
      delayChildren: 0.125,
    },
  },
};

export const ANIMATION_CHILDREN = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

/**************************/
/******* STORYBOOK ********/
/**************************/

export const COLOR_CONTROL = {
  type: "color",
  presetColors: [
    { color: "#0094FF", title: "Primary" },
    { color: "#FF0000", title: "Secondary" },
    { color: "#24d300", title: "Ternary" },
    { color: "#000000", title: "Black" },
    { color: "#FFFFFF", title: "White" },
  ],
};

export const SPACING_OPTIONS = [0, 1, 2, 3, 4, 5];

export const SIZE_OPTIONS = ["xs", "sm", "md", "lg"];

export const POSITIONS_OPTIONS = [
  "top-start",
  "top-center",
  "top-end",
  "middle-start",
  "middle-center",
  "middle-end",
  "bottom-start",
  "bottom-center",
  "bottom-end",
];
