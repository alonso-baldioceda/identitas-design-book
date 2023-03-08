import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import LinkIconComponent from "./LinkIcon";

export default {
  title: "Components",
  component: LinkIconComponent,
  argTypes: {
    classes: {
      name: "Classes",
      description: "Additional classes",
    },
    disabled: {
      name: "Disabled",
      description: "Icon disabled",
      defaultValue: false,
      control: "boolean",
      options: [false, true],
    },
    icon: {
      name: "Icon",
      description: "SVG to be passed",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    text: {
      name: "Text",
      description: "Text to be passed",
    },
    url: {
      name: "URL",
      description: "URL to be passed",
    },
  },
} as ComponentMeta<typeof LinkIconComponent>;

const Template: ComponentStory<typeof LinkIconComponent> = (args) => (
  <LinkIconComponent {...args} />
);

export const LinkIcon = Template.bind({});
LinkIcon.args = {
  disabled: false,
  icon: "facebook",
  classes: "text-white",
  size: "sm",
  text: "facebook",
  url: "https://www.google.com/",
};
