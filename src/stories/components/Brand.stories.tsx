import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Brand from "./Brand";

// Assets
// import LogoIcon from "./../../images/svg/logo-black.svg";

export default {
  title: "Components/Brand",
  component: Brand,
  args: {
    duration: 500,
    fontWeight: 700,
    // logoIcon: "",
    logoMarginRight: 3,
    // logoSize: 60,
    offset: -70,
    smooth: true,
    spy: true,
    text: "Company name",
    to: "main",
  },
  argTypes: {
    duration: {
      control: "select",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
    fontWeight: {
      control: "select",
      options: [400, 500, 600, 700, 800, 900],
    },
    logoMarginRight: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
  },
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />;

export const Default = Template.bind({});
Default.args = {
  duration: 500,
  fontWeight: 700,
  // logoIcon: <LogoIcon />,
  logoMarginRight: 3,
  // logoSize: 60,
  offset: -80,
  smooth: true,
  spy: true,
  text: "Company name",
  to: "main",
};
