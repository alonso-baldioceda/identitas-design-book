import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import SwitchMode from "./SwitchMode";

// Constants
import Size from "../../shared/enums/size.ts";

export default {
  title: "Components/SwitchMode",
  component: SwitchMode,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    isDark: {
      control: "boolean",
      name: "Dark Mode",
    },
  },
} as ComponentMeta<typeof SwitchMode>;

const Template: ComponentStory<typeof SwitchMode> = (args) => (
  <SwitchMode {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isDark: false,
  size: Size.xs,
};
