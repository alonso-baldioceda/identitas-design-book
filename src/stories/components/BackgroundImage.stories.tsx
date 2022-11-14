import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { color } from "./../shared/styles.js";

// Components
import BackgroundImage from "./BackgroundImage";

// Assets
import OceanImage from "./../../images/ocean.jpg";

const image = {
  src: OceanImage,
};

export default {
  title: "Components/BackgroundImage",
  component: BackgroundImage,
  args: { src: image.src, bgcolor: color.primary },
} as ComponentMeta<typeof BackgroundImage>;

const Template: ComponentStory<typeof BackgroundImage> = (args) => (
  <BackgroundImage {...args} />
);

export const Default = Template.bind({});
Default.args = { bgcolor: color.primary };

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = { ...Default.args, bgcolor: "#000" };
