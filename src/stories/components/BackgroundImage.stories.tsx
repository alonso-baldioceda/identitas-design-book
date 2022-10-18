import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import BackgroundImage from "./BackgroundImage";

// Assets
import imageFile from "./../../images/ocean.jpg";

const image = {
  src: imageFile,
};

export default {
  title: "Components/BackgroundImage",
  component: BackgroundImage,
  args: { src: image.src, bgcolor: "default" },
} as ComponentMeta<typeof BackgroundImage>;

const Template: ComponentStory<typeof BackgroundImage> = (args) => (
  <BackgroundImage {...args} />
);

export const Default = Template.bind({});
Default.args = { bgcolor: "default" };

export const Custom = Template.bind({});
Custom.args = { ...Default.args, bgcolor: "#000" };
