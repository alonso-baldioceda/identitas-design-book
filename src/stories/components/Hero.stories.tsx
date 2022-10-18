import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Hero from "./Hero";

// Assets
import imageFile from "./../../images/ocean.jpg";

const image = {
  src: imageFile,
};

export default {
  title: "Molecules/Hero",
  component: Hero,
  args: {
    src: image.src,
    mask: true,
    bgColor: "default",
    text: "some text here!!",
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => {
  return <Hero {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  src: image.src,
  mask: true,
  bgColor: "default",
  text: "some text here!!",
};

export const MaskDisabled = Template.bind({});
MaskDisabled.args = { ...Default.args, mask: false };
