import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import LinkScroll from "./LinkScroll";

export default {
  title: "Components/LinkScroll",
  component: LinkScroll,
  args: {
    // TODO: create ENUM for duration
    duration: 500,
    offset: -80,
    smooth: true,
    spy: true,
    text: "Scroll LinkScroll",
    to: "/info",
  },
} as ComponentMeta<typeof LinkScroll>;

const Template: ComponentStory<typeof LinkScroll> = (args) => (
  <LinkScroll {...args} />
);

export const Default = Template.bind({
  duration: 500,
  offset: -80,
  smooth: true,
  spy: true,
  text: "Scroll LinkScroll",
  to: "/info",
});
