import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ButtonLink from "./ButtonLink";

// Constants
import COLOR_OPTIONS from "./../../shared/constants/colorOptions";
import SPACING_OPTIONS from "./../../shared/constants/spacingOptions";

export default {
  title: "Components/ButtonLink",
  component: ButtonLink,
  args: {
    appearance: "primary",
    bold: true,
    disabled: false,
    mb: 0,
    px: 4,
    py: 2,
    rounded: true,
    targetBlank: false,
    text: "button",
    url: "https://www.google.com/",
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
  },
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  appearance: "primary",
  bold: true,
  disabled: false,
  mb: 0,
  px: 4,
  py: 2,
  rounded: true,
  targetBlank: false,
  text: "click me!!",
  url: "https://www.google.com/",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  appearance: "secondary",
};

export const Ternary = Template.bind({});
Ternary.args = { ...Default.args, appearance: "ternary" };

export const Airbnb = Template.bind({});
Airbnb.args = { ...Default.args, appearance: "airbnb" };
