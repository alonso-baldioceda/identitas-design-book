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
    classes: {
      name: "Classes",
      description: "Classes to add to the separator",
      control: "text",
    },
  },
} as ComponentMeta<typeof SeparatorComponent>;

const Template: ComponentStory<typeof SeparatorComponent> = (args) => (
  <SeparatorComponent {...args} />
);

export const Separator = Template.bind({});
Separator.args = {
  height: 44,
  color: "#000",
  classes: "",
};
