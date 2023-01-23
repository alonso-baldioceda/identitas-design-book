import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ButtonComponent from "./Button";

// Constants
import { COLOR_CONTROL } from "./../../shared/constants/";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  argTypes: {
    appearance: {
      name: "Appearance",
      control: COLOR_CONTROL,
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
  disabled: false,
  classes: "mb-0 px-4 py-2 rounded-pill fw-bold",
  text: "button",
  type: "button",
};
