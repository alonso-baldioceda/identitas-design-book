import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import SwitchModeComponent from "./SwitchMode";

export default {
  title: "Components/SwitchMode",
  component: SwitchModeComponent,
  argTypes: {
    classes: {
      name: "Classes",
      description: "Classes to add to the component",
    },
    isDark: {
      control: "boolean",
      name: "Dark Mode",
      description: "Dark mode",
    },
    size: {
      name: "Size",
      description: "Size of the component",
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
} as ComponentMeta<typeof SwitchModeComponent>;

const Template: ComponentStory<typeof SwitchModeComponent> = (args) => (
  <SwitchModeComponent {...args} />
);

export const SwitchMode = Template.bind({});
SwitchMode.args = {
  isDark: false,
  size: "xs",
  classes: "me-3",
};
