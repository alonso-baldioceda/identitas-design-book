import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ButtonComponent from "./Button";

// Constants
import { SPACING_OPTIONS, COLOR_CONTROL } from "./../../shared/constants/";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  args: {
    appearance: "primary",
    bold: true,
    disabled: false,
    mb: 0,
    px: 4,
    py: 2,
    rounded: true,
    text: "button",
    type: "button",
  },
  argTypes: {
    appearance: {
      name: "Appearance",
      control: COLOR_CONTROL,
    },
    bold: {
      name: "Bold",
      control: "boolean",
      options: [false, true],
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      options: [false, true],
    },
    mb: {
      name: "Margin Bottom",
      control: "select",
      options: SPACING_OPTIONS,
    },
    px: {
      name: "Padding X",
      control: "select",
      options: SPACING_OPTIONS,
    },
    py: {
      name: "Padding Y",
      control: "select",
      options: SPACING_OPTIONS,
    },
    rounded: {
      name: "Rounded",
      control: "boolean",
      options: [false, true],
    },
    type: {
      name: "Type",
      control: "select",
      options: ["button", "submit"],
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button = Template.bind({});
Button.args = {
  appearance: "primary",
  bold: true,
  disabled: false,
  mb: 0,
  px: 4,
  py: 2,
  rounded: true,
  text: "button",
  type: "button",
};
