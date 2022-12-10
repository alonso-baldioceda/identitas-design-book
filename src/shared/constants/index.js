import LinkType from "../enums/linkType";

/**************************/
/******* NAVIGATION *******/
/**************************/

export const NAV = [
  {
    type: LinkType.Anchor,
    anchor: "top",
    text: "Inicio",
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
  presetColors: ["red", "green", "blue", "yellow"],
};

export const COLOR_OPTIONS = [
  "primary",
  "secondary",
  "ternary",
  "dark",
  "light",
  "black",
  "white",
  "transparent",
];

export const SPACING_OPTIONS = [0, 1, 2, 3, 4, 5];
