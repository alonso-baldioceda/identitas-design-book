import { color } from "./../src/shared/styles";

export const lightTheme = {
  colors: {
    ...color,
    body: color.black,
    bgPrimary: color.white,
    bgSecodary: color.pastelsecondary,
  },
};

export const darkTheme = {
  colors: {
    ...color,
    body: color.white,
    bgPrimary: color.black,
    bgSecodary: color.dark,
  },
};
