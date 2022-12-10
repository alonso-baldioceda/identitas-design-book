import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { color } from "./../shared/styles.js";

// Components
import BackgroundImage from "./BackgroundImage";

// Constants
import { COLOR_OPTIONS } from "./../../shared/constants/";

// Assets
import OceanImage from "./../../images/ocean.jpg";

export default {
  title: "Components/BackgroundImage",
  component: BackgroundImage,
  argTypes: {
    bgcolor: {
      control: "select",
      name: "Background Color",
      options: COLOR_OPTIONS,
    },
    src: {
      name: "Image Source",
      control: "text",
    },
  },
} as ComponentMeta<typeof BackgroundImage>;

const Template: ComponentStory<typeof BackgroundImage> = (args) => (
  <BackgroundImage {...args} />
);

export const Default = Template.bind({});
// TODO: maybe move bgcolor to type
Default.args = {
  bgcolor: color.primary,
  src: OceanImage,
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = { ...Default.args, bgcolor: color.secondary };
