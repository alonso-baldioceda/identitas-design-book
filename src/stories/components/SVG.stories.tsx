import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import SVG from "./SVG";

// Constants
import Size from "../../shared/enums/size.ts";

// Assets
import BedQueen from "./../../images/svg/bed-queen.svg";

export default {
  title: "Components/SVG",
  component: SVG,
  argTypes: {
    size: {
      control: "select",
      name: "Size",
      options: ["xs", "sm", "md", "lg"],
    },
    icon: {
      name: "Icon",
      description: "SVG icon",
      control: "text",
    },
  },
} as ComponentMeta<typeof SVG>;

const Template: ComponentStory<typeof SVG> = (args) => <SVG {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <BedQueen />,
  size: Size.md,
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: Size.sm,
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: Size.lg,
};
