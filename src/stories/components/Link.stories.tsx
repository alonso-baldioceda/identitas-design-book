import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Link, { Types as LinkTypes } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
  args: {
    text: "Gatsby Link",
    to: "/info",
    type: LinkTypes.Link,
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({
  text: "Gatsby Link",
  to: "/info",
  type: LinkTypes.Link,
});

export const Anchor = Template.bind({});
Anchor.args = {
  ...Default.args,
  duration: 500,
  offset: -80,
  smooth: true,
  spy: true,
  text: "Scroll Link",
  to: "test",
  type: LinkTypes.Anchor,
};
