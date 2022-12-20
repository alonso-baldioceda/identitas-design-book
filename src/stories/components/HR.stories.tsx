import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import HRComponent from "./HR";

// Constants
import { COLOR_CONTROL } from "./../../shared/constants/";

export default {
  title: "Components",
  component: HRComponent,
  argTypes: {
    color: {
      name: "Color",
      description: "Color of the line",
      control: COLOR_CONTROL,
    },
    height: {
      name: "Height",
      description: "Height of the line in pixels",
      control: "number",
    },
    opacity: {
      name: "Opacity",
      description: "Opacity of the line",
      control: "range",
      min: 0,
      max: 1,
      step: 0.5,
    },
    classes: {
      name: "Classes",
      control: "text",
      description: "Add custom classes to the component",
    },
  },
} as ComponentMeta<typeof HRComponent>;

const Template: ComponentStory<typeof HRComponent> = (args) => (
  <HRComponent {...args} />
);

export const HR = Template.bind({});
HR.args = {
  classes: "m-4",
  color: "#000000",
  height: 1,
  opacity: 0,
};
