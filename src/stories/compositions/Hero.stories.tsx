import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Hero from "./Hero";

// Assets
import imageFile from "./../../images/ocean.jpg";

export default {
  title: "Compositions/Hero",
  component: Hero,
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
    color: "white",
    text: "some text here!!!!",
    size: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    },
    spacing: {
      xs: 2,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
    },
  },
};

export const MaskDisabled = Template.bind({});
MaskDisabled.args = { ...Default.args, mask: false };
