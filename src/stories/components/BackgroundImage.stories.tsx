import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import BackgroundImage from "./BackgroundImage";

// Constants
import { COLOR_CONTROL } from "./../../shared/constants/";

// Assets
import OceanImage from "./../../images/ocean.jpg";

export default {
  title: "Components/BackgroundImage",
  component: BackgroundImage,
  argTypes: {
    bgColor: {
      control: COLOR_CONTROL,
      name: "Background Color",
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
Default.args = {
  src: OceanImage,
};
