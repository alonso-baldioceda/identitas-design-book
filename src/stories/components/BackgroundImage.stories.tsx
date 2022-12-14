import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import BackgroundImageComponent from "./BackgroundImage";

// Constants
import { COLOR_CONTROL } from "./../../shared/constants/";

// Assets
import OceanImage from "./../../images/ocean.jpg";

export default {
  title: "Components",
  component: BackgroundImageComponent,
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
} as ComponentMeta<typeof BackgroundImageComponent>;

const Template: ComponentStory<typeof BackgroundImageComponent> = (args) => (
  <BackgroundImageComponent {...args} />
);

export const BackgroundImage = Template.bind({});
BackgroundImage.args = {
  src: OceanImage,
};
