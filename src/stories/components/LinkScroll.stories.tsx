import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import LinkScrollComponent from "./LinkScroll";

export default {
  title: "Components",
  component: LinkScrollComponent,
  args: {
    // TODO: create ENUM for duration
    duration: 250,
    offset: -80,
    smooth: true,
    spy: true,
    text: "Scroll LinkScrollComponent",
    to: "/#",
  },
} as ComponentMeta<typeof LinkScrollComponent>;

const Template: ComponentStory<typeof LinkScrollComponent> = (args) => (
  <LinkScrollComponent {...args} />
);

export const LinkScroll = Template.bind({});
LinkScroll.args = {
  duration: 250,
  offset: -80,
  smooth: true,
  spy: true,
  text: "Scroll LinkScroll",
  to: "/info",
};
