const colors = {
  primary: "blue",
  secondary: "red",
  transparent: "transparent",
  black: "#000000",
  white: "#FFFFFF",
  monocromatic: {
    lighter: "#FFFFFF",
    darker: "#000000",
  },
};

export const lightTheme = {
  colors: {
    ...colors,
    body: colors.black,
    bgPrimary: colors.monocromatic.lighter,
  },
};

export const darkTheme = {
  colors: {
    ...colors,
    body: colors.white,
    bgPrimary: colors.monocromatic.darker,
  },
};
