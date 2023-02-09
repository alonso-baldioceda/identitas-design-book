import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import LinkScrollComponent from "./LinkScroll";

// Constants
// import { COLOR_CONTROL } from "./../../shared/constants/";

export default {
  title: "Components",
  component: LinkScrollComponent,
  argTypes: {
    // appearance: {
    //   name: "Appearance",
    //   control: COLOR_CONTROL,
    // },
    duration: {
      description: "Scroll duration in milliseconds",
      control: "number",
    },
    offset: {
      description: "Scroll offset in pixels",
      control: "number",
    },
    smooth: {
      description: "Smooth scroll",
      control: "boolean",
    },
    spy: {
      description: "Scroll spy",
      control: "boolean",
    },
    text: {
      description: "Text to display",
      control: "text",
    },
    to: {
      description: "Scroll to",
      control: "text",
    },
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
