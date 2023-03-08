import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import LinkGatsbyComponent from "./LinkGatsby";

export default {
  title: "Components",
  component: LinkGatsbyComponent,
  argTypes: {
    classes: {
      description: "Classes to add",
      control: "text",
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
} as ComponentMeta<typeof LinkGatsbyComponent>;

const Template: ComponentStory<typeof LinkGatsbyComponent> = (args) => (
  <LinkGatsbyComponent {...args} />
);

export const GatsbyLink = Template.bind({});

GatsbyLink.args = {
  text: "Gatsby Link",
  to: "#",
  classes: "",
};
