import LinkType from "../enums/linkType";

/**************************/
/******* NAVIGATION *******/
/**************************/

export const NAV = [
  {
    type: LinkType.Anchor,
    anchor: "top",
    text: "Inicio",
    // TODO: fix offset
    // offset default 80 +- header- 84 = 104
    offset: -104,
  },
  {
    type: LinkType.Anchor,
    anchor: "units",
    text: "Cabinas",
  },
  {
    type: LinkType.Anchor,
    anchor: "common-spaces",
    text: "Espacios comúnes",
  },
  {
    type: LinkType.Anchor,
    anchor: "services",
    text: "Servicios",
  },
  {
    type: LinkType.Anchor,
    anchor: "drive",
    text: "Cómo llegar?",
  },
  {
    type: LinkType.Anchor,
    anchor: "contact",
    text: "Contáctenos",
  },
  {
    type: LinkType.Link,
    anchor: "info",
    text: "Info",
  },
];

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

export const OPACITY_OPTIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
