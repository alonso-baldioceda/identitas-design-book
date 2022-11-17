import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import LinkGatsby from "./LinkGatsby";

export default {
  title: "Components/LinkGatsby",
  component: LinkGatsby,
  args: {
    text: "Gatsby Link",
    to: "/info",
  },
} as ComponentMeta<typeof LinkGatsby>;

const Template: ComponentStory<typeof LinkGatsby> = (args) => (
  <LinkGatsby {...args} />
);

export const Default = Template.bind({
  text: "Gatsby Link",
  to: "/info",
});
