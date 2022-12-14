import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Hero from "./Hero";

// Stories
// import { Default as PanelDefault } from "./Panel.stories";

// Assets
import imageFile from "./../../../images/ocean.jpg";

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
    bgColor: "red",
    text: "some text here!!!",
    pXs: 2,
    pSm: 2,
    pMd: 2,
    pLg: 3,
    pXl: 3,
    colXs: 12,
    colSm: 12,
    colMd: 6,
    colLg: 4,
    colXl: 4,
    borderColor: "blue",
    borderRadius: 0,
    borderWidth: 0,
  },
};
