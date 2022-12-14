import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import SeparatorComponent from "./Separator";

// Constants
import { COLOR_CONTROL } from "./../../../shared/constants/";

export default {
  title: "Components/Separator",
  component: SeparatorComponent,
  argTypes: {
    color: {
      name: "Color",
      description: "Color of the separator",
      control: COLOR_CONTROL,
    },
    height: {
      name: "Height",
      description: "Height of the separator",
      control: "number",
    },
    xs: { name: "xs", description: "extra-small spacing", control: "number" },
    sm: { name: "sm", description: "small spacing", control: "number" },
    md: { name: "md", description: "medium spacing", control: "number" },
    lg: { name: "lg", description: "large spacing", control: "number" },
    xl: { name: "xl", description: "extra-large spacing", control: "number" },
  },
} as ComponentMeta<typeof SeparatorComponent>;

const Template: ComponentStory<typeof SeparatorComponent> = (args) => (
  <SeparatorComponent {...args} />
);

export const Separator = Template.bind({});
Separator.args = {
  height: 44,
  xs: 3,
  sm: 3,
  md: 3,
  lg: 3,
  xl: 3,
};
