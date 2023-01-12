import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Hero from "./Hero";

// Assets
import imageFile from "./../../../images/ocean.jpg";

export default {
  title: "Compositions/Hero",
  component: Hero,
  argTypes: {
    src: {
      name: "Image",
      description: "Image to be used as background",
      control: "text",
    },
    mask: {
      name: "Mask",
      description: "Whether to apply a mask to the image",
      control: "boolean",
    },
  },
  // TODO: Add argTypes
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => {
  return <Hero {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  src: imageFile,
  mask: true,
  panel: {
    bgColor: "red",
    text: "some text here!!!",
    classes: "p-2 p-lg-3 m-0 col-4 m-2",
    borderColor: "blue",
    borderRadius: 0,
    borderWidth: 0,
  },
};
