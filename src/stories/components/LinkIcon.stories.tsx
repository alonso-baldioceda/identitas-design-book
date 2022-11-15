import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import LinkIcon from "./LinkIcon";

// Assets
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";

export default {
  title: "Components/LinkIcon",
  component: LinkIcon,
  args: {
    appearance: "primary",
    disabled: false,
    mb: 0,
    padding: 2,
    size: "extra-small",
    text: "button",
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["primary", "secondary", "ternary", "dark"],
    },
    disabled: {
      control: "boolean",
      options: [false, true],
    },
    mb: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5],
    },
    size: {
      control: "select",
      options: ["extra-small", "small", "medium"],
    },
  },
} as ComponentMeta<typeof LinkIcon>;

const Template: ComponentStory<typeof LinkIcon> = (args) => (
  <LinkIcon {...args} />
);

export const Facebook = Template.bind({});
Facebook.args = {
  appearance: "primary",
  disabled: false,
  icon: <FacebookIcon />,
  mb: 0,
  size: "extra-small",
  text: "facebook",
};

export const Instagram = Template.bind({});
Instagram.args = {
  ...Facebook.args,
  icon: <InstagramIcon />,
  text: "instagram",
};

export const SmallSize = Template.bind({});
SmallSize.args = { ...Facebook.args, size: "small" };

// export const Airbnb = Template.bind({});
// Airbnb.args = { ...Default.args, appearance: "airbnb" };
