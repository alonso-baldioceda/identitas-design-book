import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ButtonLinkComponent from "./ButtonLink";

// Constants
import { SPACING_OPTIONS, COLOR_CONTROL } from "./../../shared/constants/";

export default {
  title: "Components/ButtonLink",
  component: ButtonLinkComponent,
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
      name: "Appearance",
      control: COLOR_CONTROL,
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
} as ComponentMeta<typeof ButtonLinkComponent>;

const Template: ComponentStory<typeof ButtonLinkComponent> = (args) => (
  <ButtonLinkComponent {...args} />
);

export const ButtonLink = Template.bind({});
ButtonLink.args = {
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
