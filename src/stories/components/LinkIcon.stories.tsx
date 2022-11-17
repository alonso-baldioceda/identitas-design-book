import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { color as colors } from "./../shared/styles.js";

// Components
import LinkIcon, { LinkIconSizes } from "./LinkIcon";

// Assets
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";

export default {
  title: "Components/LinkIcon",
  component: LinkIcon,
  args: {
    disabled: false,
    icon: <FacebookIcon />,
    mb: 0,
    me: 1,
    size: LinkIconSizes.xs,
    text: "facebook",
    url: "https://www.google.com/",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      options: [false, true],
    },
    mb: {
      control: "select",
      options: [0, 1, 2, 3],
    },
    me: {
      control: "select",
      options: [0, 1, 2, 3],
    },
    size: {
      control: "select",
      options: ["extra-small", "small", "medium", "large"],
    },
  },
} as ComponentMeta<typeof LinkIcon>;

const Template: ComponentStory<typeof LinkIcon> = (args) => (
  <LinkIcon {...args} />
);

export const Facebook = Template.bind({});
Facebook.args = {
  disabled: false,
  icon: <FacebookIcon />,
  mb: 0,
  me: 1,
  size: LinkIconSizes.xs,
  text: "facebook",
  url: "https://www.google.com/",
};

export const Instagram = Template.bind({});
Instagram.args = {
  ...Facebook.args,
  icon: <InstagramIcon />,
  text: "instagram",
};

export const SmallSize = Template.bind({});
SmallSize.args = { ...Facebook.args, size: LinkIconSizes.sm };

export const MediumSize = Template.bind({});
MediumSize.args = { ...Facebook.args, size: LinkIconSizes.md };

export const LargeSize = Template.bind({});
LargeSize.args = { ...Facebook.args, size: LinkIconSizes.lg };
