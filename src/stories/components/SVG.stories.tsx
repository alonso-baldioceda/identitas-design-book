import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import SVG from "./SVG";

// Assets
import BedQueen from "./../../images/svg/bed-queen.svg";

export default {
  title: "Components/SVG",
  component: SVG,
  args: {
    icon: <BedQueen />,
    size: "default",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "default", "large"],
    },
  },
} as ComponentMeta<typeof SVG>;

const Template: ComponentStory<typeof SVG> = (args) => <SVG {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: "large",
};
