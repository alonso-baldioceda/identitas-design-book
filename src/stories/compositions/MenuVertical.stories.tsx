import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import MenuVertical from "./MenuVertical";

// Constants
import NAV from "../../shared/constants/nav";

export default {
  title: "Compositions/MenuVertical",
  component: MenuVertical,
  args: {
    backgroundColor: "dark",
    hideFrom: "xl",
    languages: ["es", "en"],
    linkMb: 2,
    navigation: NAV,
    isOpen: false,
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
} as ComponentMeta<typeof MenuVertical>;

const Template: ComponentStory<typeof MenuVertical> = (args) => (
  <MenuVertical {...args} />
);

export const Default = Template.bind({});
Default.args = {
  bgColor: "dark",
  hideFrom: "xl",
  languages: ["es", "en"],
  navigation: NAV,
  isOpen: true,
  translate: "Idiomas",
};
