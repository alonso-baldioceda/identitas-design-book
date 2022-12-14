import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import LinkGatsbyComponent from "./LinkGatsby";

export default {
  title: "Components",
  component: LinkGatsbyComponent,
  args: {
    text: "Gatsby Link",
    to: "/info",
  },
} as ComponentMeta<typeof LinkGatsbyComponent>;

const Template: ComponentStory<typeof LinkGatsbyComponent> = (args) => (
  <LinkGatsbyComponent {...args} />
);

export const GatsbyLink = Template.bind({
  text: "Gatsby Link",
  to: "#",
});
