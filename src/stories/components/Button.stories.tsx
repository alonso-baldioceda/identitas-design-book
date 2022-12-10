import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Button from "./Button";

// Constants
import COLOR_OPTIONS from "./../../shared/constants/colorOptions";
import SPACING_OPTIONS from "./../../shared/constants/spacingOptions";

export default {
  title: "Components/Button",
  component: Button,
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
      control: "select",
      options: COLOR_OPTIONS,
    },
    bold: {
      control: "boolean",
      options: [false, true],
    },
    disabled: {
      control: "boolean",
      options: [false, true],
    },
    mb: {
      control: "select",
      options: SPACING_OPTIONS,
    },
    px: {
      control: "select",
      options: SPACING_OPTIONS,
    },
    py: {
      control: "select",
      options: SPACING_OPTIONS,
    },
    rounded: {
      control: "boolean",
      options: [false, true],
    },
    type: {
      control: "select",
      options: ["button", "submit"],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
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

export const Secondary = Template.bind({});
Secondary.args = { ...Default.args, appearance: "secondary" };

export const Ternary = Template.bind({});
Ternary.args = { ...Default.args, appearance: "ternary" };

export const Airbnb = Template.bind({});
Airbnb.args = { ...Default.args, appearance: "airbnb" };
