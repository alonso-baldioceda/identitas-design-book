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
    logo: <Logo />,
    text: "Company name",
    to: "/#topPage",
  },
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: <Logo />,
  text: "Company name",
  to: "/#topPage",
};
