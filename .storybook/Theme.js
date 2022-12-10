const colors = {
  primary: "blue",
  secondary: "red",
  monocromatic: {
    lighter: "#FFFFFF",
    darker: "#000000",
    transparent: "transparent",
  },
};

export const lightTheme = {
  body: "#FFFFFF",
  colors: {
    body: "#222222",
    bgPrimary: colors.monocromatic.lighter,
  },
};

export const darkTheme = {
  body: "#121212",
  colors: {
    body: "#FFFFFF",
    bgPrimary: colors.monocromatic.darker,
  },
};
