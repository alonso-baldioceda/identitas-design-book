import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import LinkIcon from "./LinkIcon";

// Types
import Size from "./../../shared/enums/size";

// Assets
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";

export default {
  title: "Components/LinkIcon",
  component: LinkIcon,
  argTypes: {
    icon: {
      name: "Icon",
      description: "SVG to be passed",
    },
    disabled: {
      name: "Disabled",
      description: "Icon disabled",
      defaultValue: false,
      control: "boolean",
      options: [false, true],
    },
    mb: {
      name: "Margin Bottom XS",
      defaultValue: 0,
      control: "select",
      options: [0, 1, 2, 3],
    },
    me: {
      name: "Margin Right XS",
      defaultValue: 0,
      control: "select",
      options: [0, 1, 2, 3],
    },
    meSm: {
      name: "Margin Right SM",
      defaultValue: 0,
      control: "select",
      options: [0, 1, 2, 3],
    },
    meMd: {
      name: "Margin Right MD",
      defaultValue: 0,
      control: "select",
      options: [0, 1, 2, 3],
    },
    meLg: {
      name: "Margin Right LG",
      defaultValue: 0,
      control: "select",
      options: [0, 1, 2, 3],
    },
    meXl: {
      name: "Margin Right XL",
      defaultValue: 0,
      control: "select",
      options: [0, 1, 2, 3],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
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
  meLg: 3,
  meMd: 3,
  meSm: 3,
  meXl: 3,
  size: Size.sm,
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
SmallSize.args = { ...Facebook.args, size: Size.sm };

export const MediumSize = Template.bind({});
MediumSize.args = { ...Facebook.args, size: Size.md };

export const LargeSize = Template.bind({});
LargeSize.args = { ...Facebook.args, size: Size.lg };
