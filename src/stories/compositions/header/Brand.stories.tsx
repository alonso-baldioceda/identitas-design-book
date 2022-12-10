import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Brand from "./Brand";

// Assets
import LogoIcon from "./../../../images/svg/logo-black.svg";

export default {
  title: "Compositions/Brand",
  component: Brand,
  argTypes: {
    fontWeight: {
      control: "select",
      name: "Font Weight",
      options: [400, 500, 600, 700, 800, 900],
    },
    hideNameOnMobile: {
      name: "Hide Name On Mobile?",
      description: "Hide name on mobile devices",
    },
    me: {
      control: "select",
      name: "Logo xs margin right",
      options: [0, 1, 2, 3, 4, 5],
    },
    meSm: {
      control: "select",
      name: "Logo sm margin right",
      options: [0, 1, 2, 3, 4, 5],
    },
    meMd: {
      control: "select",
      name: "Logo md margin right",
      options: [0, 1, 2, 3, 4, 5],
    },
    meLg: {
      control: "select",
      name: "Logo lg margin right",
      options: [0, 1, 2, 3, 4, 5],
    },
    meXl: {
      control: "select",
      name: "Logo xl margin right",
      options: [0, 1, 2, 3, 4, 5],
    },
    size: {
      control: "select",
      name: "Size",
      options: ["sm", "md", "lg"],
    },
    name: {
      name: "Name",
      description: "Company name",
    },
    svg: {
      name: "SVG",
      description: "Logo",
      // TODO: Add control to select SVG
      control: "text",
    },
    to: {
      name: "To",
      description: "Link to",
      control: "text",
    },
  },
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontWeight: 700,
  hideNameOnMobile: true,
  svg: <LogoIcon />,
  name: "Company name",
  to: "main",
};
