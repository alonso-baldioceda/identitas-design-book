import React from "react";
import { action } from "@storybook/addon-actions";
import { GlobalStyle } from "./../src/stories/shared/global";
import { themes } from "@storybook/theming";
import "./styles.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/";

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions

window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

export const parameters = {
  backgrounds: {
    disable: true,
  },
  darkMode: {
    current: "light",
    darkClass: "darkClass",
    lightClass: "lightClass",
    stylePreview: true,
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black" },
    // Override the default light theme
    light: { ...themes.light },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  grid: {
    gridOn: true,
    columns: 12,
    gap: "1.5rem",
    gutter: "50px",
    maxWidth: "1440px",
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
