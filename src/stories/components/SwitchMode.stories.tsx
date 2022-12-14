import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import SwitchModeComponent from "./SwitchMode";

// Constants
import Size from "../../shared/enums/size.ts";

export default {
  title: "Components/SwitchMode",
  component: SwitchModeComponent,
  argTypes: {
    size: {
      name: "Size",
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    isDark: {
      control: "boolean",
      name: "Dark Mode",
    },
  },
} as ComponentMeta<typeof SwitchModeComponent>;

const Template: ComponentStory<typeof SwitchModeComponent> = (args) => (
  <SwitchModeComponent {...args} />
);

export const SwitchMode = Template.bind({});
SwitchMode.args = {
  isDark: false,
  size: Size.xs,
};
