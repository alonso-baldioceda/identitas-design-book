import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Gallery from "./Gallery";

export default {
  title: "Compositions/Gallery",
  component: Gallery,
  argTypes: {},
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
  <Gallery {...args} />
);

export const Default = Template.bind({});
Default.args = {
  images: [
    "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
};
