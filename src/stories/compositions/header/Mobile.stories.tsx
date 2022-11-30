import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

// Components
import Mobile from "./Mobile";

// Constants
import NAV from "./../../../shared/constants/nav.js";

// Styles
const MobileWrapper = styled.div`
  position: relative;

  > div {
    position: relative;
  }
`;

export default {
  title: "Compositions/Mobile",
  component: Mobile,
  argTypes: {
    bgColor: {
      control: "select",
      defaultValue: "dark",
      description: "Footer background color",
      name: "Background Color",
      options: ["primary", "secondary", "ternary", "dark", "light"],
    },
    hideFrom: {
      control: "select",
      defaultValue: "xl",
      description: "Hide mobile from",
      name: "Hide From",
      options: ["md", "lg", "xl"],
    },
    isOpen: {
      defaultValue: false,
      description: "Is the menu open?",
      name: "Is Open?",
    },
    languages: {
      description: "List of languages",
      name: "Languages",
    },
    navigation: {
      description: "Navigation links",
      name: "Navigation",
    },
    px: {
      control: "select",
      defaultValue: 3,
      description: "'Left' / 'Right' menu wrapper spacing",
      name: "Padding X",
      options: [1, 2, 3, 4, 5],
    },
    py: {
      control: "select",
      defaultValue: 3,
      description: "'Top' / 'Bottom' menu wrapper spacing",
      name: "Padding Y",
      options: [1, 2, 3, 4, 5],
    },
    separator: {
      control: "select",
      defaultValue: 3,
      description: "'Left' / 'Roght' separator spacing",
      name: "Separator spacing",
      options: [1, 2, 3, 4, 5],
    },
    startingAt: {
      defaultValue: 0,
      description: "Distance from top page",
      name: "Starting at",
    },
    translate: {
      description: "Label used for languages header",
      name: "Translate",
    },
  },
} as ComponentMeta<typeof Mobile>;

const Template: ComponentStory<typeof Mobile> = (args) => (
  <MobileWrapper>
    <Mobile {...args} />
  </MobileWrapper>
);

export const Default = Template.bind({});
Default.args = {
  bgColor: "dark",
  hideFrom: "xl",
  isOpen: true,
  languages: ["es", "en"],
  navigation: NAV,
  px: 4,
  py: 4,
  separator: 4,
  startingAt: 0,
  translate: "Idiomas",
};
