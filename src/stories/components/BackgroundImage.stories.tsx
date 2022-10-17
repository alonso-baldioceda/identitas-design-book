import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import BackgroundImage from "./BackgroundImage";

// Assets
import imageFile from "./../../images/ocean.jpg";

const image = {
  src: imageFile,
  alt: "my image",
};

export default {
  title: "Components/BackgroundImage",
  component: BackgroundImage,
  args: { bgColor: "", imgSrc: image.src, imgAlt: image.alt },
} as ComponentMeta<typeof BackgroundImage>;

const Template: ComponentStory<typeof BackgroundImage> = (args) => (
  <BackgroundImage {...args}>some text here!!</BackgroundImage>
);

export const Default = Template.bind({});
Default.storyName = "BackgroundImage";
