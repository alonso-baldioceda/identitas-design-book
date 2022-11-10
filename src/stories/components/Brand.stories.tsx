import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Brand from "./Brand";

// Assets
import Logo from "./../../images/svg/logo-black.svg";

export default {
  title: "Components/Brand",
  component: Brand,
  args: {
    duration: 500,
    logoIcon: <Logo />,
    logoSize: 60,
    offset: -70,
    smooth: true,
    spy: true,
    text: "Company name",
    to: "/#topPage",
  },
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoIcon: <Logo />,
  text: "Company name",
  to: "/#topPage",
};
