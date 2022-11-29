import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Mobile from "./Mobile";

// Constants
import NAV from "./../../../shared/constants/nav.js";

export default {
  title: "Compositions/Mobile",
  component: Mobile,
  args: {
    backgroundColor: "dark",
    hideFrom: "xl",
    isOpen: false,
    languages: ["es", "en"],
    linkMb: 2,
    navigation: NAV,
    translate: "",
    translateMb: 2,
  },
  argTypes: {
    backgroundColor: {
      control: "select",
      options: ["primary", "secondary", "ternary", "dark", "light"],
    },
    hideFrom: {
      control: "select",
      options: ["md", "lg", "xl"],
    },
  },
} as ComponentMeta<typeof Mobile>;

const Template: ComponentStory<typeof Mobile> = (args) => <Mobile {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgColor: "dark",
  hideFrom: "xl",
  isOpen: true,
  languages: ["es", "en"],
  navigation: NAV,
  translate: "Idiomas",
};
