import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ButtonComponent from "./Button";

// Constants
import { COLOR_CONTROL } from "./../../shared/constants/";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  args: {
    appearance: "primary",
    bold: true,
    disabled: false,
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
    classes: {
      name: "Classes",
      control: "text",
      description: "Classes to be added to the component",
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
  rounded: true,
  text: "button",
  type: "button",
};
